// ─────────────────────────────────────────────
//  Contact integration — single source of truth
//  Change CONTACT_EMAIL here to update everywhere
// ─────────────────────────────────────────────

export const CONTACT_EMAIL = "info@venusglobal.com.hk";

/** Default subject + body for all "Get a Quote" / "Reach Us Now" CTA buttons */
const DEFAULT_SUBJECT = "Quote Request – VenusGlobal";
const DEFAULT_BODY =
  "Hi VenusGlobal Team,\n\nI came across your website and I'm interested in getting a quote for consumer electronics.\n\nCould you please assist me?\n\nBest regards,";

/** Opens the user's default mail client with a pre-filled email draft */
export function openContact(
  subject: string = DEFAULT_SUBJECT,
  body: string = DEFAULT_BODY
): void {
  const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

/** Builds a structured email body from the enquiry form fields */
export function buildEnquiryEmail(form: {
  name: string;
  email: string;
  company: string;
  phone: string;
  category: string;
  message: string;
}): { subject: string; body: string } {
  const subject = `Enquiry from ${form.company || form.name} – VenusGlobal`;

  const lines: string[] = [
    "Hi VenusGlobal Team,",
    "",
    "I'd like to submit a product enquiry. Please find my details below:",
    "",
    `Name:     ${form.name}`,
    `Company:  ${form.company}`,
    `Email:    ${form.email}`,
  ];

  if (form.phone) lines.push(`Phone:    ${form.phone}`);
  if (form.category) lines.push(`Category: ${form.category}`);

  lines.push("", "Message:", form.message, "", "Best regards,", form.name);

  return { subject, body: lines.join("\n") };
}
