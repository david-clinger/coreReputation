// src/app/legal/page.jsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const legalSections = [
  {
    id: 'terms',
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: January 15, 2024',
    content: [
      {
        title: '1. Acceptance of Terms',
        text: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.'
      },
      {
        title: '2. Use License',
        text: 'Permission is granted to temporarily use the materials on our website for personal, non-commercial transitory viewing only.'
      },
      {
        title: '3. Disclaimer',
        text: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
      },
      {
        title: '4. Limitations',
        text: 'In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.'
      },
      {
        title: '5. Revisions and Errata',
        text: 'The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.'
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: January 15, 2024',
    content: [
      {
        title: '1. Information We Collect',
        text: 'We collect personal information that you provide to us, such as name, email address, and other contact details when you use our services or contact us.'
      },
      {
        title: '2. How We Use Your Information',
        text: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our services and users.'
      },
      {
        title: '3. Information Sharing',
        text: 'We do not share your personal information with third parties except as described in this policy. We may share information with your consent or at your direction.'
      },
      {
        title: '4. Data Security',
        text: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
      },
      {
        title: '5. Your Rights',
        text: 'You have the right to access, correct, or delete your personal information. You can also object to or restrict the processing of your personal information.'
      }
    ]
  },
  {
    id: 'cookies',
    title: 'Cookie Policy',
    lastUpdated: 'Last Updated: January 15, 2024',
    content: [
      {
        title: '1. What Are Cookies',
        text: 'Cookies are small text files that are placed on your device by websites that you visit. They are widely used to make websites work more efficiently.'
      },
      {
        title: '2. How We Use Cookies',
        text: 'We use cookies to understand how you use our website and to improve your experience. This includes remembering your preferences and settings.'
      },
      {
        title: '3. Types of Cookies We Use',
        text: 'We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device for a set period of time).'
      },
      {
        title: '4. Managing Cookies',
        text: 'You can control cookies through your browser settings. However, if you disable cookies, some features of our website may not function properly.'
      }
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

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Legal <span className="text-gradient">Documents</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Review our legal policies and terms that govern your use of our services and website.
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {legalSections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="card p-6 text-center hover:border-primary-100 group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{section.lastUpdated}</p>
                <Link 
                  href={`#${section.id}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Legal Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {legalSections.map((section, sectionIndex) => (
              <motion.div
                key={section.id}
                id={section.id}
                variants={itemVariants}
                className="scroll-mt-20"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{section.title}</h2>
                  <p className="text-gray-600">{section.lastUpdated}</p>
                </div>

                <div className="space-y-8">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-primary-100 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                {sectionIndex < legalSections.length - 1 && (
                  <div className="mt-12 pt-12 border-t border-gray-200">
                    <Link 
                      href={`#${legalSections[sectionIndex + 1].id}`}
                      className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
                    >
                      Next: {legalSections[sectionIndex + 1].title}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Legal Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 p-8 bg-primary-50 rounded-2xl"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Legal Policies?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions or concerns about our legal documents, please don't hesitate to contact us.
              </p>
              <Link 
                href="/contact"
                className="btn-primary"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Legal Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Legal Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our other legal documents and compliance information.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: 'GDPR Compliance',
                description: 'Our commitment to data protection under GDPR regulations',
                icon: '🔒'
              },
              {
                title: 'Data Processing Agreement',
                description: 'Agreement for processing personal data on behalf of customers',
                icon: '📝'
              },
              {
                title: 'Service Level Agreement',
                description: 'Our commitments regarding service availability and support',
                icon: '⚙️'
              },
              {
                title: 'Acceptable Use Policy',
                description: 'Guidelines for acceptable use of our services and website',
                icon: '📋'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 text-center hover:border-primary-100"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <button className="mt-4 text-primary-600 font-semibold hover:text-primary-700 text-sm">
                  Download PDF
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}