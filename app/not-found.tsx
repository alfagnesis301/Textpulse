import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Page not found</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        This page is not available
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
        The link may have changed or the page may no longer exist. You can return to the
        analyzer, browse the writing guides, or read how TextPulses calculates writing signals.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/#tool"
          className="rounded-2xl bg-gradient-to-r from-pulse-blue to-pulse-violet px-5 py-3 text-sm font-extrabold text-white shadow-glow"
        >
          Open analyzer
        </Link>
        <Link
          href="/guides"
          className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          View guides
        </Link>
        <Link
          href="/methodology"
          className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          Methodology
        </Link>
      </div>
    </main>
  );
}
