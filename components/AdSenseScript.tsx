import Script from "next/script";
import { siteConfig } from "@/lib/seo";

const ADSENSE_ENABLED = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
const CMP_READY = process.env.NEXT_PUBLIC_CMP_READY === "true";

export function AdSenseScript() {
  if (!ADSENSE_ENABLED || !CMP_READY) {
    return null;
  }

  return (
    <Script
      id="textpulses-adsense"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClientId}`}
      crossOrigin="anonymous"
    />
  );
}
