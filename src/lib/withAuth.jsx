// src/lib/withAuth.jsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
      const checkAuth = () => {
        const loggedIn = localStorage.getItem('isLoggedIn')
        if (loggedIn === 'true') {
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
        setIsLoading(false)
      }

      checkAuth()
    }, [router])

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

    if (!isLoggedIn) {
      return null // Will redirect to login
    }

    return <WrappedComponent {...props} />
  }
}

export default withAuth
