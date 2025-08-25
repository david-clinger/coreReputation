// src/lib/auth-events.js

// Custom event system for auth state changes
export const AUTH_EVENTS = {
  LOGIN: 'auth:login',
  LOGOUT: 'auth:logout'
}

// Dispatch auth event
export const dispatchAuthEvent = (eventType, data = {}) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(eventType, { detail: data }))
  }
}

// Listen to auth events
export const addAuthListener = (eventType, callback) => {
  if (typeof window !== 'undefined') {
    window.addEventListener(eventType, callback)
  }
}

// Remove auth event listener
export const removeAuthListener = (eventType, callback) => {
  if (typeof window !== 'undefined') {
    window.removeEventListener(eventType, callback)
  }
}
