import { siteConfig } from "@/lib/seo/metadata";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type NavigationItem = {
  name: string;
  url: string;
};

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    logo: `${siteConfig.url}/favicon.svg`
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
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/guides?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
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
  image = `${siteConfig.url}/og/textpulses-og.svg`
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
      "@type": "Organization",
      name: "TextPulses Editorial",
      url: siteConfig.url
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    },
    mainEntityOfPage: {
      "@id": `${url}#webpage`
    }
  };
}

export function webApplicationSchema({
  name,
  description,
  url
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name,
    description,
    url,
    applicationCategory: "WritingApplication",
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
