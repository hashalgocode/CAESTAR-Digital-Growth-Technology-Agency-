import type { Metadata } from "next";

import { ServicePageShell } from "@/components/service-page-shell";
import { serviceCatalog } from "@/lib/site-config";

const service = serviceCatalog.find((item) => item.slug === "digital-marketing")!;

export const metadata: Metadata = {
  title: "Digital Marketing",
  description: "Digital marketing strategy, campaign planning and performance optimization for businesses that want more qualified growth.",
};

export default function DigitalMarketingPage() {
  return <ServicePageShell service={service} />;
}
