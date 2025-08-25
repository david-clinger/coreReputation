// src/components/sections/Hero.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { heroImages } from '@/constants/images'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white to-primary-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Professional Solutions</span> for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We provide top-quality services that help your business grow and succeed in today's competitive market.
              Our expert team delivers results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/services" className="btn-primary">
                Our Services
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
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
              <div className="absolute -inset-4 bg-primary-100 rounded-2xl rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <img 
                  src={heroImages.heroPlaceholder} 
                  alt="Team collaboration" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary-300 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-lg">Success starts with the right strategy</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration - fixed to not overflow */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <div className="bg-primary-200 rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 -mt-24 -mr-24 sm:-mt-32 sm:-mr-32 md:-mt-40 md:-mr-40 lg:-mt-48 lg:-mr-48"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20">
        <div className="bg-secondary-200 rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 -mb-20 -ml-20 sm:-mb-24 sm:-ml-24 md:-mb-32 md:-ml-32 lg:-mb-40 lg:-ml-40"></div>
      </div>
    </section>
  )
}