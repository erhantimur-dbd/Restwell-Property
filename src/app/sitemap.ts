import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const paths = [
    "",
    "/for-landlords",
    "/how-it-works",
    "/about",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
    "/complaints",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" || path === "/for-landlords" ? 1 : 0.7,
  }));
}
