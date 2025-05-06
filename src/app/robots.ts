import type { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/toolbox/",
    },
    sitemap: "https://wgstech.com.br/sitemap.xml",
  } satisfies MetadataRoute.Robots;
}
