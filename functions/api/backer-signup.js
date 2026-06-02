/**
 * POST /api/backer-signup
 * Handles backer sign-up form submissions.
 * Sends notification email to site owner + auto-reply to backer.
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

    let fromEmail = "onboarding@resend.dev";
    if (FROM_EMAIL && FROM_EMAIL.includes("@")) {
      fromEmail = FROM_EMAIL.trim();
    }
    const body = await context.request.json();

    // Validate required fields
    const { name, email, organization, bio, helpTypes, interests, consent } = body;
    if (!name || !email || !bio) {
      return errorResponse("Missing required fields");
    }
    if (!consent) {
      return errorResponse("Consent is required");
    }

    const helpList = Array.isArray(helpTypes) && helpTypes.length > 0
      ? helpTypes.join(", ")
      : "Not specified";

    const interestList = Array.isArray(interests) && interests.length > 0
      ? interests.join(", ")
      : "Not specified";

    // 1. Send notification email to site owner
    await sendEmail(RESEND_API_KEY, {
      from: fromEmail,
      to: NOTIFY_EMAIL,
      subject: `🤝 New Backer Sign-up: ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #2B2235;">
          <div style="background: linear-gradient(135deg, #C7EAD9, #DDD6F3); padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Backer Sign-up</h1>
            <p style="margin: 8px 0 0; opacity: 0.7;">Someone wants to support founders</p>
          </div>
          <div style="background: #fff; padding: 32px; border: 1px solid #C7EAD9; border-top: none; border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Organization</td><td style="padding: 8px 0;">${escapeHtml(organization || "N/A")}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Can offer</td><td style="padding: 8px 0;">${escapeHtml(helpList)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Interests</td><td style="padding: 8px 0;">${escapeHtml(interestList)}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #FDFAF8; border-radius: 12px;">
              <p style="margin: 0 0 4px; font-weight: bold;">How they want to help:</p>
              <p style="margin: 0; line-height: 1.6;">${escapeHtml(bio)}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #9B8FAD;">
              Submitted on ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
            </p>
          </div>
        </div>
      `,
    });

    // 2. Send auto-reply confirmation to backer (non-blocking)
    try { await sendEmail(RESEND_API_KEY, {
      from: fromEmail,
      to: email,
      subject: "Welcome to BackThatFounder — you're in!",
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #2B2235;">
          <div style="background: linear-gradient(135deg, #C7EAD9, #DDD6F3); padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Thanks for signing up, ${escapeHtml(name)}!</h1>
          </div>
          <div style="background: #fff; padding: 32px; border: 1px solid #C7EAD9; border-top: none; border-radius: 0 0 16px 16px;">
            <p style="line-height: 1.6;">We're thrilled to have you as a backer. Your willingness to share your time, skills, and resources means the world to the founders in our community.</p>
            <p style="line-height: 1.6;">Here's what happens next:</p>
            <ol style="line-height: 1.8; padding-left: 20px;">
              <li>We review your profile and what you can offer</li>
              <li>We match you with founders whose needs align with your skills</li>
              <li>We introduce you so you can start making an impact</li>
            </ol>
            <div style="margin: 24px 0; padding: 16px; background: #FDE5D4; border-radius: 12px;">
              <p style="margin: 0; font-size: 14px;">
                <strong>Reminder:</strong> All support on BackThatFounder is in-kind (time, expertise, resources). Contributions are gifts with no expectation of equity, ownership, or financial returns.
              </p>
            </div>
            <p style="line-height: 1.6;">Questions? Reply to this email or visit our <a href="https://backthatfounder.pages.dev/faq" style="color: #A3D9BF;">FAQ page</a>.</p>
            <p style="line-height: 1.6;">— The BackThatFounder Team</p>
          </div>
        </div>
      `,
    }); } catch (replyErr) { console.warn("Auto-reply failed:", replyErr.message); }

    return successResponse({ message: "Sign-up submitted successfully" });
  } catch (err) {
    console.error("Backer signup error:", err);
    return errorResponse("Failed to process sign-up. Please try again.", 500);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
