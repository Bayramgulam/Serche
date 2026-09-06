import type { MetadataRoute } from "next";
import { business } from "@/config/business";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: business.siteUrl, priority: 1 },
    { url: `${business.siteUrl}/menu`, priority: 0.9 },
  ];
}
