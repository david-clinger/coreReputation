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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-primary-600 rounded-md flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-xl text-charcoal">Nova<span className="text-deep-teal">AIQ</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-gray hover:text-deep-teal transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                {/* User Profile */}
                <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-2">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {(userName || userEmail).charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="hidden sm:block">
                                        <div className="text-sm font-medium text-charcoal">
                      {userName || 'User'}
                    </div>
                    <div className="text-xs text-cool-gray">
                      {userEmail}
                    </div>
                  </div>
                </div>
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-3 py-2 border border-cool-gray/30 rounded-lg text-sm font-medium text-slate-gray bg-white hover:bg-ultra-light-gray hover:border-deep-teal transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-slate-gray hover:text-deep-teal font-medium">
                  Login
                </Link>
                <Link href="/register" className="bg-deep-teal text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 text-sm">
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-gray hover:text-deep-teal focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="md:hidden bg-white border-t border-cool-gray/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-slate-gray hover:text-deep-teal hover:bg-ultra-light-gray rounded-md font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 pb-2 border-t border-gray-200">
                  {isLoggedIn ? (
                    <>
                      {/* Mobile User Profile */}
                      <div className="flex items-center px-3 py-3 bg-gray-50 rounded-lg mx-3 mb-3">
                        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">
                            {(userName || userEmail).charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-charcoal truncate">
                            {userName || userEmail.split('@')[0]}
                          </div>
                          <div className="text-xs text-cool-gray truncate">
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
                        className="flex items-center w-full px-3 py-2 text-slate-gray hover:text-deep-teal hover:bg-ultra-light-gray rounded-md font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="block px-3 py-2 text-slate-gray hover:text-deep-teal rounded-md font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className="block px-3 py-2 mt-2 bg-primary-600 text-white rounded-md font-medium text-center"
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