import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: "Learn how TextPulse helps writers check counts, readability, keyword balance, and channel fit privately in the browser.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <LegalPage
      eyebrow="About TextPulse"
      title="A practical writing utility for publish-ready drafts"
      intro="TextPulse was created for writers who need fast, private feedback before sharing text in public or professional channels."
      sections={[
        {
          title: "What TextPulse does",
          body: [
            "TextPulse counts words, characters, sentences, paragraphs, lines, unique words, reading time, speaking time, handwriting time, and phrase frequency.",
            "It also adds PublishFit Score, a channel-specific readiness check for formats such as blog articles, SEO titles, meta descriptions, YouTube text, LinkedIn posts, X/Twitter posts, Instagram captions, email subjects, academic essays, and speeches."
          ]
        },
        {
          title: "How it is different",
          body: [
            "Many counters stop at totals. TextPulse connects those totals to publishing decisions so you can see whether a draft is too short, too long, repetitive, difficult to read, or ready for a specific channel.",
            "The tool is intentionally rule-based. It provides clear signals without pretending to know your audience, brand voice, search performance, or grading context."
          ]
        },
        {
          title: "Privacy-first by design",
          body: [
            "Text analysis runs in your browser. TextPulse does not need a backend to calculate counts or scores, and your text is not sent to TextPulse servers for analysis.",
            "Auto-save locally is off by default. If you enable it, the draft is stored in your own browser localStorage until you clear it or disable the setting."
          ]
        }
      ]}
    />
  );
}
