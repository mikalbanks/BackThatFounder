/**
 * POST /api/contact
 * Handles general contact form submissions.
 * Sends notification email to site owner + auto-reply to sender.
 *
 * Required env vars (set in Cloudflare dashboard):
 *   RESEND_API_KEY  - Your Resend API key
 *   NOTIFY_EMAIL    - Email address to receive notifications (your email)
 *   FROM_EMAIL      - Verified sender email (e.g., noreply@backthatfounder.com)
 */

import { handleOptions, errorResponse, successResponse, sendEmail } from "./_shared.js";

export async function onRequestOptions() {
  return handleOptions();
}

export async function onRequestPost(context) {
  try {
    const { env } = context;
    const { RESEND_API_KEY, NOTIFY_EMAIL, FROM_EMAIL } = env;

    if (!RESEND_API_KEY || !NOTIFY_EMAIL) {
      return errorResponse("Email service not configured", 500);
    }

    const fromEmail = FROM_EMAIL || "BackThatFounder <onboarding@resend.dev>";
    const body = await context.request.json();

    // Validate required fields
    const { name, email, subject, message } = body;
    if (!name || !email || !subject || !message) {
      return errorResponse("Missing required fields");
    }

    // 1. Send notification email to site owner
    await sendEmail(RESEND_API_KEY, {
      from: fromEmail,
      to: NOTIFY_EMAIL,
      subject: `📬 Contact Form: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #2B2235;">
          <div style="background: linear-gradient(135deg, #F7C5C0, #C9E8F5); padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Message</h1>
            <p style="margin: 8px 0 0; opacity: 0.7;">${escapeHtml(subject)}</p>
          </div>
          <div style="background: #fff; padding: 32px; border: 1px solid #F7C5C0; border-top: none; border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 100px;">From</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Subject</td><td style="padding: 8px 0;">${escapeHtml(subject)}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #FDFAF8; border-radius: 12px;">
              <p style="margin: 0 0 4px; font-weight: bold;">Message:</p>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #9B8FAD;">
              Submitted on ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
            </p>
          </div>
        </div>
      `,
    });

    // 2. Send auto-reply to sender
    await sendEmail(RESEND_API_KEY, {
      from: fromEmail,
      to: email,
      subject: "We got your message — BackThatFounder",
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #2B2235;">
          <div style="background: linear-gradient(135deg, #F7C5C0, #C9E8F5); padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Thanks for reaching out, ${escapeHtml(name)}!</h1>
          </div>
          <div style="background: #fff; padding: 32px; border: 1px solid #F7C5C0; border-top: none; border-radius: 0 0 16px 16px;">
            <p style="line-height: 1.6;">We received your message and will get back to you as soon as we can.</p>
            <div style="margin: 20px 0; padding: 16px; background: #FDFAF8; border-radius: 12px;">
              <p style="margin: 0 0 4px; font-weight: bold; font-size: 14px;">Your message:</p>
              <p style="margin: 0; font-size: 14px; color: #5A4E68; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
            <p style="line-height: 1.6;">— The BackThatFounder Team</p>
          </div>
        </div>
      `,
    });

    return successResponse({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Contact error:", err);
    return errorResponse("Failed to send message. Please try again.", 500);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
