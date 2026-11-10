import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getAllServices,
} from "@/content/services";
import { ServiceDetailClient } from "@/components/services/ServiceDetailClient";
import { siteConfig } from "@/content/site-config";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | KaiRose Dubai",
    };
  }

  const pageTitle = `${service.title} | KaiRose Dubai Luxury Interior Design`;
  const pageDescription = service.description;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `${service.shortTitle.toLowerCase()} dubai`,
      `luxury ${service.shortTitle.toLowerCase()} uae`,
      "dubai luxury interior architecture",
      "palm jumeirah villa fitout",
      "emirates hills turnkey interiors",
      "kairose dubai",
    ],
    alternates: {
      canonical: `${siteConfig.siteUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
      siteName: "KaiRose Dubai",
      locale: "en_AE",
      type: "website",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 675,
          alt: service.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices();
  const otherServices = allServices.filter((s) => s.slug !== slug);

  return (
    <ServiceDetailClient
      service={service}
      otherServices={otherServices}
    />
  );
}
