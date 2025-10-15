// test-mongo.js - quick MongoDB connectivity + CRUD test
require('dotenv').config({ path: '.env.local' })
const { MongoClient } = require('mongodb')

async function run() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    console.error('MONGODB_URI not set in .env.local')
    process.exit(1)
  }

  const client = new MongoClient(uri)
  try {
    await client.connect()
    const dbName = process.env.DB_NAME || 'novaaiq'
    const db = client.db(dbName)
    console.log('Connected to MongoDB, db:', dbName)

    const testCol = db.collection('testCollection')
    const insertRes = await testCol.insertOne({ test: 'ping', ts: new Date() })
    console.log('Inserted id:', insertRes.insertedId.toString())

    const found = await testCol.findOne({ _id: insertRes.insertedId })
    console.log('Found document:', found)

    // cleanup
    await testCol.deleteOne({ _id: insertRes.insertedId })
    console.log('Cleanup done')
  } catch (err) {
    console.error('MongoDB test error:', err)
    process.exit(1)
  } finally {
    await client.close()
  }
}

if (require.main === module) run()
