"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { canLoadAds, CONSENT_UPDATED_EVENT } from "@/lib/consent";
import { siteConfig } from "@/lib/seo";

const ADS_ENABLED =
  process.env.NEXT_PUBLIC_ADS_ENABLED === "true" &&
  process.env.NEXT_PUBLIC_ADSENSE_APPROVED === "true";

export function AdSenseScript() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const syncConsent = () => setAllowed(canLoadAds());

    syncConsent();
    window.addEventListener(CONSENT_UPDATED_EVENT, syncConsent);

    return () => {
      window.removeEventListener(CONSENT_UPDATED_EVENT, syncConsent);
    };
  }, []);

  if (!ADS_ENABLED || !allowed) {
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
