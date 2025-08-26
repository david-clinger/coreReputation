// src/app/pricing/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'Essential',
    tagline: 'For the owner who just wants reviews on Google—nothing else.',
    price: '$99',
    period: '/month',
    popular: false,
    hidden: true,
    features: [
      'QR Review Capture Only: Customers scan your QR code and post directly to Google',
      'No Filtering, No Dashboard, No Extras',
      'Email-Only Support'
    ],
    cta: 'Get Essential',
    href: '/contact?plan=essential',
    note: 'Hidden "back pocket" plan'
  },
  {
    name: 'Core',
    tagline: 'The right starting point for serious reputation management.',
    price: '$199',
    period: '/month',
    popular: true,
    hidden: false,
    features: [
      'QR Review Funnel: 4–5★ reviews go public on Google, while 3★ and below are routed privately',
      'NAP Sync: Keeps your contact info consistent across Google, Apple Maps, Yelp, Bing, and dozens of directories',
      'Review Monitoring Dashboard: View and manage all reviews in one place',
      'AI-Drafted Response Suggestions: Ready-made reply templates',
      'Phone + Email Support',
      'Basic Analytics: Track review volume and ratings trends',
      '1 Business Day Support Response Time',
      'Review Alert Notifications: Get notified when new reviews are posted',
      'Basic Review Filtering: Automatically route reviews based on star ratings',
      'Customer Feedback Collection: Simple forms to gather customer insights',
      'Monthly Review Summary: Basic reporting on review performance',
      'Standard Security: SSL encryption and secure data handling'
    ],
    addons: [
      {
        name: 'Google Posts Scheduling',
        price: '+$99/month',
        description: 'Up to 4 posts per month professionally drafted and published automatically'
      }
    ],
    cta: 'Start with Core',
    href: '/contact?plan=core'
  },
  {
    name: 'Pro',
    tagline: 'Automation plus the tools to actively grow your reputation.',
    price: '$399',
    period: '/month',
    popular: false,
    hidden: false,
    features: [
      'Everything in Core, plus:',
      'Outbound Review Campaigns: Custom review request forms & templates via email, SMS, or WhatsApp',
      'Google Posts Scheduling: Included — 4 posts per month professionally drafted',
      'AI-Assisted Review Responses: Intelligent, customized replies in your brand\'s voice',
      'Review Response Reminder & Fail-Safe: Auto-responses if unanswered after 72 hours',
      'Q&A Monitoring & Alerts: Instant notifications for customer questions',
      'Photo/Video Uploads: Up to 10 per month optimized and posted',
      'Monthly Performance Report: Track calls, clicks, reviews, and growth',
      'Quarterly Optimization: Fine-tuning every 90 days',
      'Priority Support: Responses within 4 business hours',
      'Competitor Analysis: Monitor up to 3 competitors\' review performance',
      'Custom Review Generation Pages: Branded landing pages for review collection'
    ],
    cta: 'Go Pro',
    href: '/contact?plan=pro'
  },
  {
    name: 'Enterprise',
    tagline: 'For franchises, multi-location businesses, or high-touch support needs.',
    price: 'Custom',
    period: '',
    popular: false,
    hidden: false,
    features: [
      'Includes everything in Pro',
      'Enterprise-level customization',
      'Multi-location management',
      'Dedicated account manager',
      'Custom integration support',
      'Advanced analytics & reporting',
      'White-label options',
      'Training & onboarding support',
      '24/7 priority support',
      'Unlimited competitor tracking',
      'API Access for custom workflows',
      'Dedicated IP address for secure access',
      'SLA with 99.9% uptime guarantee',
      'Custom data retention policies'
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

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  const [showEssential, setShowEssential] = useState(false)
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

  const visiblePlans = pricingPlans.filter(plan => !plan.hidden || showEssential)

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
              get<span className="text-gradient">AIIQ</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
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

            {/* Essential Plan Toggle */}
            <div className="mb-8">
              <button
                onClick={() => setShowEssential(!showEssential)}
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                {showEssential ? 'Hide Essential plan' : 'Looking for something simpler? Show Essential plan'}
              </button>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch max-w-6xl mx-auto"
            style={{ gridTemplateRows: 'auto' }}
          >
            {visiblePlans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-blue-500 shadow-2xl'
                    : 'border border-gray-200 shadow-lg'
                } bg-white ${plan.hidden ? 'bg-gray-50 border-dashed' : ''} ${
                  hoveredCard === plan.name ? 'shadow-xl border-blue-400 transform scale-[1.02]' : ''
                } flex flex-col h-full`}
                onMouseEnter={() => setHoveredCard(plan.name)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ 
                  width: '320px'
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {plan.hidden && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Hidden Plan
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm h-12 flex items-center justify-center">{plan.tagline}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{getPrice(plan.price)}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-600 ml-2">{getPeriod()}</span>
                    )}
                  </div>
                  {plan.note && (
                    <p className="text-sm text-gray-500 mt-2 italic">{plan.note}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.addons && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Optional Add-On:</h4>
                    {plan.addons.map((addon, addonIndex) => (
                      <div key={addonIndex} className="text-sm">
                        <p className="font-medium text-gray-900">{addon.name} {addon.price}</p>
                        <p className="text-gray-600 text-xs">{addon.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href={plan.href}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'btn-primary'
                      : plan.hidden
                      ? 'bg-gray-600 text-white hover:bg-gray-700'
                      : 'btn-outline'
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                  {visiblePlans.map((plan, index) => (
                    <th key={index} className="text-center py-4 px-6 font-semibold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'QR Review Capture', essential: '✓', core: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Review Filtering', essential: '✗', core: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Dashboard Access', essential: '✗', core: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'NAP Sync', essential: '✗', core: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'AI Response Suggestions', essential: '✗', core: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Outbound Review Campaigns', essential: '✗', core: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'Google Posts', essential: '✗', core: 'Add-on', pro: '✓', enterprise: '✓' },
                  { feature: 'AI-Assisted Responses', essential: '✗', core: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'Response Fail-Safe', essential: '✗', core: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'Q&A Monitoring', essential: '✗', core: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'Photo/Video Uploads', essential: '✗', core: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'Performance Reports', essential: '✗', core: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'Quarterly Optimization', essential: '✗', core: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'Competitor Analysis', essential: '✗', core: '✗', pro: '✓ (3 competitors)', enterprise: '✓ (Unlimited)' },
                  { feature: 'Custom Review Pages', essential: '✗', core: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'API Access', essential: '✗', core: '✗', pro: '✗', enterprise: '✓' },
                  { feature: 'Dedicated Account Manager', essential: '✗', core: '✗', pro: '✗', enterprise: '✓' },
                  { feature: 'Support', essential: 'Email', core: 'Phone + Email', pro: 'Priority (4hr)', enterprise: '24/7 Dedicated' }
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    {visiblePlans.map((plan, index) => (
                      <td key={index} className="py-4 px-6 text-center text-gray-600">
                        {row[plan.name.toLowerCase()]}
                      </td>
                    ))}
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