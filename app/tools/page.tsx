import Link from "next/link";
import { WebPageJsonLd } from "@/components/JsonLd";
import { toolPages } from "@/lib/tools";
import { createMetadata, siteConfig } from "@/lib/seo";

const description =
  "Choose browser-based TextPulses tools for word count, SEO snippets, LinkedIn posts, speech timing, readability, keyword balance and PublishFit checks.";

export const metadata = createMetadata({
  title: "Free Writing and SEO Tools",
  description,
  path: "/tools"
});

const workflows = [
  {
    title: "For writing a blog post",
    steps: [
      "Draft the article with the reader's question in mind.",
      "Check word count, paragraph structure and readability.",
      "Review keyword balance and repeated phrases.",
      "Check the SEO title and meta description separately.",
      "Use Blog Post Readiness or PublishFit before publishing."
    ]
  },
  {
    title: "For preparing an SEO snippet",
    steps: [
      "Draft the title around the page's real intent.",
      "Check title length, scanability and repeated wording.",
      "Draft the meta description as a concise page summary.",
      "Check mobile and desktop snippet risk.",
      "Compare the final snippet with the visible page content."
    ]
  },
  {
    title: "For LinkedIn content",
    steps: [
      "Draft the post with the hook and context near the start.",
      "Check length and hook clarity.",
      "Review line breaks and scanability.",
      "Remove repeated setup or vague claims.",
      "Publish only after a manual review."
    ]
  },
  {
    title: "For speeches or scripts",
    steps: [
      "Paste only the words you plan to say aloud.",
      "Check estimated speaking time.",
      "Find long sentences that may be difficult to deliver.",
      "Add pauses or trim repeated setup.",
      "Confirm timing with a real rehearsal."
    ]
  }
];

const relatedGuides = [
  { href: "/guides/seo-title-length-guide", label: "SEO title length guide" },
  { href: "/guides/meta-description-length-checker-guide", label: "Meta description length guide" },
  { href: "/guides/linkedin-post-length-guide", label: "LinkedIn post length guide" },
  { href: "/methodology", label: "Methodology" },
  { href: "/privacy-policy", label: "Privacy Policy" }
];

const faq = [
  {
    question: "Are the tools free?",
    answer:
      "Yes. The public TextPulses tools are free to use in a browser. Ads may appear on some pages, but no new ad placements are required to run the tools."
  },
  {
    question: "Does TextPulses upload my text?",
    answer:
      "The core analysis runs in your browser. Draft text is not uploaded for word count, readability, keyword balance or PublishFit scoring. Avoid pasting highly sensitive information into any online tool."
  },
  {
    question: "Can these tools guarantee SEO results?",
    answer:
      "No. They provide practical checks for length, clarity and fit. They do not guarantee rankings, clicks, indexing, AdSense approval or search display."
  },
  {
    question: "Which tool should I use first?",
    answer:
      "Start with the tool that matches the job. Use Word Counter for draft size, SEO Title Checker for title tags, Meta Description Checker for snippets, and PublishFit when the full draft needs a channel-specific review."
  },
  {
    question: "How accurate are the estimates?",
    answer:
      "Counts and timing estimates are useful planning signals, but platforms and editors can handle edge cases differently. Use human review for accuracy, tone, facts and final publishing decisions."
  }
];

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <WebPageJsonLd title="Free Writing and SEO Tools" description={description} url={`${siteConfig.url}/tools`} />
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">TextPulses tools</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">Writing and publish readiness tools</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
        Each tool runs locally in your browser and includes a focused Publish Readiness Report for the channel you are checking.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {toolPages.map((tool) => (
          <article key={tool.slug} className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">
              <Link href={`/tools/${tool.slug}`} className="hover:text-pulse-blue">{tool.title}</Link>
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{tool.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88" aria-labelledby="choose-tool">
        <h2 id="choose-tool" className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          How to choose the right TextPulses tool
        </h2>
        <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Start with the format you are preparing, not with a score. If you are checking a full
            draft, the <Link href="/tools/word-counter" className="font-bold text-pulse-blue hover:text-pulse-violet">Word Counter</Link> is usually the first stop because it shows size, structure, reading time, speaking time and repeated phrases in one place. It is useful for articles, emails, scripts, assignments and short posts where you need to understand the shape of the text before editing.
          </p>
          <p>
            Use the <Link href="/tools/seo-title-checker" className="font-bold text-pulse-blue hover:text-pulse-violet">SEO Title Checker</Link> when the only item under review is a title tag. It helps you check length, scanability and repetition without mixing the title with body copy. Use the <Link href="/tools/meta-description-checker" className="font-bold text-pulse-blue hover:text-pulse-violet">Meta Description Checker</Link> for the companion snippet, especially when you need to keep the main benefit clear on both desktop and mobile-style previews.
          </p>
          <p>
            For social content, the <Link href="/tools/linkedin-post-checker" className="font-bold text-pulse-blue hover:text-pulse-violet">LinkedIn Post Checker</Link> focuses on hook clarity, line breaks, length and professional scanability. It is better for feed posts than a general word count alone because a short post can still be vague, and a longer post can still work when the structure is clear.
          </p>
          <p>
            Use the <Link href="/tools/speech-time-calculator" className="font-bold text-pulse-blue hover:text-pulse-violet">Speech Time Calculator</Link> for talks, voiceovers and scripts where delivery matters. The estimate is a planning aid, so a final rehearsal still matters. When you are reviewing a blog article or larger page, the Blog Post Readiness Checker and PublishFit Score bring length, readability, keyword balance, sentence flow and publication fit together. Readability, writing health and keyword density checks are supporting signals: they help you find friction, but they do not replace editorial judgement.
          </p>
        </div>
      </section>

      <section className="mt-8" aria-labelledby="recommended-workflows">
        <h2 id="recommended-workflows" className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Recommended workflows
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {workflows.map((workflow) => (
            <article key={workflow.title} className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
              <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">{workflow.title}</h3>
              <ol className="mt-4 grid list-decimal gap-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {workflow.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/80 p-6 dark:border-blue-900/60 dark:bg-blue-950/30" aria-labelledby="privacy-first-tools">
        <h2 id="privacy-first-tools" className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Privacy-first text analysis
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
          TextPulses is designed so the main analysis runs in your browser. Word counts,
          readability signals, keyword balance, cleanup actions and PublishFit scoring do not
          need a server-side text upload. That design is useful for ordinary drafts, but it is
          still sensible to avoid pasting highly sensitive information into any online tool.
          Do not paste passwords, confidential client material, legal documents, medical details,
          financial records or private academic submissions unless you have a clear reason and
          permission to do so.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Related guides
          </h2>
          <div className="mt-4 grid gap-3 text-sm font-bold">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="text-pulse-blue hover:text-pulse-violet">
                {guide.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            FAQ
          </h2>
          <div className="mt-4 grid gap-4">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-bold text-slate-950 dark:text-white">{item.question}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
