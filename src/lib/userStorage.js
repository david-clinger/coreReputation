// src/lib/userStorage.js

// Simple client-side user storage (until database is connected)
const USER_STORAGE_KEY = 'nexus_users'

// Default users
const DEFAULT_USERS = [
  {
    email: 'abdulraheemfiverr69@gmail.com',
    password: 'Dave@123',
    name: 'Abdul Raheem'
  }
]

// Get all users from localStorage
export const getUsers = () => {
  if (typeof window === 'undefined') return DEFAULT_USERS
  
  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
    return DEFAULT_USERS
  } catch (error) {
    console.error('Error reading users from localStorage:', error)
    return DEFAULT_USERS
  }
}

// Save users to localStorage
export const saveUsers = (users) => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users))
  } catch (error) {
    console.error('Error saving users to localStorage:', error)
  }
}

// Add a new user
export const addUser = (user) => {
  const users = getUsers()
  const newUsers = [...users, user]
  saveUsers(newUsers)
  return newUsers
}

// Find user by email
export const findUserByEmail = (email) => {
  const users = getUsers()
  return users.find(user => user.email === email)
}

// Check if user exists
export const userExists = (email) => {
  return findUserByEmail(email) !== undefined
}

// Validate user credentials
export const validateCredentials = (email, password) => {
  const user = findUserByEmail(email)
  return user && user.password === password ? user : null
}

// Initialize default users (call this on app start)
export const initializeUsers = () => {
  if (typeof window === 'undefined') return
  
  const users = getUsers()
  if (users.length === 0) {
    saveUsers(DEFAULT_USERS)
  }
}
