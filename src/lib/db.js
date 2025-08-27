// /src/lib/db.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

// Only initialize MongoDB connection if URI is provided
if (process.env.MONGODB_URI) {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement)
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    // In production mode, it's best to not use a global variable
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
} else {
  // Return a promise that rejects when MongoDB URI is not available
  clientPromise = Promise.reject(new Error('MongoDB URI not configured'))
}

export default clientPromise