// src/app/reviews/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import withAuth from '@/lib/withAuth'

const reviews = [
  {
    id: 1,
    name: 'Maria Santos',
    business: 'Bella Vista Restaurant',
    role: 'Restaurant Owner',
    rating: 5,
    content: 'Core Reputation has completely transformed how we handle customer reviews. The AI-powered responses are so natural, and we\'ve seen a 40% increase in positive reviews since using their platform.',
    date: '1 week ago'
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    business: 'Wilson Dental Practice',
    role: 'Dental Practice Owner',
    rating: 5,
    content: 'Managing online reviews used to take hours each week. Now Core Reputation handles everything automatically, and our online reputation has never been better. Our patient bookings have increased by 35%.',
    date: '2 weeks ago'
  },
  {
    id: 3,
    name: 'Lisa Chen',
    business: 'Serenity Day Spa',
    role: 'Spa Manager',
    rating: 5,
    content: 'The automated review management system is incredible. We respond to every review within minutes, and the AI-generated responses feel personal and professional. Game-changer for our business!',
    date: '3 weeks ago'
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    business: 'Rodriguez Auto Repair',
    role: 'Shop Owner',
    rating: 5,
    content: 'Core Reputation helped us go from 3.2 to 4.8 stars on Google in just 4 months. The review invitation system and smart response generation has brought us so many new customers.',
    date: '1 month ago'
  },
  {
    id: 5,
    name: 'Jennifer Park',
    business: 'Park Real Estate Group',
    role: 'Real Estate Broker',
    rating: 5,
    content: 'The reputation management tools are fantastic. We can monitor all our agents\' reviews in one place and the AI helps craft perfect responses. Our team\'s average rating improved by 0.8 stars.',
    date: '6 weeks ago'
  },
  {
    id: 6,
    name: 'Ahmed Hassan',
    business: 'Hassan Family Pharmacy',
    role: 'Pharmacy Owner',
    rating: 5,
    content: 'Customer review anxiety is gone! Core Reputation handles negative reviews professionally and helps us collect more positive ones. Our community trust has grown significantly.',
    date: '2 months ago'
  }
]

const stats = [
  { number: '98%', label: 'Client Satisfaction' },
  { number: '500+', label: 'Businesses Served' },
  { number: '4.9/5', label: 'Average Rating Improvement' },
  { number: '2min', label: 'Avg Response Time' }
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

function Reviews() {
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
      <section className="py-16 bg-gradient-to-br from-white to-light-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan">Reviews</span>
            </h1>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Real stories from businesses that transformed their online reputation with Core Reputation&apos;s 
              AI-powered review management platform.
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
                <div className="text-3xl md:text-4xl font-bold text-primary-blue-600 mb-2">{stat.number}</div>
                <div className="text-light-gray font-medium">{stat.label}</div>
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
                  ? 'bg-primary-blue-600 text-white'
                  : 'bg-light-gray text-dark-gray hover:bg-light-gray/80'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setActiveFilter('5')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === '5'
                  ? 'bg-primary-blue-600 text-white'
                  : 'bg-light-gray text-dark-gray hover:bg-light-gray/80'
              }`}
            >
              5 Stars
            </button>
            <button
              onClick={() => setActiveFilter('4')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === '4'
                  ? 'bg-primary-blue-600 text-white'
                  : 'bg-light-gray text-dark-gray hover:bg-light-gray/80'
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-light-gray/20"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gold opacity-30">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* 5-Star Rating */}
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className="w-5 h-5 text-gold" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-light-gray text-lg leading-relaxed mb-6 italic">
                  &quot;{review.content}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue-600 to-gold rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray">{review.name}</h4>
                      <p className="text-light-gray text-sm">{review.role}</p>
                      <p className="text-primary-blue-600 text-sm font-medium">{review.business}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-light-gray text-xs">{review.date}</p>
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
                className="bg-white border-2 border-primary-blue-600 text-primary-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-blue-600 hover:text-white transition-all duration-300"
              >
                Load More Reviews
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Review Platforms Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-gray">We Monitor All Major Review Platforms</h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Our platform integrates with all the review sites that matter to your business, ensuring comprehensive reputation management.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              'Google', 'Facebook', 'Trustpilot', 'Yelp', 'Yellow Pages', 'TripAdvisor',
              'Yell', 'Zillow', 'Better Business Bureau', 'HomeAdvisor', 'Houzz', 'Amazon',
              'Booking.com', 'Angies List', 'Service Seeking', 'Apple App Store', 'Apple Podcasts', 'TrustATrader',
              'Airbnb', 'Hotels.com', 'G2', 'Capterra', 'OpenTable', 'Edmunds',
              'Checkatrade', 'Vitals', 'WebMD', 'Just Eat', 'MyBuilder', 'VRBO',
              'Mindbody', 'Legelisten.no', 'Deliveroo', 'Takeaway.com', 'Agoda', 'GetAgent',
              'Zomato', 'Doctify', 'Healthgrades', 'RateMDs', 'Booksy', 'PatientConnect365',
              'RealSelf', 'Thuisbezorgd', 'Rover', 'RepairPal', 'Anwalt', 'Advocado', 'Kununu'
            ].map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-primary-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">
                    {platform.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-dark-gray text-sm">{platform}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Online Reputation?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of businesses using Core Reputation&apos;s AI-powered platform to manage reviews and boost their online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gold text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
                Get Started Today
              </a>
              <a href="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-blue-600 transition-all duration-200">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default withAuth(Reviews)
