import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Disclaimer",
  description: "Read the TextPulses disclaimer for writing estimates, readability metrics, keyword analysis, and PublishFit Score.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Disclaimer"
      title="Disclaimer"
      intro="TextPulses is a practical writing aid. It provides estimates and signals, not guarantees."
      updated="April 27, 2026"
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
            "TextPulses can help surface issues quickly, but it cannot understand every audience, assignment, legal requirement, brand guideline, or cultural context.",
            "Review important text manually and seek qualified advice where accuracy, compliance, or risk matters."
          ]
        },
        {
          title: "Advertising and external links",
          body: [
            "TextPulses may display advertisements or link to third-party resources. Advertisement labels, external links, and third-party tools do not imply endorsement.",
            "Users should evaluate third-party products, services, and claims independently before relying on them."
          ]
        }
      ]}
    />
  );
}
