// src/app/contact/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your online reputation? Contact our team to get started with NovaAIQ&apos;s 
              AI-powered review management platform.
            </p>
          </motion.div>

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-8">
                Your message has been received. Our NovaAIQ team will get back to you within 24 hours 
                to discuss how we can help improve your online reputation.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="btn-primary"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <ContactForm onSuccess={handleFormSubmit} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <ContactInfo />
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}