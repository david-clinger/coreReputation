// src/app/services/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import withAuth from '@/lib/withAuth'

const allServices = [
  {
    id: 'consulting',
    title: "Business Consulting",
    description: "Strategic guidance to help your business grow and overcome challenges.",
    fullDescription: "Our business consulting services provide expert guidance to help you navigate complex business challenges and achieve sustainable growth. We work closely with you to develop customized strategies that align with your goals and drive measurable results.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      "Strategic Planning",
      "Market Analysis",
      "Business Process Optimization",
      "Financial Consulting",
      "Organizational Development",
      "Change Management"
    ],
    benefits: [
      "Increased operational efficiency",
      "Improved decision-making",
      "Enhanced competitive advantage",
      "Sustainable growth strategies"
    ]
  },
  {
    id: 'development',
    title: "Web Development",
    description: "Custom websites and applications built with modern technologies.",
    fullDescription: "We create stunning, responsive websites and powerful web applications using the latest technologies. Our development process focuses on user experience, performance, and scalability to ensure your digital presence stands out.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Web Application Development",
      "API Integration",
      "Progressive Web Apps",
      "Performance Optimization"
    ],
    benefits: [
      "Enhanced user experience",
      "Mobile-responsive design",
      "Fast loading times",
      "SEO-friendly architecture"
    ]
  },
  {
    id: 'marketing',
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to increase your online presence.",
    fullDescription: "Our digital marketing services help you reach and engage your target audience through data-driven strategies. We combine creativity with analytics to drive traffic, generate leads, and increase conversions.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Management",
      "PPC Advertising",
      "Email Marketing",
      "Analytics & Reporting"
    ],
    benefits: [
      "Increased brand visibility",
      "Higher conversion rates",
      "Better ROI on marketing spend",
      "Data-driven decision making"
    ]
  },
  {
    id: 'design',
    title: "UI/UX Design",
    description: "Beautiful and intuitive designs that enhance user experience.",
    fullDescription: "We create user-centered designs that are not only visually appealing but also highly functional. Our design process focuses on understanding user behavior to create intuitive and engaging experiences.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
      "Design Systems"
    ],
    benefits: [
      "Improved user satisfaction",
      "Higher conversion rates",
      "Reduced development costs",
      "Consistent brand experience"
    ]
  },
  {
    id: 'cloud',
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    fullDescription: "We help businesses leverage cloud technologies to improve scalability, reliability, and cost-efficiency. Our cloud solutions are tailored to your specific needs and business objectives.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "DevOps Implementation",
      "Cloud Security",
      "Cost Optimization",
      "24/7 Monitoring"
    ],
    benefits: [
      "Scalable infrastructure",
      "Reduced IT costs",
      "Improved reliability",
      "Enhanced security"
    ]
  },
  {
    id: 'support',
    title: "Technical Support",
    description: "Reliable technical support and maintenance services.",
    fullDescription: "Our technical support team provides ongoing maintenance and troubleshooting to ensure your systems run smoothly. We offer flexible support packages to meet your specific needs.",
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    features: [
      "24/7 Technical Support",
      "System Maintenance",
      "Security Updates",
      "Performance Monitoring",
      "Backup Solutions",
      "Emergency Response"
    ],
    benefits: [
      "Minimal downtime",
      "Proactive issue resolution",
      "Regular system updates",
      "Peace of mind"
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
              Comprehensive solutions designed to help your business thrive in the digital age. 
              From strategy to execution, we've got you covered.
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
                className={`card p-6 text-center cursor-pointer transition-all duration-300 ${
                  activeService.id === service.id 
                    ? 'border-primary-600 bg-primary-50 transform scale-105' 
                    : 'hover:border-primary-100 hover:shadow-xl'
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
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  Learn more →
                </button>
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
              We follow a proven process to ensure successful project delivery and client satisfaction.
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
                title: "Discovery",
                description: "We start by understanding your business goals, challenges, and requirements.",
                icon: "🔍"
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed project plan with timelines, milestones, and deliverables.",
                icon: "📋"
              },
              {
                step: "03",
                title: "Execution",
                description: "Our team implements the solution with regular updates and collaboration.",
                icon: "⚡"
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deliver the final product and provide ongoing support and maintenance.",
                icon: "🎯"
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
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default withAuth(Services)