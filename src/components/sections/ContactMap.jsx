'use client'

import { motion } from 'framer-motion'
import OpenStreetMap from '@/components/ui/OpenStreetMap'
// import GoogleMap from '@/components/ui/GoogleMap' // Uncomment if you prefer Google Maps

const ContactMap = () => {
  // Default location - you can update these coordinates to your actual business location
  const businessLocation = {
    lat: 40.7128, // New York City latitude
    lng: -74.0060  // New York City longitude
  }

  // For OpenStreetMap, we use [lat, lng] format
  const osmLocation = [businessLocation.lat, businessLocation.lng]

  const markers = [
    {
      position: osmLocation,
      title: 'Nexus Office - Professional Services & Business Solutions',
      description: '123 Business Avenue, Suite 100, New York, NY 10001'
    }
  ]

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}`
    window.open(url, '_blank')
  }

  const handleViewOnGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${businessLocation.lat},${businessLocation.lng}`
    window.open(url, '_blank')
  }

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative group"
      >
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <OpenStreetMap
            center={osmLocation}
            zoom={15}
            markers={markers}
            className="w-full h-96 transition-all duration-300 group-hover:scale-[1.02]"
            popupContent="Nexus Office Location"
          />
          {/* 
          Alternative: Use Google Maps (requires API key)
          <GoogleMap
            center={businessLocation}
            zoom={15}
            markers={[{ position: businessLocation, title: 'Nexus Office Location' }]}
            className="w-full h-96 transition-all duration-300 group-hover:scale-[1.02]"
          />
          */}
        </div>
      </motion.div>

      {/* Map Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={handleGetDirections}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Get Directions
        </button>
        
        <button
          onClick={handleViewOnGoogleMaps}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View on Google Maps
        </button>
      </motion.div>

      {/* Location Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
            <div className="space-y-2 text-gray-600">
              <p>123 Business Avenue, Suite 100</p>
              <p>New York, NY 10001</p>
              <p className="pt-2 text-sm border-t border-gray-100">
                <span className="font-medium">Parking:</span> Street parking and nearby garage available
              </p>
              <p className="text-sm">
                <span className="font-medium">Public Transit:</span> Subway lines 4, 5, 6 - Union Square Station
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactMap
