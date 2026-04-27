import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AdSenseScript } from "@/components/AdSenseScript";
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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any modern web browser",
      description: siteConfig.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      featureList: [
        "Word and character counting",
        "Readability estimates",
        "Keyword density analysis",
        "PublishFit Score by writing channel",
        "Browser-based private text analysis"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.contactEmail
    }
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AdSenseScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
