import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

// Environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY!;
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'hello.gitltz@gmail.com';
const CONTACT_RECIPIENTS = process.env.CONTACT_RECIPIENTS?.split(',').map(s => s.trim()) || ['hello.gitltz@gmail.com'];

// Initialize SendGrid
sgMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, message, company = '', phoneCountryCode = '', phoneNumber = '' } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields (name, email, message)' });
  }

  const phoneDisplay = `${phoneCountryCode} ${phoneNumber}`.trim();

  const htmlBody = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    ${phoneDisplay ? `<p><strong>Phone:</strong> ${phoneDisplay}</p>` : ''}
    <hr />
    <p>${String(message).replace(/\n/g, '<br />')}</p>
    <p>Our location: <a href="https://maps.app.goo.gl/HA9CJrTjwKpEE7cQ7" target="_blank">View on Google Maps</a></p>
  `;

  const msg = {
    to: CONTACT_RECIPIENTS,
    from: SENDGRID_FROM_EMAIL,
    replyTo: email,
    subject: `New contact inquiry from ${name}`,
    text: message,
    html: htmlBody,
  };

  try {
    await sgMail.send(msg);
    return res.json({ success: true, message: "Thank you for your inquiry. We'll get back to you within 24 hours." });
  } catch (err: any) {
    console.error('SendGrid error:', err.response?.body || err.message || err);
    return res.status(500).json({ success: false, message: err.message });
  }
}
