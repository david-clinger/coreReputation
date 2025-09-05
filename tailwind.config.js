// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core Reputation Brand Colors
        'primary-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'teal-cyan': '#14b8a6',
        'gold': '#f59e0b',
        'dark-gray': '#374151',
        'light-gray': '#9ca3af',
        'white': '#ffffff',
        
        // Legacy NovaAIQ Brand Colors
        'deep-teal': '#008080',
        'bright-gold': '#FFD700',
        'charcoal': '#111827',
        'slate-gray': '#374151',
        'cool-gray': '#9CA3AF',
        'ultra-light-gray': '#F3F4F6',
        
        // Legacy compatibility
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#008080',
          600: '#007a7a',
          700: '#006666',
          800: '#005252',
          900: '#003d3d',
        },
        secondary: {
          50: '#fffdf0',
          100: '#fffacc',
          200: '#fff599',
          300: '#ffed5e',
          400: '#ffe32d',
          500: '#FFD700',
          600: '#e6c200',
          700: '#cca800',
          800: '#b38f00',
          900: '#997500',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}