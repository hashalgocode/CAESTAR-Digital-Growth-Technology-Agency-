import type { Metadata } from "next";

import { ServicePageShell } from "@/components/service-page-shell";
import { serviceCatalog } from "@/lib/site-config";

const service = serviceCatalog.find((item) => item.slug === "paid-advertising")!;

export const metadata: Metadata = {
  title: "Paid Advertising",
  description: "Paid media strategy, campaign setup and performance optimization for businesses seeking stronger acquisition and lower wasted spend.",
};

export default function PaidAdvertisingPage() {
  return <ServicePageShell service={service} />;
}
