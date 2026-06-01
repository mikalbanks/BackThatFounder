/**
 * POST /api/founder-apply
 * Handles founder application form submissions.
 * Sends notification email to site owner + auto-reply to applicant.
 *
 * Required env vars (set in Cloudflare dashboard):
 *   RESEND_API_KEY  - Your Resend API key
 *   NOTIFY_EMAIL    - Email address to receive notifications (your email)
 *   FROM_EMAIL      - Verified sender email (e.g., noreply@backthatfounder.com)
 */

import { handleOptions, errorResponse, successResponse, sendEmail, corsHeaders } from "./_shared.js";

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
    const { name, email, startupName, stage, bio, supportNeeded, consent } = body;
    if (!name || !email || !startupName || !stage || !bio) {
      return errorResponse("Missing required fields");
    }
    if (!consent) {
      return errorResponse("Consent is required");
    }

    const supportList = Array.isArray(supportNeeded) && supportNeeded.length > 0
      ? supportNeeded.join(", ")
      : "Not specified";

    // 1. Send notification email to site owner
    await sendEmail(RESEND_API_KEY, {
      from: fromEmail,
      to: NOTIFY_EMAIL,
      subject: `🚀 New Founder Application: ${startupName}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #2B2235;">
          <div style="background: linear-gradient(135deg, #F7C5C0, #DDD6F3); padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Founder Application</h1>
            <p style="margin: 8px 0 0; opacity: 0.7;">Someone wants to join BackThatFounder</p>
          </div>
          <div style="background: #fff; padding: 32px; border: 1px solid #F7C5C0; border-top: none; border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Startup</td><td style="padding: 8px 0;">${escapeHtml(startupName)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Stage</td><td style="padding: 8px 0;">${escapeHtml(stage)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Support needed</td><td style="padding: 8px 0;">${escapeHtml(supportList)}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #FDFAF8; border-radius: 12px;">
              <p style="margin: 0 0 4px; font-weight: bold;">About their idea:</p>
              <p style="margin: 0; line-height: 1.6;">${escapeHtml(bio)}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #9B8FAD;">
              Submitted on ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
            </p>
          </div>
        </div>
      `,
    });

    // 2. Send auto-reply confirmation to applicant
    await sendEmail(RESEND_API_KEY, {
      from: fromEmail,
      to: email,
      subject: "We received your application — BackThatFounder",
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #2B2235;">
          <div style="background: linear-gradient(135deg, #F7C5C0, #DDD6F3); padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Thanks for applying, ${escapeHtml(name)}!</h1>
          </div>
          <div style="background: #fff; padding: 32px; border: 1px solid #F7C5C0; border-top: none; border-radius: 0 0 16px 16px;">
            <p style="line-height: 1.6;">We've received your application for <strong>${escapeHtml(startupName)}</strong> and we're excited to learn more about what you're building.</p>
            <p style="line-height: 1.6;">Our team will review your application and reach out when we find backers who can help with the support you need.</p>
            <div style="margin: 24px 0; padding: 16px; background: #FDE5D4; border-radius: 12px;">
              <p style="margin: 0; font-size: 14px;">
                <strong>Reminder:</strong> BackThatFounder facilitates in-kind donations only (time, expertise, resources). No equity or financial returns are involved.
              </p>
            </div>
            <p style="line-height: 1.6;">If you have any questions, reply to this email or visit our <a href="https://backthatfounder.pages.dev/faq" style="color: #F0A39B;">FAQ page</a>.</p>
            <p style="line-height: 1.6;">— The BackThatFounder Team</p>
          </div>
        </div>
      `,
    });

    return successResponse({ message: "Application submitted successfully" });
  } catch (err) {
    console.error("Founder apply error:", err);
    return errorResponse("Failed to process application. Please try again.", 500);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
