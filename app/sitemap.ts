import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: "2026-11-09T00:00:00.000Z",
      changeFrequency: "weekly" as const,
      priority: 1.0,
      images: [
        `${siteConfig.siteUrl}/images/og-kairose.jpg`,
        `${siteConfig.siteUrl}/images/hero1/videoframe_1439.png`,
        `${siteConfig.siteUrl}/images/hero1/videoframe_7092.png`,
        `${siteConfig.siteUrl}/images/hero1/videoframe_10439.png`,
        `${siteConfig.siteUrl}/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif`,
        `${siteConfig.siteUrl}/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif`,
        `${siteConfig.siteUrl}/images/hero1/videoframe_7377.png`,
        `${siteConfig.siteUrl}/images/hero1/96315a86fbba0e77a988ca09a5f68f567a802826-8574x5430.avif`,
        `${siteConfig.siteUrl}/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif`,
        `${siteConfig.siteUrl}/images/hero1/f1a74ff5f63d778540a9cd1b119ac792acb512e6-5400x3877.avif`,
        `${siteConfig.siteUrl}/images/why-kairose.png`,
      ],
    },
    {
      url: `${siteConfig.siteUrl}/services`,
      lastModified: "2026-11-09T00:00:00.000Z",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.siteUrl}/services/space-planning`,
      lastModified: "2026-11-09T00:00:00.000Z",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${siteConfig.siteUrl}/services/interior-design`,
      lastModified: "2026-11-09T00:00:00.000Z",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${siteConfig.siteUrl}/services/light-design`,
      lastModified: "2026-11-09T00:00:00.000Z",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${siteConfig.siteUrl}/about`,
      lastModified: "2026-11-10T00:00:00.000Z",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];
}
