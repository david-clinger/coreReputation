// /src/app/api/dbtest/route.js
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db(process.env.DB_NAME || 'novaaiq')
    const docs = await db.collection('testCollection').find({}).limit(50).toArray()
    return NextResponse.json({ ok: true, count: docs.length, data: docs })
  } catch (err) {
    console.error('DB GET error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const payload = await request.json()
    if (!payload || typeof payload !== 'object') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }
    const client = await clientPromise
    const db = client.db(process.env.DB_NAME || 'novaaiq')
    const res = await db.collection('testCollection').insertOne({ ...payload, createdAt: new Date() })
    return NextResponse.json({ ok: true, insertedId: res.insertedId })
  } catch (err) {
    console.error('DB POST error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
