import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { siteConfig } from "@/content/site-config";
import { generateLocalBusinessSchema } from "@/lib/schema";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "KaiRose | Bespoke Luxury Interior Design Dubai",
    template: "%s | KaiRose Dubai",
  },
  description:
    "Bespoke designs for the discerning few. From concept to completion, we craft spaces that speak to your soul. Luxury penthouses, villas, and townhouses in Dubai.",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.siteUrl,
    siteName: "KaiRose",
    title: "KaiRose | Bespoke Luxury Interior Design Dubai",
    description:
      "Bespoke designs for the discerning few. From concept to completion, we craft spaces that speak to your soul.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F1EA] text-[#0D0E10] selection:bg-[#E4DCCD] selection:text-[#0D0E10]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#0D0E10] text-[#F4F1EA] px-4 py-2 text-xs uppercase tracking-widest border border-[#A98A56]"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
