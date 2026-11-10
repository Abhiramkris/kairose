import { Metadata } from "next";
import { AboutClient } from "@/components/about/AboutClient";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "About Us | KaiRose Interior Design and Technical Services LLC Dubai",
  description:
    "KAIROSE INTERIOR DESIGN AND TECHNICAL SERVICES LLC delivers turnkey interior architecture, MEP, civil contracting, and bespoke project execution across Dubai and the UAE.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    title: "About Us | KaiRose Interior Design and Technical Services LLC",
    description:
      "Transforming visions into stunning, functional realities. Turnkey interior design, MEP, and civil execution across Dubai and the UAE.",
    url: `${siteConfig.siteUrl}/about`,
    images: [`${siteConfig.siteUrl}/images/og-kairose.jpg`],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
