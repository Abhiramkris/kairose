import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { designsData } from "@/content/designs";
import { projectsData } from "@/content/projects";
import { featuredArticle, journalArticles } from "@/content/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const staticRoutes = [
    "",
    "/design-ideas",
    "/projects",
    "/services",
    "/about",
    "/contact",
    "/testimonials",
    "/journal",
    "/faqs",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const designRoutes = designsData.map((d) => ({
    url: `${baseUrl}/design-ideas/${d.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projectsData.map((p) => ({
    url: `${baseUrl}/projects#${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = [featuredArticle, ...journalArticles].map((a) => ({
    url: `${baseUrl}/journal/${a.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...designRoutes, ...projectRoutes, ...articleRoutes];
}
