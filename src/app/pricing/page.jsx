// src/app/pricing/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
// import withAuth from '@/lib/withAuth'

const pricingPlans = [
  {
    name: 'Launch',
    tagline: 'The starting point for managing your reputation.',
    price: '$99',
    period: '/month',
    popular: false,
    hidden: false,
    features: [
      'QR Review Funnel – Push 4–5★ reviews to Google; route 3★ and below privately',
      'Review Monitoring Dashboard – Manage all reviews in one place',
      'Basic AI-Drafted Response Suggestions – Smart, ready-to-use reply templates',
      'Review Alert Notifications – Instant email/text alerts for every new review',
      'Basic Review Filtering – Route reviews automatically based on star rating',
      'Secure Cloud Hosting – All your data encrypted and backed up',
      'Phone & Email Support – 1 business day response time'
    ],
    cta: 'Start with Launch',
    href: '/contact?plan=launch'
  },
  {
    name: 'Core',
    tagline: 'Automation plus the tools to actively grow your reputation.',
    price: '$159',
    period: '/month',
    popular: true,
    recommended: true,
    hidden: false,
    features: [
    <span style={{fontSize: '1.15rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem'}}>Includes everything in Launch, plus:</span>,
      'Outbound Review Campaigns – Custom review request forms via email, SMS, or WhatsApp',
      'AI Response Assist (Expanded) – Intelligent drafts tuned to your brand\'s tone',
      'Branded SMS/Email Templates – Pre-built, customizable campaigns to fit your look',
      'Review Trend Graphs – Visualize growth, volume, and ratings in one dashboard',
      'Customer Sentiment Snapshot – Instant breakdown of positive vs negative feedback',
      'Staff Notifications – Send review alerts to the right team members automatically',
      'Quarterly Check-In Call – Scheduled optimization session every 90 days',
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
    <span style={{fontSize: '1.15rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem'}}>Includes everything in Core, plus:</span>,
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
  // {
  //   question: "Is the Essential plan really hidden?",
  //   answer: "The Essential plan is our basic offering that's perfect for businesses who just need simple Google review collection. While we don't prominently feature it, it's available upon request."
  // }
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
      const annualPrice = Math.round(monthlyPrice * 12 * 0.83) // 17% discount
      return `$${annualPrice}`
    }
    return basePrice
  }

  const getPeriod = () => {
    return billingPeriod === 'annual' ? '/year' : '/month'
  }

  return (
    <>
      <Head>
        <title>Pricing Plans - Affordable AI Reputation Management Solutions | Core Reputation</title>
        <meta name="description" content="Choose from flexible pricing plans for AI-powered reputation management. From $199/month for Launch plan to custom Enterprise solutions. Compare features and save 17% annually." />
        <meta name="keywords" content="reputation management pricing, AI review management costs, business review software pricing, Core Reputation plans, affordable reputation solutions" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Pricing Plans - AI Reputation Management from $199/month" />
        <meta property="og:description" content="Transparent pricing for powerful reputation management. Launch ($199), Core ($399), or custom Enterprise plans. All include AI features and expert support." />
        <meta property="og:url" content="https://corereputation.com/pricing" />
        <meta property="og:site_name" content="Core Reputation" />
        <meta property="og:image" content="https://corereputation.com/images/pricing-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Core Reputation Pricing Plans Comparison" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Core Reputation Pricing - AI Reputation Management Plans" />
        <meta name="twitter:description" content="Affordable AI reputation management starting at $199/month. Compare Launch, Core, and Enterprise plans with transparent pricing." />
        <meta name="twitter:image" content="https://corereputation.com/images/pricing-twitter.jpg" />
      </Head>
      <div className="min-h-screen bg-white">
      {/* Header Section */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-primary-blue-600 text-sm font-medium">Premium Reputation Management Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900"
            >
              Choose Your{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
                Reputation Plan
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Everything you need to get more 5-star reviews and handle feedback like a pro. 
              From simple monitoring to enterprise-level reputation management.
            </motion.p>

            {/* Billing Toggle */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center space-x-4 mb-12"
            >
              <span className={`text-lg font-semibold ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-blue-200 transform hover:scale-110 ${
                  billingPeriod === 'annual' ? 'bg-gradient-to-r from-primary-blue-600 to-teal-cyan shadow-lg' : 'bg-gray-300'
                }`}
              >
                <span className="sr-only">Toggle billing period</span>
                <span
                  className={`${
                    billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'
                  } inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-md`}
                />
              </button>
              <div className="flex items-center">
                <span className={`text-lg font-semibold ${billingPeriod === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Annual 
                </span>
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">
                  Save 17%
                </span>
              </div>
            </motion.div> */}
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
                className={`relative rounded-3xl p-8 transition-all duration-500 ${
                  plan.popular
                    ? 'border-2 border-primary-blue-400 shadow-2xl bg-gradient-to-br from-primary-blue-50 via-white to-teal-50 scale-105'
                    : 'border border-gray-200 shadow-xl bg-white hover:shadow-2xl'
                } ${
                  hoveredCard === plan.name ? 'shadow-3xl border-primary-blue-500 transform scale-110' : ''
                } flex flex-col h-full backdrop-blur-sm`}
                onMouseEnter={() => setHoveredCard(plan.name)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ 
                  width: '340px',
                  background: plan.popular 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(6, 182, 212, 0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(249, 250, 251, 1) 100%)'
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white px-6 py-2 rounded-full text-sm font-bold shadow-2xl whitespace-nowrap transform hover:scale-105 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white animate-pulse" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.176 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Get Free Trial
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-600 to-teal-cyan rounded-full blur opacity-20 animate-pulse" />
                    </div>
                  </div>
                )}

                <div className="text-center mb-8 pt-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-full flex items-center justify-center shadow-lg">
                    {plan.name === 'Launch' && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {plan.name === 'Core' && (
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                    {plan.name === 'Enterprise' && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed min-h-[3rem] flex items-center justify-center px-2">{plan.tagline}</p>
                </div>

                <div className="text-center mb-10">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{getPrice(plan.price)}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-500 ml-2 text-lg">{getPeriod()}</span>
                    )}
                  </div>
                  {billingPeriod === 'annual' && plan.price !== 'Custom' && (
                    <p className="text-sm text-green-600 font-semibold">
                      Save ${Math.round(parseInt(plan.price.replace('$', '')) * 12 * 0.17)} per year
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, featureIndex) => {
                    // Remove check icon for header lines
                    const isHeader = typeof feature === 'string' ? false : true;
                    return (
                      <li key={featureIndex} className="flex items-start group">
                        {isHeader ? (
                          <span className="text-gray-900 text-base font-semibold leading-relaxed w-full">{feature}</span>
                        ) : (
                          <>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary-blue-600 to-teal-cyan flex items-center justify-center mr-3 mt-0.5 shadow-md group-hover:scale-110 transition-transform duration-200">
                              <svg className="w-3.5 h-3.5 text-white font-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-200">{feature}</span>
                          </>
                        )}
                      </li>
                    );
                  })}
                  </ul>

                {plan.addons && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-primary-blue-600 to-teal-cyan rounded-full mr-2"></span>
                      Optional Add-On:
                    </h4>
                    {plan.addons.map((addon, addonIndex) => (
                      <div key={addonIndex} className="text-sm">
                        <p className="font-semibold text-gray-900">{addon.name} {addon.price}</p>
                        <p className="text-gray-600 text-xs leading-relaxed mt-1">{addon.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href={plan.href}
                  className={`w-full block text-center py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-blue-600 to-teal-cyan text-white shadow-lg hover:shadow-xl hover:from-primary-blue-700 hover:to-teal-700'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-blue-600 hover:text-primary-blue-600 hover:bg-primary-blue-50'
                  } mt-auto group`}
                >
                  <span className="flex items-center justify-center">
                    {plan.cta}
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-20 -translate-y-32 -translate-x-32" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-blue-100 rounded-full blur-3xl opacity-20 translate-y-32 translate-x-32" />
        
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-primary-blue-600 text-sm font-medium">Detailed Feature Comparison</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Choose What's{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
                Right for You
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
            <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <thead>
                <tr className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan">
                  <th className="text-left py-8 px-8 font-bold text-white text-xl">Feature</th>
                  {pricingPlans.map((plan, index) => (
                    <th key={index} className="text-center py-8 px-8 font-bold text-white text-xl">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 mb-2 bg-white/20 rounded-full flex items-center justify-center">
                          {plan.name === 'Launch' && (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          )}
                          {plan.name === 'Core' && (
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          )}
                          {plan.name === 'Enterprise' && (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          )}
                        </div>
                        {plan.name}
                        {plan.popular && <span className="block text-xs text-yellow-200 mt-2 px-2 py-1 bg-white/20 rounded-full">MOST POPULAR</span>}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'QR Review Funnel', launch: '✓', core: '✓', enterprise: '✓' },
                  { feature: 'Review Monitoring Dashboard', launch: '✓', core: '✓', enterprise: '✓' },
                  { feature: 'AI Response Suggestions', launch: '✓ (Basic)', core: '✓ (Expanded)', enterprise: '✓ (Expanded)' },
                  { feature: 'Review Alert Notifications', launch: '✓', core: '✓', enterprise: '✓' },
                  { feature: 'Basic Review Filtering', launch: '✓', core: '✓', enterprise: '✓' },
                  { feature: 'Phone & Email Support', launch: '✓ (1 business day)', core: '✓ (4 hours)', enterprise: '✓ (Dedicated)' },
                  { feature: 'Outbound Review Campaigns', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Review Trend Graphs', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Customer Sentiment Snapshot', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Staff Notifications', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Quarterly Check-In Call', launch: '✗', core: '✓', enterprise: '✓' },
                  { feature: 'Multi-Location Management', launch: '✗', core: '✗', enterprise: '✓' },
                  { feature: 'Advanced Reporting', launch: '✗', core: '✗', enterprise: '✓' },
                  { feature: 'Dedicated Account Manager', launch: '✗', core: '✗', enterprise: '✓' },
                  { feature: 'Custom Integrations', launch: '✗', core: '✗', enterprise: '✓' }
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-primary-blue-50 hover:to-teal-50 transition-all duration-300 ${rowIndex % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
                    <td className="py-6 px-8 font-bold text-gray-900 border-r border-gray-100 text-base">{row.feature}</td>
                    {pricingPlans.map((plan, index) => {
                      const value = row[plan.name.toLowerCase()]
                      const isCheck = value === '✓' || (typeof value === 'string' && value.includes('✓'))
                      const isX = value === '✗'
                      
                      return (
                        <td key={index} className={`py-6 px-8 text-center ${plan.popular ? 'bg-gradient-to-b from-primary-blue-50/30 to-teal-50/30 border-l-2 border-r-2 border-primary-blue-200/50' : ''}`}>
                          {isCheck && (
                            <div className="relative flex items-center justify-center min-h-[32px] min-w-[120px]">
                              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                                <svg className="w-5 h-5 text-white font-bold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              {value.includes('(') && (
                                <span className="absolute left-1/2 translate-x-6 text-sm text-gray-600 whitespace-nowrap font-medium">{value.match(/\(([^)]+)\)/)?.[1]}</span>
                              )}
                            </div>
                          )}
                          {isX && (
                            <div className="flex items-center justify-center">
                              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors duration-200">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          )}
                          {!isCheck && !isX && (
                            <span className="text-gray-700 font-semibold text-sm">{value}</span>
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
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue-100 rounded-full blur-3xl opacity-20 -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-20 translate-y-32 -translate-x-32" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue-50 border border-primary-blue-200 mb-6">
              <svg className="w-4 h-4 text-primary-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-primary-blue-600 text-sm font-medium">Got Questions? We've Got Answers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-blue-600 to-teal-cyan bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about CoreReputation pricing and plans.
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
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary-blue-200 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-blue-600 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-primary-blue-600 to-teal-cyan rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-primary-blue-600 to-teal-cyan rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Still have questions?</h3>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Our team is here to help you choose the right reputation management plan for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Contact Sales
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a 
                  href="tel:+15551234567" 
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                  <span className="ml-2 group-hover:animate-pulse">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Pricing