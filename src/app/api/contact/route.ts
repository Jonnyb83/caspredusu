import { NextResponse } from 'next/server'

type ContactPayload = {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

function getValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  const formData = await request.formData()

  const payload: ContactPayload = {
    name: getValue(formData, 'name'),
    email: getValue(formData, 'email'),
    phone: getValue(formData, 'phone'),
    service: getValue(formData, 'service'),
    message: getValue(formData, 'message'),
  }

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { message: 'Vyplňte meno, e-mail a správu.' },
      { status: 400 }
    )
  }

  const apiKey = process.env.BREVO_API_KEY
  const senderEmail = process.env.BREVO_SENDER_EMAIL
  const senderName = process.env.BREVO_SENDER_NAME || 'Web formulár'
  const toEmail = process.env.BREVO_TO_EMAIL

  if (!apiKey || !senderEmail || !toEmail) {
    return NextResponse.json(
      { message: 'Chýba nastavenie Brevo v .env súbore.' },
      { status: 500 }
    )
  }

  const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        email: senderEmail,
        name: senderName,
      },
      to: [{ email: toEmail }],
      replyTo: {
        email: payload.email,
        name: payload.name,
      },
      subject: `Nová rezervácia z webu: ${payload.service || 'bez výberu služby'}`,
      htmlContent: `
        <h2>Nová správa z kontaktného formulára</h2>
        <p><strong>Meno:</strong> ${payload.name}</p>
        <p><strong>E-mail:</strong> ${payload.email}</p>
        <p><strong>Telefón:</strong> ${payload.phone || '-'}</p>
        <p><strong>Služba:</strong> ${payload.service || '-'}</p>
        <p><strong>Správa:</strong></p>
        <p>${payload.message.replaceAll('\n', '<br />')}</p>
      `,
    }),
  })

  if (!brevoResponse.ok) {
    return NextResponse.json(
      { message: 'E-mail sa nepodarilo odoslať.' },
      { status: 500 }
    )
  }

  return NextResponse.redirect(new URL('/?sent=1#kontakt', request.url), 303)
}
