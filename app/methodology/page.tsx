import Link from "next/link";
import { FaqJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { createMetadata, siteConfig } from "@/lib/seo";

const description =
  "Learn how TextPulses calculates word count, character count, reading time, keyword density, readability and PublishFit Score using transparent browser-side rules.";

export const metadata = createMetadata({
  title: "How TextPulses Calculates Word Count, Readability and PublishFit",
  description,
  path: "/methodology"
});

const sections = [
  {
    title: "Word count",
    body: [
      "TextPulses counts words by identifying practical word-like units in the text. In most everyday writing, this means groups of letters or numbers separated by spaces, punctuation, or line breaks.",
      "Word counting can vary between tools because different platforms treat edge cases differently. One editor may count a hyphenated phrase as one word, while another may count it as two. Some systems treat URLs, email addresses, emojis, symbols, or copied formatting differently.",
      "TextPulses is built for practical drafting decisions. It helps you stay consistent while writing, but if you are submitting work to a school, client, publisher, or platform with strict requirements, confirm the final count inside the destination system."
    ]
  },
  {
    title: "Character count",
    body: [
      "TextPulses shows characters including spaces and characters excluding whitespace. Character counts are useful for SEO titles, meta descriptions, social media posts, captions, email subjects, and any format where space is limited.",
      "The count includes visible letters, numbers, punctuation, and symbols. The version excluding whitespace helps you understand the density of the draft without spaces and line breaks."
    ]
  },
  {
    title: "Sentence, paragraph, and line count",
    body: [
      "Sentence count is estimated by detecting common sentence-ending punctuation and text patterns. This supports average sentence length and long sentence warnings, but abbreviations, initials, decimals, bullet points, headings, and informal punctuation can affect the result.",
      "Paragraphs are usually detected by blank lines or clear text breaks. Lines are detected by visible line breaks. These signals help identify whether a draft is scannable instead of presented as one large block."
    ]
  },
  {
    title: "Reading, speaking, and handwriting time",
    body: [
      "Reading time is estimated with an average reading speed. Speaking time uses a slower words-per-minute rate because spoken scripts need pauses, transitions, and breathing room. Handwriting time uses a much slower pace for handwritten notes, assignments, flashcards, or careful drafts.",
      "Timing estimates vary by audience, language, topic complexity, device, delivery style, and purpose. Treat them as planning guidance, not a promise."
    ]
  },
  {
    title: "Keyword density",
    body: [
      "Keyword density shows how often repeated terms or phrases appear in a draft. TextPulses highlights common one-word, two-word, and three-word phrases so writers can spot repetition.",
      "The goal is not to force a perfect keyword percentage. Natural writing usually works better when the main topic is clear but not repeated unnaturally. If the same phrase appears too often, consider related terms, clearer examples, or more specific sections."
    ]
  },
  {
    title: "Readability",
    body: [
      "Readability signals estimate how easy or difficult a draft may feel based on sentence length, word patterns, and text structure. TextPulses uses readability as a practical writing signal, not as a formal grade.",
      "Readability scores are limited. They do not understand your audience, brand voice, argument, or whether the information is factually correct. A simple sentence can still be wrong, and a complex sentence can be appropriate for expert readers."
    ]
  },
  {
    title: "PublishFit Score",
    body: [
      "PublishFit Score compares the draft with the expectations of a selected channel. A meta description, blog article, email subject, LinkedIn post, speech script, and academic essay should not be judged by the same rules.",
      "The score combines length fit, clarity, readability, keyword balance, sentence flow, lexical variety, and publication readiness for the selected format. A high score means the draft fits the selected rule set reasonably well. It does not guarantee search rankings, social engagement, conversions, grades, or publication acceptance."
    ]
  },
  {
    title: "Why presets matter",
    body: [
      "A 150-character text may be strong as a meta description but weak as a LinkedIn post. A 900-word article may be useful for a focused tutorial but too short for a deep comparison. A 45-character phrase may be a good SEO title but too long for some email inbox previews.",
      "That is why TextPulses asks you to choose a channel before judging readiness. The selected preset changes the length expectations and recommendations."
    ]
  },
  {
    title: "Privacy-first analysis",
    body: [
      "TextPulses is designed so the main text analysis happens in your browser. Your draft does not need to be uploaded to TextPulses servers for counting or scoring.",
      "If Auto-save locally is turned off, TextPulses does not intentionally store your draft text. If you turn Auto-save locally on, the draft may be saved in your own browser storage on that device. Avoid enabling it on shared devices."
    ]
  },
  {
    title: "Limitations",
    body: [
      "TextPulses provides estimates and writing signals. It does not verify facts, check plagiarism, guarantee SEO performance, guarantee AdSense approval, replace professional editing, replace academic review, or understand every language and formatting edge case perfectly.",
      "Use the results as a revision checklist. The best final decision still comes from human judgment."
    ]
  }
];

const faq = [
  {
    question: "Does TextPulses use AI to analyze my draft?",
    answer:
      "No. The core analyzer uses browser-side rules for counting, readability, keyword balance, timing, and PublishFit scoring."
  },
  {
    question: "Is the word count always identical to Google Docs, Microsoft Word, or a CMS?",
    answer:
      "No. Different tools handle hyphenated words, URLs, symbols, emojis, headings, comments, and copied formatting differently."
  },
  {
    question: "Can PublishFit predict rankings or engagement?",
    answer:
      "No. PublishFit estimates format readiness. It does not predict rankings, clicks, shares, conversions, or grades."
  },
  {
    question: "Does TextPulses store my text?",
    answer:
      "The main analysis runs in your browser. Draft text is not sent to TextPulses servers for analysis. If you enable Auto-save locally, your draft may be saved in your own browser storage on that device."
  },
  {
    question: "Why does the score change when I switch presets?",
    answer:
      "Each channel has different expectations. A good email subject, meta description, blog article, and speech script require different length, structure, and clarity signals."
  },
  {
    question: "Should I always aim for 100?",
    answer:
      "No. A useful draft does not need a perfect score. Use the recommendations to improve obvious issues, then rely on human judgment for accuracy, tone, originality, and context."
  }
];

export default function MethodologyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <WebPageJsonLd
        title="How TextPulses Calculates Writing Signals"
        description={description}
        url={`${siteConfig.url}/methodology`}
      />
      <FaqJsonLd items={faq} />

      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Methodology</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        How TextPulses Calculates Writing Signals
      </h1>
      <div className="mt-5 grid gap-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
        <p>
          TextPulses is designed to help writers understand a draft before they publish, submit,
          send, or share it. The tool combines basic text statistics with practical publishing
          signals such as readability, keyword balance, estimated timing, and PublishFit Score.
        </p>
        <p>
          The goal is not to replace an editor, teacher, SEO specialist, or human reviewer.
          TextPulses gives fast, transparent signals that help you spot obvious issues: a draft
          may be too short for a blog post, too long for a meta description, too repetitive for
          natural reading, or too dense for the intended audience.
        </p>
        <p>
          All core analysis runs in your browser. The text you paste into the editor is processed
          locally for counts and scoring. TextPulses does not need to send your draft to a server
          to calculate the main writing signals.
        </p>
      </div>

      <div className="mt-10 grid gap-6">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88"
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              {section.title}
            </h2>
            <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700 dark:text-slate-300">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/80 p-6 dark:border-blue-900/60 dark:bg-blue-950/30">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Practical example
        </h2>
        <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Imagine you paste a 420-word article draft and select the Blog Article preset.
            TextPulses may show that the draft is readable but thin for an evergreen blog
            post. Instead of adding filler, you could improve the article by adding a short
            example, a comparison table, common mistakes, and a FAQ section.
          </p>
          <p>
            Now imagine you paste the same 420 words and select LinkedIn Post. The score may
            change because LinkedIn posts usually do not need the same depth as a blog article.
            The correct channel matters.
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          How to use TextPulses responsibly
        </h2>
        <ul className="mt-4 grid gap-3 text-base leading-7 text-slate-700 dark:text-slate-300">
          {[
            "Check whether the draft is too short or too long for the format.",
            "Review sentence length before publishing dense sections.",
            "Look for repeated keywords that make the text feel mechanical.",
            "Use paragraph and line counts to improve scanning.",
            "Treat every score as a revision prompt, not a guarantee."
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-pulse-green" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          FAQ
        </h2>
        <div className="mt-4 grid gap-4">
          {faq.map((item) => (
            <div key={item.question}>
              <h3 className="font-bold text-slate-950 dark:text-white">{item.question}</h3>
              <p className="mt-1 leading-7 text-slate-700 dark:text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Continue exploring
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            { href: "/", label: "Use the analyzer" },
            { href: "/guides", label: "Read writing guides" },
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/contact", label: "Contact TextPulses" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-pulse-blue hover:text-pulse-blue dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
