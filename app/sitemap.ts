import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
  ];
}
