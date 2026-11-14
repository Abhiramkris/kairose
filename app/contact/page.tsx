import { Metadata } from "next";
import { ContactClient } from "@/components/contact/ContactClient";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact Us | KAIROSE INTERIOR DESIGN AND TECHNICAL SERVICES LLC Dubai",
  description:
    "Direct contact for KAIROSE INTERIOR DESIGN AND TECHNICAL SERVICES LLC. Studio Showroom & Head Office in Port Saeed, Deira, Dubai. Telephone: +971 54 400 9289, Email: info@kairosegroup.com.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | KAIROSE INTERIOR DESIGN AND TECHNICAL SERVICES LLC",
    description:
      "Direct client inquiries, studio showroom, and project consultations in Dubai, UAE.",
    url: `${siteConfig.siteUrl}/contact`,
    images: [`${siteConfig.siteUrl}/images/og-kairose.jpg`],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
