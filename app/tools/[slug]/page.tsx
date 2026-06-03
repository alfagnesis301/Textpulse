import Link from "next/link";
import { notFound } from "next/navigation";
import { ToolJsonLd } from "@/components/JsonLd";
import { TextAnalyzer } from "@/components/TextAnalyzer";
import { toolPages, getToolPage } from "@/lib/tools";
import { createMetadata, siteConfig } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return toolPages.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tool = getToolPage(slug);
  if (!tool) return {};
  return createMetadata({ title: tool.metaTitle, description: tool.description, path: `/tools/${tool.slug}` });
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolPage(slug);
  if (!tool) notFound();

  const url = `${siteConfig.url}/tools/${tool.slug}`;
  const breadcrumbItems = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Tools", url: `${siteConfig.url}/tools` },
    { name: tool.title, url }
  ];
  const relatedGuides = tool.relatedGuides.filter((link) => link.href.startsWith("/guides"));
  const relatedExamples = tool.relatedGuides.filter((link) => link.href.startsWith("/examples"));
  const relatedTools = toolPages
    .filter((item) => item.slug !== tool.slug)
    .filter((item) => ["word-counter", "seo-title-checker", "meta-description-checker", "readability-checker", "keyword-density-checker", "blog-post-readiness-checker"].includes(item.slug))
    .slice(0, 4);

  return (
    <main>
      <ToolJsonLd title={tool.title} description={tool.description} url={url} breadcrumbItems={breadcrumbItems} faq={tool.faq} />
      <nav className="mx-auto max-w-7xl px-4 pt-6 text-sm font-semibold text-slate-500 sm:px-6 lg:px-8">
        <Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / {tool.title}
      </nav>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Browser-side checker</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">{tool.title}</h1>
        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700 dark:text-slate-300">{tool.intro}</p>
      </section>
      <TextAnalyzer initialPresetId={tool.preset} />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">What this tool checks</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{tool.decide.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">How to use this tool</h2>
            <ol className="mt-4 grid list-decimal gap-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {tool.howTo.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </article>
        </div>
        {tool.metricMatters ? (
          <section className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Why the metric matters</h2>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {tool.metricMatters.map((item) => <p key={item}>{item}</p>)}
            </div>
          </section>
        ) : null}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Practical examples</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{tool.examples.map((item) => <article key={item} className="rounded-2xl border border-slate-200 bg-white/88 p-5 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:bg-slate-900/88 dark:text-slate-400">{item}</article>)}</div>
        </section>
        <section className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Common mistakes</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{tool.mistakes.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Final checklist</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{tool.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">FAQ</h2>
          <div className="mt-4 grid gap-3">{tool.faq.map((item) => <details key={item.question} className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88"><summary className="cursor-pointer font-bold text-slate-950 dark:text-white">{item.question}</summary><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.answer}</p></details>)}</div>
        </section>
        <section className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Related tools</h2>
            <div className="mt-3 grid gap-2 text-sm font-bold">
              {relatedTools.map((item) => (
                <Link key={item.slug} href={`/tools/${item.slug}`} className="text-pulse-blue hover:text-pulse-violet">
                  {item.title}
                </Link>
              ))}
            </div>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Related guides</h2>
            <div className="mt-3 grid gap-2 text-sm font-bold">
              {(relatedGuides.length > 0 ? relatedGuides : [{ href: "/guides", label: "Writing and SEO Guides" }]).map((link) => (
                <Link key={link.href} href={link.href} className="text-pulse-blue hover:text-pulse-violet">
                  {link.label}
                </Link>
              ))}
              <Link href="/methodology" className="text-pulse-blue hover:text-pulse-violet">Methodology</Link>
            </div>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Related examples</h2>
            <div className="mt-3 grid gap-2 text-sm font-bold">
              {(relatedExamples.length > 0 ? relatedExamples : [{ href: "/examples", label: "Examples Library" }]).map((link) => (
                <Link key={link.href} href={link.href} className="text-pulse-blue hover:text-pulse-violet">
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Estimates are practical signals, not guarantees.</p>
          </article>
        </section>
      </section>
    </main>
  );
}
