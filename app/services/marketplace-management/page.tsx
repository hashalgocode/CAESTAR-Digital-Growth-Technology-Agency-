import type { Metadata } from "next";

import { ServicePageShell } from "@/components/service-page-shell";
import { serviceCatalog } from "@/lib/site-config";

const service = serviceCatalog.find((item) => item.slug === "marketplace-management")!;

export const metadata: Metadata = {
  title: "Marketplace Management",
  description: "Marketplace management for Amazon, Flipkart and related platforms with listing optimization, product content and operational support.",
};

export default function MarketplaceManagementPage() {
  return <ServicePageShell service={service} />;
}
