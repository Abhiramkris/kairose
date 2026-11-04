/**
 * KaiRose Luxury Interior Design - Dubai
 * Content Source of Truth Configuration
 * 
 * Note: Non-negotiable brief rule:
 * Missing values are isolated here as clearly marked tokens with neutral placeholders.
 * Never invent phone numbers, addresses, or statistics.
 */

export const siteConfig = {
  name: "KaiRose",
  legalName: "KaiRose Interior Design and Technical Services LLC",
  tagline: "Redefining Luxury Interiors.",
  subcopy: "Bespoke designs for the discerning few. From concept to completion, we craft spaces that speak to your soul.",
  siteUrl: "https://kairose.ae",

  // Isolated tokens as required by the brief:
  addressToken: "[Insert Address], Dubai, UAE",
  phoneToken: "[Insert Phone Number]",
  phoneDisplay: "[Insert Phone Number]",
  phoneCallUrl: "tel:+971000000000",
  email: "hello@kairose.ae",
  whatsAppToken: "[Insert WhatsApp Link]",
  whatsAppUrl: "https://wa.me/?text=Hello%20KaiRose%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%20consultation",
  hours: "By Appointment Only",

  // Social handles placeholder tokens
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    pinterest: "https://pinterest.com",
  },

  // Trust signals from brief (Section 7)
  trustSignals: [
    "By Appointment Only",
    "Exclusive Partners",
    "Award-Winning Designers",
    "10-Year Craftsmanship Warranty",
  ],
};
