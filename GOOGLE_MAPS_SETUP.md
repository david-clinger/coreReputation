# Google Maps API Setup Instructions

To enable the Google Maps functionality on your contact page, you need to set up a Google Maps API key.

## Steps to get your Google Maps API key:

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create or Select a Project**
   - Create a new project or select an existing one

3. **Enable the Maps JavaScript API**
   - Go to APIs & Services > Library
   - Search for "Maps JavaScript API"
   - Click on it and press "Enable"

4. **Create API Credentials**
   - Go to APIs & Services > Credentials
   - Click "Create Credentials" > API Key
   - Copy your API key

5. **Configure API Key Restrictions (Recommended)**
   - Click on your API key to edit it
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain(s):
     - `localhost:3000/*` (for development)
     - `yourdomain.com/*` (for production)
   - Under "API restrictions", select "Restrict key"
   - Choose "Maps JavaScript API"

6. **Update your .env.local file**
   - Replace `your-google-maps-api-key-here` with your actual API key
   - The variable should look like:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyC4R6AN7SmxxzzGGvQBQH9dCBXXXXXXXXX
   ```

7. **Update Business Location** (Optional)
   - In `/src/components/sections/ContactMap.jsx`
   - Update the `businessLocation` coordinates:
   ```javascript
   const businessLocation = {
     lat: YOUR_LATITUDE,   // Replace with your business latitude
     lng: YOUR_LONGITUDE   // Replace with your business longitude
   }
   ```
   - You can find your coordinates at: https://www.latlong.net/

## Features Included:

✅ Interactive Google Map with custom styling
✅ Business location marker
✅ "Get Directions" button
✅ "View on Google Maps" button  
✅ Location details with address and transit info
✅ Fallback UI if API key is not configured
✅ Loading states and error handling
✅ Responsive design
✅ Hover effects and animations

## Customization Options:

- **Map Style**: The map uses a clean, professional style
- **Zoom Level**: Currently set to 15 (you can adjust in ContactMap.jsx)
- **Map Height**: Currently 384px (you can adjust the className)
- **Business Info**: Update address and transit details in ContactMap.jsx

## Cost Information:

- Google Maps offers $200 in free credits monthly
- Maps JavaScript API costs $7 per 1,000 map loads
- Most small businesses stay within the free tier

After setting up your API key, restart your development server with `npm run dev` to see the Google Maps integration in action!
