import Script from "next/script";
import { siteConfig } from "@/lib/seo";

const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

export function AdSenseScript() {
  if (!ADS_ENABLED) {
    return null;
  }

  return (
    <Script
      id="adsense-script"
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClientId}`}
      crossOrigin="anonymous"
    />
  );
}
