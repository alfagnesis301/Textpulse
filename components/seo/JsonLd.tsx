import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  graphSchema,
  organizationSchema,
  personSchema,
  siteNavigationSchema,
  softwareApplicationSchema,
  type BreadcrumbItem,
  type FaqItem,
  type NavigationItem,
  webApplicationSchema,
  webPageSchema,
  websiteSchema
} from "@/lib/seo/schema";

function JsonLdScript({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function HomeJsonLd({
  navigation,
  faq
}: {
  navigation: NavigationItem[];
  faq?: FaqItem[];
}) {
  return (
    <JsonLdScript
      data={graphSchema([
        organizationSchema(),
        websiteSchema(),
        siteNavigationSchema(navigation),
        ...(faq && faq.length > 0 ? [faqPageSchema(faq, `${websiteSchema().url}/`)] : [])
      ])}
    />
  );
}

export function GuideJsonLd({
  title,
  description,
  url,
  dateModified,
  datePublished,
  breadcrumbItems,
  image,
  faq
}: {
  title: string;
  description: string;
  url: string;
  dateModified: string;
  datePublished: string;
  breadcrumbItems: BreadcrumbItem[];
  image?: string;
  faq?: FaqItem[];
}) {
  return (
    <JsonLdScript
      data={graphSchema([
        organizationSchema(),
        websiteSchema(),
        webPageSchema({ title, description, url }),
        articleSchema({ title, description, url, datePublished, dateModified, image }),
        breadcrumbSchema(breadcrumbItems, url),
        ...(faq && faq.length > 0 ? [faqPageSchema(faq, url)] : [])
      ])}
    />
  );
}

export function ToolJsonLd({
  title,
  description,
  url,
  breadcrumbItems,
  faq,
  applicationCategory
}: {
  title: string;
  description: string;
  url: string;
  breadcrumbItems: BreadcrumbItem[];
  faq?: FaqItem[];
  applicationCategory?: string;
}) {
  return (
    <JsonLdScript
      data={graphSchema([
        organizationSchema(),
        websiteSchema(),
        webPageSchema({ title, description, url }),
        softwareApplicationSchema({ name: title, description, url, applicationCategory }),
        webApplicationSchema({ name: title, description, url, applicationCategory }),
        breadcrumbSchema(breadcrumbItems, url),
        ...(faq && faq.length > 0 ? [faqPageSchema(faq, url)] : [])
      ])}
    />
  );
}

export function AuthorJsonLd({
  title,
  description,
  url,
  breadcrumbItems
}: {
  title: string;
  description: string;
  url: string;
  breadcrumbItems: BreadcrumbItem[];
}) {
  return (
    <JsonLdScript
      data={graphSchema([
        organizationSchema(),
        websiteSchema(),
        webPageSchema({ title, description, url }),
        personSchema(),
        breadcrumbSchema(breadcrumbItems, url)
      ])}
    />
  );
}

export function WebPageJsonLd({
  title,
  description,
  url,
  breadcrumbItems,
  faq
}: {
  title: string;
  description: string;
  url: string;
  breadcrumbItems?: BreadcrumbItem[];
  faq?: FaqItem[];
}) {
  return (
    <JsonLdScript
      data={graphSchema([
        organizationSchema(),
        websiteSchema(),
        webPageSchema({ title, description, url }),
        ...(breadcrumbItems && breadcrumbItems.length > 0 ? [breadcrumbSchema(breadcrumbItems, url)] : []),
        ...(faq && faq.length > 0 ? [faqPageSchema(faq, url)] : [])
      ])}
    />
  );
}
