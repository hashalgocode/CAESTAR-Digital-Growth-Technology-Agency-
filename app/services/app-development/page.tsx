import type { Metadata } from "next";

import { ServicePageShell } from "@/components/service-page-shell";
import { serviceCatalog } from "@/lib/site-config";

const service = serviceCatalog.find((item) => item.slug === "app-development")!;

export const metadata: Metadata = {
  title: "App Development",
  description: "Custom app development, internal tools and software systems built around operational efficiency and business workflows.",
};

export default function AppDevelopmentPage() {
  return <ServicePageShell service={service} />;
}
