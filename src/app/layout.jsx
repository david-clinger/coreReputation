// src/app/layout.jsx
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata = {
  title: {
    default: 'Nexus - Professional Services & Business Solutions',
    template: '%s | Nexus'
  },
  description: 'Nexus provides top-quality professional services with competitive pricing and exceptional customer support. Business consulting, web development, digital marketing, and more.',
  keywords: 'professional services, business consulting, web development, digital marketing, SEO, cloud solutions, UI/UX design, technical support',
  authors: [{ name: 'Nexus Team' }],
  creator: 'Nexus',
  publisher: 'Nexus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nexus.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nexus - Professional Services & Business Solutions',
    description: 'Top-quality professional services with competitive pricing and exceptional customer support.',
    url: 'https://nexus.example.com',
    siteName: 'Nexus',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexus - Professional Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus - Professional Services & Business Solutions',
    description: 'Top-quality professional services with competitive pricing and exceptional customer support.',
    images: ['/images/og-image.jpg'],
    creator: '@nexus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nexus",
              "url": "https://nexus.example.com",
              "logo": "https://nexus.example.com/images/logo.png",
              "description": "Professional services and business solutions provider",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Business Ave",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10001",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hello@nexus.example.com"
              },
              "sameAs": [
                "https://twitter.com/nexus",
                "https://linkedin.com/company/nexus",
                "https://facebook.com/nexus"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-primary-600 focus:font-bold focus:rounded-lg"
        >
          Skip to main content
        </a>

        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

        {/* Loading indicator for route transitions */}
        <div id="global-loading" className="fixed top-0 left-0 w-full h-1 bg-primary-200 z-50 opacity-0 transition-opacity">
          <div className="h-full bg-primary-600 animate-pulse w-1/2"></div>
        </div>
      </body>
    </html>
  )
}