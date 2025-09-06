'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { getServiceById } from '../../sections/servicesData'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
// import withAuth from '@/lib/withAuth'

function ServiceDetailsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const serviceId = searchParams.get('id')
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  // Service images from the services page
  const serviceImages = {
    'nap-sync': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    'ai-responses': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    'outbound-campaigns': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    'google-posts': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    'analytics-reporting': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    'review-management': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80'
  }

  useEffect(() => {
    if (serviceId) {
      const serviceData = getServiceById(serviceId)
      setService(serviceData)
      setLoading(false)
      
      if (!serviceData) {
        // Redirect to services page if service not found
        router.push('/services')
      }
    } else {
      router.push('/services')
    }
  }, [serviceId, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue-600"></div>
        </div>
      </div>
    )
  }

  if (!service) {
    return null
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' }
  ]

  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-blue-50 to-teal-50"></div>
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-20 -translate-y-40 translate-x-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-primary-blue-600 hover:text-primary-blue-700 mb-8 transition-all duration-300 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg hover:shadow-xl group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Services</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Professional Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-6">
                <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-primary-blue-600 text-sm font-medium">Premium Service</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-primary-blue-600 mb-6 font-semibold">
                {service.subtitle}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Started Today
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className="bg-white border-2 border-primary-blue-600 text-primary-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-blue-50 hover:border-primary-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  View Pricing
                </button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Floating decorative elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-primary-blue-600 to-teal-cyan rounded-full opacity-20 blur-sm"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30 blur-sm"
                />
                
                {/* Main hero showcase */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-transform duration-500">
                  {/* Premium gradient top bar */}
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-blue-600 to-teal-cyan h-2"></div>
                  
                  {/* Professional service visualization */}
                  <div className="relative h-80 bg-gradient-to-br from-primary-blue-50 via-teal-50 to-white overflow-hidden">
                    {/* Service Card Image */}
                    <div className="relative w-full h-full">
                      <img
                        src={serviceImages[service.id]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Service Icon Overlay */}
                      <div className="absolute top-4 right-4">
                        <div className="p-3 rounded-2xl shadow-lg backdrop-blur-sm bg-primary-blue-600/90">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {service.id === 'review-management' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            )}
                            {service.id === 'nap-sync' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            )}
                            {service.id === 'ai-responses' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            )}
                            {service.id === 'outbound-campaigns' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            )}
                            {service.id === 'google-posts' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            )}
                            {service.id === 'analytics-reporting' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            )}
                            {/* Default icon for other services */}
                            {!['review-management', 'nap-sync', 'ai-responses', 'outbound-campaigns', 'google-posts', 'analytics-reporting'].includes(service.id) && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            )}
                          </svg>
                        </div>
                      </div>
                      
                      {/* Service Title Overlay */}
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white text-lg font-bold mb-1">{service.title}</h3>
                        <p className="text-white/90 text-sm">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Floating feature indicators */}
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/80 rounded-2xl shadow-lg flex items-center justify-center backdrop-blur-sm"
                    >
                      <svg className="w-6 h-6 text-primary-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/90 rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm"
                    >
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Feature highlights bottom section */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-primary-blue-600 rounded-full"></div>
                        <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Live
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary-blue-600">AI</div>
                        <div className="text-xs text-gray-500">Powered</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-teal-600">24/7</div>
                        <div className="text-xs text-gray-500">Active</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-600">Auto</div>
                        <div className="text-xs text-gray-500">Managed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 whitespace-nowrap font-medium text-sm border-b-2 transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.id
                    ? 'border-primary-blue-600 text-primary-blue-600 bg-primary-blue-50/50'
                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-20 -translate-y-32 -translate-x-32" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-blue-100 rounded-full blur-3xl opacity-20 translate-y-32 translate-x-32" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Benefits Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <svg className="w-8 h-8 text-primary-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    >
                      <svg className="w-6 h-6 text-primary-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700 font-medium leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {service.testimonial && (
                <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {service.testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-900 mb-6 italic leading-relaxed">
                        &quot;{service.testimonial.quote}&quot;
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-900 font-bold text-lg">{service.testimonial.author}</p>
                          <p className="text-primary-blue-600 font-medium">{service.testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <svg className="w-8 h-8 text-primary-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Features & Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group transform hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* How It Works Tab */}
          {activeTab === 'how-it-works' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <svg className="w-8 h-8 text-primary-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                How It Works
              </h2>
              <div className="space-y-8">
                {service.howItWorks.map((step, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <svg className="w-8 h-8 text-primary-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Pricing Information
              </h2>
              <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-6">
                    <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-primary-blue-600 text-sm font-medium">Premium Value</span>
                  </div>
                  <p className="text-5xl font-bold bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent mb-2">
                    {service.pricing.startsAt}
                  </p>
                  <p className="text-xl text-gray-900 font-medium mb-2">per month</p>
                  <p className="text-gray-600 mb-8">{service.pricing.note}</p>
                  
                  <div className="space-y-6 mb-8">
                    <h4 className="text-lg font-bold text-gray-900">Available In:</h4>
                    <div className="flex justify-center gap-4 flex-wrap">
                      {service.pricing.includedIn.map((plan, index) => (
                        <span key={index} className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                          {plan}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button 
                      onClick={() => router.push('/pricing')}
                      className="w-full bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      View All Plans
                    </button>
                    <button 
                      onClick={() => router.push('/contact')}
                      className="w-full bg-white border-2 border-primary-blue-600 text-primary-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-blue-50 hover:border-primary-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Get Custom Quote
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <svg className="w-8 h-8 text-primary-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Frequently Asked Questions
              </h2>
              {service.faqs && service.faqs.length > 0 ? (
                <div className="space-y-6 max-w-4xl">
                  {service.faqs.map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <svg className="w-6 h-6 text-primary-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg ml-9">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQs Coming Soon</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    We&apos;re working on adding frequently asked questions for this service. 
                    In the meantime, feel free to contact us with any questions you may have.
                  </p>
                  <button 
                    onClick={() => router.push('/contact')}
                    className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    Contact Us
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-blue-600 via-primary-blue-700 to-teal-600 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-40 -translate-x-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl translate-y-48 translate-x-48" />
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <svg className="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white text-sm font-medium">Get Started Today</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started with{' '}
              <span className="text-yellow-300">{service.title}</span>?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of businesses already improving their online reputation with our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => router.push('/contact')}
                className="bg-white text-primary-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Start Your Free Consultation
              </button>
              <button
                onClick={() => router.push('/pricing')}
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Compare All Plans
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center min-h-screen">
  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue-600"></div>
      </div>
    </div>
  )
}

function ServiceDetails() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ServiceDetailsContent />
    </Suspense>
  )
}

export default ServiceDetails
