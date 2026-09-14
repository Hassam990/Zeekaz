import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // SSL on port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to company inbox
    await transporter.sendMail({
      from: `"Zeekaz Web Design" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New Enquiry from ${name} — ${service || 'General'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 20px; }
            .card { background: #fff; border-radius: 12px; max-width: 560px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #4f8ef7, #00d4ff); padding: 32px; text-align: center; }
            .header h1 { color: #fff; font-size: 1.4rem; margin: 0; }
            .body { padding: 32px; }
            .field { margin-bottom: 18px; }
            .label { font-size: 0.78rem; font-weight: 700; color: #8fa3c0; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
            .value { font-size: 1rem; color: #1a2840; }
            .message-box { background: #f8faff; border: 1px solid #e0e8f8; border-radius: 8px; padding: 16px; color: #1a2840; line-height: 1.7; }
            .footer { background: #f8faff; padding: 20px 32px; text-align: center; font-size: 0.8rem; color: #8fa3c0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header"><h1>📬 New Website Enquiry</h1></div>
            <div class="body">
              <div class="field"><div class="label">Name</div><div class="value">${name}</div></div>
              <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>
              ${phone ? `<div class="field"><div class="label">Phone</div><div class="value">${phone}</div></div>` : ''}
              ${service ? `<div class="field"><div class="label">Service Interested In</div><div class="value">${service}</div></div>` : ''}
              <div class="field"><div class="label">Message</div><div class="message-box">${message.replace(/\n/g, '<br/>')}</div></div>
            </div>
            <div class="footer">Received via zeekazwebdesign.co.uk</div>
          </div>
        </body>
        </html>
      `,
    });

    // Auto-reply to the person who submitted the form
    await transporter.sendMail({
      from: `"Zeekaz Web Design" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting Zeekaz Web Design!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 20px; }
            .card { background: #fff; border-radius: 12px; max-width: 560px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #4f8ef7, #00d4ff); padding: 40px 32px; text-align: center; }
            .header h1 { color: #fff; font-size: 1.6rem; margin: 0 0 8px; }
            .header p { color: rgba(255,255,255,0.85); margin: 0; font-size: 0.95rem; }
            .body { padding: 36px 32px; }
            .body p { color: #4a6080; line-height: 1.8; font-size: 0.95rem; margin-bottom: 16px; }
            .highlight { font-weight: 700; color: #1a2840; }
            .contact-box { background: #f0f6ff; border-left: 3px solid #4f8ef7; border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 24px 0; }
            .contact-box p { margin: 4px 0; color: #4a6080; font-size: 0.95rem; }
            .btn { display: inline-block; background: linear-gradient(135deg, #4f8ef7, #00d4ff); color: #fff; text-decoration: none; padding: 12px 28px; border-radius: 100px; font-weight: 700; font-size: 0.9rem; margin-top: 8px; }
            .footer { background: #f8faff; padding: 20px 32px; text-align: center; font-size: 0.8rem; color: #8fa3c0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>🎉 We've Received Your Message!</h1>
              <p>Thank you for reaching out to Zeekaz Web Design</p>
            </div>
            <div class="body">
              <p>Hi <span class="highlight">${name}</span>,</p>
              <p>Thank you for contacting us! We've received your enquiry and our team will get back to you within <span class="highlight">24–48 hours</span>.</p>
              <div class="contact-box">
                <p><strong>📧 Email:</strong> info@zeekazwebdesign.co.uk</p>
                <p><strong>📞 Phone:</strong> +44 7848 479074</p>
                <p><strong>🌐 Website:</strong> zeekazwebdesign.co.uk</p>
              </div>
              <p>In the meantime, feel free to explore our services on our website.</p>
              <a href="https://zeekazwebdesign.co.uk" class="btn">Visit Our Website</a>
            </div>
            <div class="footer">© 2026 Zeekaz Web Design. All rights reserved.</div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
