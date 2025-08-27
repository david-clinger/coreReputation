'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the map components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })

const OpenStreetMap = ({ 
  center = [40.7128, -74.0060], // Default to New York City
  zoom = 15,
  markers = [],
  className = "w-full h-96 rounded-2xl",
  popupContent = "Our Location"
}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Import Leaflet CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
    link.crossOrigin = ''
    document.head.appendChild(link)

    // Fix for default markers
    if (typeof window !== 'undefined' && window.L?.Icon?.Default?.prototype?._getIconUrl) {
      delete window.L.Icon.Default.prototype._getIconUrl
    }
    if (typeof window !== 'undefined' && window.L) {
      window.L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })
    }

    return () => {
      // Cleanup
      const existingLink = document.querySelector('link[href*="leaflet.css"]')
      if (existingLink) {
        existingLink.remove()
      }
    }
  }, [])

  if (!isClient) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={className} style={{ height: '384px', zIndex: 0 }}>
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%', borderRadius: '1rem' }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {markers.length > 0 ? (
          markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>
                <div className="text-center p-2">
                  <h3 className="font-semibold text-gray-900 mb-1">{marker.title}</h3>
                  {marker.description && (
                    <p className="text-sm text-gray-600">{marker.description}</p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))
        ) : (
          <Marker position={center}>
            <Popup>
              <div className="text-center p-2">
                <h3 className="font-semibold text-gray-900 mb-1">{popupContent}</h3>
                <p className="text-sm text-gray-600">Click for more information</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  )
}

export default OpenStreetMap
