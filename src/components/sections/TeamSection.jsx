// src/components/sections/TeamSection.jsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in the industry, Sarah leads our vision and strategy.",
    image: "/images/team1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Technical Director",
    bio: "Michael specializes in software architecture and leads our development team.",
    image: "/images/team2.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    bio: "Emily brings creative vision and design excellence to all our projects.",
    image: "/images/team3.jpg"
  },
  {
    name: "David Kim",
    role: "Marketing Lead",
    bio: "David develops innovative marketing strategies that drive growth for our clients.",
    image: "/images/team4.jpg"
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

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of experts is dedicated to delivering exceptional results for your business.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 text-center group hover:shadow-lg transition-shadow"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-blue-600 text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
              <div className="flex justify-center space-x-4 mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="text-gray-400 hover:text-primary-blue-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-blue-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-blue-600 transition-colors">
                  <span className="sr-only">Email</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}