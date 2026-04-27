import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/seo";

const routes = [
  "",
  "/guides",
  "/methodology",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/disclaimer"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/guides" ? 0.85 : 0.7
  })) satisfies MetadataRoute.Sitemap;

  const guideRoutes = guides.map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75
  })) satisfies MetadataRoute.Sitemap;

  return [...staticRoutes, ...guideRoutes];
}
