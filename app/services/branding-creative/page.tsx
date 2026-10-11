import type { Metadata } from "next";

import { ServicePageShell } from "@/components/service-page-shell";
import { serviceCatalog } from "@/lib/site-config";

const service = serviceCatalog.find((item) => item.slug === "branding-creative")!;

export const metadata: Metadata = {
  title: "Branding & Creative",
  description: "Branding, creative systems and visual content for businesses that need more clarity, trust and market presence.",
};

export default function BrandingCreativePage() {
  return <ServicePageShell service={service} />;
}
