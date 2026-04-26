import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Disclaimer",
  description: "Read the TextPulse disclaimer for writing estimates, readability metrics, keyword analysis, and PublishFit Score.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Disclaimer"
      title="Disclaimer"
      intro="TextPulse is a practical writing aid. It provides estimates and signals, not guarantees."
      sections={[
        {
          title: "Approximate metrics",
          body: [
            "Estimates are provided for convenience and may vary depending on language, formatting, and reading speed.",
            "Word counts, sentence counts, readability estimates, and timing estimates may differ from other tools because different tools use different parsing rules."
          ]
        },
        {
          title: "PublishFit Score limitations",
          body: [
            "PublishFit Score is based on transparent rules such as length ranges, sentence length, lexical variety, keyword balance, and readability estimates.",
            "It does not predict search rankings, social engagement, academic grades, email open rates, or editorial acceptance."
          ]
        },
        {
          title: "Human review still matters",
          body: [
            "TextPulse can help surface issues quickly, but it cannot understand every audience, assignment, legal requirement, brand guideline, or cultural context.",
            "Review important text manually and seek qualified advice where accuracy, compliance, or risk matters."
          ]
        }
      ]}
    />
  );
}
