import { siteConfig } from "@/content/site-config";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.siteUrl,
    description: siteConfig.subcopy,
    telephone: siteConfig.phoneToken,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressToken,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    openingHours: "Mo-Sa 09:00-18:00",
    priceRange: "AED 75,000 - AED 500,000+",
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
