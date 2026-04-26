import type { Metadata } from "next";

export const siteConfig = {
  name: "TextPulse",
  slogan: "Count smarter. Write sharper. Publish faster.",
  url: "https://textpulse.example",
  description:
    "Free privacy-first word counter, readability checker, keyword density analyzer, and PublishFit Score for blogs, SEO snippets, social posts, emails, essays, and speeches.",
  contactEmail: "hello@textpulse.example"
};

export function createMetadata({
  title,
  description,
  path = ""
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
