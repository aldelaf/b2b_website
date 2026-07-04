import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://corkfountain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/amazon", priority: 0.8 },
    { path: "/recepcionista", priority: 0.8 },
    { path: "/automatizacion", priority: 0.8 },
    { path: "/casos", priority: 0.7 },
    { path: "/aviso-legal", priority: 0.2 },
    { path: "/privacidad", priority: 0.2 },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
