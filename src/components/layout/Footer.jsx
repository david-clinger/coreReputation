// src/components/layout/Footer.jsx
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border-t border-gray-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue-600 rounded-full blur-3xl opacity-5 -translate-y-48 -translate-x-48" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-cyan rounded-full blur-3xl opacity-5 translate-y-40 translate-x-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
          <div className="space-y-6 ">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-gradient-to-br from-primary-blue-600 to-teal-cyan rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                <span className="text-white font-bold text-xl">CR</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white leading-tight">Core</span>
                <span className="font-bold text-2xl text-gradient bg-gradient-to-r from-primary-blue-400 to-teal-300 bg-clip-text text-transparent leading-tight">Reputation</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Professional online reputation management solutions to help businesses get more 5-star reviews and manage customer feedback like a pro.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-primary-blue-600 hover:to-teal-cyan transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <svg className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="group p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-primary-blue-600 hover:to-teal-cyan transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <svg className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="group p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-primary-blue-600 hover:to-teal-cyan transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <svg className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 flex items-center">
              <svg className="w-5 h-5 text-primary-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Services
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services#review-management" className="text-gray-300 hover:text-primary-blue-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Review Management</Link></li>
              <li><Link href="/services#nap-sync" className="text-gray-300 hover:text-primary-blue-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Business Listings</Link></li>
              <li><Link href="/services#ai-responses" className="text-gray-300 hover:text-primary-blue-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">AI Response Management</Link></li>
              <li><Link href="/services#outbound-campaigns" className="text-gray-300 hover:text-primary-blue-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Review Campaigns</Link></li>
              <li><Link href="/services#google-posts" className="text-gray-300 hover:text-primary-blue-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Google Posts</Link></li>
              <li><Link href="/services#analytics-reporting" className="text-gray-300 hover:text-primary-blue-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Analytics & Reports</Link></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 flex items-center">
              <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Plans
            </h3>
            <ul className="space-y-3">
              <li><Link href="/pricing" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Launch Plan</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Core Plan</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Enterprise</Link></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">About Us</Link></li>
              <li><Link href="/reviews" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Client Reviews</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Contact Us</Link></li>
              <li><Link href="/legal" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Legal Documents</Link></li>
              <li><Link href="/legal#privacy" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Privacy Policy</Link></li>
              <li><Link href="/legal#terms" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg font-medium">© 2024 Core Reputation. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/legal#privacy" className="text-gray-400 hover:text-primary-blue-400 text-lg font-medium transition-colors duration-300 hover:translate-x-1 transform">Privacy Policy</Link>
            <Link href="/legal#terms" className="text-gray-400 hover:text-primary-blue-400 text-lg font-medium transition-colors duration-300 hover:translate-x-1 transform">Terms of Service</Link>
            <Link href="/sitemap.xml" className="text-gray-400 hover:text-primary-blue-400 text-lg font-medium transition-colors duration-300 hover:translate-x-1 transform">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}