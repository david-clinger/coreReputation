// src/app/page.jsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'
import Hero from '@/components/sections/Hero'
import WhyCoreReputation from '@/components/sections/WhyCoreReputation'
import ServicesPreview from '@/components/sections/ServicesPreview'
import TestimonialsPreview from '@/components/sections/TestimonialsPreview'
import CTASection from '@/components/sections/CTASection'
import { AUTH_EVENTS, addAuthListener, removeAuthListener } from '@/lib/auth-events'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Core Reputation",
    "image": "https://corereputation.com/images/logo.png",
    "description": "AI-powered reputation management software helping businesses collect more 5-star reviews, manage customer feedback, and grow their online presence.",
    "url": "https://corereputation.com",
    "telephone": "+1-555-CORE-REP",
    "email": "hello@corereputation.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/corereputation",
      "https://twitter.com/corereputation",
      "https://linkedin.com/company/corereputation"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Reputation Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Review Management",
            "description": "Intelligent QR review funnels and automated feedback routing"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Business Listings & NAP Sync",
            "description": "Consistent business information across all platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "AI Response Management",
            "description": "24/7 intelligent review monitoring and response system"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue-600 mx-auto mb-4"></div>
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      </Head>
      <Hero />
      <WhyCoreReputation />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  )
}