import Link from "next/link";
import { WebPageJsonLd } from "@/components/JsonLd";
import { examplePages } from "@/lib/examples";
import { createMetadata, siteConfig } from "@/lib/seo";

const description =
  "Original before-and-after examples for SEO titles, meta descriptions, LinkedIn posts, email subjects, and YouTube descriptions. Check yours free in your browser.";

export const metadata = createMetadata({
  title: "Text Analysis Examples for Writers & SEOs",
  description,
  path: "/examples",
  image: "/og/examples-og.png"
});

const categories = [
  {
    title: "SEO snippets",
    body: "Titles and descriptions that need to communicate page intent quickly.",
    links: [
      { href: "/examples/seo-title-examples", label: "SEO title examples" },
      { href: "/examples/meta-description-examples", label: "Meta description examples" },
      { href: "/tools/seo-title-checker", label: "SEO Title Checker" },
      { href: "/tools/meta-description-checker", label: "Meta Description Checker" }
    ]
  },
  {
    title: "Blog writing",
    body: "Edits that make page copy more specific, useful and easier to scan.",
    links: [
      { href: "/tools/word-counter", label: "Word Counter" },
      { href: "/tools/blog-post-readiness-checker", label: "Blog Post Readiness Checker" },
      { href: "/guides/blog-post-word-count-guide", label: "Blog Post Word Count Guide" }
    ]
  },
  {
    title: "Social media posts",
    body: "Professional posts where hook clarity, line breaks and a useful takeaway matter.",
    links: [
      { href: "/examples/linkedin-post-examples", label: "LinkedIn post examples" },
      { href: "/tools/linkedin-post-checker", label: "LinkedIn Post Checker" },
      { href: "/guides/linkedin-post-length-guide", label: "LinkedIn Post Length Guide" }
    ]
  },
  {
    title: "Email and subject lines",
    body: "Short copy that needs honest urgency, clear context and a reason to open.",
    links: [
      { href: "/examples/email-subject-line-examples", label: "Email subject examples" },
      { href: "/tools/email-subject-line-checker", label: "Email Subject Line Checker" }
    ]
  },
  {
    title: "Speeches or scripts",
    body: "Drafts that need to sound clear aloud, not only look clear on screen.",
    links: [
      { href: "/tools/speech-time-calculator", label: "Speech Time Calculator" },
      { href: "/guides/speech-timing-calculator-guide", label: "Speech Timing Guide" }
    ]
  },
  {
    title: "General clarity improvements",
    body: "Edits for structure, repetition, readability and cautious claims.",
    links: [
      { href: "/tools/readability-checker", label: "Readability Checker" },
      { href: "/tools/keyword-density-checker", label: "Keyword Density Checker" },
      { href: "/methodology", label: "Methodology" }
    ]
  }
];

const safeUseItems = [
  "Do not copy examples word-for-word.",
  "Adapt the pattern to your own page, audience and purpose.",
  "Keep claims accurate and supported by the actual content.",
  "Avoid exaggeration, fake urgency and promises the page cannot prove.",
  "Check the final text manually before publishing.",
  "Use TextPulses tools as support, not as automatic decision makers."
];

export default function ExamplesIndexPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <WebPageJsonLd
        title="Text Analysis Examples for Writers & SEOs"
        description={description}
        url={`${siteConfig.url}/examples`}
        breadcrumbItems={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Examples", url: `${siteConfig.url}/examples` }
        ]}
      />
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Examples library</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">Before and after writing examples</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
        Original neutral examples written for TextPulses. Use them to compare clearer, safer, more specific edits before checking your own draft.
      </p>
      <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/80 p-6 dark:border-blue-900/60 dark:bg-blue-950/30">
        <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">How to use these examples without copying them</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          Treat these examples as editorial patterns, not templates to paste into your own site. Notice what changed: audience, page type, intent, specificity, proof level, and risk. Then rewrite your own title, description, post, subject line, or video copy around the real page and reader you are serving.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold">
          <Link href="/tools/seo-title-checker" className="text-pulse-blue">SEO Title Checker</Link>
          <Link href="/tools/meta-description-checker" className="text-pulse-blue">Meta Description Checker</Link>
          <Link href="/tools/linkedin-post-checker" className="text-pulse-blue">LinkedIn Post Checker</Link>
          <Link href="/tools/email-subject-line-checker" className="text-pulse-blue">Email Subject Line Checker</Link>
          <Link href="/tools/youtube-title-description-checker" className="text-pulse-blue">YouTube Checker</Link>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88" aria-labelledby="why-examples-help">
        <h2 id="why-examples-help" className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Why before-and-after examples help writers
        </h2>
        <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Before-and-after examples make editing decisions easier to see. A rule such as
            “make the title more specific” can sound obvious, but it is more useful when you
            can compare a vague version with a clearer version and notice exactly what changed.
            The examples in this library focus on practical changes: shorter wording, clearer
            page intent, stronger structure, safer claims, better scanability and a tone that
            fits the format.
          </p>
          <p>
            They are especially helpful for search snippets because small wording choices can
            change how a title or meta description frames the page. They also help with social
            posts, subject lines and general web copy because the same principle often applies
            across formats: put the useful context early, remove empty hype, and make the reader
            understand what they will get before asking them to act.
          </p>
          <p>
            These examples are educational, not templates to copy literally. A good edit depends
            on the real page, audience, purpose and evidence behind the claim. Use each example
            to identify the editing principle, then rewrite your own text around the facts and
            reader need you actually have.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            How to use these examples safely
          </h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {safeUseItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-pulse-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-6 dark:border-blue-900/60 dark:bg-blue-950/30">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Suggested workflow
          </h2>
          <ol className="mt-4 grid list-decimal gap-2 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <li>Read the before-and-after example.</li>
            <li>Identify what changed in clarity, length, structure or claim strength.</li>
            <li>Apply the same principle to your own draft.</li>
            <li>Check the draft with the relevant TextPulses tool.</li>
            <li>Review manually before publishing.</li>
          </ol>
        </div>
      </section>

      <section className="mt-8" aria-labelledby="example-categories">
        <h2 id="example-categories" className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Example categories
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <section key={category.title} className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
              <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{category.body}</p>
              <div className="mt-4 grid gap-2 text-sm font-bold">
                {category.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-pulse-blue hover:text-pulse-violet">
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {examplePages.map((page) => (
          <article key={page.slug} className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">
              <Link href={`/examples/${page.slug}`} className="hover:text-pulse-blue">{page.title}</Link>
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{page.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Useful next steps
        </h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold">
          <Link href="/tools" className="text-pulse-blue hover:text-pulse-violet">All tools</Link>
          <Link href="/tools/seo-title-checker" className="text-pulse-blue hover:text-pulse-violet">SEO Title Checker</Link>
          <Link href="/tools/meta-description-checker" className="text-pulse-blue hover:text-pulse-violet">Meta Description Checker</Link>
          <Link href="/tools/linkedin-post-checker" className="text-pulse-blue hover:text-pulse-violet">LinkedIn Post Checker</Link>
          <Link href="/tools/word-counter" className="text-pulse-blue hover:text-pulse-violet">Word Counter</Link>
          <Link href="/methodology" className="text-pulse-blue hover:text-pulse-violet">Methodology</Link>
          <Link href="/editorial-policy" className="text-pulse-blue hover:text-pulse-violet">Editorial Policy</Link>
        </div>
      </section>
    </main>
  );
}
