// src/components/sections/StatsSection.jsx
'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '8+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' }
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
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const numberVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
}

export default function StatsSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="text-center group"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
            <motion.div
              variants={numberVariants}
              className="text-3xl md:text-4xl font-bold text-primary-blue-600 mb-2"
            >
              {stat.number}
            </motion.div>
            <div className="text-gray-600 font-medium text-sm md:text-base">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}