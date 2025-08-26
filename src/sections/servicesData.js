// src/sections/servicesData.js

export const servicesData = {
  'review-management': {
    id: 'review-management',
    title: "Smart Review Management",
    subtitle: "Intelligent QR Review Funnels & Feedback Routing",
    shortDescription: "QR review funnels that route 4-5★ reviews to Google while handling lower ratings privately.",
    longDescription: "Our intelligent review management system transforms how businesses collect and manage customer feedback. Using smart QR codes and advanced routing algorithms, we ensure only positive reviews (4-5 stars) are posted publicly to Google, while 3-star and below reviews are captured privately for internal feedback and improvement opportunities.",
    
    heroImage: "/images/services/review-management-hero.jpg",
    
    features: [
      {
        title: "Smart QR Code Generation",
        description: "Create custom QR codes that can be placed anywhere in your business for easy customer access.",
        icon: "📱"
      },
      {
        title: "Intelligent Review Routing",
        description: "Automatically route 4-5 star reviews to public platforms while capturing lower ratings privately.",
        icon: "🔄"
      },
      {
        title: "Private Feedback Collection",
        description: "Collect valuable feedback from dissatisfied customers without public exposure.",
        icon: "🔒"
      },
      {
        title: "Real-time Notifications",
        description: "Get instant alerts when new reviews are submitted or when issues need attention.",
        icon: "🔔"
      },
      {
        title: "Review Analytics Dashboard",
        description: "Track review volume, rating trends, and customer satisfaction metrics over time.",
        icon: "📊"
      },
      {
        title: "Custom Branding",
        description: "Fully branded review collection pages that match your business identity.",
        icon: "🎨"
      }
    ],

    benefits: [
      "Increase your Google star rating by 0.5-1.5 stars on average",
      "Reduce negative public reviews by up to 80%",
      "Gain valuable insights from private customer feedback",
      "Improve customer satisfaction through proactive issue resolution",
      "Build stronger online reputation automatically",
      "Save time with automated review management workflows"
    ],

    howItWorks: [
      {
        step: 1,
        title: "Setup QR Codes",
        description: "We create custom QR codes for your business that customers can scan easily after their experience."
      },
      {
        step: 2,
        title: "Customer Scans & Rates",
        description: "Customers scan the code and are taken to a branded review page where they select their rating."
      },
      {
        step: 3,
        title: "Smart Routing Activates",
        description: "4-5 star reviews are directed to Google, while 1-3 star reviews are captured privately."
      },
      {
        step: 4,
        title: "Follow-up & Resolution",
        description: "Private feedback triggers internal notifications so you can address concerns directly."
      }
    ],

    pricing: {
      startsAt: "$199",
      includedIn: ["Core", "Pro", "Enterprise"],
      note: "Available in all plans with advanced features in Pro and Enterprise"
    },

    faqs: [
      {
        question: "How do customers access the review system?",
        answer: "Customers simply scan a QR code with their smartphone camera. No app download required - it works with any modern smartphone."
      },
      {
        question: "What happens to negative reviews?",
        answer: "Reviews with 1-3 stars are captured privately and sent to you via email/dashboard for direct follow-up with the customer. They never appear publicly."
      },
      {
        question: "Can I customize the review page?",
        answer: "Yes! The review collection page is fully branded with your business colors, logo, and messaging to maintain a consistent experience."
      },
      {
        question: "How quickly do positive reviews appear on Google?",
        answer: "Positive reviews are directed to Google immediately. The customer is taken directly to your Google My Business review page after submitting their rating."
      }
    ],

    testimonial: {
      quote: "Since implementing getAIIQ's smart review system, our Google rating went from 3.8 to 4.6 stars in just 3 months. We're getting 5x more positive reviews!",
      author: "Sarah Martinez",
      title: "Owner, Martinez Family Restaurant",
      avatar: "/images/testimonials/sarah-martinez.jpg"
    }
  },

  'nap-sync': {
    id: 'nap-sync',
    title: "Business Listings & NAP Sync",
    subtitle: "Consistent Business Information Across All Platforms",
    shortDescription: "Keep your contact info consistent across Google, Apple Maps, Yelp, Bing, and dozens of directories.",
    longDescription: "Ensure your business information is accurate and consistent across 50+ online directories and platforms. Our NAP (Name, Address, Phone) synchronization service maintains your business listings, improves local SEO, and helps customers find you easily with correct contact information everywhere.",
    
    heroImage: "/images/services/nap-sync-hero.jpg",
    
    features: [
      {
        title: "Google My Business Optimization",
        description: "Complete setup and optimization of your Google My Business profile for maximum visibility.",
        icon: "🌟"
      },
      {
        title: "50+ Directory Submissions",
        description: "Automatic submission and management across major directories like Yelp, Bing, Apple Maps, and more.",
        icon: "📂"
      },
      {
        title: "Real-time Monitoring",
        description: "Continuous monitoring of your business listings to detect and correct any changes or errors.",
        icon: "👁️"
      },
      {
        title: "Duplicate Detection & Removal",
        description: "Identify and remove duplicate listings that can confuse customers and hurt SEO.",
        icon: "🔍"
      },
      {
        title: "Local SEO Enhancement",
        description: "Optimized listings with keywords, categories, and descriptions to improve local search rankings.",
        icon: "📈"
      },
      {
        title: "Automated Updates",
        description: "When you update your business info, it automatically syncs across all platforms.",
        icon: "🔄"
      }
    ],

    benefits: [
      "Improve local search rankings by 15-30%",
      "Ensure customers always find correct contact information",
      "Increase website traffic from directory listings",
      "Build trust with consistent business information",
      "Save hours of manual directory management",
      "Prevent customer frustration from outdated information"
    ],

    howItWorks: [
      {
        step: 1,
        title: "Business Audit",
        description: "We scan the internet for existing listings of your business and identify inconsistencies."
      },
      {
        step: 2,
        title: "Information Standardization",
        description: "We create a master record of your correct business information as the single source of truth."
      },
      {
        step: 3,
        title: "Directory Submission",
        description: "Your information is submitted to 50+ major directories and local listing platforms."
      },
      {
        step: 4,
        title: "Ongoing Monitoring",
        description: "We continuously monitor and maintain your listings, making updates as needed."
      }
    ],

    pricing: {
      startsAt: "$199",
      includedIn: ["Core", "Pro", "Enterprise"],
      note: "NAP sync included in all plans with enhanced monitoring in Pro/Enterprise"
    },

    directories: [
      "Google My Business", "Yelp", "Apple Maps", "Bing Places", "Facebook",
      "Yellow Pages", "Superpages", "MapQuest", "Foursquare", "TripAdvisor",
      "Angie's List", "BBB", "Nextdoor", "Citysearch", "MerchantCircle",
      "And 35+ more local and industry-specific directories"
    ],

    faqs: [
      {
        question: "How do customers access the review system?",
        answer: "Customers simply scan a QR code with their smartphone camera. No app download required - it works with any modern smartphone."
      },
      {
        question: "What happens to negative reviews?",
        answer: "Reviews with 1-3 stars are captured privately and sent to you via email/dashboard for direct follow-up with the customer. They never appear publicly."
      },
      {
        question: "Can I customize the review page?",
        answer: "Yes! The review collection page is fully branded with your business colors, logo, and messaging to maintain a consistent experience."
      },
      {
        question: "How quickly do positive reviews appear on Google?",
        answer: "Positive reviews are directed to Google immediately. The customer is taken directly to your Google My Business review page after submitting their rating."
      }
    ],

    testimonial: {
      quote: "Our local search visibility improved dramatically after getAIIQ synchronized our listings. We're now showing up consistently across all platforms.",
      author: "Michael Chen",
      title: "Manager, Chen's Auto Repair",
      avatar: "/images/testimonials/michael-chen.jpg"
    }
  },

  'ai-responses': {
    id: 'ai-responses',
    title: "AI-Powered Response Management",
    subtitle: "Intelligent 24/7 Review Monitoring & Response System",
    shortDescription: "Intelligent review responses, automated reply suggestions, and 24/7 monitoring to protect your reputation.",
    longDescription: "Never miss a review again with our AI-powered monitoring and response system. Our advanced AI analyzes sentiment, generates personalized responses in your brand voice, and can automatically respond to reviews 24/7. Maintain consistent engagement with customers while saving time and ensuring no review goes unnoticed.",
    
    heroImage: "/images/services/ai-responses-hero.jpg",
    
    features: [
      {
        title: "24/7 Review Monitoring",
        description: "Continuous monitoring across all platforms with instant notifications for new reviews.",
        icon: "👁️"
      },
      {
        title: "AI Response Generation",
        description: "Smart AI generates personalized responses in your brand voice for every type of review.",
        icon: "🤖"
      },
      {
        title: "Sentiment Analysis",
        description: "Advanced sentiment analysis to understand customer emotions and respond appropriately.",
        icon: "❤️"
      },
      {
        title: "Auto-Response Settings",
        description: "Configure automatic responses for positive reviews and alert notifications for negative ones.",
        icon: "⚡"
      },
      {
        title: "Brand Voice Training",
        description: "AI learns your business tone, style, and key messages to maintain consistent communication.",
        icon: "🎯"
      },
      {
        title: "Response Templates",
        description: "Pre-built response templates for common scenarios that can be customized for your business.",
        icon: "📝"
      }
    ],

    benefits: [
      "Respond to reviews 10x faster than manual processes",
      "Maintain consistent brand voice across all responses",
      "Never miss a review with 24/7 automated monitoring",
      "Improve customer relationships with timely responses",
      "Save 5-10 hours per week on review management",
      "Increase positive review response rate to 100%"
    ],

    howItWorks: [
      {
        step: 1,
        title: "Brand Voice Setup",
        description: "We train the AI on your business tone, values, and key messaging to ensure authentic responses."
      },
      {
        step: 2,
        title: "Monitoring Activation",
        description: "24/7 monitoring begins across Google, Yelp, Facebook, and other review platforms."
      },
      {
        step: 3,
        title: "AI Analysis & Response",
        description: "When reviews come in, AI analyzes sentiment and generates appropriate responses instantly."
      },
      {
        step: 4,
        title: "Review & Approve",
        description: "Responses can be sent automatically or held for your approval based on your preferences."
      }
    ],

    pricing: {
      startsAt: "$199",
      includedIn: ["Core (basic)", "Pro (advanced)", "Enterprise (full AI)"],
      note: "AI-drafted suggestions in Core, full automation available in Pro and Enterprise"
    },

    faqs: [
      {
        question: "How do customers access the review system?",
        answer: "Customers simply scan a QR code with their smartphone camera. No app download required - it works with any modern smartphone."
      },
      {
        question: "What happens to negative reviews?",
        answer: "Reviews with 1-3 stars are captured privately and sent to you via email/dashboard for direct follow-up with the customer. They never appear publicly."
      },
      {
        question: "Can I customize the review page?",
        answer: "Yes! The review collection page is fully branded with your business colors, logo, and messaging to maintain a consistent experience."
      },
      {
        question: "How quickly do positive reviews appear on Google?",
        answer: "Positive reviews are directed to Google immediately. The customer is taken directly to your Google My Business review page after submitting their rating."
      }
    ],


    aiCapabilities: [
      "Natural language processing for context understanding",
      "Emotion recognition and appropriate response matching",
      "Multi-language support for diverse customer base",
      "Learning from your approved responses to improve over time",
      "Integration with customer service workflows",
      "Escalation protocols for complex issues"
    ],

    testimonial: {
      quote: "The AI responses are so natural that customers often don't realize they're automated. Our response time went from days to minutes!",
      author: "Lisa Rodriguez",
      title: "Marketing Director, Rodriguez Dental Group",
      avatar: "/images/testimonials/lisa-rodriguez.jpg"
    }
  },

  'outbound-campaigns': {
    id: 'outbound-campaigns',
    title: "Outbound Review Campaigns",
    subtitle: "Proactive Review Generation Through Multi-Channel Outreach",
    shortDescription: "Custom review request forms and templates via email, SMS, or WhatsApp to actively generate more reviews.",
    longDescription: "Proactively generate more positive reviews by reaching out to your satisfied customers through personalized campaigns. Our multi-channel approach uses email, SMS, and WhatsApp to send targeted review requests with custom messaging that converts browsers into reviewers, significantly increasing your review volume and online reputation.",
    
    heroImage: "/images/services/outbound-campaigns-hero.jpg",
    
    features: [
      {
        title: "Multi-Channel Campaigns",
        description: "Reach customers via email, SMS, WhatsApp, and social media for maximum response rates.",
        icon: "📬"
      },
      {
        title: "Customer Segmentation",
        description: "Target specific customer groups based on purchase history, satisfaction scores, or demographics.",
        icon: "🎯"
      },
      {
        title: "Automated Follow-ups",
        description: "Smart follow-up sequences that increase response rates without being pushy or annoying.",
        icon: "🔄"
      },
      {
        title: "Custom Review Forms",
        description: "Branded landing pages and forms that make leaving a review quick and easy for customers.",
        icon: "📝"
      },
      {
        title: "Timing Optimization",
        description: "Send requests at optimal times based on customer behavior and industry best practices.",
        icon: "⏰"
      },
      {
        title: "Campaign Analytics",
        description: "Track open rates, click rates, and conversion rates to optimize campaign performance.",
        icon: "📊"
      }
    ],

    benefits: [
      "Increase review volume by 300-500% within 90 days",
      "Target your happiest customers for maximum positive impact",
      "Automate the review generation process completely",
      "Improve online reputation with consistent review flow",
      "Reduce dependence on passive review collection",
      "Build stronger customer relationships through follow-up"
    ],

    howItWorks: [
      {
        step: 1,
        title: "Customer Database Import",
        description: "We help you import and segment your customer database for targeted campaigns."
      },
      {
        step: 2,
        title: "Campaign Design",
        description: "Create custom email templates, SMS messages, and landing pages that match your brand."
      },
      {
        step: 3,
        title: "Launch & Automation",
        description: "Campaigns launch automatically based on triggers like completed purchases or service visits."
      },
      {
        step: 4,
        title: "Track & Optimize",
        description: "Monitor campaign performance and continuously optimize for better results."
      }
    ],

    pricing: {
      startsAt: "$399",
      includedIn: ["Pro", "Enterprise"],
      note: "Advanced feature available in Pro and Enterprise plans only"
    },

    faqs: [
      {
        question: "How do customers access the review system?",
        answer: "Customers simply scan a QR code with their smartphone camera. No app download required - it works with any modern smartphone."
      },
      {
        question: "What happens to negative reviews?",
        answer: "Reviews with 1-3 stars are captured privately and sent to you via email/dashboard for direct follow-up with the customer. They never appear publicly."
      },
      {
        question: "Can I customize the review page?",
        answer: "Yes! The review collection page is fully branded with your business colors, logo, and messaging to maintain a consistent experience."
      },
      {
        question: "How quickly do positive reviews appear on Google?",
        answer: "Positive reviews are directed to Google immediately. The customer is taken directly to your Google My Business review page after submitting their rating."
      }
    ],

    campaignTypes: [
      {
        type: "Post-Purchase Follow-up",
        description: "Automated campaigns triggered after successful transactions or service completion",
        timing: "24-48 hours after purchase"
      },
      {
        type: "Milestone Celebrations",
        description: "Special campaigns for customer anniversaries, birthdays, or loyalty milestones",
        timing: "Based on customer data triggers"
      },
      {
        type: "Seasonal Campaigns",
        description: "Holiday or seasonal review requests with themed messaging and incentives",
        timing: "Scheduled around key seasons/holidays"
      },
      {
        type: "Win-Back Campaigns",
        description: "Re-engage past customers who haven't left reviews to encourage feedback",
        timing: "30-90 days after service"
      }
    ],

    testimonial: {
      quote: "Our review volume increased by 400% in just two months with getAIIQ's outbound campaigns. The automation saves us so much time!",
      author: "David Park",
      title: "Owner, Park's Home Services",
      avatar: "/images/testimonials/david-park.jpg"
    }
  },

  'google-posts': {
    id: 'google-posts',
    title: "Google Posts Scheduling",
    subtitle: "Professional Content Creation & Automated Publishing",
    shortDescription: "Professionally drafted and automatically published Google My Business posts to keep your profile active.",
    longDescription: "Keep your Google My Business profile active and engaging with professionally written posts that showcase your business, promote special offers, and improve your local search visibility. Our content team creates compelling posts that drive traffic, generate leads, and keep your business top-of-mind for local customers.",
    
    heroImage: "/images/services/google-posts-hero.jpg",
    
    features: [
      {
        title: "Professional Content Creation",
        description: "Expert copywriters create engaging posts tailored to your business and industry.",
        icon: "✍️"
      },
      {
        title: "Automated Scheduling",
        description: "Posts are scheduled and published automatically to maintain consistent presence.",
        icon: "📅"
      },
      {
        title: "Visual Content Integration",
        description: "High-quality images and graphics to make posts more engaging and clickable.",
        icon: "🖼️"
      },
      {
        title: "Call-to-Action Optimization",
        description: "Strategic CTAs that drive phone calls, website visits, and store visits.",
        icon: "📞"
      },
      {
        title: "Seasonal & Event Posts",
        description: "Timely content for holidays, local events, and industry-specific occasions.",
        icon: "🎉"
      },
      {
        title: "Performance Tracking",
        description: "Monitor post engagement, clicks, and conversions to optimize content strategy.",
        icon: "📈"
      }
    ],

    benefits: [
      "Increase Google My Business profile visibility by 25-40%",
      "Drive more website traffic and phone calls",
      "Improve local search rankings with active posting",
      "Showcase products, services, and special offers",
      "Build customer engagement and brand awareness",
      "Save 3-5 hours per week on content creation"
    ],

    howItWorks: [
      {
        step: 1,
        title: "Content Strategy Development",
        description: "We develop a content calendar based on your business goals, seasons, and customer interests."
      },
      {
        step: 2,
        title: "Professional Content Creation",
        description: "Our writers and designers create engaging posts with compelling copy and visuals."
      },
      {
        step: 3,
        title: "Automated Publishing",
        description: "Posts are automatically published to your Google My Business profile on schedule."
      },
      {
        step: 4,
        title: "Performance Analysis",
        description: "We track engagement and optimize future content based on what works best for your audience."
      }
    ],

    pricing: {
      startsAt: "$99",
      includedIn: ["Core (add-on +$99/month)", "Pro (included)", "Enterprise (included)"],
      note: "4 posts per month included, additional posts available"
    },

    faqs: [
      {
        question: "How do customers access the review system?",
        answer: "Customers simply scan a QR code with their smartphone camera. No app download required - it works with any modern smartphone."
      },
      {
        question: "What happens to negative reviews?",
        answer: "Reviews with 1-3 stars are captured privately and sent to you via email/dashboard for direct follow-up with the customer. They never appear publicly."
      },
      {
        question: "Can I customize the review page?",
        answer: "Yes! The review collection page is fully branded with your business colors, logo, and messaging to maintain a consistent experience."
      },
      {
        question: "How quickly do positive reviews appear on Google?",
        answer: "Positive reviews are directed to Google immediately. The customer is taken directly to your Google My Business review page after submitting their rating."
      }
    ],

    postTypes: [
      {
        type: "Product Showcases",
        description: "Highlight your best products or services with compelling descriptions and images",
        example: "New arrivals, bestsellers, seasonal items"
      },
      {
        type: "Special Offers & Promotions",
        description: "Announce discounts, limited-time offers, and exclusive deals to drive immediate action",
        example: "20% off this weekend, buy-one-get-one deals"
      },
      {
        type: "Behind-the-Scenes Content",
        description: "Show the human side of your business with team highlights and workplace culture",
        example: "Meet the team, workplace tours, company milestones"
      },
      {
        type: "Educational & Tips",
        description: "Share valuable information and establish your business as an industry expert",
        example: "How-to guides, maintenance tips, industry insights"
      },
      {
        type: "Community & Events",
        description: "Connect with local community through event announcements and participation",
        example: "Local sponsorships, community events, charity involvement"
      }
    ],

    testimonial: {
      quote: "Our Google posts get 3x more engagement since getAIIQ started managing them. The professional content really makes a difference!",
      author: "Jennifer Lee",
      title: "Marketing Manager, Lee's Fitness Center",
      avatar: "/images/testimonials/jennifer-lee.jpg"
    }
  },

  'analytics-reporting': {
    id: 'analytics-reporting',
    title: "Analytics & Performance Reporting",
    subtitle: "Comprehensive Reputation Analytics & Business Intelligence",
    shortDescription: "Track review performance, customer feedback trends, and reputation growth with detailed analytics and reports.",
    longDescription: "Make data-driven decisions about your online reputation with comprehensive analytics and reporting. Our advanced dashboard provides insights into review trends, customer sentiment, competitor performance, and the ROI of your reputation management efforts, helping you understand what works and optimize your strategy.",
    
    heroImage: "/images/services/analytics-reporting-hero.jpg",
    
    features: [
      {
        title: "Real-time Dashboard",
        description: "Live dashboard showing review metrics, ratings trends, and key performance indicators.",
        icon: "📊"
      },
      {
        title: "Competitor Analysis",
        description: "Monitor up to 3-10 competitors' review performance and identify opportunities.",
        icon: "🔍"
      },
      {
        title: "Sentiment Tracking",
        description: "Advanced sentiment analysis to understand customer emotions and satisfaction trends.",
        icon: "❤️"
      },
      {
        title: "Custom Reports",
        description: "Automated monthly, weekly, or daily reports tailored to your business needs.",
        icon: "📋"
      },
      {
        title: "ROI Measurement",
        description: "Track the business impact of your reputation management efforts with conversion metrics.",
        icon: "💰"
      },
      {
        title: "Alert System",
        description: "Intelligent alerts for significant changes in ratings, review volume, or competitor activity.",
        icon: "🚨"
      }
    ],

    benefits: [
      "Make data-driven decisions about reputation strategy",
      "Identify trends and patterns in customer feedback",
      "Stay ahead of competitors with comparative analysis",
      "Measure ROI of reputation management investments",
      "Spot potential issues before they become problems",
      "Demonstrate value to stakeholders with clear reporting"
    ],

    howItWorks: [
      {
        step: 1,
        title: "Data Integration",
        description: "We connect all your review platforms and set up comprehensive tracking across channels."
      },
      {
        step: 2,
        title: "Baseline Establishment",
        description: "Establish current performance metrics as a baseline for measuring improvement."
      },
      {
        step: 3,
        title: "Ongoing Analysis",
        description: "Continuous data collection and analysis to identify trends and opportunities."
      },
      {
        step: 4,
        title: "Actionable Reporting",
        description: "Regular reports with insights and recommendations for improving performance."
      }
    ],

    pricing: {
      startsAt: "$199",
      includedIn: ["Core (basic)", "Pro (advanced)", "Enterprise (comprehensive)"],
      note: "Basic analytics in Core, advanced features in Pro, comprehensive reporting in Enterprise"
    },

    faqs: [
      {
        question: "How do customers access the review system?",
        answer: "Customers simply scan a QR code with their smartphone camera. No app download required - it works with any modern smartphone."
      },
      {
        question: "What happens to negative reviews?",
        answer: "Reviews with 1-3 stars are captured privately and sent to you via email/dashboard for direct follow-up with the customer. They never appear publicly."
      },
      {
        question: "Can I customize the review page?",
        answer: "Yes! The review collection page is fully branded with your business colors, logo, and messaging to maintain a consistent experience."
      },
      {
        question: "How quickly do positive reviews appear on Google?",
        answer: "Positive reviews are directed to Google immediately. The customer is taken directly to your Google My Business review page after submitting their rating."
      }
    ],

    metrics: [
      {
        category: "Review Performance",
        metrics: ["Total reviews", "Average rating", "Review velocity", "Platform breakdown", "Response rate"]
      },
      {
        category: "Customer Sentiment",
        metrics: ["Sentiment trends", "Emotion analysis", "Topic clustering", "Satisfaction scores", "Issue identification"]
      },
      {
        category: "Competitor Intelligence",
        metrics: ["Competitive ratings", "Review volume comparison", "Market share analysis", "Opportunity gaps", "Best practices"]
      },
      {
        category: "Business Impact",
        metrics: ["Website traffic from reviews", "Conversion rates", "Revenue attribution", "Customer acquisition cost", "Lifetime value impact"]
      }
    ],

    reportTypes: [
      {
        type: "Executive Summary",
        frequency: "Monthly",
        audience: "Leadership team",
        content: "High-level metrics, trends, and strategic recommendations"
      },
      {
        type: "Operational Report",
        frequency: "Weekly",
        audience: "Marketing/Operations team",
        content: "Detailed performance metrics, issues to address, action items"
      },
      {
        type: "Competitive Analysis",
        frequency: "Quarterly",
        audience: "Strategy team",
        content: "Market positioning, competitor insights, strategic opportunities"
      },
      {
        type: "Custom Reports",
        frequency: "As needed",
        audience: "Stakeholders",
        content: "Tailored reports for specific business needs and audiences"
      }
    ],

    testimonial: {
      quote: "The analytics dashboard helps us understand our customers better than ever. We can see exactly how our reputation efforts impact our bottom line.",
      author: "Robert Kim",
      title: "CEO, Kim's Electronics",
      avatar: "/images/testimonials/robert-kim.jpg"
    }
  }
}

// Helper function to get service by ID
export const getServiceById = (id) => {
  return servicesData[id] || null
}

// Helper function to get all service IDs
export const getAllServiceIds = () => {
  return Object.keys(servicesData)
}

// Helper function to get all services
export const getAllServices = () => {
  return Object.values(servicesData)
}
