// src/app/pricing/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: '$49',
    period: '/month',
    popular: false,
    features: [
      'Up to 5 users',
      'Basic website analytics',
      '5GB storage',
      'Email support',
      'Basic reporting',
      'Mobile app access'
    ],
    cta: 'Get Started',
    href: '/contact?plan=starter'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '$99',
    period: '/month',
    popular: true,
    features: [
      'Up to 20 users',
      'Advanced analytics',
      '50GB storage',
      'Priority support',
      'Advanced reporting',
      'API access',
      'Custom integrations',
      'White-label options'
    ],
    cta: 'Get Started',
    href: '/contact?plan=professional'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: '$249',
    period: '/month',
    popular: false,
    features: [
      'Unlimited users',
      'Premium analytics dashboard',
      '500GB storage',
      '24/7 dedicated support',
      'Custom reporting',
      'Full API access',
      'Advanced integrations',
      'SLA guarantee',
      'Custom development',
      'Training sessions'
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
    question: "Do you offer custom plans?",
    answer: "Yes, we can create custom plans for businesses with specific needs. Contact our sales team for more information."
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

  const getPrice = (basePrice) => {
    if (billingPeriod === 'annual') {
      const annualPrice = parseInt(basePrice.replace('$', '')) * 12 * 0.85
      return `$${annualPrice.toFixed(0)}`
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
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the plan that works best for your business. All plans include full access to our core features.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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
                  Annual
                </span>
                {billingPeriod === 'annual' && (
                  <span className="ml-2 bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                    Save 15%
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-2 border-primary-600 shadow-2xl transform scale-105'
                    : 'border border-gray-200 shadow-lg'
                } bg-white`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{getPrice(plan.price)}</span>
                    <span className="text-gray-600 ml-2">{getPeriod()}</span>
                  </div>
                  {billingPeriod === 'annual' && (
                    <p className="text-sm text-gray-500 mt-2">
                      Equivalent to {plan.price}/month
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-outline'
                  }`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare features across all our plans to find the perfect fit for your needs.
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
                  {pricingPlans.map((plan, index) => (
                    <th key={index} className="text-center py-4 px-6 font-semibold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Users', starter: 'Up to 5', professional: 'Up to 20', enterprise: 'Unlimited' },
                  { feature: 'Storage', starter: '5GB', professional: '50GB', enterprise: '500GB' },
                  { feature: 'Support', starter: 'Email', professional: 'Priority', enterprise: '24/7 Dedicated' },
                  { feature: 'API Access', starter: 'No', professional: 'Yes', enterprise: 'Full Access' },
                  { feature: 'Custom Integrations', starter: 'No', professional: 'Limited', enterprise: 'Advanced' },
                  { feature: 'White-label', starter: 'No', professional: 'Yes', enterprise: 'Yes' },
                  { feature: 'SLA Guarantee', starter: 'No', professional: 'No', enterprise: 'Yes' }
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.starter}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.professional}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.enterprise}</td>
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
              Everything you need to know about our pricing and plans.
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
              Our team is here to help you choose the right plan for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Sales
              </Link>
              <Link href="/services" className="btn-outline">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}