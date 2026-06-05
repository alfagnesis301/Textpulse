import Link from "next/link";
import { notFound } from "next/navigation";
import { WebPageJsonLd } from "@/components/JsonLd";
import { examplePages, getExamplePage } from "@/lib/examples";
import { createMetadata, siteConfig } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return examplePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getExamplePage(slug);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.description, path: `/examples/${page.slug}` });
}

export default async function ExamplePage({ params }: Props) {
  const { slug } = await params;
  const page = getExamplePage(slug);
  if (!page) notFound();

  const faq = [
    { question: "Are these examples copied from real campaigns?", answer: "No. They are original, neutral examples written for TextPulses." },
    { question: "Can I adapt these examples?", answer: "Yes. Use the editing pattern, then rewrite for your actual audience and page." },
    { question: "Do these examples guarantee performance?", answer: "No. They are practical editorial examples, not SEO or engagement guarantees." },
    { question: "Where should I check my own draft?", answer: "Use the related TextPulses checker linked on this page." }
  ];

  const url = `${siteConfig.url}/examples/${page.slug}`;

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <WebPageJsonLd
        title={page.title}
        description={page.description}
        url={url}
        breadcrumbItems={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Examples", url: `${siteConfig.url}/examples` },
          { name: page.title, url }
        ]}
        faq={faq}
      />
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500"><Link href="/" className="hover:text-pulse-blue">Home</Link> / <Link href="/examples" className="hover:text-pulse-blue">Examples</Link> / <span className="text-slate-700 dark:text-slate-300">{page.title}</span></nav>
      <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Original examples</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">{page.title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">{page.description}</p>
      <section className="mt-8 grid gap-4">
        {page.rows.map((row, index) => (
          <article key={`${row.before}-${index}`} className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">Example {index + 1}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400"><strong>Before:</strong> {row.before}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400"><strong>After:</strong> {row.after}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{row.why}</p>
          </article>
        ))}
      </section>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
        <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Common mistakes</h2>
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <li>Adding urgency without a real reason.</li>
          <li>Making the reader guess the topic.</li>
          <li>Using repeated keywords instead of useful detail.</li>
          <li>Promising a result the content cannot guarantee.</li>
        </ul>
        <Link href={page.toolHref} className="mt-5 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-extrabold text-white dark:bg-white dark:text-slate-950">Check your own draft</Link>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">FAQ</h2>
        <div className="mt-4 grid gap-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88"
            >
              <summary className="cursor-pointer font-bold text-slate-950 dark:text-white">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
      <p className="mt-8 text-sm font-bold">
        <Link href="/guides" className="text-pulse-blue hover:text-pulse-violet">Writing guides</Link>
        {" "}·{" "}
        <Link href="/methodology" className="text-pulse-blue hover:text-pulse-violet">Methodology</Link>
      </p>
    </main>
  );
}
