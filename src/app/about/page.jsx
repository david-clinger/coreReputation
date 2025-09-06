// src/app/about/page.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TeamSection from '@/components/sections/TeamSection'
import ValuesSection from '@/components/sections/ValuesSection'
import CTASection from '@/components/sections/CTASection'
import StatsSection from '@/components/sections/StatsSection'

export const metadata = {
  title: 'About Core Reputation - AI-Powered Reputation Management Experts',
  description: 'Learn about Core Reputation\'s mission to empower small and mid-sized businesses with enterprise-level reputation management technology at affordable prices.',
  keywords: 'about core reputation, reputation management company, business review experts, AI reputation technology, online reputation specialists',
  openGraph: {
    title: 'About Core Reputation - Leading Reputation Management Experts',
    description: 'Discover how Core Reputation transforms business reputations with AI-powered technology, helping SMBs compete with enterprise-level solutions.',
    url: 'https://corereputation.com/about',
    siteName: 'Core Reputation',
    images: [
      {
        url: 'https://corereputation.com/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Core Reputation Team and Mission'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Core Reputation - AI Reputation Management Experts',
    description: 'Enterprise-level reputation management for small and mid-sized businesses. Proven results with AI technology.',
    images: ['https://corereputation.com/images/about-twitter.jpg']
  }
}

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 overflow-hidden py-20">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 -translate-y-32 -translate-x-32" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200"
            >
              <span className="text-primary-blue-600 text-sm font-medium">🚀 Transforming Business Reputation Since 2015</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
            >
              About{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
                Core Reputation
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Empowering small and mid-sized businesses with enterprise-level reputation management technology, 
              without the enterprise price tag or complexity.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/services">
                <button className="px-8 py-4 bg-primary-blue-600 text-white font-semibold rounded-lg hover:bg-primary-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Our Services
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-8 py-4 bg-white text-primary-blue-600 font-semibold rounded-lg border-2 border-primary-blue-600 hover:bg-primary-blue-50 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Targeting</h3>
              <p className="text-gray-600">Advanced AI algorithms to identify and engage with your ideal customers.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Respond to reviews in minutes, not hours. Automated yet personal responses.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Average rating improvement of 0.8 stars within 4 months of implementation.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}