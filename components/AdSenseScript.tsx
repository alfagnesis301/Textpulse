import Script from "next/script";
import { siteConfig } from "@/lib/seo";

export function AdSenseScript() {
  return (
    <Script
      id="adsense-script"
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClientId}`}
      crossOrigin="anonymous"
    />
  );
}
