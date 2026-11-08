import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
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
  title: "KaiRose | Bespoke Luxury Interiors — Coming Soon",
  description:
    "KaiRose is preparing to unveil its digital sanctuary. Bespoke luxury interior architecture and turnkey fit-outs in Dubai.",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.siteUrl,
    siteName: "KaiRose",
    title: "KaiRose | Bespoke Luxury Interiors — Coming Soon",
    description:
      "Crafting sanctuaries for the discerning few. Coming Soon — Dubai, UAE.",
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
      <body className="min-h-full flex flex-col bg-[#0D0E10] text-[#F4F1EA] selection:bg-[#A98A56] selection:text-[#0D0E10]">
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
