// src/components/sections/TestimonialsPreview.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Restaurant Owner",
    business: "Bella Vista Bistro",
    content: "CoreReputation helped us go from 3.8 to 4.1 stars on Google in just 2 months. The AI responses are so natural, customers think I wrote them personally!",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Dental Practice Owner",
    business: "Thompson Family Dentistry",
    content: "We now get 3x more positive reviews than before. The smart routing means only our best reviews go public while we address concerns privately.",
    rating: 5
  },
  {
    name: "Lisa Chen",
    role: "Spa Manager",
    business: "Serenity Day Spa",
    content: "The automated Google posts keep our profile fresh and engaging. Our online visibility has increased dramatically since using CoreReputation.",
    rating: 5
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

export default function TestimonialsPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-blue-50 to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl opacity-30 -translate-y-36 -translate-x-36" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue-100 rounded-full blur-3xl opacity-40 translate-y-48 translate-x-48" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-primary-blue-200 mb-6 shadow-sm">
            <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-primary-blue-600 text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real results from real businesses using CoreReputation to transform their online reputation and drive unprecedented growth.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative group transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-12 h-12 text-primary-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* 5-Star Rating */}
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className="w-6 h-6 text-yellow-400 mr-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                  <p className="text-primary-blue-600 font-semibold">{testimonial.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-10 shadow-2xl mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-primary-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-teal-cyan mb-2 group-hover:scale-110 transition-transform duration-300">3.2x</div>
              <p className="text-gray-600">Review Increase</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-primary-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">4.8</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            
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
            href="/reviews" 
            className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center group"
          >
            Read More Testimonials
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}