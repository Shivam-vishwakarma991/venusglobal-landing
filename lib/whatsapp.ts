// ─────────────────────────────────────────────
//  WhatsApp integration — single source of truth
//  Change WHATSAPP_NUMBER here to update everywhere
// ─────────────────────────────────────────────

export const WHATSAPP_NUMBER = "8269794013";

/** Default message for all "Get a Quote" / "Reach Us Now" CTA buttons */
export const DEFAULT_QUOTE_MESSAGE =
  "Hi VenusGlobal Team! I came across your website and I'm interested in getting a quote for consumer electronics. Could you please assist me?";

/** Opens WhatsApp with a pre-filled message in a new tab */
export function openWhatsApp(message: string = DEFAULT_QUOTE_MESSAGE): void {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/** Builds a structured WhatsApp message from the enquiry form fields */
export function buildEnquiryMessage(form: {
  name: string;
  email: string;
  company: string;
  phone: string;
  category: string;
  message: string;
}): string {
  const lines: string[] = [
    "Hello VenusGlobal Team! I'd like to submit a product enquiry:",
    "",
    `👤 Name: ${form.name}`,
    `🏢 Company: ${form.company}`,
    `📧 Email: ${form.email}`,
  ];

  if (form.phone) lines.push(`📞 Phone: ${form.phone}`);
  if (form.category) lines.push(`📦 Category: ${form.category}`);

  lines.push("", `💬 Message:`, form.message);

  return lines.join("\n");
}
