import Link from "next/link";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About TextPulses",
  description:
    "Learn who operates TextPulses, how the editorial guidance is maintained, and why the tool uses privacy-first browser-based analysis.",
  path: "/about"
});

const sections = [
  {
    title: "Mission",
    body: [
      "The mission of TextPulses is simple: help people make clearer publishing decisions without making the writing process slower.",
      "A word count can tell you how long a draft is. It cannot tell you whether the draft is too repetitive, too dense, too short for a useful article, too long for a snippet, or difficult to scan. TextPulses adds practical signals that help turn a draft into something easier to review."
    ]
  },
  {
    title: "Who operates the site",
    body: [
      "TextPulses is operated by Ricardo Diaz, an independent web publisher based in the United Kingdom.",
      `For support, corrections, privacy questions, business inquiries, or reports of inaccurate guidance, contact ${siteConfig.contactEmail}.`
    ]
  },
  {
    title: "What TextPulses does",
    body: [
      "TextPulses helps you review word count, character count with and without spaces, sentence count, paragraph count, line count, unique words, average word length, average sentence length, reading time, speaking time, handwriting time, keyword and phrase frequency, readability signals, and channel-specific PublishFit Score.",
      "The tool includes presets for blog articles, SEO titles, meta descriptions, YouTube text, LinkedIn posts, X/Twitter posts, Instagram captions, email subjects, academic essays, and speech scripts."
    ]
  },
  {
    title: "Editorial approach",
    body: [
      "The educational guides on TextPulses are written to explain practical writing ranges, not rigid formulas. They are designed for writers, bloggers, students, marketers, creators, and professionals who need quick guidance before publishing.",
      "Guides are reviewed when the product changes or when recommendations need clarification. If you find unclear, outdated, or inaccurate guidance, please report it through the contact page."
    ]
  },
  {
    title: "Privacy-first design",
    body: [
      "TextPulses is designed so the main analysis runs in your browser. Your draft does not need to be sent to TextPulses servers for word count, readability, keyword density, cleanup actions, or PublishFit scoring.",
      "Auto-save locally is off by default. If you enable it, the draft may be stored in your own browser localStorage on that device."
    ]
  },
  {
    title: "Limitations",
    body: [
      "TextPulses provides estimates. It does not replace human review, professional editing, fact-checking, plagiarism checking, legal review, medical review, academic review, or SEO strategy.",
      "Use the tool to find issues faster. Use human judgment to make the final decision."
    ]
  }
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">About TextPulses</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        A practical writing utility for publish-ready drafts
      </h1>
      <div className="mt-5 grid gap-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
        <p>
          TextPulses is a practical writing utility for people who want to check a draft before
          publishing, submitting, sending, or sharing it.
        </p>
        <p>
          The tool combines fast word counting with readability signals, keyword balance,
          estimated reading time, speaking time, handwriting time, and PublishFit Score.
          Instead of showing only raw totals, TextPulses helps writers understand whether a
          draft fits the channel they are preparing for.
        </p>
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
        Last updated: April 27, 2026
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

      <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/80 p-6 dark:border-blue-900/60 dark:bg-blue-950/30">
        <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">How scoring works</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          PublishFit Score is rule-based. It combines signals such as length fit, clarity,
          readability, keyword balance, lexical variety, and sentence flow. The score does not
          claim to predict Google rankings, social engagement, conversions, academic grades, or
          editorial acceptance. It is a revision checklist, not a guarantee.
        </p>
        <Link
          href="/methodology"
          className="mt-4 inline-flex rounded-2xl bg-slate-950 px-4 py-2 text-sm font-extrabold text-white hover:bg-pulse-blue dark:bg-white dark:text-slate-950"
        >
          Read the methodology
        </Link>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
        <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">Contact and corrections</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          TextPulses welcomes corrections and feedback. If you find a bug, unclear recommendation,
          broken page, or privacy concern, contact{" "}
          <a className="font-bold text-pulse-blue hover:underline" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
