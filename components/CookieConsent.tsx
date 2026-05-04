"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "tp-cookie-consent-v1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  function saveAndClose(ads: boolean) {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ necessary: true, ads, analytics: ads, timestamp: Date.now() })
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 shadow-lg backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold text-slate-950 dark:text-white">This site uses cookies</p>
          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
            We use cookies to serve ads, remember preferences, and analyse traffic. See our{" "}
            <Link href="/cookie-policy" className="font-semibold text-pulse-blue hover:underline">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="font-semibold text-pulse-blue hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            onClick={() => saveAndClose(false)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            Reject all
          </button>
          <button
            onClick={() => saveAndClose(true)}
            className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-pulse-blue dark:bg-white dark:text-slate-950"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
