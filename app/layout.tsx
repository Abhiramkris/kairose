import type { Metadata } from "next";
import { Montserrat, Cinzel } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site-config";
import {
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateServicesSchema,
  generateFaqSchema,
} from "@/lib/schema";
import { defaultFaqs } from "@/lib/supabase";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "KaiRose | Luxury Interior Design Studio Dubai — Timeless Spaces",
    template: "%s | KaiRose Dubai",
  },
  description:
    "KaiRose is an ultra-prime luxury interior architecture and turnkey design studio in Dubai, UAE. We craft bespoke luxury villas, penthouses, and private residences across Palm Jumeirah, Emirates Hills, Downtown Dubai, and Jumeirah Bay Island.",
  keywords: [
    "interior design dubai",
    "luxury interior design studio dubai",
    "dubai interior architects",
    "palm jumeirah villa fitout",
    "emirates hills luxury interior design",
    "dubai penthouse fit out",
    "turnkey interior architecture uae",
    "bespoke millwork dubai",
    "architectural lighting design dubai",
    "kairose dubai",
    "luxury villa renovation dubai",
    "bespoke joinery dubai",
    "italian marble fitout dubai",
    "high end residential interior design dubai",
  ],
  authors: [{ name: "KaiRose Luxury Interior Architecture", url: siteConfig.siteUrl }],
  creator: "KaiRose Interior Design LLC",
  publisher: "KaiRose Interior Design and Technical Services LLC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
    languages: {
      "en-AE": siteConfig.siteUrl,
      "en": siteConfig.siteUrl,
      "x-default": siteConfig.siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.siteUrl,
    siteName: "KaiRose Luxury Interior Design Dubai",
    title: "KaiRose | Luxury Interior Design Studio Dubai — Timeless Spaces",
    description:
      "Bespoke spaces shaped around your lifestyle, bringing together considered materials, purposeful details, and timeless design across Dubai's most prestigious enclaves.",
    images: [
      {
        url: "/images/og-kairose.jpg",
        secureUrl: `${siteConfig.siteUrl}/images/og-kairose.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "KaiRose Luxury Interior Architecture & Bespoke Fit-Out Dubai",
      },
      {
        url: "/images/og-kairose.webp",
        secureUrl: `${siteConfig.siteUrl}/images/og-kairose.webp`,
        width: 1200,
        height: 630,
        type: "image/webp",
        alt: "KaiRose Luxury Interior Architecture & Bespoke Fit-Out Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KaiRose | Luxury Interior Design Studio Dubai",
    description:
      "Ultra-prime interior architecture and turnkey design studio in Dubai. Crafting bespoke spaces shaped around your lifestyle.",
    creator: "@kairosedesign",
    site: "@kairosedesign",
    images: [`${siteConfig.siteUrl}/images/og-kairose.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai, United Arab Emirates",
    "geo.position": "25.2604;55.3341",
    "ICBM": "25.2604, 55.3341",
    "DC.title": "KaiRose | Luxury Interior Design Studio Dubai",
    "DC.creator": "KaiRose Interior Design and Technical Services LLC",
    "DC.coverage": "Dubai, Abu Dhabi, United Arab Emirates",
    "theme-color": "#452702",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = generateLocalBusinessSchema();
  const websiteJsonLd = generateWebSiteSchema();
  const servicesJsonLd = generateServicesSchema();
  const faqJsonLd = generateFaqSchema(defaultFaqs);

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data / Rich Snippets (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F1E8] text-[#221E1B] selection:bg-[#452702] selection:text-white font-montserrat">
        <SmoothScrollProvider>
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

