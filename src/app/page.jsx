// src/app/page.jsx
'use client'

import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import TestimonialsPreview from '@/components/sections/TestimonialsPreview'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  )
}