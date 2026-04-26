import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { FAQ } from "@/components/FAQ";
import { Logo } from "@/components/Logo";
import { TextAnalyzer } from "@/components/TextAnalyzer";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Free Word Counter & Publish-Ready Text Analyzer",
  description:
    "Count words, check readability, analyze keyword balance, and see whether your text fits blogs, SEO snippets, social posts, emails, essays, and speeches."
});

const trustBadges = ["Private browser-based analysis", "No signup required", "Free writing utility"];

const analyzeItems = [
  {
    title: "Word and character counts",
    body: "Measure words, characters with spaces, characters without spaces, lines, paragraphs, and sentence structure in real time."
  },
  {
    title: "Readability and timing",
    body: "Estimate reading time, speaking time, handwriting time, average sentence length, and an approximate reading level."
  },
  {
    title: "Keyword and phrase balance",
    body: "Review top one-word, two-word, and three-word phrases so repetition becomes easier to spot before publishing."
  },
  {
    title: "Channel fit",
    body: "Use PublishFit presets for SEO titles, meta descriptions, social posts, emails, essays, speeches, and blog articles."
  }
];

const differences = [
  "PublishFit Score turns raw counts into channel-specific readiness guidance.",
  "Clean Text tools help fix spacing, line breaks, quotes, and casing without leaving the page.",
  "Writing Health cards make clarity, variety, keyword balance, sentence flow, readability, and fit easier to scan.",
  "All analysis runs locally in the browser, with local auto-save disabled unless you turn it on."
];

const audiences = [
  "Students",
  "Bloggers",
  "SEO writers",
  "Marketers",
  "YouTubers",
  "Social media creators",
  "Professionals"
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-grid border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-14 lg:pt-16">
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <Logo className="scale-110 origin-left" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">
              {`Count smarter. Write sharper. Publish faster.`}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Free Word Counter & Publish-Ready Text Analyzer
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Count words, check readability, analyze keyword balance, and see if your text
              fits blogs, SEO snippets, social posts, emails, essays, and speeches.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#tool"
                className="rounded-2xl bg-gradient-to-r from-pulse-blue to-pulse-violet px-6 py-3 text-sm font-extrabold text-white shadow-glow hover:-translate-y-0.5"
              >
                Start typing
              </Link>
              <Link
                href="#publishfit-explained"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-pulse-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                See PublishFit
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid content-center gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/88">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-pulse-violet">
                    Mini demo
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                    Publish-ready signals
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
                  Private
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["Words", "684"],
                  ["Readability", "Clear"],
                  ["Keyword balance", "91"],
                  ["PublishFit", "88"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
                    <p className="mt-2 text-3xl font-black text-slate-950 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-50 to-violet-50 p-4 dark:from-blue-950/40 dark:to-violet-950/40">
                <p className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">
                  Meta Description: Good range. Recommendation: keep the main benefit near
                  the front and avoid repeating the same keyword.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <AdSlot format="banner" />
      </div>

      <TextAnalyzer />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="what-analyze">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">What you can analyze</p>
          <h2 id="what-analyze" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            More context than a basic counter
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
            TextPulse is designed for people who publish. It keeps simple counts fast while
            adding the quality signals that help you decide whether a draft is ready for the
            next step.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {analyzeItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
              <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/60 py-14 dark:bg-slate-950/50" aria-labelledby="why-different">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-violet">Why TextPulse is different</p>
            <h2 id="why-different" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Publish-ready writing, not just counting
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              A word count tells you size. TextPulse also helps you understand whether the
              draft fits the format, feels readable, and avoids obvious repetition before it
              goes live.
            </p>
          </div>
          <div className="grid gap-3">
            {differences.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publishfit-explained" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="publishfit-explainer-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">PublishFit Score explained</p>
            <h2 id="publishfit-explainer-title" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Pick the channel before judging the draft
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              A strong email subject can be too short for a blog intro. A clear meta
              description can be too long for a social post. PublishFit Score compares your
              text with the expectations of the selected format, then combines length,
              clarity, readability, keyword balance, and variety into a single readiness
              score.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              The score is rule-based and transparent. It does not claim to predict rankings,
              engagement, or academic grading. It gives you a practical checklist before you
              send, submit, or publish.
            </p>
          </div>
          <AdSlot format="inline" />
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white" aria-labelledby="who-for">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Who is this tool for?</p>
            <h2 id="who-for" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Useful for everyday publishing work
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              TextPulse supports quick checks for drafts, assignments, captions, scripts,
              emails, snippets, and long-form web content.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <div key={audience} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-lg font-extrabold">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-violet">Privacy-first text analysis</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Your draft should stay under your control
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          TextPulse performs analysis in your browser. It uses localStorage for preferences
          such as theme, selected preset, and Auto-save locally status. Draft text is stored
          locally only if you manually enable Auto-save locally.
        </p>
      </section>

      <FAQ />

      <section className="mx-auto max-w-5xl px-4 pb-16 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">Accuracy disclaimer</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Estimates are provided for convenience and may vary depending on language,
            formatting, and reading speed. Use TextPulse as a practical writing aid, not as
            a guarantee of publication performance, search ranking, or editorial acceptance.
          </p>
        </div>
      </section>
    </main>
  );
}
