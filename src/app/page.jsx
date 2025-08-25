// src/app/page.jsx
import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import TestimonialsPreview from '@/components/sections/TestimonialsPreview'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Home - Professional Services & Business Solutions',
  description: 'Nexus provides top-quality professional services including business consulting, web development, digital marketing, and more. Competitive pricing with exceptional customer support.',
  keywords: 'professional services, business consulting, web development, digital marketing, SEO, cloud solutions',
  openGraph: {
    title: 'Nexus - Professional Services & Business Solutions',
    description: 'Top-quality professional services with competitive pricing and exceptional customer support.',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexus - Professional Services',
      },
    ],
  },
}

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