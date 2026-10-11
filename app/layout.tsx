import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "CAELSTAR | Digital Growth & Technology Agency",
    template: "%s | CAELSTAR",
  },
  description: siteConfig.description,
  applicationName: "CAELSTAR",
  keywords: [
    "CAELSTAR",
    "digital agency Lucknow",
    "digital marketing India",
    "AI automation agency",
    "website development",
    "e-commerce growth agency",
  ],
  openGraph: {
    title: "CAELSTAR | Digital Growth. Intelligent Technology.",
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: "CAELSTAR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAELSTAR",
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-full bg-[var(--background)] text-[var(--text)]">
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
