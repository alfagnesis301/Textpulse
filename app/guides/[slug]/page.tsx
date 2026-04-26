import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/lib/guides";
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

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      dateModified: "2026-04-26",
      author: {
        "@type": "Organization",
        name: siteConfig.name
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name
      },
      mainEntityOfPage: `${siteConfig.url}/guides/${guide.slug}`
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${siteConfig.url}/guides`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: guide.title,
          item: `${siteConfig.url}/guides/${guide.slug}`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <p className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
          Last updated: {guide.updated}
        </p>

        <div className="mt-10 grid gap-8">
          {guide.sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
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

        {guide.table ? (
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              {guide.table.title}
            </h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-sm">
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
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3 leading-6 text-slate-700 dark:text-slate-300">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {guide.beforeAfter ? (
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Before and after
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-amber-800 dark:text-amber-200">
                  Before
                </h3>
                <p className="mt-3 leading-7 text-slate-800 dark:text-slate-200">{guide.beforeAfter.before}</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/30">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-800 dark:text-emerald-200">
                  After
                </h3>
                <p className="mt-3 leading-7 text-slate-800 dark:text-slate-200">{guide.beforeAfter.after}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{guide.beforeAfter.note}</p>
          </section>
        ) : null}

        {guide.caseStudy ? (
          <section className="mt-8 rounded-2xl border border-violet-100 bg-violet-50/80 p-6 dark:border-violet-900/60 dark:bg-violet-950/30">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-violet">Mini case</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              {guide.caseStudy.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">{guide.caseStudy.body}</p>
          </section>
        ) : null}

        {guide.commonMistakes?.length ? (
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
        ) : null}

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
            Quick answers
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
