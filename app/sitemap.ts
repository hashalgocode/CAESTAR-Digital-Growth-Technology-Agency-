import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services",
    "/services/digital-marketing",
    "/services/paid-advertising",
    "/services/social-media-marketing",
    "/services/marketplace-management",
    "/services/website-development",
    "/services/app-development",
    "/services/ai-automation",
    "/services/branding-creative",
    "/portfolio",
    "/about",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms",
  ]

  return routes.map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }))
}
