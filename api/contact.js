import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, company, service, capacity, message } = req.body;

  if (!firstName || !lastName || !email || !company || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
      <div style="background: #10b981; padding: 24px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">New Inquiry — Synergy Greentech</h1>
      </div>
      <div style="padding: 32px; background: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #10b981;">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Company</td><td style="padding: 8px 0; font-weight: 600;">${company}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Service</td><td style="padding: 8px 0;">${service}</td></tr>
          ${capacity ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Est. capacity</td><td style="padding: 8px 0;">${capacity}</td></tr>` : ''}
        </table>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #64748b; font-size: 13px; margin-bottom: 4px;">Message</p>
        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Synergy Greentech Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${firstName} ${lastName} — ${company}`,
      html: htmlBody,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send your message. Please try again or email us directly.' });
  }
}
