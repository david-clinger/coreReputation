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
    default: 'Core Reputation – AI-Powered Reviews and Reputation Management',
    template: '%s | Core Reputation'
  },
  description: 'Collect more 5-Star reviews, respond instantly with AI, and keep your Google Business Profile active. Core Reputation helps businesses stay visible in the AI-driven future of search.',
  keywords: 'AI reviews, reputation management, Google Business Profile, review collection, AI responses, business visibility, online reputation, review management software, AI-powered reviews, Google reviews',
  authors: [{ name: 'Core Reputation Team' }],
  creator: 'Core Reputation',
  publisher: 'Core Reputation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://corereputation.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Core Reputation – Transform Your Online Reputation',
    description: 'Reviews, reputation, and presence simplified with AI. See how Core Reputation keeps your business ahead.',
    url: 'https://corereputation.com',
    siteName: 'Core Reputation',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Core Reputation - AI-Powered Reviews and Reputation Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Core Reputation – Transform Your Online Reputation',
    description: 'Reviews, reputation, and presence simplified with AI. See how Core Reputation keeps your business ahead.',
    images: ['/images/og-image.jpg'],
    creator: '@corereputation',
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
              "@type": "SoftwareApplication",
              "name": "Core Reputation",
              "url": "https://corereputation.com",
              "logo": "https://corereputation.com/images/logo.png",
              "description": "AI-Powered Reviews and Reputation Management Software",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "category": "SaaS"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Core Reputation",
                "url": "https://corereputation.com"
              },
              "featureList": [
                "AI-Powered Review Collection",
                "Automated Review Responses",
                "Google Business Profile Management",
                "Reputation Monitoring",
                "Review Analytics"
              ],
              "sameAs": [
                "https://twitter.com/corereputation",
                "https://linkedin.com/company/corereputation",
                "https://facebook.com/corereputation"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-primary-blue-600 focus:font-bold focus:rounded-lg"
        >
          Skip to main content
        </a>

        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <main id="main-content" className="flex-grow overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>

        {/* Loading indicator for route transitions */}
        <div id="global-loading" className="fixed top-0 left-0 w-full h-1 bg-primary-blue-200 z-50 opacity-0 transition-opacity">
          <div className="h-full bg-primary-blue-600 animate-pulse w-1/2"></div>
        </div>
      </body>
    </html>
  )
}