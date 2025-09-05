// src/app/services/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import withAuth from '@/lib/withAuth'

const allServices = [
  {
    id: 'nap-sync',
    title: "Business Listings & NAP Sync",
    description: "Keep your contact info consistent across Google, Apple Maps, Yelp, Bing, and dozens of directories.",
    fullDescription: "Our NAP (Name, Address, Phone) synchronization service ensures your business information is consistent across all major directories and platforms. This improves your local SEO and helps customers find accurate information about your business.",
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=640&q=80',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
  <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-primary-blue-600 to-gold bg-clip-text text-transparent">Services</span>
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
        className={`card overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary-blue-300 hover:shadow-xl ${
                  activeService.id === service.id 
          ? 'border-primary-blue-600 bg-primary-blue-50' 
                    : 'border-gray-200'
                }`}
                onClick={() => setActiveService(service)}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 rounded-lg backdrop-blur-sm ${
                      activeService.id === service.id ? 'bg-primary-blue-600/80' : 'bg-white/80'
                    }`}>
                      <div className={`${activeService.id === service.id ? 'text-white' : 'text-primary-blue-600'} w-8 h-8 flex items-center justify-center`}>
                        <div className="w-6 h-6">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href={`/serviceDetails?id=${service.id}`}
                    className="text-primary-blue-600 font-semibold hover:text-primary-blue-700"
                  >
                    Learn more →
                  </Link>
                </div>
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
                  <div className="p-3 bg-primary-blue-100 rounded-lg mr-4">
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
                        <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

            {/* Service Image/Preview */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-80">
                  <img
                    src={activeService.image}
                    alt={`${activeService.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{activeService.title}</h3>
                    <p className="text-white/80 text-sm">Visual representation of our service</p>
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
                iconUrl: "https://api.iconify.design/heroicons:cog-6-tooth?color=white&width=32&height=32"
              },
              {
                step: "02",
                title: "AI Configuration",
                description: "We customize AI response templates, set up review routing, and train the system on your brand voice.",
                iconUrl: "https://api.iconify.design/heroicons:cpu-chip?color=white&width=32&height=32"
              },
              {
                step: "03",
                title: "Launch & Monitor",
                description: "Your reputation management system goes live with 24/7 monitoring and automated workflows.",
                iconUrl: "https://api.iconify.design/heroicons:rocket-launch?color=white&width=32&height=32"
              },
              {
                step: "04",
                title: "Optimize & Report",
                description: "We continuously optimize performance and provide detailed analytics and monthly reports.",
                iconUrl: "https://api.iconify.design/heroicons:chart-bar?color=white&width=32&height=32"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary-blue-500 to-primary-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    {index === 0 && (
                      <path d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.549.091A1.875 1.875 0 002.25 11.828v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.091.549a1.875 1.875 0 001.85 1.567h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.549-.091A1.875 1.875 0 0021.75 12.172v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.549A1.875 1.875 0 0012.172 2.25h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                    )}
                    {index === 1 && (
                      <path d="M16.5 7.063l1.44-1.44a.75.75 0 111.061 1.061L17.561 8.124a.75.75 0 01-1.06 0l-1.44-1.44a.75.75 0 111.061-1.061l1.44 1.44zM13.736 2.25L6.75 9.236a3 3 0 000 4.243L9.514 16.25H6a.75.75 0 000 1.5h4.5a.75.75 0 00.53-.22l8.25-8.25a.75.75 0 000-1.06L13.736 2.25z" />
                    )}
                    {index === 2 && (
                      <path d="M5.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM2.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM18.75 7.5a.75.75 0 00-1.5 0v2.25H15a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H21a.75.75 0 000-1.5h-2.25V7.5z" />
                    )}
                    {index === 3 && (
                      <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.035-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                    )}
                  </svg>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
                className="bg-white text-primary-blue-600 hover:bg-gray-50"
              >
                Get Free Consultation
              </Button>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg bg-transparent border border-white text-white hover:bg-white hover:text-primary-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
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