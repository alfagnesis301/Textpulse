type SafeAdSlotProps = {
  id: string;
  position?: "inline" | "sidebar" | "footer" | "content";
  className?: string;
};

const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

export function SafeAdSlot({ id, position = "content", className = "" }: SafeAdSlotProps) {
  if (!ADS_ENABLED) {
    return null;
  }

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
        {/*
          Insert Google AdSense ad unit markup only after approval.
          Do not load personalized ads before valid consent where required.
          Keep this slot away from navigation, forms, download buttons,
          editor controls, copy buttons, and primary CTAs.
        */}
      </div>
    </aside>
  );
}
