import type { Metadata } from "next";

import { ServicePageShell } from "@/components/service-page-shell";
import { serviceCatalog } from "@/lib/site-config";

const service = serviceCatalog.find((item) => item.slug === "ai-automation")!;

export const metadata: Metadata = {
  title: "AI & Automation",
  description: "AI automation, workflow orchestration and CRM or business process optimization for teams ready to reduce manual work.",
};

export default function AIAutomationPage() {
  return <ServicePageShell service={service} />;
}
