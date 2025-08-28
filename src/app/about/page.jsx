// src/app/about/page.jsx
'use client'

import { motion } from 'framer-motion'
import TeamSection from '@/components/sections/TeamSection'
import ValuesSection from '@/components/sections/ValuesSection'
import CTASection from '@/components/sections/CTASection'
import StatsSection from '@/components/sections/StatsSection'

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-white via-primary-50 to-secondary-50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20 -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20 -translate-y-32 -translate-x-32" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              About <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">NovaAIQ</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              We are a team of passionate professionals dedicated to delivering exceptional results 
              and transforming businesses through innovative digital solutions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl rotate-2 transform-gpu"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform-gpu">
                <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <span className="text-6xl font-bold text-white">N</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Our Story</h3>
                    <p className="text-lg opacity-90">Building success stories since 2015</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2015, Nexus began as a small team of three passionate individuals with a vision to transform 
                    how businesses approach digital solutions. Today, we&apos;ve grown into a diverse team of experts serving 
                    clients across various industries worldwide.
                  </p>
                  <p>
                    Our mission is simple: to deliver exceptional value through innovative solutions that drive growth, 
                    efficiency, and success for our clients. We believe in building long-term partnerships rather than 
                    just providing services.
                  </p>
                </div>
              </div>

              <StatsSection />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}