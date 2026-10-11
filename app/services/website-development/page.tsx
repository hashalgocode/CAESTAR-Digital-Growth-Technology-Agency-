import type { Metadata } from "next";

import { ServicePageShell } from "@/components/service-page-shell";
import { serviceCatalog } from "@/lib/site-config";

const service = serviceCatalog.find((item) => item.slug === "website-development")!;

export const metadata: Metadata = {
  title: "Website Development",
  description: "Business websites, landing pages and conversion-focused digital experiences built around clarity, performance and growth goals.",
};

export default function WebsiteDevelopmentPage() {
  return <ServicePageShell service={service} />;
}
