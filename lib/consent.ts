const CONSENT_KEY = "tp-cookie-consent-v1";

type ConsentRecord = { necessary: true; ads: boolean; analytics: boolean; timestamp: number };

export function getConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as ConsentRecord;
  } catch {
    return null;
  }
}

export function canLoadAds(): boolean {
  return getConsent()?.ads === true;
}

export function hasConsented(): boolean {
  return getConsent() !== null;
}
