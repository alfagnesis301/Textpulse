import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Editorial Policy",
  description: "How TextPulses writes, reviews, tests, and corrects editorial guidance and browser-side tool calculations.",
  path: "/editorial-policy"
});

export default function EditorialPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Trust and review</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">Editorial Policy</h1>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
        TextPulses recommendations are practical editorial signals. They are not SEO, academic, legal, financial, medical, or professional guarantees.
      </p>
      <p className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Last updated: May 14, 2026</p>
      <div className="mt-8 grid gap-6">
        {[
          ["Who writes TextPulses content", "TextPulses content is written and reviewed by TextPulses Editorial for writers, site owners, marketers, students, and creators who need practical drafting checks."],
          ["How guidance is reviewed", "Pages are reviewed for originality, usefulness, cautious language, internal consistency, and alignment with the published methodology."],
          ["How tool calculations are tested", "Calculations are tested with short drafts, long drafts, headings, bullets, URLs, emoji, copied formatting, dense paragraphs, and repeated phrases."],
          ["Correction workflow", "When a user reports unclear guidance, a broken route, or a calculation issue, we review the affected page or rule, compare it with the methodology, make a scoped correction when needed, and update related internal links or notes where the correction changes user guidance."],
          ["How we avoid low-value content", "TextPulses avoids publishing empty, duplicated, or search-only pages. Tool pages should include a real browser-side function, original examples, practical mistakes, specific FAQs, methodology links, and cautious explanations that help a reader make a better editing decision."],
          ["Advertising and editorial independence", "Advertising status does not determine tool scores, guide recommendations, examples, or editorial conclusions. AdSense approval, ad revenue, rankings, engagement, academic grades, and professional outcomes are not guaranteed by any TextPulses page."],
          ["What TextPulses does not guarantee", "TextPulses does not guarantee search rankings, ad approval, engagement, academic grading, legal accuracy, platform display, or professional outcomes."],
          ["How users can report corrections", "Send corrections, privacy questions, or editorial notes through the contact page or by email at hello@textpulses.com."]
        ].map(([title, body]) => (
          <section key={title} className="rounded-2xl border border-slate-200 bg-white/88 p-5 dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{body}</p>
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm font-bold"><Link href="/methodology" className="text-pulse-blue">Methodology</Link> · <Link href="/privacy-policy" className="text-pulse-blue">Privacy Policy</Link> · <Link href="/contact" className="text-pulse-blue">Contact</Link></p>
    </main>
  );
}
