// src/app/login/page.jsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AUTH_EVENTS, dispatchAuthEvent } from '@/lib/auth-events'


import { Suspense } from 'react'

function LoginContent() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if user just registered
    if (searchParams.get('registered') === 'true') {
      setSuccessMessage('Registration successful! Please log in with your credentials.')
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccessMessage('')

    try {
      // Call the login API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      console.log('Login successful:', data.message)
      
      // Store user info in localStorage for UI purposes
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', data.user.email)
      localStorage.setItem('userName', data.user.name)
      localStorage.setItem('userId', data.user._id)
      
      // Dispatch login event for navbar updates
      dispatchAuthEvent(AUTH_EVENTS.LOGIN)
      
      // Redirect to home page
      router.push('/')
    } catch (err) {
      console.error('Login error:', err)
      setError(err.message || 'Invalid email or password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center">
              <div className="h-12 w-12 bg-primary-blue-600 rounded-md flex items-center justify-center mr-3">
                <span className="text-white font-bold text-2xl">CR</span>
              </div>
              <span className="font-bold text-3xl text-gray-900">Core Reputation</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Sign in to your account to continue
            </p>
          </div>
        </div>

        {/* Login Form */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4"
              >
                <div className="flex">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-800 text-sm">{successMessage}</p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4"
              >
                <div className="flex">
                  <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              </motion.div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-blue-600 focus:ring-primary-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="#" className="text-primary-blue-600 hover:text-primary-blue-700 font-medium">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 px-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </motion.form>

        {/* Sign Up Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-primary-blue-600 hover:text-primary-blue-700 font-medium">
              Sign up here
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Login() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  )
}
