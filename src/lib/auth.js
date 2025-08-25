// src/lib/auth.js
import jwt from 'jsonwebtoken'

/**
 * Verify JWT token
 * @param {string} token - JWT token to verify
 * @returns {Promise<Object|null>} Decoded token payload or null if invalid
 */
export async function verifyToken(token) {
  try {
    if (!token) return null
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (error) {
    console.error('Token verification error:', error.message)
    return null
  }
}

/**
 * Get user from request (cookie or Authorization header)
 * @param {Request} request - Next.js request object
 * @returns {Promise<Object|null>} User object or null if not authenticated
 */
export async function getAuthUser(request) {
  try {
    // Check for token in cookies
    const cookieHeader = request.headers.get('cookie')
    let token
    
    if (cookieHeader) {
      const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.trim().split('=')
        acc[name] = value
        return acc
      }, {})
      
      token = cookies['auth-token']
    }
    
    // Check for token in Authorization header
    if (!token) {
      const authHeader = request.headers.get('authorization')
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7)
      }
    }
    
    if (!token) return null
    
    const decoded = await verifyToken(token)
    return decoded
  } catch (error) {
    console.error('Auth error:', error)
    return null
  }
}

/**
 * Create JWT token
 * @param {Object} payload - Token payload
 * @returns {string} JWT token
 */
export function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' })
}

/**
 * Middleware for protecting API routes
 * @param {Function} handler - API route handler
 * @returns {Function} Protected handler
 */
export function withAuth(handler) {
  return async (request, ...args) => {
    try {
      const user = await getAuthUser(request)
      
      if (!user) {
        return new Response(
          JSON.stringify({ error: 'Unauthorized' }),
          { status: 401, headers: { 'Content-Type': 'application/json' } }
        )
      }
      
      // Add user to request object
      request.user = user
      return handler(request, ...args)
    } catch (error) {
      console.error('Auth middleware error:', error)
      return new Response(
        JSON.stringify({ error: 'Authentication failed' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }
  }
}

/**
 * Check if user has required role
 * @param {Object} user - User object
 * @param {string|string[]} requiredRole - Required role(s)
 * @returns {boolean} Whether user has required role
 */
export function hasRole(user, requiredRole) {
  if (!user || !user.role) return false
  
  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(user.role)
  }
  
  return user.role === requiredRole
}

/**
 * Middleware for role-based access control
 * @param {Function} handler - API route handler
 * @param {string|string[]} requiredRole - Required role(s)
 * @returns {Function} Protected handler
 */
export function withRole(handler, requiredRole) {
  return withAuth(async (request, ...args) => {
    if (!hasRole(request.user, requiredRole)) {
      return new Response(
        JSON.stringify({ error: 'Insufficient permissions' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    return handler(request, ...args)
  })
}