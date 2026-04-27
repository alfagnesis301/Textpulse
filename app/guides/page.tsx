import Link from "next/link";
import { guides } from "@/lib/guides";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Writing, SEO, and Word Count Guides",
  description:
    "Practical guides for word count, readability, keyword density, SEO titles, meta descriptions, social posts, essays, speeches, and PublishFit Score.",
  path: "/guides"
});

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Guides</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        Writing guides for clearer, publish-ready text
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
        Learn how to use word counts, readability estimates, keyword density, and channel
        length ranges without treating them as rigid formulas.
      </p>
      <Link
        href="/methodology"
        className="mt-6 inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-pulse-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      >
        How TextPulses calculates signals
      </Link>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <article
            key={guide.slug}
            className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/88"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-pulse-violet">
              {guide.category} - {guide.readingTime}
            </p>
            <h2 className="mt-3 text-xl font-extrabold text-slate-950 dark:text-white">
              <Link href={`/guides/${guide.slug}`} className="hover:text-pulse-blue">
                {guide.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {guide.description}
            </p>
            <p className="mt-3 text-xs font-semibold text-slate-500 dark:text-slate-500">
              Last updated: {guide.updated}
            </p>
            <Link
              href={`/guides/${guide.slug}`}
              className="mt-4 inline-flex rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:-translate-y-0.5 hover:bg-pulse-blue dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Read guide
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
