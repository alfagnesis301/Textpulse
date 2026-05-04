"use client";
import { useEffect } from "react";
import { siteConfig } from "@/lib/seo";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type SafeAdSlotProps = {
  id: string;
  slotId?: string;
  position?: "inline" | "sidebar" | "footer" | "content";
  className?: string;
};

const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

export function SafeAdSlot({ id, slotId, position = "content", className = "" }: SafeAdSlotProps) {
  useEffect(() => {
    if (!ADS_ENABLED || !slotId) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ad blocker or script not loaded
    }
  }, [slotId]);

  if (!ADS_ENABLED || !slotId) return null;

  const sizeClass = position === "sidebar" ? "min-h-[300px]" : "min-h-[220px]";

  return (
    <aside
      id={id}
      className={`my-10 w-full rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-900/70 ${position === "sidebar" ? "xl:sticky xl:top-24" : ""} ${className}`}
      aria-label="Advertisement"
    >
      <div className="mb-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
        Advertisement
      </div>
      <div className={`grid ${sizeClass} place-items-center rounded-xl bg-white/75 dark:bg-slate-950/60`}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={siteConfig.adsenseClientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
