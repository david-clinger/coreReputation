// src/components/sections/WhyCoreReputation.jsx
'use client'

import { motion } from 'framer-motion'

export default function WhyCoreReputation() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            Why <span className="bg-gradient-to-r from-primary-blue-600 to-gold bg-clip-text text-transparent">Core Reputation</span>?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              Traditional review collection is broken. Customers forget to leave reviews, negative feedback goes public instantly, 
              and managing your online reputation becomes a full-time job. <strong className="text-gray-900">Core Reputation changes everything.</strong>
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our AI-powered platform automatically routes 4-5 star reviews to Google while capturing lower ratings privately for improvement. 
              With instant AI responses and automated Google Business Profile management, you'll maintain a stellar online presence 
              while focusing on what you do best—running your business.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-blue-600 to-gold text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
