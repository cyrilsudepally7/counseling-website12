import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema (matches client-side)
const contactSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  preferredContact: z.enum(['email', 'phone']),
  serviceInterest: z.enum(['individual', 'play-therapy', 'family', 'not-sure']),
  message: z.string().min(10).max(2000),
  consent: z.literal(true),
  website: z.string().max(0).optional(), // Honeypot
});

// Simple in-memory rate limiting
// In production, use Redis or a proper rate limiting service
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX || '5', 10);
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10);

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  Array.from(rateLimitMap.entries()).forEach(([ip, record]) => {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  });
}, RATE_LIMIT_WINDOW_MS);

// Service label mapping
const serviceLabels: Record<string, string> = {
  'individual': 'Individual Counseling',
  'play-therapy': 'Play Therapy',
  'family': 'Family Counseling',
  'not-sure': 'Not sure yet',
};

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    const { allowed, remaining } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { 
          status: 429,
          headers: { 'Retry-After': '60' },
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten();
      return NextResponse.json(
        { error: 'Invalid form data', details: errors.fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Check honeypot
    if (data.website && data.website.length > 0) {
      // Silently reject spam
      console.log('[SPAM DETECTED] Honeypot triggered');
      return NextResponse.json({ success: true });
    }

    // Format email content
    const emailContent = formatEmailContent(data);

    // Send email
    const emailSent = await sendEmail(emailContent);

    if (!emailSent) {
      console.error('[CONTACT FORM] Email sending failed');
      return NextResponse.json(
        { error: 'Unable to send message. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { headers: { 'X-RateLimit-Remaining': remaining.toString() } }
    );
  } catch (error) {
    console.error('[CONTACT FORM] Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

interface EmailContent {
  to: string;
  subject: string;
  text: string;
  html: string;
}

function formatEmailContent(data: z.infer<typeof contactSchema>): EmailContent {
  const to = process.env.CONTACT_EMAIL_TO || 'contact@example.com';
  const subject = `New Consultation Request from ${data.firstName} ${data.lastName}`;
  
  const serviceLabel = serviceLabels[data.serviceInterest] || data.serviceInterest;
  
  const text = `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Preferred Contact: ${data.preferredContact === 'email' ? 'Email' : 'Phone'}
Service Interest: ${serviceLabel}

Message:
${data.message}

---
This message was sent from the website contact form.
  `.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #374151; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #5a9e5a 0%, #468046 100%); color: white; padding: 24px; border-radius: 12px 12px 0 0; }
    .content { background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
    .value { color: #1f2937; margin-top: 4px; }
    .message-box { background: white; padding: 16px; border-radius: 8px; margin-top: 16px; border-left: 4px solid #5a9e5a; }
    .footer { margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 20px;">New Consultation Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value">${data.phone ? escapeHtml(data.phone) : '<em>Not provided</em>'}</div>
      </div>
      <div class="field">
        <div class="label">Preferred Contact Method</div>
        <div class="value">${data.preferredContact === 'email' ? 'Email' : 'Phone'}</div>
      </div>
      <div class="field">
        <div class="label">Service of Interest</div>
        <div class="value">${escapeHtml(serviceLabel)}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
      </div>
      <div class="footer">
        This message was sent from the website contact form.
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();

  return { to, subject, text, html };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function sendEmail(content: EmailContent): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev';

  // Development fallback: log to console
  if (!apiKey || apiKey === 're_xxxxxxxxxx') {
    console.log('[DEV MODE] Email would be sent:');
    console.log('To:', content.to);
    console.log('From:', fromEmail);
    console.log('Subject:', content.subject);
    console.log('Body:', content.text);
    return true;
  }

  // Production: send via Resend
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: content.to,
        subject: content.subject,
        text: content.text,
        html: content.html,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('[RESEND ERROR]', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('[RESEND ERROR]', error);
    return false;
  }
}
