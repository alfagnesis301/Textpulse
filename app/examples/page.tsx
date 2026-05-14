import Link from "next/link";
import { examplePages } from "@/lib/examples";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Examples Library | TextPulses",
  description: "Original before and after examples for SEO titles, meta descriptions, LinkedIn posts, email subjects, and YouTube descriptions.",
  path: "/examples"
});

export default function ExamplesIndexPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Examples library</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">Before and after writing examples</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
        Original neutral examples written for TextPulses. Use them to compare clearer, safer, more specific edits before checking your own draft.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {examplePages.map((page) => (
          <article key={page.slug} className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">
              <Link href={`/examples/${page.slug}`} className="hover:text-pulse-blue">{page.title}</Link>
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{page.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
