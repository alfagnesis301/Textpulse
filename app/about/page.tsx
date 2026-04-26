import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: "Learn how TextPulses helps writers check counts, readability, keyword balance, and channel fit privately in the browser.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <LegalPage
      eyebrow="About TextPulses"
      title="A practical writing utility for publish-ready drafts"
      intro="TextPulses was created for writers who need fast, private feedback before sharing text in public or professional channels."
      updated="April 26, 2026"
      sections={[
        {
          title: "Who operates TextPulses",
          body: [
            "TextPulses is an independently operated writing utility available at textpulses.com.",
            "The site can be contacted at hello@textpulses.com for support, corrections, privacy questions, business inquiries, and reports of inaccurate guidance."
          ]
        },
        {
          title: "What TextPulses does",
          body: [
            "TextPulses counts words, characters, sentences, paragraphs, lines, unique words, reading time, speaking time, handwriting time, and phrase frequency.",
            "It also adds PublishFit Score, a channel-specific readiness check for formats such as blog articles, SEO titles, meta descriptions, YouTube text, LinkedIn posts, X/Twitter posts, Instagram captions, email subjects, academic essays, and speeches."
          ]
        },
        {
          title: "How it is different",
          body: [
            "Many counters stop at totals. TextPulses connects those totals to publishing decisions so you can see whether a draft is too short, too long, repetitive, difficult to read, or ready for a specific channel.",
            "The tool is intentionally rule-based. It provides clear signals without pretending to know your audience, brand voice, search performance, or grading context."
          ]
        },
        {
          title: "How rules and guides are maintained",
          body: [
            "PublishFit rules are based on practical writing ranges, readability signals, sentence length, lexical variety, and keyword balance. They are reviewed as the product changes and should be treated as editorial guidance, not guaranteed outcomes.",
            "Educational guides are written to explain how to use counts and scores responsibly. If you spot a mistake, outdated recommendation, or unclear explanation, please report it through the contact page."
          ]
        },
        {
          title: "Privacy-first by design",
          body: [
            "Text analysis runs in your browser. TextPulses does not need a backend to calculate counts or scores, and your text is not sent to TextPulses servers for analysis.",
            "Auto-save locally is off by default. If you enable it, the draft is stored in your own browser localStorage until you clear it or disable the setting."
          ]
        }
      ]}
    />
  );
}
