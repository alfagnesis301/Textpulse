import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AdSenseScript } from "@/components/AdSenseScript";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TextPulses - Free Word Counter & Publish-Ready Text Analyzer",
    template: "%s | TextPulses"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  // NOTE: a global `meta keywords` list was intentionally removed. Google ignores
  // the keywords meta tag, and the SEO audit flagged a repeated global list as a
  // "careless template" signal. Do not reintroduce it.
  other: {
    "google-adsense-account": siteConfig.adsenseClientId
  },
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "TextPulses - Free Word Counter & Publish-Ready Text Analyzer",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TextPulses - Free Word Counter & Publish-Ready Text Analyzer",
    description: siteConfig.description
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-slate-950 focus:px-4 focus:py-3 focus:text-sm focus:font-extrabold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <CookieConsent />
        {/*
          AdSense is loaded here, NOT in <head>, and only after the visitor
          accepts ad/analytics cookies. AdSenseScript is gated by both
          NEXT_PUBLIC_ADS_ENABLED and NEXT_PUBLIC_ADSENSE_APPROVED, uses
          Next Script afterInteractive, and points at the async Google loader:
          https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
        */}
        <AdSenseScript />
      </body>
    </html>
  );
}
