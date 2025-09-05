// src/components/sections/CTASection.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
  <section className="py-16 bg-primary-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Get started with our professional services today and see the difference we can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-gold text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 inline-flex items-center justify-center">
              Get Started Today
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-blue-600 transition-all duration-200 inline-flex items-center justify-center">
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}