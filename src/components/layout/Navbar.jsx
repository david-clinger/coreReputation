// src/components/layout/Navbar.jsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AUTH_EVENTS, addAuthListener, removeAuthListener, dispatchAuthEvent } from '@/lib/auth-events'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn')
      const email = localStorage.getItem('userEmail')
      const name = localStorage.getItem('userName')
      setIsLoggedIn(loggedIn === 'true')
      setUserEmail(email || '')
      setUserName(name || '')
    }

    checkAuth()
    
    // Listen for custom auth events (immediate updates)
    const handleAuthChange = () => checkAuth()
    addAuthListener(AUTH_EVENTS.LOGIN, handleAuthChange)
    addAuthListener(AUTH_EVENTS.LOGOUT, handleAuthChange)
    
    // Listen for storage changes (other tabs)
    window.addEventListener('storage', checkAuth)
    
    return () => {
      removeAuthListener(AUTH_EVENTS.LOGIN, handleAuthChange)
      removeAuthListener(AUTH_EVENTS.LOGOUT, handleAuthChange)
      window.removeEventListener('storage', checkAuth)
    }
  }, [])

  const handleLogout = async () => {
    try {
      // Call logout API to clear server-side cookie
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      })
    } catch (error) {
      console.error('Logout API error:', error)
    }

    // Clear local storage
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    localStorage.removeItem('userId')
    
    // Update state
    setIsLoggedIn(false)
    setUserEmail('')
    setUserName('')
    
    // Dispatch auth event for other components
    dispatchAuthEvent(AUTH_EVENTS.LOGOUT)
    
    // Redirect to login page
    router.push('/login')
  }

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/reviews' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">CR</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-gray-900 leading-tight">Core</span>
                  <span className="font-bold text-xl text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent leading-tight">Reputation</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-600 hover:text-primary-blue-600 transition-colors font-semibold text-lg py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue-600 to-teal-cyan transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                {/* User Profile */}
                <div className="flex items-center space-x-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl px-4 py-3 shadow-sm border border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">
                      {(userName || userEmail).charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-bold text-gray-900">
                      {userName || 'User'}
                    </div>
                    <div className="text-xs text-gray-500">
                      {userEmail}
                    </div>
                  </div>
                </div>
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-3 border border-gray-300 rounded-2xl text-sm font-semibold text-gray-700 bg-white hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 hover:border-red-300 hover:text-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-gray-600 hover:text-primary-blue-600 font-semibold text-lg transition-colors duration-300">
                  Login
                </Link>
                <Link href="/register" className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-6 py-3 rounded-2xl font-bold hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-blue-600 focus:outline-none p-2 rounded-xl hover:bg-gray-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 rounded-b-2xl shadow-lg"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-primary-blue-600 hover:to-teal-cyan rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 pb-2 border-t border-gray-200 mt-4">
                  {isLoggedIn ? (
                    <>
                      {/* Mobile User Profile */}
                      <div className="flex items-center px-4 py-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mx-1 mb-4 shadow-sm border border-gray-200">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-xl flex items-center justify-center mr-4 shadow-lg">
                          <span className="text-white text-lg font-bold">
                            {(userName || userEmail).charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-gray-900 truncate">
                            {userName || userEmail.split('@')[0]}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {userEmail}
                          </div>
                        </div>
                      </div>
                      
                      {/* Mobile Logout Button */}
                      <button
                        onClick={() => {
                          handleLogout()
                          setIsOpen(false)
                        }}
                        className="flex items-center w-full px-4 py-3 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="block px-4 py-3 text-gray-600 hover:text-primary-blue-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                        onClick={() => setIsOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className="block px-4 py-3 mt-2 bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}