// src/components/sections/WhyCoreReputation.jsx
'use client'

import { motion } from 'framer-motion'

export default function WhyCoreReputation() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-primary-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-20 -translate-y-40 translate-x-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Professional Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-8">
            <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-primary-blue-600 text-sm font-medium">The Smart Solution</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          >
            Why{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
              Core Reputation
            </span>?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-gray-100"
          >
            {/* Problem Statement */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Traditional Review Collection is Broken
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Customers forget to leave reviews, negative feedback goes public instantly, 
                and managing your online reputation becomes a full-time job that pulls you away from your core business.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-blue-600 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Core Reputation Changes Everything
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Our AI-powered platform automatically routes 4-5 star reviews to Google while capturing lower ratings privately for improvement. 
                With instant AI responses and automated Google Business Profile management, you'll maintain a stellar online presence 
                while focusing on what you do best—running your business.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Smart Routing</h4>
                <p className="text-gray-600">Automatically directs positive reviews public, negative ones private</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">AI Responses</h4>
                <p className="text-gray-600">Instant, natural responses that sound authentically human</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Automated Management</h4>
                <p className="text-gray-600">Complete Google Business Profile automation and optimization</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Smart. Automated. Effective.
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
