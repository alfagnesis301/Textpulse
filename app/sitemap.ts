import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { examplePages } from "@/lib/examples";
import { siteConfig } from "@/lib/seo";
import { toolPages } from "@/lib/tools";

const routes = [
  "",
  "/guides",
  "/tools",
  "/examples",
  "/methodology",
  "/editorial-policy",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/disclaimer"
];

const siteLastModified = new Date("2026-05-15");

function toLastModified(value?: string) {
  if (!value) {
    return siteLastModified;
  }

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? siteLastModified : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: siteLastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/guides" ? 0.85 : 0.7
  })) satisfies MetadataRoute.Sitemap;

  const guideRoutes = guides.map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    lastModified: toLastModified(guide.updated),
    changeFrequency: "monthly",
    priority: 0.75
  })) satisfies MetadataRoute.Sitemap;

  const toolRoutes = toolPages.map((tool) => ({
    url: `${siteConfig.url}/tools/${tool.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly",
    priority: 0.8
  })) satisfies MetadataRoute.Sitemap;

  const exampleRoutes = examplePages.map((page) => ({
    url: `${siteConfig.url}/examples/${page.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly",
    priority: 0.72
  })) satisfies MetadataRoute.Sitemap;

  return [...staticRoutes, ...toolRoutes, ...exampleRoutes, ...guideRoutes];
}
