import type { MetadataRoute } from "next";

const SITE_URL = "https://cbconcrete.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/concreting", priority: 0.8 },
    { path: "/other-services", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
  ];
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
