import type { Metadata } from "next";
import { getAllServices } from "@/content/services";
import { ServicesIndexClient } from "@/components/services/ServicesIndexClient";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Architectural Services | Space Planning, Interior Design & Lighting | KaiRose Dubai",
  description:
    "Explore KaiRose Dubai's luxury architectural services: precision space planning, bespoke turnkey interior design, and circadian architectural lighting across prime UAE villas and penthouses.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
  },
  openGraph: {
    title: "Architectural Services | KaiRose Dubai",
    description:
      "Explore KaiRose Dubai's luxury architectural services: precision space planning, bespoke turnkey interior design, and circadian architectural lighting.",
    url: `${siteConfig.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  const services = getAllServices();
  return <ServicesIndexClient services={services} />;
}
