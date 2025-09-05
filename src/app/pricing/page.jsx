// src/app/pricing/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import withAuth from '@/lib/withAuth'

const pricingPlans = [
  {
    name: 'Launch',
    tagline: 'The starting point for managing your reputation.',
    price: '$199',
    period: '/month',
    popular: false,
    hidden: false,
    features: [
      'QR Review Funnel – Push 4–5★ reviews to Google; route 3★ and below privately',
      'Review Monitoring Dashboard – Manage all reviews in one place',
      'AI-Drafted Response Suggestions – Smart, ready-to-use reply templates',
      'Review Alert Notifications – Instant email/text alerts for every new review',
      'Basic Review Filtering – Route reviews automatically based on star rating',
      'Monthly Review Summary – Simple reporting on review activity',
      'Support Library Access – Step-by-step guides & tutorials for your team',
      'Monthly Tips Email – Expert strategies to keep reviews flowing',
      'Secure Cloud Hosting – All your data encrypted and backed up',
      'Phone & Email Support – 1 business day response time'
    ],
    cta: 'Start with Launch',
    href: '/contact?plan=launch'
  },
  {
    name: 'Core',
    tagline: 'Automation plus the tools to actively grow your reputation.',
    price: '$399',
    period: '/month',
    popular: true,
    recommended: true,
    hidden: false,
    features: [
      'Includes everything in Launch, plus:',
      'Outbound Review Campaigns – Custom review request forms via email, SMS, or WhatsApp',
      'Custom Review Generation Pages – Branded landing pages for collecting reviews',
      'AI Response Assist (Expanded) – Intelligent drafts tuned to your brand\'s tone',
      'Branded SMS/Email Templates – Pre-built, customizable campaigns to fit your look',
      'Review Trend Graphs – Visualize growth, volume, and ratings in one dashboard',
      'Customer Sentiment Snapshot – Instant breakdown of positive vs negative feedback',
      'Staff Notifications – Send review alerts to the right team members automatically',
      'Quarterly Check-In Call – Scheduled optimization session every 90 days',
      'Reputation Benchmarking – Compare your reviews to local competitors & industry averages',
      'Priority Support – Responses within 4 business hours'
    ],
    cta: 'Go Core',
    href: '/contact?plan=core'
  },
  {
    name: 'Enterprise',
    tagline: 'Tailored solutions for companies with multiple locations or specialized needs.',
    price: 'Custom',
    period: 'Pricing',
    popular: false,
    hidden: false,
    features: [
      'Includes everything in Core, plus:',
      'Multi-Location Management – Consolidated oversight across all locations',
      'Advanced Reporting – Cross-location insights and exportable reports',
      'Dedicated Account Manager – One point of contact for strategy and support',
      'Custom Integrations – Connect with your existing tools and workflows'
    ],
    cta: 'Contact Sales',
    href: '/contact?plan=enterprise'
  }
]

const faqItems = [
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated."
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee."
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, we offer a 15% discount when you choose annual billing instead of monthly billing."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for larger orders."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees."
  },
  {
    question: "Is the Essential plan really hidden?",
    answer: "The Essential plan is our basic offering that's perfect for businesses who just need simple Google review collection. While we don't prominently feature it, it's available upon request."
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

function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  const [hoveredCard, setHoveredCard] = useState(null)

  const getPrice = (basePrice) => {
    if (basePrice === 'Custom') return 'Custom'
    if (billingPeriod === 'annual') {
      const monthlyPrice = parseInt(basePrice.replace('$', ''))
      const annualPrice = monthlyPrice * 10
      return `$${annualPrice}`
    }
    return basePrice
  }

  const getPeriod = () => {
    return billingPeriod === 'annual' ? '/year' : '/month'
  }

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
              Core Reputation <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-light-gray max-w-3xl mx-auto mb-8">
              Choose the perfect plan to manage and grow your online reputation. 
              Everything you need to get more 5-star reviews and handle feedback like a pro.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  billingPeriod === 'annual' ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span className="sr-only">Toggle billing period</span>
                <span
                  className={`${
                    billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <div className="flex items-center">
                <span className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Annual (10x Monthly)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center items-stretch max-w-6xl mx-auto"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-deep-teal shadow-2xl bg-gradient-to-br from-deep-teal/5 to-white'
                    : 'border border-cool-gray/20 shadow-lg bg-white'
                } ${
                  hoveredCard === plan.name ? 'shadow-xl border-deep-teal transform scale-[1.02]' : ''
                } flex flex-col h-full`}
                onMouseEnter={() => setHoveredCard(plan.name)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ 
                  width: '320px'
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-deep-teal text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                      ⭐ RECOMMENDED
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                  <p className="text-slate-gray text-sm h-12 flex items-center justify-center">{plan.tagline}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-charcoal">{getPrice(plan.price)}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-slate-gray ml-2">{getPeriod()}</span>
                    )}
                  </div>
                  {plan.note && (
                    <p className="text-sm text-cool-gray mt-2 italic">{plan.note}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-deep-teal mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-gray text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.addons && (
                  <div className="mb-6 p-4 bg-ultra-light-gray rounded-lg">
                    <h4 className="font-semibold text-charcoal text-sm mb-2">Optional Add-On:</h4>
                    {plan.addons.map((addon, addonIndex) => (
                      <div key={addonIndex} className="text-sm">
                        <p className="font-medium text-charcoal">{addon.name} {addon.price}</p>
                        <p className="text-slate-gray text-xs">{addon.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href={plan.href}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-deep-teal text-white hover:bg-bright-gold shadow-lg'
                      : 'bg-white border-2 border-cool-gray/30 text-slate-gray hover:border-deep-teal hover:text-deep-teal'
                  } mt-auto`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Feature Comparison</h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              See how our plans stack up against each other to find your perfect fit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-deep-teal">
                  <th className="text-left py-6 px-6 font-bold text-white text-lg">Feature</th>
                  {pricingPlans.map((plan, index) => (
                    <th key={index} className="text-center py-6 px-6 font-bold text-white text-lg">
                      {plan.name}
                      {plan.popular && <span className="block text-xs text-bright-gold mt-1">⭐ RECOMMENDED</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'QR Review Funnel', launch: '✓', core: '✓', enterprise: '✓' },
                  { feature: 'Review Monitoring Dashboard', launch: '✓', core: '✓', enterprise: '✓' },
                  { feature: 'AI Response Suggestions', launch: '✓', core: '✓ (Expanded)', enterprise: '✓ (Expanded)' },
                  { feature: 'Review Alert Notifications', launch: '✓', core: '✓', enterprise: '✓' },
                  { feature: 'Basic Review Filtering', launch: '✓', core: '✓', enterprise: '✓' },
                  { feature: 'Monthly Review Summary', launch: '✓', core: '✓', enterprise: '✓' },
                  { feature: 'Phone & Email Support', launch: '✓ (1 business day)', core: '✓ (4 hours)', enterprise: '✓ (Dedicated)' },
                  { feature: 'Outbound Review Campaigns', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Custom Review Pages', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Review Trend Graphs', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Customer Sentiment Snapshot', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Staff Notifications', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Quarterly Check-In Call', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Reputation Benchmarking', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Multi-Location Management', launch: '✗', core: '✗', enterprise: '✓' },
                  { feature: 'Advanced Reporting', launch: '✗', core: '✗', enterprise: '✓' },
                  { feature: 'Dedicated Account Manager', launch: '✗', core: '✗', enterprise: '✓' },
                  { feature: 'Custom Integrations', launch: '✗', core: '✗', enterprise: '✓' }
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className={`border-b border-cool-gray/20 hover:bg-deep-teal/5 transition-colors ${rowIndex % 2 === 0 ? 'bg-ultra-light-gray' : 'bg-white'}`}>
                    <td className="py-4 px-6 font-semibold text-charcoal border-r border-cool-gray/20">{row.feature}</td>
                    {pricingPlans.map((plan, index) => {
                      const value = row[plan.name.toLowerCase()]
                      const isCheck = value === '✓' || (typeof value === 'string' && value.includes('✓'))
                      const isX = value === '✗'
                      
                      return (
                        <td key={index} className={`py-4 px-6 text-center ${plan.popular ? 'bg-deep-teal/5 border-l-2 border-r-2 border-deep-teal/20' : ''}`}>
                          {isCheck && (
                            <div className="flex items-center justify-center">
                              <div className="w-6 h-6 bg-gradient-to-br from-bright-gold to-deep-teal rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white font-bold" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              {value.includes('(') && (
                                <span className="ml-2 text-xs text-slate-gray">{value.match(/\(([^)]+)\)/)?.[1]}</span>
                              )}
                            </div>
                          )}
                          {isX && (
                            <div className="flex items-center justify-center">
                              <div className="w-6 h-6 bg-cool-gray rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          )}
                          {!isCheck && !isX && (
                            <span className="text-slate-gray font-medium text-sm">{value}</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about getAIIQ pricing and plans.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-8">
              Our team is here to help you choose the right reputation management plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Sales
              </Link>
              <a href="tel:+15551234567" className="btn-outline">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default withAuth(Pricing)