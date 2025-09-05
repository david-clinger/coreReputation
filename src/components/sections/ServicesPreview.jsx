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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete AI-powered reputation management solutions to help you collect more 5-star reviews and maintain a stellar online presence.
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
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gray-100 rounded-full p-4">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href={`/serviceDetails?id=${service.id}`} className="text-primary-blue-600 font-semibold hover:text-opacity-80 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Additional Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subServices.map((subService, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-3">
                    {subService.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">{subService.title}</h4>
                <p className="text-gray-600 text-sm">{subService.description}</p>
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
          <Link href="/services" className="bg-primary-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-blue-700 transition-all duration-200">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}