// src/app/page.jsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import TestimonialsPreview from '@/components/sections/TestimonialsPreview'
import CTASection from '@/components/sections/CTASection'
import { AUTH_EVENTS, addAuthListener, removeAuthListener } from '@/lib/auth-events'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn')
      if (loggedIn === 'true') {
        setIsLoggedIn(true)
      } else {
        // Redirect to login page if not authenticated
        router.push('/login')
        return
      }
      setIsLoading(false)
    }

    checkAuth()
    
    // Listen for auth events
    const handleAuthChange = () => checkAuth()
    addAuthListener(AUTH_EVENTS.LOGIN, handleAuthChange)
    addAuthListener(AUTH_EVENTS.LOGOUT, handleAuthChange)
    
    return () => {
      removeAuthListener(AUTH_EVENTS.LOGIN, handleAuthChange)
      removeAuthListener(AUTH_EVENTS.LOGOUT, handleAuthChange)
    }
  }, [router])

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Only render the home page if user is logged in
  if (!isLoggedIn) {
    return null // Will redirect to login
  }

  return (
    <>
      <Hero />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  )
}