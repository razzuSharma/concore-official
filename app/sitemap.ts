import type { MetadataRoute } from "next";
import { projects } from "@/components/PortfolioPage/projectsData";

const siteUrl = "https://www.concoretechnologies.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/our-portfolio", priority: 0.8 },
    { path: "/team", priority: 0.7 },
    { path: "/careers", priority: 0.6 },
    { path: "/contact-us", priority: 0.8 },
    ...projects.map((project) => ({
      path: `/our-portfolio/${project.slug}`,
      priority: 0.7,
    })),
  ];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));
}
