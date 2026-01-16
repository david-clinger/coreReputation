// /src/app/api/contact/route.js
import { NextResponse } from 'next/server'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

// Send email using Brevo HTTP API (works even when SMTP is blocked)
async function sendEmailWithBrevo(data) {
  const brevoApiKey = process.env.BREVO_API_KEY
  const receiverEmail = process.env.EMAIL_RECEIVER || 'abdulraheemfiverr69@gmail.com'
  const senderEmail = process.env.EMAIL_FROM || 'noreply@corereputation.com'
  const senderName = process.env.EMAIL_DISPLAY_NAME || 'Core Reputation'

  const emailData = {
    sender: {
      name: senderName,
      email: senderEmail,
    },
    to: [
      {
        email: receiverEmail,
        name: 'Admin',
      },
    ],
    subject: `Website Contact: ${data.subject}`,
    htmlContent: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
    textContent: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': brevoApiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify(emailData),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Brevo API error: ${response.status} - ${errorText}`)
  }

  return await response.json()
}

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
    try {
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
      }
    } catch (zohoErr) {
      console.error('Zoho CRM connection error:', zohoErr.message)
    }

    // Send email notification using Brevo API
    try {
      const emailResult = await sendEmailWithBrevo(data)
      console.log('Contact email sent via Brevo:', emailResult.messageId)
    } catch (emailErr) {
      console.error('Email error:', emailErr.message)
      // Don't fail the request if email fails
    }
    
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
