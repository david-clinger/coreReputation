'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { getServiceById } from '../../sections/servicesData'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

function ServiceDetailsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const serviceId = searchParams.get('id')
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (serviceId) {
      const serviceData = getServiceById(serviceId)
      setService(serviceData)
      setLoading(false)
      
      if (!serviceData) {
        // Redirect to services page if service not found
        router.push('/services')
      }
    } else {
      router.push('/services')
    }
  }, [serviceId, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </div>
    )
  }

  if (!service) {
    return null
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' }
  ]

  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100/50 to-white"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back arrow icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Services</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-primary-600 mb-6">
                {service.subtitle}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => router.push('/contact')}
                >
                  Get Started Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setActiveTab('pricing')}
                >
                  View Pricing
                </Button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 backdrop-blur-sm border border-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-4xl">{service.features[0]?.icon || '🚀'}</span>
                    </div>
                    <p className="text-lg">{service.title} Preview</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 whitespace-nowrap font-medium text-sm border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Benefits Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {/* Check icon */}
                      <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-600">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {service.testimonial && (
                <Card className="bg-gray-50 border-gray-200 p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                        {service.testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-lg text-gray-900 mb-4 italic">
                        "{service.testimonial.quote}"
                      </blockquote>
                      <div className="text-sm">
                        <p className="text-gray-900 font-medium">{service.testimonial.author}</p>
                        <p className="text-gray-600">{service.testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Features & Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feature, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 hover:scale-105 transition-transform">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                    <p className="text-black-300">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {/* How It Works Tab */}
          {activeTab === 'how-it-works' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
              <div className="space-y-8">
                {service.howItWorks.map((step, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Pricing Information</h2>
              <Card className="bg-slate-800/50 border-slate-700 p-8 max-w-2xl">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">
                    Starting at {service.pricing.startsAt}/month
                  </p>
                  <p className="text-gray-700 mb-6">{service.pricing.note}</p>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white">Available In:</h4>
                    <div className="flex justify-center gap-4">
                      {service.pricing.includedIn.map((plan, index) => (
                        <span key={index} className="bg-blue-600/20 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {plan}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-full"
                      onClick={() => router.push('/pricing')}
                    >
                      View All Plans
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full"
                      onClick={() => router.push('/contact')}
                    >
                      Get Custom Quote
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              {service.faqs && service.faqs.length > 0 ? (
                <div className="space-y-6 max-w-4xl">
                  {service.faqs.map((faq, index) => (
                    <Card key={index} className="bg-white border-gray-200 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-gray-50 border-gray-200 p-8 text-center max-w-2xl">
                  <div className="text-6xl mb-4">❓</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">FAQs Coming Soon</h3>
                  <p className="text-gray-600 mb-6">
                    We're working on adding frequently asked questions for this service. 
                    In the meantime, feel free to contact us with any questions you may have.
                  </p>
                  <Button 
                    variant="primary"
                    onClick={() => router.push('/contact')}
                  >
                    Contact Us
                  </Button>
                </Card>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses already improving their online reputation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => router.push('/contact')}
              >
                Start Your Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => router.push('/pricing')}
              >
                Compare All Plans
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    </div>
  )
}

export default function ServiceDetails() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ServiceDetailsContent />
    </Suspense>
  )
}
