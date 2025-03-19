import type { MetadataRoute } from "next";

export default function sitemap() {
  return [
    {
      url: "https://wgstech.com.br/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ] satisfies MetadataRoute.Sitemap;
}
