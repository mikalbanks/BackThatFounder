/**
 * Shared utilities for Cloudflare Pages Functions.
 * Handles CORS, validation, and Resend email sending.
 */

// CORS headers for all responses
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

/**
 * Handle OPTIONS preflight requests.
 */
export function handleOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

/**
 * Return a JSON error response.
 */
export function errorResponse(message, status = 400) {
  return new Response(JSON.stringify({ success: false, error: message }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

/**
 * Return a JSON success response.
 */
export function successResponse(data = {}) {
  return new Response(JSON.stringify({ success: true, ...data }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

/**
 * Send an email via the Resend API.
 * @param {string} apiKey - Resend API key
 * @param {object} options - { from, to, subject, html }
 */
export async function sendEmail(apiKey, { from, to, subject, html }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: Array.isArray(to) ? to : [to], subject, html }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error (${res.status}): ${body}`);
  }

  return res.json();
}
