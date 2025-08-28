// src/app/services/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import withAuth from '@/lib/withAuth'

const allServices = [
  {
    id: 'review-management',
    title: "Smart Review Management",
    description: "QR review funnels that route 4-5★ reviews to Google while handling lower ratings privately.",
    fullDescription: "Our intelligent review management system uses QR codes and smart routing to ensure only positive reviews (4-5 stars) are posted publicly to Google, while 3-star and below reviews are captured privately for internal feedback and improvement opportunities.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    features: [
      "QR Code Review Collection",
      "Smart Review Filtering",
      "Private Feedback Capture",
      "Google Review Optimization",
      "Review Alert Notifications",
      "Customer Feedback Analytics"
    ],
    benefits: [
      "Higher Google star ratings",
      "More positive online reviews",
      "Better customer feedback insights",
      "Protected brand reputation"
    ]
  },
  {
    id: 'nap-sync',
    title: "Business Listings & NAP Sync",
    description: "Keep your contact info consistent across Google, Apple Maps, Yelp, Bing, and dozens of directories.",
    fullDescription: "Our NAP (Name, Address, Phone) synchronization service ensures your business information is consistent across all major directories and platforms. This improves your local SEO and helps customers find accurate information about your business.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: [
      "Google My Business Optimization",
      "Apple Maps Listing Management",
      "Yelp Business Profile",
      "Bing Places for Business",
      "Facebook Business Page",
      "50+ Directory Submissions"
    ],
    benefits: [
      "Improved local search visibility",
      "Consistent business information",
      "Better customer trust",
      "Enhanced local SEO"
    ]
  },
  {
    id: 'ai-responses',
    title: "AI-Powered Response Management",
    description: "Intelligent review responses, automated reply suggestions, and 24/7 monitoring.",
    fullDescription: "Our AI-powered system monitors your online reviews 24/7 and provides intelligent response suggestions tailored to your brand voice. It can also auto-respond to reviews when configured, ensuring no review goes unanswered.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: [
      "AI-Drafted Response Suggestions",
      "24/7 Review Monitoring",
      "Auto-Response Configuration",
      "Brand Voice Customization",
      "Response Reminder System",
      "Sentiment Analysis"
    ],
    benefits: [
      "Faster response times",
      "Consistent brand messaging",
      "Improved customer relationships",
      "Reduced manual workload"
    ]
  },
  {
    id: 'outbound-campaigns',
    title: "Outbound Review Campaigns",
    description: "Custom review request forms and templates via email, SMS, or WhatsApp.",
    fullDescription: "Proactively request reviews from your satisfied customers through personalized outbound campaigns. Our system sends targeted review requests via email, SMS, or WhatsApp to maximize response rates.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    features: [
      "Email Review Campaigns",
      "SMS Review Requests",
      "WhatsApp Integration",
      "Custom Review Forms",
      "Automated Follow-ups",
      "Campaign Performance Tracking"
    ],
    benefits: [
      "Increased review volume",
      "Higher customer engagement",
      "More positive feedback",
      "Better online reputation"
    ]
  },
  {
    id: 'google-posts',
    title: "Google Posts Scheduling",
    description: "Professionally drafted and automatically published Google My Business posts.",
    fullDescription: "Keep your Google My Business profile active with regular, professionally written posts. Our content team creates engaging posts that showcase your business and improve your local search visibility.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Professional Content Creation",
      "Automated Publishing",
      "Content Calendar Planning",
      "Visual Content Integration",
      "Call-to-Action Optimization",
      "Performance Analytics"
    ],
    benefits: [
      "Improved local visibility",
      "Regular customer engagement",
      "Professional online presence",
      "Higher conversion rates"
    ]
  },
  {
    id: 'analytics-reporting',
    title: "Analytics & Performance Reporting",
    description: "Track review performance, customer feedback trends, and reputation growth.",
    fullDescription: "Get detailed insights into your online reputation with comprehensive analytics and reporting. Track review volume, rating trends, response times, and competitor performance to make data-driven decisions.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      "Review Volume Tracking",
      "Rating Trend Analysis",
      "Response Time Metrics",
      "Competitor Monitoring",
      "Customer Sentiment Analysis",
      "Monthly Performance Reports"
    ],
    benefits: [
      "Data-driven insights",
      "Performance optimization",
      "Competitive advantage",
      "ROI measurement"
    ]
  }
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

function Services() {
  const [activeService, setActiveService] = useState(allServices[0])

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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive online reputation management solutions to help you get more 5-star reviews, 
              manage customer feedback, and grow your business with AI-powered tools.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`card p-6 text-center cursor-pointer transition-all duration-300 hover:border-primary-100 hover:shadow-xl ${
                  activeService.id === service.id 
                    ? 'border-primary-600 bg-primary-50' 
                    : 'border-gray-200'
                }`}
                onClick={() => setActiveService(service)}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-lg ${
                    activeService.id === service.id ? 'bg-primary-100' : 'bg-gray-100'
                  }`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={`/serviceDetails?id=${service.id}`}
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
            {/* Service Details */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  {activeService.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{activeService.title}</h2>
              </div>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {activeService.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
                  <ul className="space-y-3">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {activeService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/pricing" className="btn-outline">
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Service Image/Placeholder */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-100 rounded-2xl rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="h-80 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      {activeService.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeService.title}</h3>
                    <p className="text-gray-600">Visual representation of our service</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to set up and manage your online reputation effectively.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Setup & Integration",
                description: "We set up your QR review funnels, sync your business listings, and configure monitoring.",
                icon: "⚙️"
              },
              {
                step: "02",
                title: "AI Configuration",
                description: "We customize AI response templates, set up review routing, and train the system on your brand voice.",
                icon: "🤖"
              },
              {
                step: "03",
                title: "Launch & Monitor",
                description: "Your reputation management system goes live with 24/7 monitoring and automated workflows.",
                icon: "🚀"
              },
              {
                step: "04",
                title: "Optimize & Report",
                description: "We continuously optimize performance and provide detailed analytics and monthly reports.",
                icon: "📊"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.icon}
                </div>
                <div className="text-sm text-primary-600 font-semibold mb-2">Step {step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Strengthen Your Reputation?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Transform how customers see your business with AI-powered review management that builds trust and drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-deep-teal hover:bg-ultra-light-gray"
              >
                Get Free Consultation
              </Button>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg bg-transparent border border-white text-white hover:bg-white hover:text-deep-teal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default withAuth(Services)