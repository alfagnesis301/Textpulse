type AdSlotProps = {
  format?: "banner" | "sidebar" | "inline";
  className?: string;
};

export function AdSlot({ format = "inline", className = "" }: AdSlotProps) {
  const sizeClass =
    format === "banner"
      ? "min-h-24"
      : format === "sidebar"
        ? "min-h-[320px]"
        : "min-h-36";

  return (
    <aside
      className={`flex ${sizeClass} w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/70 px-6 py-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400 ${className}`}
      aria-label="Advertisement"
    >
      {/* Insert the approved Google AdSense script and ad unit markup here after account approval. */}
      Advertisement
    </aside>
  );
}
