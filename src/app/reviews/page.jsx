// src/app/reviews/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import withAuth from '@/lib/withAuth'
import { REVIEW_PLATFORMS, getPlatformInfo } from '@/constants/reviewPlatforms'

export const metadata = {
  title: 'Client Reviews & Success Stories | Core Reputation',
  description: 'Read authentic client reviews and success stories from businesses using Core Reputation\'s AI-powered review management platform. 98% client satisfaction rate.',
  keywords: 'client reviews, success stories, customer testimonials, reputation management results, business reviews, Core Reputation testimonials',
  openGraph: {
    title: 'Client Reviews - Real Success Stories with Core Reputation',
    description: 'Discover how businesses transformed their online reputation with Core Reputation. Read authentic reviews from 500+ satisfied clients.',
    url: 'https://corereputation.com/reviews',
    siteName: 'Core Reputation',
    images: [
      {
        url: 'https://corereputation.com/images/reviews-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Core Reputation Client Success Stories'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Reviews - Core Reputation Success Stories',
    description: '98% client satisfaction rate. Read authentic reviews from businesses that transformed their online reputation with AI.',
    images: ['https://corereputation.com/images/reviews-twitter.jpg']
  }
}

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
    rating: 4,
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
    rating: 4,
    content: 'Customer review anxiety is gone! Core Reputation handles negative reviews professionally and helps us collect more positive ones. Our community trust has grown significantly.',
    date: '2 months ago'
  },
  
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
  // State for filter and pagination
  const [selectedRating, setSelectedRating] = useState('all')
  const [itemsToShow, setItemsToShow] = useState(6)
  
  // Filter reviews based on rating
  const getFilteredReviews = () => {
    if (selectedRating === 'all') {
      return reviews
    }
    
    // Convert selectedRating to number and filter
    const ratingNumber = parseInt(selectedRating, 10)
    return reviews.filter(review => review.rating === ratingNumber)
  }
  
  const filteredReviews = getFilteredReviews()
  const displayedReviews = filteredReviews.slice(0, itemsToShow)
  const hasMoreReviews = filteredReviews.length > itemsToShow
  
  // Handle filter change
  const handleRatingFilter = (rating) => {
    setSelectedRating(rating)
    setItemsToShow(6) // Reset pagination when filter changes
  }
  
  // Handle load more
  const handleLoadMore = () => {
    setItemsToShow(prev => prev + 3)
  }
  
  // Get counts for each rating
  const getCounts = () => {
    const allCount = reviews.length
    const fiveStarCount = reviews.filter(r => r.rating === 5).length
    const fourStarCount = reviews.filter(r => r.rating === 4).length
    
    return {
      all: allCount,
      five: fiveStarCount,
      four: fourStarCount
    }
  }
  
  const counts = getCounts()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 overflow-hidden py-20">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 -translate-y-32 -translate-x-32" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-8"
            >
              <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="text-primary-blue-600 text-sm font-medium">Authentic Client Success Stories</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900"
            >
              Client{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
                Reviews
              </span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="block text-lg md:text-xl text-gray-500 font-normal mt-2"
              >
                {filteredReviews.length} {filteredReviews.length === 1 ? 'review' : 'reviews'} and counting
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Real stories from businesses that transformed their online reputation with Core Reputation's 
              AI-powered review management platform.
            </motion.p>
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
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary-blue-200 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Review Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <button
              onClick={() => handleRatingFilter('all')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                selectedRating === 'all'
                  ? 'bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl border border-gray-200'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                All Reviews ({counts.all})
              </div>
            </button>
            <button
              onClick={() => handleRatingFilter('5')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                selectedRating === '5'
                  ? 'bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl border border-gray-200'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                5 Stars ({counts.five})
              </div>
            </button>
            <button
              onClick={() => handleRatingFilter('4')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                selectedRating === '4'
                  ? 'bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl border border-gray-200'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4 Stars ({counts.four})
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-20 -translate-y-32 -translate-x-32" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-blue-100 rounded-full blur-3xl opacity-20 translate-y-32 translate-x-32" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredReviews.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No reviews found</h3>
              <p className="text-gray-600 text-lg mb-8">No reviews match the selected rating filter.</p>
              <button 
                onClick={() => handleRatingFilter('all')}
                className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Show All Reviews
              </button>
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                key={selectedRating} // Force re-animation when filter changes
              >
                {displayedReviews.map((review) => (
                  <motion.div
                    key={review.id}
                    variants={itemVariants}
                    className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative border border-gray-100 group hover:border-primary-blue-200 transform hover:-translate-y-2"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-teal-cyan opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>

                    {/* Dynamic Star Rating */}
                    <div className="flex mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star} 
                          className={`w-6 h-6 ${
                            star <= review.rating ? 'text-yellow-400' : 'text-gray-200'
                          } transition-colors duration-200 hover:scale-110`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 italic font-medium">
                      "{review.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                          <p className="text-gray-500 font-medium">{review.role}</p>
                          <p className="text-primary-blue-600 font-semibold">{review.business}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-gray-50 px-3 py-1 rounded-full">
                          <p className="text-gray-600 text-sm font-medium">{review.date}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Load More Button */}
              {hasMoreReviews && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mt-16"
                >
                  <button
                    onClick={handleLoadMore}
                    className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-primary-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center mx-auto group"
                  >
                    Load More Reviews
                    <div className="ml-3 bg-white/20 px-3 py-1 rounded-full text-sm">
                      {filteredReviews.length - itemsToShow} remaining
                    </div>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Review Platforms Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue-100 rounded-full blur-3xl opacity-20 -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-20 translate-y-32 -translate-x-32" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-6">
              <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 0l6 6M12 3l-6 6" />
              </svg>
              <span className="text-primary-blue-600 text-sm font-medium">Platform Integration Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              We Monitor All{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
                Major Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our platform integrates with all the review sites that matter to your business, ensuring comprehensive reputation management across the digital landscape.
            </p>
          </motion.div>

          <PlatformsGrid containerVariants={containerVariants} itemVariants={itemVariants} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue-600 to-teal-cyan relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-30 -translate-y-32 -translate-x-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-30 translate-y-32 translate-x-32" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-8">
              <svg className="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white text-sm font-medium">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Transform Your Online Reputation Today
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join hundreds of businesses using Core Reputation's AI-powered platform to manage reviews and boost their online presence. Start your reputation transformation journey now.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-primary-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center group"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="/services" 
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function PlatformLogo({ name }) {
  const info = getPlatformInfo(name)
  const bg = info?.color || '#1D4ED8' // default blue
  const domain = info?.domain
  const favicon = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64` : null

  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm"
         style={{ backgroundColor: bg }}
    >
      {favicon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={favicon} alt={`${name} logo`} className="w-7 h-7 rounded-sm" />
      ) : (
        <span className="text-white font-bold text-sm">{name.charAt(0)}</span>
      )}
    </div>
  )
}

function PlatformsGrid({ containerVariants, itemVariants }) {
  const platforms = [
    'Google', 'Facebook', 'Trustpilot', 'Yelp', 'Yellow Pages', 'TripAdvisor',
    'Yell', 'Zillow', 'Better Business Bureau', 'HomeAdvisor', 'Houzz', 'Amazon',
    'Booking.com', 'Angies List', 'Service Seeking', 'Apple App Store', 'Apple Podcasts', 'TrustATrader',
    'Airbnb', 'Hotels.com', 'G2', 'Capterra', 'OpenTable', 'Edmunds',
    'Checkatrade', 'Vitals', 'WebMD', 'Just Eat', 'MyBuilder', 'VRBO',
    'Mindbody', 'Legelisten.no', 'Deliveroo', 'Takeaway.com', 'Agoda', 'GetAgent',
    'Zomato', 'Doctify', 'Healthgrades', 'RateMDs', 'Booksy', 'PatientConnect365',
    'RealSelf', 'Thuisbezorgd', 'Rover', 'RepairPal', 'Anwalt', 'Advocado', 'Kununu'
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
    >
      {platforms.map((platform, index) => (
        <motion.div
          key={platform + index}
          variants={itemVariants}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-primary-blue-200 transition-all duration-300 text-center group border border-gray-100 transform hover:-translate-y-1"
        >
          <PlatformLogo name={platform} />
          <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary-blue-600 transition-colors duration-300">{platform}</h3>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default withAuth(Reviews)
