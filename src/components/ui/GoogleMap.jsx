'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const GoogleMap = ({ 
  center = { lat: 40.7128, lng: -74.0060 }, // Default to New York City
  zoom = 15,
  markers = [],
  className = "w-full h-96 rounded-2xl",
  mapOptions = {}
}) => {
  const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadError, setLoadError] = useState(null)

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return

      try {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        if (!apiKey) {
          setLoadError('Google Maps API key is not configured. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file.')
          return
        }

        const loader = new Loader({
          apiKey,
          version: "weekly",
          libraries: ["maps"]
        })

        const { Map } = await loader.importLibrary("maps")
        const { Marker } = await loader.importLibrary("maps")

        const mapInstance = new Map(mapRef.current, {
          center,
          zoom,
          styles: [
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{ weight: "2.00" }]
            },
            {
              featureType: "all",
              elementType: "geometry.stroke",
              stylers: [{ color: "#9c9c9c" }]
            },
            {
              featureType: "all",
              elementType: "labels.text",
              stylers: [{ visibility: "on" }]
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [{ color: "#f2f2f2" }]
            },
            {
              featureType: "landscape",
              elementType: "geometry.fill",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.fill",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [{ saturation: -100 }, { lightness: 45 }]
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [{ color: "#eeeeee" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#7b7b7b" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [{ visibility: "simplified" }]
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [{ color: "#46bcec" }, { visibility: "on" }]
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [{ color: "#c8d7d4" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#070707" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#ffffff" }]
            }
          ],
          ...mapOptions
        })

        // Add markers
        markers.forEach(marker => {
          new Marker({
            position: marker.position,
            map: mapInstance,
            title: marker.title
          })
        })

        setMap(mapInstance)
        setIsLoaded(true)
      } catch (error) {
        console.error('Error loading Google Maps:', error)
        setLoadError('Failed to load Google Maps. Please check your API key and internet connection.')
      }
    }

    initMap()
  }, [center, zoom, markers, mapOptions])

  if (loadError) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Map Unavailable</h3>
          <p className="text-gray-600 text-sm">{loadError}</p>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    )
  }

  return <div ref={mapRef} className={className} />
}

export default GoogleMap
