// src/components/sections/TestimonialsPreview.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Restaurant Owner",
    business: "Bella Vista Bistro",
    content: "NovaAIQ helped us go from 3.2 to 4.8 stars on Google in just 2 months. The AI responses are so natural, customers think I wrote them personally!",
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
    content: "The automated Google posts keep our profile fresh and engaging. Our online visibility has increased dramatically since using NovaAIQ.",
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
    <section className="py-16 bg-ultra-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">What Our Clients Say</h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto">
            Real results from real businesses using NovaAIQ to transform their online reputation.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-ultra-light-gray'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-cool-gray/10`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-bright-gold opacity-30">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* 5-Star Rating - Gold */}
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className="w-5 h-5 text-bright-gold" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-gray text-lg leading-relaxed mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-bright-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">{testimonial.name}</h4>
                  <p className="text-slate-gray text-sm">{testimonial.role}</p>
                  <p className="text-deep-teal text-sm font-medium">{testimonial.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/reviews" className="bg-deep-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
            Read More Testimonials
          </Link>
        </motion.div>
      </div>
    </section>
  )
}