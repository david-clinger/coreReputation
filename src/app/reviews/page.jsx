// src/app/reviews/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    rating: 5,
    content: 'Nexus transformed our online presence. Their team was professional, responsive, and delivered beyond our expectations. The website they built for us has significantly increased our lead generation.',
    date: '2 weeks ago',
    image: '/images/review-1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'GrowthCo',
    role: 'Marketing Director',
    rating: 5,
    content: 'The digital marketing strategy developed by Nexus resulted in a 45% increase in our leads within just three months. Their data-driven approach and regular reporting kept us informed every step of the way.',
    date: '1 month ago',
    image: '/images/review-2.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'CreativeMinds',
    role: 'Founder',
    rating: 5,
    content: 'Their consulting services helped us streamline operations and increase profitability. Highly recommended! The team truly understands business challenges and provides practical solutions.',
    date: '2 months ago',
    image: '/images/review-3.jpg'
  },
  {
    id: 4,
    name: 'David Kim',
    company: 'InnovateTech',
    role: 'CTO',
    rating: 5,
    content: 'The custom software solution has been running flawlessly for over a year now. Their technical expertise and attention to detail are impressive. Great partnership!',
    date: '3 months ago',
    image: '/images/review-4.jpg'
  },
  {
    id: 5,
    name: 'Jennifer Williams',
    company: 'EcoSolutions',
    role: 'Operations Manager',
    rating: 5,
    content: 'Outstanding customer service and technical support. They are always available when we need them and go above and beyond to ensure our systems are running smoothly.',
    date: '4 months ago',
    image: '/images/review-5.jpg'
  },
  {
    id: 6,
    name: 'Robert Thompson',
    company: 'PrimeConsulting',
    role: 'Managing Partner',
    rating: 5,
    content: 'We\'ve been working with Nexus for over two years now, and they continue to exceed our expectations. Their strategic insights have been invaluable to our growth.',
    date: '5 months ago',
    image: '/images/review-6.jpg'
  }
]

const stats = [
  { number: '98%', label: 'Client Satisfaction' },
  { number: '150+', label: 'Projects Completed' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '24h', label: 'Avg Response Time' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function Reviews() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleReviews, setVisibleReviews] = useState(6)

  const filteredReviews = activeFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(activeFilter))

  const showMoreReviews = () => {
    setVisibleReviews(prev => prev + 3)
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
              Client <span className="text-gradient">Reviews</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what our clients have to say about their experience working with us. 
              Real stories from real businesses we've helped succeed.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Review Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setActiveFilter('5')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === '5'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              5 Stars
            </button>
            <button
              onClick={() => setActiveFilter('4')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === '4'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              4 Stars
            </button>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {filteredReviews.slice(0, visibleReviews).map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                className="card p-6 hover:shadow-xl transition-shadow"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Content */}
                <p className="text-gray-700 mb-6 italic">"{review.content}"</p>

                {/* Reviewer Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {review.role} at {review.company}
                    </p>
                    <p className="text-gray-500 text-xs">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {visibleReviews < filteredReviews.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                onClick={showMoreReviews}
                className="btn-outline"
              >
                Load More Reviews
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Embedded Reviews Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Verified Reviews</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See more verified reviews from our clients across various platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">EmbedMyReviews Integration</h3>
              <p className="text-gray-600 mb-6">
                We use EmbedMyReviews to showcase verified reviews from multiple platforms in one place.
                This ensures all reviews are authentic and trustworthy.
              </p>
              
              {/* Placeholder for EmbedMyReviews widget */}
              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4">
                    EmbedMyReviews widget would be displayed here with live reviews from various platforms.
                  </p>
                  <button className="text-primary-600 font-semibold hover:text-primary-700">
                    View All Verified Reviews →
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: 'Google Reviews', icon: '⭐', count: '4.9/5' },
                  { name: 'Trustpilot', icon: '🏆', count: '4.8/5' },
                  { name: 'Clutch', icon: '🔧', count: '5.0/5' },
                  { name: 'Facebook', icon: '📘', count: '4.9/5' }
                ].map((platform, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{platform.icon}</div>
                    <div className="font-semibold text-gray-900">{platform.name}</div>
                    <div className="text-gray-600">{platform.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join hundreds of satisfied clients who have transformed their business with our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary">
                Get Started Today
              </a>
              <a href="/services" className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}