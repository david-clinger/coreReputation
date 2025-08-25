// src/lib/spamProtection.js
/**
 * Honeypot field detection
 * @param {Object} formData - Form data object
 * @returns {boolean} True if spam detected
 */
export function detectHoneypot(formData) {
  const honeypotFields = [
    'lastname',
    'website',
    'url',
    'phone',
    'company',
    'subject',
    'body',
    'message',
    'comments',
    'name' // Sometimes spammers auto-fill this
  ]
  
  for (const field of honeypotFields) {
    if (formData[field] && formData[field].trim().length > 0) {
      return true
    }
  }
  
  return false
}

/**
 * Check for suspicious content patterns
 * @param {Object} formData - Form data object
 * @returns {boolean} True if suspicious content detected
 */
export function detectSuspiciousContent(formData) {
  const suspiciousPatterns = [
    /http(s)?:\/\//i,
    /\[url\]/i,
    /<a href/i,
    /www\./i,
    /\.(com|net|org|ru|cn)/i,
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i, // Email patterns
    /[0-9]{4,}/, // Long number sequences (like credit cards)
    /viagra|cialis|porn|casino|loan|insurance/i // Common spam keywords
  ]
  
  for (const key in formData) {
    if (typeof formData[key] === 'string') {
      for (const pattern of suspiciousPatterns) {
        if (pattern.test(formData[key])) {
          return true
        }
      }
    }
  }
  
  return false
}

/**
 * Rate limiting using simple memory store (for demo - use Redis in production)
 */
const rateLimitStore = new Map()

/**
 * Check rate limit for IP address
 * @param {string} ip - IP address
 * @param {number} limit - Maximum requests
 * @param {number} windowMs - Time window in milliseconds
 * @returns {Object} { allowed: boolean, remaining: number }
 */
export function checkRateLimit(ip, limit = 5, windowMs = 60000) {
  const now = Date.now()
  const windowStart = now - windowMs
  
  // Clean up old entries
  for (const [key, timestamps] of rateLimitStore.entries()) {
    const recentTimestamps = timestamps.filter(ts => ts > windowStart)
    if (recentTimestamps.length === 0) {
      rateLimitStore.delete(key)
    } else {
      rateLimitStore.set(key, recentTimestamps)
    }
  }
  
  const timestamps = rateLimitStore.get(ip) || []
  const recentRequests = timestamps.filter(ts => ts > windowStart)
  
  if (recentRequests.length >= limit) {
    return { allowed: false, remaining: 0 }
  }
  
  recentRequests.push(now)
  rateLimitStore.set(ip, recentRequests)
  
  return { allowed: true, remaining: limit - recentRequests.length }
}

/**
 * Get client IP address from request
 * @param {Request} request - Next.js request object
 * @returns {string} IP address
 */
export function getClientIP(request) {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  // Fallback for development
  return '127.0.0.1'
}

/**
 * Comprehensive spam protection middleware
 * @param {Request} request - Next.js request object
 * @param {Object} options - Configuration options
 * @returns {Object} { isSpam: boolean, reason: string }
 */
export async function protectFromSpam(request, options = {}) {
  const {
    honeypot = true,
    rateLimit = true,
    contentCheck = true,
    rateLimitCount = 5,
    rateLimitWindow = 60000
  } = options
  
  try {
    const ip = getClientIP(request)
    const formData = await request.json()
    
    // Honeypot detection
    if (honeypot && detectHoneypot(formData)) {
      return { isSpam: true, reason: 'Honeypot field detected' }
    }
    
    // Suspicious content detection
    if (contentCheck && detectSuspiciousContent(formData)) {
      return { isSpam: true, reason: 'Suspicious content detected' }
    }
    
    // Rate limiting
    if (rateLimit) {
      const rateLimitResult = checkRateLimit(ip, rateLimitCount, rateLimitWindow)
      if (!rateLimitResult.allowed) {
        return { isSpam: true, reason: 'Rate limit exceeded' }
      }
    }
    
    return { isSpam: false, reason: '' }
    
  } catch (error) {
    console.error('Spam protection error:', error)
    // In case of error, be conservative and block the request
    return { isSpam: true, reason: 'Security check failed' }
  }
}