// src/app/services/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import Button from '@/components/ui/Button'
import withAuth from '@/lib/withAuth'

const allServices = [
  {
    id: 'nap-sync',
    title: "Business Listings & NAP Sync",
    description: "Keep your contact info consistent across Google, Apple Maps, Yelp, Bing, and dozens of directories.",
    fullDescription: "Our NAP (Name, Address, Phone) synchronization service ensures your business information is consistent across all major directories and platforms. This improves your local SEO and helps customers find accurate information about your business.",
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: [
      "Google My Business Optimization",
      "Apple Maps Listing Management",
      "Yelp Business Profile",
      "Bing Places for Business",
      "Facebook Business Page",
      "50+ Directory Submissions"
    ],
    benefits: [
      "Improved local search visibility",
      "Consistent business information",
      "Better customer trust",
      "Enhanced local SEO"
    ]
  },
  {
    id: 'ai-responses',
    title: "AI-Powered Response Management",
    description: "Intelligent review responses, automated reply suggestions, and 24/7 monitoring.",
    fullDescription: "Our AI-powered system monitors your online reviews 24/7 and provides intelligent response suggestions tailored to your brand voice. It can also auto-respond to reviews when configured, ensuring no review goes unanswered.",
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: [
      "AI-Drafted Response Suggestions",
      "24/7 Review Monitoring",
      "Auto-Response Configuration",
      "Brand Voice Customization",
      "Response Reminder System",
      "Sentiment Analysis"
    ],
    benefits: [
      "Faster response times",
      "Consistent brand messaging",
      "Improved customer relationships",
      "Reduced manual workload"
    ]
  },
  {
    id: 'outbound-campaigns',
    title: "Outbound Review Campaigns",
    description: "Custom review request forms and templates via email, SMS, or WhatsApp.",
    fullDescription: "Proactively request reviews from your satisfied customers through personalized outbound campaigns. Our system sends targeted review requests via email, SMS, or WhatsApp to maximize response rates.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    features: [
      "Email Review Campaigns",
      "SMS Review Requests",
      "WhatsApp Integration",
      "Custom Review Forms",
      "Automated Follow-ups",
      "Campaign Performance Tracking"
    ],
    benefits: [
      "Increased review volume",
      "Higher customer engagement",
      "More positive feedback",
      "Better online reputation"
    ]
  },
  {
    id: 'google-posts',
    title: "Google Posts Scheduling",
    description: "Professionally drafted and automatically published Google My Business posts.",
    fullDescription: "Keep your Google My Business profile active with regular, professionally written posts. Our content team creates engaging posts that showcase your business and improve your local search visibility.",
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Professional Content Creation",
      "Automated Publishing",
      "Content Calendar Planning",
      "Visual Content Integration",
      "Call-to-Action Optimization",
      "Performance Analytics"
    ],
    benefits: [
      "Improved local visibility",
      "Regular customer engagement",
      "Professional online presence",
      "Higher conversion rates"
    ]
  },
  {
    id: 'analytics-reporting',
    title: "Analytics & Performance Reporting",
    description: "Track review performance, customer feedback trends, and reputation growth.",
    fullDescription: "Get detailed insights into your online reputation with comprehensive analytics and reporting. Track review volume, rating trends, response times, and competitor performance to make data-driven decisions.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      "Review Volume Tracking",
      "Rating Trend Analysis",
      "Response Time Metrics",
      "Competitor Monitoring",
      "Customer Sentiment Analysis",
      "Monthly Performance Reports"
    ],
    benefits: [
      "Data-driven insights",
      "Performance optimization",
      "Competitive advantage",
      "ROI measurement"
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

function Services() {
  const [activeService, setActiveService] = useState(allServices[0])

  // Function to handle service selection and smooth scroll
  const handleServiceSelect = (service) => {
    setActiveService(service)
    // Smooth scroll to the detailed section
    setTimeout(() => {
      const detailedSection = document.getElementById('detailed-service-section')
      if (detailedSection) {
        detailedSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }, 100)
  }

  return (
    <>
      <Head>
        <title>AI-Powered Reputation Management Services | Core Reputation</title>
        <meta name="description" content="Comprehensive reputation management services including review monitoring, AI response management, business listings, and automated campaigns. Transform your online presence." />
        <meta name="keywords" content="reputation management services, AI review management, business listings management, automated review responses, online reputation monitoring" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Professional Reputation Management Services - Core Reputation" />
        <meta property="og:description" content="Complete suite of AI-powered reputation management services to help businesses get more 5-star reviews and manage their online presence effectively." />
        <meta property="og:url" content="https://corereputation.com/services" />
        <meta property="og:site_name" content="Core Reputation" />
        <meta property="og:image" content="https://corereputation.com/images/services-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Core Reputation Management Services" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Reputation Management Services | Core Reputation" />
        <meta name="twitter:description" content="Professional reputation management with AI-powered review monitoring, response management, and automated campaigns." />
        <meta name="twitter:image" content="https://corereputation.com/images/services-twitter.jpg" />
      </Head>
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-primary-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-20 -translate-y-40 translate-x-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Professional Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-8">
              <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-primary-blue-600 text-sm font-medium">Comprehensive Service Suite</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Our{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI-powered reputation management solutions to help you collect more 5-star reviews, 
              manage customer feedback, and grow your business with intelligent automation.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border cursor-pointer group transform hover:-translate-y-2 ${
                  activeService.id === service.id 
                    ? 'border-primary-blue-600 bg-gradient-to-br from-primary-blue-50 to-white ring-2 ring-primary-blue-200' 
                    : 'border-gray-100 hover:border-primary-blue-200'
                }`}
                onClick={() => handleServiceSelect(service)}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden rounded-2xl mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className={`p-3 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ${
                      activeService.id === service.id ? 'bg-primary-blue-600/90 scale-110' : 'bg-white/90 group-hover:bg-primary-blue-600/90'
                    }`}>
                      <div className={`transition-colors duration-300 w-6 h-6 ${activeService.id === service.id || 'group-hover:text-white' ? 'text-white' : 'text-primary-blue-600'}`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-blue-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <button 
                    onClick={() => handleServiceSelect(service)}
                    className="inline-flex items-center text-primary-blue-600 font-bold hover:text-primary-blue-700 group-hover:translate-x-2 transition-all duration-300"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <div className="mt-4">
                    <Link 
                      href={`/serviceDetails?id=${service.id}`}
                      className="text-sm text-gray-500 hover:text-primary-blue-600 transition-colors duration-200"
                    >
                      View full details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section id="detailed-service-section" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-20 -translate-y-32 -translate-x-32" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-blue-100 rounded-full blur-3xl opacity-20 translate-y-32 translate-x-32" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
            {/* Service Details */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl p-4 mr-6 shadow-lg">
                  <div className="w-full h-full text-white">
                    {activeService.icon}
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{activeService.title}</h2>
              </div>
              
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                {activeService.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-primary-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {activeService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center flex items-center justify-center group"
                >
                  Get Started
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/pricing" 
                  className="bg-white border-2 border-primary-blue-600 text-primary-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-blue-50 hover:border-primary-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Service Image/Preview */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-transform duration-500">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-blue-600 to-teal-cyan h-2"></div>
                <div className="relative h-80">
                  <img
                    src={activeService.image}
                    alt={`${activeService.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{activeService.title}</h3>
                    <p className="text-white/90 text-sm">Professional service implementation</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-primary-blue-600 rounded-full"></div>
                    <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">AI-powered • Automated • Results-driven</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-primary-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 translate-y-32 -translate-x-32" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-8">
              <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-primary-blue-600 text-sm font-medium">Proven Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a proven process to set up and manage your online reputation effectively with maximum results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Setup & Integration",
                description: "We set up your QR review funnels, sync your business listings, and configure monitoring systems.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                step: "02",
                title: "AI Configuration",
                description: "We customize AI response templates, set up review routing, and train the system on your brand voice.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                step: "03",
                title: "Launch & Monitor",
                description: "Your reputation management system goes live with 24/7 monitoring and automated workflows.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                step: "04",
                title: "Optimize & Report",
                description: "We continuously optimize performance and provide detailed analytics and monthly reports.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-blue-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-blue-600 via-primary-blue-700 to-teal-600 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-40 -translate-x-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl translate-y-48 translate-x-48" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <svg className="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white text-sm font-medium">Transform Your Business Today</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Strengthen Your{' '}
              <span className="text-yellow-300">Reputation</span>?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Transform how customers see your business with AI-powered review management that builds trust, 
              drives growth, and keeps you ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Free Consultation
              </Link>
              <Link
                href="/pricing"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default withAuth(Services)