import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms",
  description: "Read the terms for using TextPulses, a free browser-based writing analysis utility.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="These terms describe the basic conditions for using TextPulses. If you do not agree with them, please do not use the site."
      sections={[
        {
          title: "Use of the service",
          body: [
            "TextPulses is provided as a free writing utility for counting, estimating, cleaning, and reviewing text.",
            "You are responsible for the text you paste, write, download, copy, publish, submit, or otherwise use after reviewing it with TextPulses."
          ]
        },
        {
          title: "No professional advice",
          body: [
            "TextPulses provides informational writing signals. It does not provide legal, academic, editorial, search ranking, marketing, or professional advice.",
            "You should review important work yourself or with a qualified professional before relying on it."
          ]
        },
        {
          title: "Acceptable use",
          body: [
            "Do not attempt to disrupt, reverse engineer, overload, or misuse the site.",
            "Do not use TextPulses in a way that violates applicable laws, infringes the rights of others, or interferes with other users."
          ]
        },
        {
          title: "Availability and changes",
          body: [
            "TextPulses may change, improve, pause, or remove features over time.",
            "The site is provided on an as-is and as-available basis without a guarantee that every metric will be available or error-free at all times."
          ]
        }
      ]}
    />
  );
}
