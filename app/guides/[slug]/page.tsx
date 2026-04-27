import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { guides, getGuide, getRelatedGuides } from "@/lib/guides";
import { createMetadata, siteConfig } from "@/lib/seo";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug
  }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return createMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const url = `${siteConfig.url}/guides/${guide.slug}`;
  const relatedGuides = getRelatedGuides(guide);

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <ArticleJsonLd
        title={guide.title}
        description={guide.description}
        url={url}
        datePublished="2026-04-27"
        dateModified="2026-04-27"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Guides", url: `${siteConfig.url}/guides` },
          { name: guide.title, url }
        ]}
      />
      <FaqJsonLd items={guide.faq} />

      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:text-pulse-blue">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/guides" className="hover:text-pulse-blue">
          Guides
        </Link>
      </nav>

      <article className="mt-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">
          {guide.category} - {guide.readingTime}
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          {guide.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
          {guide.description}
        </p>
        <div className="mt-4 grid gap-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <p>Last updated: {guide.updated}</p>
          <p>Written and reviewed by TextPulses Editorial.</p>
        </div>

        <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/80 p-6 dark:border-blue-900/60 dark:bg-blue-950/30">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Quick answer
          </h2>
          <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700 dark:text-slate-300">
            {guide.quickAnswer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Why this matters
          </h2>
          <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700 dark:text-slate-300">
            {guide.whyMatters.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Practical range or rule of thumb
          </h2>
          <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700 dark:text-slate-300">
            {guide.ruleOfThumb.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-8">
          {guide.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88"
            >
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                {section.title}
              </h2>
              <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {guide.table.title}
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500 dark:bg-slate-950 dark:text-slate-400">
                <tr>
                  {guide.table.columns.map((column) => (
                    <th key={column} className="px-4 py-3">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {guide.table.rows.map((row) => (
                  <tr key={row.join("-")}>
                    {row.map((cell, index) => (
                      <td key={`${cell}-${index}`} className="px-4 py-3 leading-6 text-slate-700 dark:text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Before and after examples
          </h2>
          <div className="mt-5 grid gap-6">
            {guide.examples.map((example) => (
              <div key={example.title} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">{example.title}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-800 dark:text-amber-200">
                      Before
                    </p>
                    <p className="mt-3 leading-7 text-slate-800 dark:text-slate-200">{example.before}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/30">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-800 dark:text-emerald-200">
                      After
                    </p>
                    <p className="mt-3 leading-7 text-slate-800 dark:text-slate-200">{example.after}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Why it works: </span>
                  {example.why}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-violet-100 bg-violet-50/80 p-6 dark:border-violet-900/60 dark:bg-violet-950/30">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-violet">Mini case</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {guide.caseStudy.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">{guide.caseStudy.body}</p>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Common mistakes
          </h2>
          <ul className="mt-4 grid gap-3 text-base leading-7 text-slate-700 dark:text-slate-300">
            {guide.commonMistakes.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/80 p-6 dark:border-blue-900/60 dark:bg-blue-950/30">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Practical checklist
          </h2>
          <ul className="mt-4 grid gap-3 text-base leading-7 text-slate-700 dark:text-slate-300">
            {guide.checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-pulse-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            How to check this in TextPulses
          </h2>
          <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700 dark:text-slate-300">
            {guide.howToCheck.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/#tool"
            className="mt-4 inline-flex rounded-2xl bg-gradient-to-r from-pulse-blue to-pulse-violet px-5 py-3 text-sm font-extrabold text-white shadow-glow hover:-translate-y-0.5"
          >
            Open the analyzer
          </Link>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Related guides
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {relatedGuides.map((related) => (
              <Link
                key={related.slug}
                href={`/guides/${related.slug}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:border-pulse-blue dark:border-slate-800 dark:bg-slate-950/70"
              >
                <h3 className="font-extrabold text-slate-950 dark:text-white">{related.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {related.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            FAQ
          </h2>
          <div className="mt-4 grid gap-4">
            {guide.faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-bold text-slate-950 dark:text-white">{item.question}</h3>
                <p className="mt-1 leading-7 text-slate-700 dark:text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
