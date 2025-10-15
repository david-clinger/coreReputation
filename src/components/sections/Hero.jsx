// src/components/sections/Hero.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { heroImages } from '@/constants/images'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 overflow-hidden py-20">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 -translate-y-32 -translate-x-32" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Badge */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-8"
            >
              <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-primary-blue-600 text-sm font-medium">#1 AI-Powered Reputation Platform</span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 leading-tight"
            >
              Transform Your{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
                Online Reputation
              </span>{' '}
              Into 5-Star Success
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
            >
              Collect more reviews, respond smarter with AI, and dominate local search. 
              Stay ahead in today's AI-driven search landscape with Core Reputation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link 
                href="/pricing" 
                className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center flex items-center justify-center group"
              >
                Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/services" 
                className="bg-white border-2 border-primary-blue-600 text-primary-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-primary-blue-50 hover:border-primary-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M12 21l-3-9h6l-3 9z" />
                </svg>
                See How It Works
              </Link>
            </motion.div>

            {/* Trust indicators */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center md:justify-start mt-8 space-x-8 text-gray-500"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">14-Day Free Trial</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Cancel Anytime</span>
              </div>
            </motion.div> */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src="/images/hero-placeholder.jpg"
                alt="Reputation dashboard preview"
                className="w-full rounded-3xl shadow-2xl border border-gray-100 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}