// /src/app/api/contact/route.js
import { NextResponse } from 'next/server'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare data for Zoho CRM
    const zohoData = {
      data: [
        {
          Company: data.company || 'N/A',
          Last_Name: data.name,
          Email: data.email,
          Lead_Source: 'Website Contact Form',
          Lead_Status: 'Not Contacted',
          Description: `Subject: ${data.subject}\n\nMessage: ${data.message}`,
          $se_module: 'Leads'
        }
      ]
    }

    // Send to Zoho CRM (you'll need to configure Zoho CRM API credentials)
    const zohoResponse = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zohoData)
    })

    if (!zohoResponse.ok) {
      console.error('Zoho CRM error:', await zohoResponse.text())
      // Continue processing even if Zoho fails
    }

    // Also send email notification (optional backup)
    // You could use nodemailer, SendGrid, or any other email service here
    
    return NextResponse.json({
      message: 'Contact form submitted successfully',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
