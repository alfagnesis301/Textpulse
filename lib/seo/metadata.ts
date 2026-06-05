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

export function absoluteUrl(path = "") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "",
  type = "website",
  // Default social card. PNG (not SVG) because X/Facebook/LinkedIn do not render
  // SVG Open Graph images. Per-page overrides can pass a more specific PNG.
  image = "/og/textpulses-og.png",
  openGraphTitle,
  openGraphDescription,
  twitterTitle,
  twitterDescription,
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
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  robots?: Metadata["robots"];
}): Metadata {
  const cleanTitle = title.replace(/\s+\|\s+TextPulses$/i, "");
  const metadataTitle = cleanTitle;
  const canonical = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return {
    title: {
      absolute: metadataTitle
    },
    description,
    robots,
    alternates: {
      canonical
    },
    openGraph: {
      title: openGraphTitle ?? metadataTitle,
      description: openGraphDescription ?? description,
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
      title: twitterTitle ?? metadataTitle,
      description: twitterDescription ?? description,
      images: [imageUrl]
    }
  };
}
