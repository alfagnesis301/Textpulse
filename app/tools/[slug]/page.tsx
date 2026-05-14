import Link from "next/link";
import { notFound } from "next/navigation";
import { TextAnalyzer } from "@/components/TextAnalyzer";
import { toolPages, getToolPage } from "@/lib/tools";
import { createMetadata } from "@/lib/seo";

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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    applicationCategory: "WritingApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
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
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">What this checker helps you decide</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{tool.decide.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">How to use this tool</h2>
            <ol className="mt-4 grid list-decimal gap-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {tool.howTo.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </article>
        </div>
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
        <section className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Related resources</h2>
          <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold">
            {tool.relatedGuides.map((link) => <Link key={link.href} href={link.href} className="text-pulse-blue">{link.label}</Link>)}
            <Link href="/methodology" className="text-pulse-blue">Methodology</Link>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Estimates are practical signals, not guarantees.</p>
        </section>
      </section>
    </main>
  );
}
