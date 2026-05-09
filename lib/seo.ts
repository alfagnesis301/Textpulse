import type { Metadata } from "next";

export const siteConfig = {
  name: "TextPulses",
  slogan: "Count smarter. Write sharper. Publish faster.",
  url: "https://textpulses.com",
  description:
    "Free privacy-first word counter, readability checker, keyword density analyzer, and PublishFit Score for blogs, SEO snippets, social posts, emails, essays, and speeches.",
  contactEmail: "hello@textpulses.com",
  adsensePublisherId: "pub-7051995204409435",
  adsenseClientId: "ca-pub-7051995204409435"
};

export function createMetadata({
  title,
  description,
  path = "",
  type = "website",
  image = "/og/textpulses-og.svg",
  robots = {
    index: true,
    follow: true
  }
}: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  robots?: Metadata["robots"];
}): Metadata {
  const canonical = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return {
    title,
    description,
    robots,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} writing analysis guide`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
