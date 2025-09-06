// src/app/contact/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import ContactForm from '@/components/forms/ContactForm'
import ContactInfo from '@/components/sections/ContactInfo'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = () => {
    setFormSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Contact Core Reputation - Get Expert Reputation Management Help</title>
        <meta name="description" content="Contact Core Reputation for a free consultation on AI-powered reputation management solutions. Expert team responds within 24 hours." />
        <meta name="keywords" content="contact core reputation, reputation management consultation, business review help, AI reputation experts, free consultation" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Contact Core Reputation - Free Consultation Available" />
        <meta property="og:description" content="Ready to improve your online reputation? Contact our AI reputation management experts for a free consultation and personalized strategy." />
        <meta property="og:url" content="https://corereputation.com/contact" />
        <meta property="og:site_name" content="Core Reputation" />
        <meta property="og:image" content="https://corereputation.com/images/contact-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Core Reputation Team" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Core Reputation - Expert Help Available" />
        <meta name="twitter:description" content="Get expert reputation management help. Free consultation and 24-hour response guarantee." />
        <meta name="twitter:image" content="https://corereputation.com/images/contact-twitter.jpg" />
      </Head>
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 overflow-hidden py-20">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 -translate-y-32 -translate-x-32" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-8"
            >
              <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-primary-blue-600 text-sm font-medium">Let's Start Your Reputation Journey</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900"
            >
              Get in{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Ready to transform your online reputation? Contact our team to get started with Core Reputation's 
              AI-powered review management platform.
            </motion.p>
          </motion.div>

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center py-16"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border border-green-200">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Thank You!</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your message has been received. Our Core Reputation team will get back to you within 24 hours 
                to discuss how we can help improve your online reputation.
              </p>
              <div className="bg-gradient-to-r from-primary-blue-50 to-teal-50 rounded-2xl p-8 mb-10 border border-primary-blue-100">
                <div className="flex items-center justify-center space-x-8 text-gray-700">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Response in 24hrs</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Expert Consultation</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto group"
              >
                Send Another Message
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                </div>
                
                <div className="mb-8 p-6 bg-gradient-to-r from-primary-blue-50 to-teal-50 rounded-xl border border-primary-blue-100">
                  <div className="flex items-center text-gray-700 mb-3">
                    <svg className="w-5 h-5 text-primary-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Quick Response Guaranteed</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our reputation management experts typically respond within 2-4 hours during business days.
                  </p>
                </div>
                
                <ContactForm onSuccess={handleFormSubmit} />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <ContactInfo />
                </div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-blue-200 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Fast Response</h3>
                    <p className="text-gray-600 text-sm">Get replies within 24 hours, often much sooner.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-blue-200 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Free Consultation</h3>
                    <p className="text-gray-600 text-sm">No commitment required for initial strategy discussion.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-blue-200 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600 text-sm">Work directly with reputation management specialists.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-blue-200 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 6.627-5.373 12-12 12S-3 18.627-3 12s5.373-12 12-12c2.24 0 4.312.618 6.093 1.693" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600 text-sm">Average 0.8 star rating improvement in 4 months.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
      </div>
    </>
  )
}