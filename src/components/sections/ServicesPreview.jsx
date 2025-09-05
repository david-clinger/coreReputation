// src/components/sections/ServicesPreview.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    id: 'smart-review-management',
    title: "Smart Review Management",
    description: "AI-powered QR review funnels that route 4-5★ reviews to Google and handle lower ratings privately for improvement.",
    icon: (
  <svg className="w-12 h-12 text-primary-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    id: 'ai-drafted-responses',
    title: "AI-Drafted Responses",
    description: "Instant, personalized responses to customer reviews that maintain your brand voice and boost engagement rates.",
    icon: (
  <svg className="w-12 h-12 text-primary-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    id: 'business-profile-boost',
    title: "Business Profile Boost",
    description: "Keep your Google Business Profile active and optimized with automated posts, updates, and engagement tracking.",
    icon: (
  <svg className="w-12 h-12 text-primary-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
]

const subServices = [
  {
    id: 'review-requests',
    title: "Review Requests",
    description: "Automated follow-up campaigns to collect more reviews from happy customers.",
    icon: (
  <svg className="w-8 h-8 text-primary-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'google-posts',
    title: "Google Posts",
    description: "Regular content updates to keep your business profile fresh and engaging.",
    icon: (
  <svg className="w-8 h-8 text-primary-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  {
    id: 'reporting',
    title: "Reporting",
    description: "Detailed analytics and insights on your reputation management performance.",
    icon: (
  <svg className="w-8 h-8 text-primary-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
]

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
      duration: 0.5
    }
  }
}

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-20 -translate-y-32 -translate-x-32" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-blue-100 rounded-full blur-3xl opacity-20 translate-y-32 translate-x-32" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-6">
            <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-primary-blue-600 text-sm font-medium">Comprehensive Service Suite</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Core{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Complete AI-powered reputation management solutions to help you collect more 5-star reviews and maintain a stellar online presence across all platforms.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-primary-blue-200 text-center group transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="w-full h-full text-white">
                    {service.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-primary-blue-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
              <Link 
                href={`/serviceDetails?id=${service.id}`} 
                className="inline-flex items-center text-primary-blue-600 font-bold hover:text-primary-blue-700 group-hover:translate-x-2 transition-all duration-300"
              >
                Learn more
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Sub-services Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Additional{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
              Features
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subServices.map((subService, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group border border-gray-100 hover:border-primary-blue-200 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue-50 to-teal-50 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300 border border-primary-blue-100">
                    {subService.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary-blue-600 transition-colors duration-300">{subService.title}</h4>
                <p className="text-gray-600 leading-relaxed">{subService.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link 
            href="/services" 
            className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center group"
          >
            View All Services
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}