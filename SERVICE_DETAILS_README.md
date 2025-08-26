# Service Details Feature

## Overview
The Service Details feature provides comprehensive information about each individual service offered by getAIIQ. This feature includes a dedicated service details page and a centralized data management system.

## Files Structure

### 1. Service Details Page (`/src/app/serviceDetails/page.jsx`)
- **Purpose**: Dynamic page that displays detailed information about a specific service
- **Route**: `/serviceDetails?id={serviceId}`
- **Features**:
  - Tabbed navigation (Overview, Features, How It Works, Pricing, FAQ)
  - Dynamic content loading based on service ID
  - Responsive design with animations
  - Call-to-action sections
  - Back navigation
  - Auto-redirect if service not found

### 2. Services Data (`/src/sections/servicesData.js`)
- **Purpose**: Centralized data storage for all service information
- **Contains**: Comprehensive data for 6 main services:
  - Smart Review Management (`review-management`)
  - Business Listings & NAP Sync (`nap-sync`)
  - AI-Powered Response Management (`ai-responses`)
  - Outbound Review Campaigns (`outbound-campaigns`)
  - Google Posts Scheduling (`google-posts`)
  - Analytics & Performance Reporting (`analytics-reporting`)

### 3. Updated Service Links
- **Services Page**: Updated "Learn more" buttons to link to service details
- **Services Preview**: Updated homepage service cards to link to service details

## Service Data Structure
Each service includes:
- `id`: Unique identifier
- `title`: Service name
- `subtitle`: Brief tagline
- `shortDescription`: One-line description
- `longDescription`: Detailed explanation
- `features`: Array of feature objects with title, description, and icon
- `benefits`: Array of key benefits
- `howItWorks`: Step-by-step process explanation
- `pricing`: Pricing information and plan availability
- `faqs`: Frequently asked questions (optional)
- `testimonial`: Customer testimonial (optional)

## Navigation Flow
1. User visits homepage or services page
2. Clicks "Learn more" on any service card
3. Navigates to `/serviceDetails?id={serviceId}`
4. Views comprehensive service information with tabbed interface
5. Can navigate back or proceed to contact/pricing pages

## Helper Functions
- `getServiceById(id)`: Retrieve specific service data
- `getAllServiceIds()`: Get all available service IDs
- `getAllServices()`: Get all service data

## Usage Examples

### Link to Specific Service
```jsx
<Link href="/serviceDetails?id=review-management">
  Learn More About Review Management
</Link>
```

### Get Service Data
```jsx
import { getServiceById } from '@/sections/servicesData'

const service = getServiceById('review-management')
```

## Testing
- All services accessible via direct URL
- Proper error handling for invalid service IDs
- Responsive design on all screen sizes
- Smooth animations and transitions
- Navigation between tabs works correctly
