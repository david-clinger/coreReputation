// src/lib/validators.js
/**
 * Email validation
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') return false
  
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return emailRegex.test(email.trim())
}

/**
 * Password validation
 * @param {string} password - Password to validate
 * @returns {Object} { isValid: boolean, errors: string[] }
 */
export function validatePassword(password) {
  const errors = []
  
  if (!password || typeof password !== 'string') {
    return { isValid: false, errors: ['Password is required'] }
  }
  
  if (password.length < 6) {
    errors.push('Password must be at least 6 characters long')
  }
  
  if (password.length > 100) {
    errors.push('Password must be less than 100 characters')
  }
  
  // Optional: Add more complex password requirements
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Name validation
 * @param {string} name - Name to validate
 * @returns {Object} { isValid: boolean, errors: string[] }
 */
export function validateName(name) {
  const errors = []
  
  if (!name || typeof name !== 'string') {
    return { isValid: false, errors: ['Name is required'] }
  }
  
  const trimmedName = name.trim()
  
  if (trimmedName.length < 2) {
    errors.push('Name must be at least 2 characters long')
  }
  
  if (trimmedName.length > 50) {
    errors.push('Name must be less than 50 characters')
  }
  
  if (!/^[a-zA-Z\s\-']+$/.test(trimmedName)) {
    errors.push('Name can only contain letters, spaces, hyphens, and apostrophes')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Phone number validation (basic)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone number
 */
export function validatePhone(phone) {
  if (!phone || typeof phone !== 'string') return false
  
  // Basic phone validation - allows various formats
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  const cleanedPhone = phone.replace(/[\s\-\(\)\.]/g, '')
  
  return phoneRegex.test(cleanedPhone)
}

/**
 * URL validation
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL
 */
export function validateURL(url) {
  if (!url || typeof url !== 'string') return false
  
  try {
    const parsedUrl = new URL(url)
    return ['http:', 'https:'].includes(parsedUrl.protocol)
  } catch {
    return false
  }
}

/**
 * Required field validation
 * @param {*} value - Value to check
 * @param {string} fieldName - Field name for error message
 * @returns {Object} { isValid: boolean, error: string }
 */
export function validateRequired(value, fieldName) {
  if (value === undefined || value === null || value === '') {
    return {
      isValid: false,
      error: `${fieldName} is required`
    }
  }
  
  if (typeof value === 'string' && value.trim().length === 0) {
    return {
      isValid: false,
      error: `${fieldName} is required`
    }
  }
  
  return { isValid: true, error: '' }
}

/**
 * Length validation
 * @param {string} value - Value to check
 * @param {Object} options - Validation options
 * @returns {Object} { isValid: boolean, error: string }
 */
export function validateLength(value, options = {}) {
  const { min, max, fieldName = 'Field' } = options
  
  if (min !== undefined && value.length < min) {
    return {
      isValid: false,
      error: `${fieldName} must be at least ${min} characters long`
    }
  }
  
  if (max !== undefined && value.length > max) {
    return {
      isValid: false,
      error: `${fieldName} must be less than ${max} characters`
    }
  }
  
  return { isValid: true, error: '' }
}

/**
 * Form validation utility
 * @param {Object} formData - Form data to validate
 * @param {Object} rules - Validation rules
 * @returns {Object} { isValid: boolean, errors: Object }
 */
export function validateForm(formData, rules) {
  const errors = {}
  
  for (const [field, rule] of Object.entries(rules)) {
    const value = formData[field]
    
    // Required validation
    if (rule.required) {
      const requiredValidation = validateRequired(value, rule.fieldName || field)
      if (!requiredValidation.isValid) {
        errors[field] = requiredValidation.error
        continue
      }
    }
    
    // Skip further validation if field is empty and not required
    if (!value && value !== 0) continue
    
    // Type-specific validation
    if (rule.type === 'email' && !validateEmail(value)) {
      errors[field] = 'Please enter a valid email address'
    } else if (rule.type === 'phone' && !validatePhone(value)) {
      errors[field] = 'Please enter a valid phone number'
    } else if (rule.type === 'url' && !validateURL(value)) {
      errors[field] = 'Please enter a valid URL'
    }
    
    // Length validation
    if (rule.min || rule.max) {
      const lengthValidation = validateLength(value, {
        min: rule.min,
        max: rule.max,
        fieldName: rule.fieldName || field
      })
      if (!lengthValidation.isValid) {
        errors[field] = lengthValidation.error
      }
    }
    
    // Custom validation function
    if (rule.validate && typeof rule.validate === 'function') {
      const customValidation = rule.validate(value, formData)
      if (!customValidation.isValid) {
        errors[field] = customValidation.error
      }
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Common validation rules
export const validationRules = {
  email: {
    required: true,
    type: 'email',
    fieldName: 'Email'
  },
  password: {
    required: true,
    fieldName: 'Password',
    min: 6,
    max: 100
  },
  name: {
    required: true,
    fieldName: 'Name',
    min: 2,
    max: 50
  },
  message: {
    required: true,
    fieldName: 'Message',
    min: 10,
    max: 1000
  }
}