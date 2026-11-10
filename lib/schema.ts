import { siteConfig } from "@/content/site-config";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["InteriorDesigner", "HomeAndConstructionBusiness", "ProfessionalService"],
    "@id": `${siteConfig.siteUrl}/#interior-designer`,
    name: "KaiRose Luxury Interior Design",
    legalName: siteConfig.legalName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/kairose-logo.png`,
    image: `${siteConfig.siteUrl}/images/og-kairose.jpg`,
    description:
      "KaiRose is an ultra-prime luxury interior architecture and turnkey design studio based in Dubai, UAE. We specialize in bespoke villas, penthouses, and private estates across Palm Jumeirah, Emirates Hills, and Downtown Dubai.",
    telephone: siteConfig.phoneToken,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "112, Makateb Building, Port Saeed, PO Box 98845, Deira",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2604,
      longitude: 55.3341,
    },
    hasMap: "https://maps.google.com/?q=25.2604,55.3341",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Dubai" },
      { "@type": "Place", name: "Palm Jumeirah" },
      { "@type": "Place", name: "Emirates Hills" },
      { "@type": "Place", name: "Downtown Dubai" },
      { "@type": "Place", name: "Dubai Hills Estate" },
      { "@type": "Place", name: "Jumeirah Bay Island" },
      { "@type": "Place", name: "Al Barari" },
      { "@type": "Place", name: "Dubai Marina" },
      { "@type": "AdministrativeArea", name: "Abu Dhabi" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "AED 75,000 - AED 1,000,000+",
    currenciesAccepted: "AED, USD, EUR, GBP",
    paymentAccepted: "Cash, Credit Card, Wire Transfer",
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.linkedin,
      siteConfig.socials.pinterest,
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: "KaiRose Luxury Interior Design Dubai",
    description: siteConfig.subcopy,
    inLanguage: "en-AE",
    publisher: {
      "@id": `${siteConfig.siteUrl}/#interior-designer`,
    },
  };
}

export function generateServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KaiRose Interior Architecture Services",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Luxury Space Planning & Architectural Layouts",
        description:
          "Harmonizing human flow, natural daylight, and spatial volume across prime Dubai villas, penthouses, and private estates.",
        provider: { "@id": `${siteConfig.siteUrl}/#interior-designer` },
        areaServed: "Dubai, United Arab Emirates",
      },
      {
        "@type": "Service",
        position: 2,
        name: "Turnkey Interior Design & Engineering Fit-Out",
        description:
          "Full-scope concept-to-handover design, Dubai Municipality & master developer approvals, bespoke millwork, and white-glove turnkey delivery.",
        provider: { "@id": `${siteConfig.siteUrl}/#interior-designer` },
        areaServed: "Dubai, United Arab Emirates",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Architectural & Circadian Lighting Design",
        description:
          "Custom atmospheric lighting schemes, European artisanal chandeliers, and integrated architectural fixtures calibrated for luxury living.",
        provider: { "@id": `${siteConfig.siteUrl}/#interior-designer` },
        areaServed: "Dubai, United Arab Emirates",
      },
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/journal/${article.slug}`,
    },
  };
}
