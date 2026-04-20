export function normalizeWhatsAppNumber(input: string) {
  // wa.me expects digits only (no +, spaces, or separators)
  return input.replace(/[^\d]/g, "");
}

export function whatsappLink(input: string) {
  return `https://wa.me/${normalizeWhatsAppNumber(input)}`;
}

