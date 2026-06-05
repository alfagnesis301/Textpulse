import Link from "next/link";
import { HomeJsonLd } from "@/components/JsonLd";
import { Logo } from "@/components/Logo";
import { SafeAdSlot } from "@/components/SafeAdSlot";
import { TextAnalyzer } from "@/components/TextAnalyzer";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "TextPulses - Free Text Analysis Tools for Writers & SEO",
  description:
    "Free browser-based tools to count words, check SEO titles, meta descriptions, readability, keyword balance, speech time and publishing fit.",
  path: ""
});

const navigation = [
  { name: "Tools", url: `${siteConfig.url}/tools` },
  { name: "Examples", url: `${siteConfig.url}/examples` },
  { name: "Guides", url: `${siteConfig.url}/guides` },
  { name: "Methodology", url: `${siteConfig.url}/methodology` },
  { name: "About", url: `${siteConfig.url}/about` }
];

const categories = [
  {
    title: "Writing Tools",
    body: "Count words, review readability, spot repeated phrases, and clean pasted drafts before submission or publishing.",
    links: [
      { href: "/tools/word-counter", label: "Word Counter" },
      { href: "/tools/readability-checker", label: "Readability Checker" },
      { href: "/tools/keyword-density-checker", label: "Keyword Density Checker" }
    ]
  },
  {
    title: "SEO Snippet Tools",
    body: "Check title tags and meta descriptions with practical length, clarity, and truncation-risk signals.",
    links: [
      { href: "/tools/seo-title-checker", label: "SEO Title Checker" },
      { href: "/tools/meta-description-checker", label: "Meta Description Checker" },
      { href: "/guides/seo-title-length-guide", label: "SEO Title Length Guide" }
    ]
  },
  {
    title: "Social Media Tools",
    body: "Draft posts for professional feeds without losing the hook, structure, or useful takeaway.",
    links: [
      { href: "/tools/linkedin-post-checker", label: "LinkedIn Post Checker" },
      { href: "/guides/linkedin-post-length-guide", label: "LinkedIn Post Length Guide" },
      { href: "/examples/linkedin-post-examples", label: "LinkedIn Post Examples" }
    ]
  },
  {
    title: "Speech & Reading Time Tools",
    body: "Estimate how long text takes to read or say aloud, then revise scripts for clearer delivery.",
    links: [
      { href: "/tools/speech-time-calculator", label: "Speech Time Calculator" },
      { href: "/guides/speech-timing-calculator-guide", label: "Speech Timing Guide" },
      { href: "/tools/word-counter", label: "Reading Time Counter" }
    ]
  },
  {
    title: "Publishing Readiness",
    body: "Use PublishFit signals to check whether a draft matches the channel before a human final review.",
    links: [
      { href: "/tools/blog-post-readiness-checker", label: "Blog Post Readiness Checker" },
      { href: "/guides/publishfit-score-explained", label: "PublishFit Score Guide" },
      { href: "/methodology", label: "Methodology" }
    ]
  }
];

const featuredTools = [
  {
    href: "/tools/word-counter",
    title: "Word Counter",
    body: "Count words, characters, sentences, paragraphs, reading time, speaking time, and repeated phrases."
  },
  {
    href: "/tools/seo-title-checker",
    title: "SEO Title Checker",
    body: "Review title length, clarity, repetition, and approximate snippet risk before publishing."
  },
  {
    href: "/tools/meta-description-checker",
    title: "Meta Description Checker",
    body: "Check character count, mobile risk, desktop preview context, and whether the summary is specific."
  },
  {
    href: "/tools/speech-time-calculator",
    title: "Speech Time Calculator",
    body: "Estimate delivery time and find sentences that may be difficult to say aloud."
  }
];

const popularGuides = [
  {
    href: "/guides/seo-title-length-guide",
    title: "SEO Title Length Guide",
    body: "Character ranges, pixel limits, title rewrites, and examples for page titles."
  },
  {
    href: "/guides/meta-description-length-checker-guide",
    title: "Meta Description Length Guide",
    body: "Desktop and mobile snippet ranges, examples, rewrite risks, and a checker workflow."
  },
  {
    href: "/guides/linkedin-post-length-guide",
    title: "LinkedIn Post Length Guide",
    body: "Suggested ranges by post format, hook risk, examples, and a pre-publish checklist."
  }
];

const whyItems = [
  "Free to use",
  "Browser-based analysis where possible",
  "No login required",
  "Transparent methodology",
  "Built for writers, students, marketers and small website owners",
  "Human review recommended before publishing"
];

const faq = [
  {
    question: "Is TextPulses free to use?",
    answer:
      "Yes. The public tools are free to use in the browser. Ads may appear on some pages, but they should not be required to run the analyzer."
  },
  {
    question: "Does TextPulses upload my draft text?",
    answer:
      "No. The analyzer is browser-side. Local auto-save stores draft text on your device only when you turn that option on."
  },
  {
    question: "Are the SEO title and meta description limits exact?",
    answer:
      "No. Search display can vary by query, device, layout, and rewrite behavior. TextPulses gives practical length and clarity signals, not guaranteed display results."
  },
  {
    question: "Can TextPulses guarantee rankings, clicks, or engagement?",
    answer:
      "No. The tools help with drafting and review. They do not guarantee search rankings, social engagement, editorial acceptance, or ad approval."
  },
  {
    question: "How should I use estimates such as reading time or speech time?",
    answer:
      "Treat them as planning ranges. Final reading and speaking time can change with audience, pauses, delivery style, and formatting."
  }
];

export default function HomePage() {
  return (
    <main>
      <HomeJsonLd navigation={navigation} faq={faq} />

      <section className="hero-soft-bg border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-16 lg:pt-16">
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <Logo className="origin-left scale-110" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">
              Free privacy-first SEO text analysis
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Free SEO Text Analyzer for Writers
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Privacy-first, browser-based text analysis for writers, marketers and website
              owners. Check word count and readability, test your SEO title and meta description,
              and compare keyword density. No login is required, and the main draft analysis runs
              in your browser where possible.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#tool"
                className="rounded-2xl bg-gradient-to-r from-pulse-blue to-pulse-violet px-6 py-3 text-sm font-extrabold text-white shadow-glow hover:-translate-y-0.5"
              >
                Start writing
              </Link>
              <Link
                href="/tools"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-pulse-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                Compare tools
              </Link>
            </div>
          </div>

          <div className="grid content-center gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/88">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pulse-violet">
                Tool hub
              </p>
              <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                Choose the job before judging the draft
              </h2>
              <div className="mt-5 grid gap-3">
                {featuredTools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-pulse-blue dark:border-slate-800 dark:bg-slate-950/70"
                  >
                    <span className="text-sm font-extrabold text-slate-950 dark:text-white">
                      {tool.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {tool.body}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="tool-categories">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">
            Tool categories
          </p>
          <h2 id="tool-categories" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Start from the format you need to publish
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
            A blog draft, a search snippet, a LinkedIn post, and a speech script need different
            checks. These sections route each task to the right tool or guide.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <section
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88"
              aria-labelledby={`category-${category.title.replace(/[^a-zA-Z0-9]/g, "-")}`}
            >
              <h3
                id={`category-${category.title.replace(/[^a-zA-Z0-9]/g, "-")}`}
                className="text-lg font-extrabold text-slate-950 dark:text-white"
              >
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {category.body}
              </p>
              <ul className="mt-4 grid gap-2 text-sm font-bold">
                {category.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-pulse-blue hover:text-pulse-violet">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <TextAnalyzer />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="home-educational-information">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">
            Educational information
          </p>
          <h2 id="home-educational-information" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            How to interpret text analysis results
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
            Counts, readability ranges, keyword balance, and publishing-fit signals are review
            aids. Use them to find likely issues, then confirm facts, tone, originality, and
            final platform requirements with human judgement before publishing.
          </p>
        </div>
      </section>

      <SafeAdSlot id="home-after-tool-ad" position="content" />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="popular-guides">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">
              Popular guides
            </p>
            <h2 id="popular-guides" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Practical references for higher-intent checks
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              Use these guides when you need the reasoning behind a length range, example, or
              pre-publish checklist.
            </p>
          </div>
          <Link
            href="/guides"
            className="w-fit rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-pulse-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            Browse all guides
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {popularGuides.map((guide) => (
            <article
              key={guide.href}
              className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-pulse-blue hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/88"
            >
              <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
                <Link href={guide.href} className="hover:text-pulse-blue">
                  {guide.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {guide.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/60 py-14 dark:bg-slate-950/50" aria-labelledby="why-textpulses">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-violet">
              Why TextPulses
            </p>
            <h2 id="why-textpulses" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Why trust TextPulses?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              TextPulses is built as a practical editing aid, not an automatic publishing
              verdict. It helps you catch length, clarity, repetition, and fit issues before a
              final human review.
            </p>
          </div>
          <ul className="grid gap-3">
            {whyItems.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="home-faq">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">FAQ</p>
        <h2 id="home-faq" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Common questions
        </h2>
        <div className="mt-8 grid gap-4">
          {faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88"
            >
              <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                {item.question}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
