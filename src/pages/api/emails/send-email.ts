import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

// Set the SendGrid API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const {
    firstName,
    lastName,
    company = '',
    email,
    subject,
    message,
    formType
  } = req.body

  // Validate the request body
  if (!firstName || !lastName || !email || !subject || !message || !formType) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    const templateId = process.env.SENDGRID_TEMPLATE_ID
    if (!templateId) {
      throw new Error('SendGrid template ID is not configured')
    }

    // Send the email using SendGrid
    await sendgrid.send({
      to: 'dev.jeremylhomme@gmail.com',
      from: {
        email: 'bonjour@jeremylhomme.fr',
        name: 'Jeremy Lhomme'
      },
      replyTo: {
        email,
        name: `${firstName} ${lastName}`
      },
      templateId,
      dynamicTemplateData: {
        first_name: firstName,
        last_name: lastName,
        company: company || '',
        email,
        subject,
        message
      }
    })

    return res.status(200).json({ message: 'Email sent successfully!' })
  } catch (error: any) {
    console.error('SendGrid Error:', error.response?.body || error.message)
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.response?.body || error.message
    })
  }
}
