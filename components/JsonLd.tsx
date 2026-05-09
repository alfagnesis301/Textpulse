import { siteConfig } from "@/lib/seo";

type FaqItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  url: string;
};

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/guides?search={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }}
    />
  );
}

export function WebPageJsonLd({
  title,
  description,
  url
}: {
  title: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url,
        isPartOf: {
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url
        }
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  dateModified,
  datePublished
}: {
  title: string;
  description: string;
  url: string;
  dateModified: string;
  datePublished: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished,
        dateModified,
        author: {
          "@type": "Organization",
          name: "TextPulses Editorial"
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url
        }
      }}
    />
  );
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      }}
    />
  );
}

export function GuideJsonLd({
  title,
  description,
  url,
  dateModified,
  datePublished,
  faqItems,
  breadcrumbItems,
  image = `${siteConfig.url}/og/textpulses-og.svg`
}: {
  title: string;
  description: string;
  url: string;
  dateModified: string;
  datePublished: string;
  faqItems: FaqItem[];
  breadcrumbItems: BreadcrumbItem[];
  image?: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
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
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/favicon.svg`
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url
            }
          },
          {
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer
              }
            }))
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: breadcrumbItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: item.url
            }))
          }
        ]
      }}
    />
  );
}
