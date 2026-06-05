import Link from "next/link";
import { AuthorJsonLd } from "@/components/JsonLd";
import { createMetadata, siteConfig } from "@/lib/seo";

const description =
  "Ricardo Diaz is the independent publisher behind TextPulses, focused on privacy-first writing, SEO text analysis, and browser-based tools.";

export const metadata = createMetadata({
  title: "Ricardo Diaz — Author & Publisher of TextPulses",
  description,
  path: "/author/ricardo-diaz"
});

const sections = [
  {
    title: "About Ricardo",
    body: [
      "Ricardo Diaz is the independent web publisher who builds and maintains TextPulses. He works on the product, the browser-side calculations, and the educational guides that explain how each signal should be read.",
      "TextPulses is an independent project rather than a company team. That means one person is accountable for what the tools claim, how the guides are written, and how corrections are handled."
    ]
  },
  {
    title: "Focus and approach",
    body: [
      "The focus is practical: privacy-first writing, SEO text analysis, and browser-based tools that help writers, students, marketers, and small website owners check a draft before publishing.",
      "The guiding principle is that a tool should help a person make a better editing decision, not replace their judgement. Scores and ranges are framed as signals, not guarantees."
    ]
  },
  {
    title: "How the tools are tested",
    body: [
      "Each calculation is checked against short drafts, long drafts, headings, bullet lists, URLs, emoji, copied formatting, dense paragraphs, and repeated phrases, because those are the cases where word counters and readability estimates tend to disagree.",
      "Guides and examples are written as original content, reviewed for cautious language, and updated when the product changes or when a recommendation needs to be clearer."
    ]
  },
  {
    title: "Limitations and corrections",
    body: [
      "TextPulses provides estimates. It does not verify facts, check plagiarism, guarantee search rankings or ad approval, or replace professional, academic, legal, or medical review.",
      `If you find an unclear recommendation, a broken page, or a calculation that looks wrong, please report it to ${siteConfig.contactEmail}. Corrections are scoped to the affected page or rule and compared against the published methodology.`
    ]
  }
];

export default function AuthorPage() {
  const url = `${siteConfig.url}/author/ricardo-diaz`;

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <AuthorJsonLd
        title="Ricardo Diaz — Author & Publisher of TextPulses"
        description={description}
        url={url}
        breadcrumbItems={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "About", url: `${siteConfig.url}/about` },
          { name: "Ricardo Diaz", url }
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:text-pulse-blue">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/about" className="hover:text-pulse-blue">
          About
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">Ricardo Diaz</span>
      </nav>

      <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Author</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        Ricardo Diaz
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
        Independent publisher behind TextPulses. Focused on privacy-first writing, SEO text
        analysis, and browser-based tools.
      </p>

      <div className="mt-10 grid gap-6">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88"
          >
            <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">{section.title}</h2>
            <div className="mt-3 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/*
        Verified author profiles (LinkedIn, X, GitHub, etc.) can be linked here and
        added to `organizationSameAs` in lib/seo/schema.ts so they flow into the
        Person `sameAs`. Do NOT add unverified or placeholder profile URLs.
      */}

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
        <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">More about TextPulses</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold">
          <Link href="/about" className="text-pulse-blue hover:text-pulse-violet">
            About TextPulses
          </Link>
          <Link href="/editorial-policy" className="text-pulse-blue hover:text-pulse-violet">
            Editorial Policy
          </Link>
          <Link href="/methodology" className="text-pulse-blue hover:text-pulse-violet">
            Methodology
          </Link>
          <Link href="/contact" className="text-pulse-blue hover:text-pulse-violet">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
