import { siteConfig } from "@/lib/seo/metadata";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type NavigationItem = {
  name: string;
  url: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

// Official social/profile URLs for the brand. Left empty on purpose: do NOT add
// invented or unverified profiles. When a real, owned profile exists (LinkedIn,
// X, GitHub, etc.) add its canonical URL here and it will flow into the
// Organization `sameAs` automatically.
export const organizationSameAs: string[] = [];

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    logo: `${siteConfig.url}/favicon.svg`,
    founder: {
      "@id": `${siteConfig.url}/author/ricardo-diaz#person`
    },
    // Prepared for official profiles; intentionally empty until verified ones exist.
    sameAs: organizationSameAs
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    }
    // NOTE: No SearchAction is emitted because TextPulses has no real site-wide
    // search endpoint. Pointing potentialAction at a non-existent /search route
    // would create an invalid Sitelinks Searchbox. Add a SearchAction here only
    // after a working `/search?q={search_term_string}` route exists.
  };
}

export function siteNavigationSchema(items: NavigationItem[]) {
  return {
    "@type": "SiteNavigationElement",
    "@id": `${siteConfig.url}/#site-navigation`,
    name: items.map((item) => item.name),
    url: items.map((item) => item.url)
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[], id: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${id}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function webPageSchema({
  title,
  description,
  url
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: title,
    description,
    url,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    }
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image = `${siteConfig.url}/og/guides-og.png`
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: "Ricardo Diaz",
      url: `${siteConfig.url}/author/ricardo-diaz`
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    },
    mainEntityOfPage: {
      "@id": `${url}#webpage`
    }
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${siteConfig.url}/author/ricardo-diaz#person`,
    name: "Ricardo Diaz",
    url: `${siteConfig.url}/author/ricardo-diaz`,
    jobTitle: "Independent publisher",
    description:
      "Independent publisher behind TextPulses, focused on privacy-first writing, SEO text analysis, and browser-based tools.",
    worksFor: {
      "@id": `${siteConfig.url}/#organization`
    },
    // Prepared for verified author profiles; intentionally empty until real ones exist.
    sameAs: organizationSameAs
  };
}

export function faqPageSchema(items: FaqItem[], id: string) {
  return {
    "@type": "FAQPage",
    "@id": `${id}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function webApplicationSchema({
  name,
  description,
  url,
  applicationCategory = "WritingApplication"
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}) {
  return {
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: "Any modern web browser",
    browserRequirements: "Runs in a modern browser with JavaScript enabled",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    isAccessibleForFree: true,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    }
  };
}

export function softwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory = "WritingApplication"
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}) {
  return {
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: "Any modern web browser",
    browserRequirements: "Runs in a modern browser with JavaScript enabled",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    isAccessibleForFree: true,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    }
  };
}

export function graphSchema(items: unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": items
  };
}
