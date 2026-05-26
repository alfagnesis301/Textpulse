import type { Metadata, Viewport } from "next";
import "./globals.css";
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
  other: {
    "google-adsense-account": siteConfig.adsenseClientId
  },
  keywords: [
    "word counter",
    "character counter",
    "keyword density checker",
    "readability checker",
    "writing analyzer",
    "SEO title checker",
    "meta description checker"
  ],
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
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClientId}`}
          crossOrigin="anonymous"
        />
      </head>
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
      </body>
    </html>
  );
}
