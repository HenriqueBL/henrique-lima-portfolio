import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes = ["", "/about", "/projects", "/resume", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
