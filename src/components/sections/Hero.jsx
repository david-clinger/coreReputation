// src/components/sections/Hero.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { heroImages } from '@/constants/images'

export default function Hero() {
  return (
  <section className="relative bg-white min-h-[calc(100vh-4rem)] py-20 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Transform Your <span className="text-primary-blue-600">Online Reputation</span> Into 5-Star Success
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Collect more reviews, respond smarter with AI, and dominate local search. 
              Stay ahead in today's AI-driven search landscape with Core Reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/register" className="bg-primary-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-blue-700 transition-all duration-200 text-center">
                Start Free Trial
              </Link>
              <Link href="/services" className="border-2 border-primary-blue-600 text-primary-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-blue-700 hover:text-white transition-all duration-200 text-center">
                See How It Works
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-2xl rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <img 
                  src={heroImages.heroPlaceholder} 
                  alt="AI-powered review management dashboard" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary-blue-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-gold rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">Reputation management on autopilot</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration - NovaAIQ brand colors */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
  <div className="bg-primary-blue-600 rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 -mt-24 -mr-24 sm:-mt-32 sm:-mr-32 md:-mt-40 md:-mr-40 lg:-mt-48 lg:-mr-48"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
  <div className="bg-gold rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 -mb-20 -ml-20 sm:-mb-24 sm:-ml-24 md:-mb-32 md:-ml-32 lg:-mb-40 lg:-ml-40"></div>
      </div>
    </section>
  )
}