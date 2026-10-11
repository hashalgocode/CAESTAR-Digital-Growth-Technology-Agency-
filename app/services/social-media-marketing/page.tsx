import type { Metadata } from "next";

import { ServicePageShell } from "@/components/service-page-shell";
import { serviceCatalog } from "@/lib/site-config";

const service = serviceCatalog.find((item) => item.slug === "social-media-marketing")!;

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description: "Social media marketing strategy, content planning and audience engagement support for brand growth and conversion-focused channels.",
};

export default function SocialMediaMarketingPage() {
  return <ServicePageShell service={service} />;
}
