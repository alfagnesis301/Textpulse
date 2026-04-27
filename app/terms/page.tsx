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
      updated="April 27, 2026"
      sections={[
        {
          title: "Operator and contact",
          body: [
            "TextPulses is an independently operated browser-based writing utility available at textpulses.com.",
            "For support, business inquiries, legal notices, or policy questions, contact hello@textpulses.com."
          ]
        },
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
          title: "Intellectual property",
          body: [
            "The TextPulses name, interface, logo, original copy, guides, and software are protected by applicable intellectual property laws unless otherwise stated.",
            "You retain responsibility for and ownership of text you create or paste into the tool. TextPulses does not claim ownership of your drafts."
          ]
        },
        {
          title: "Advertising and third-party services",
          body: [
            "TextPulses may display clearly labeled advertisements or use third-party services for hosting, forms, email routing, security, analytics, or advertising.",
            "Third-party services operate under their own terms and privacy policies. TextPulses is not responsible for third-party websites, services, or advertisements."
          ]
        },
        {
          title: "Limitation of liability",
          body: [
            "TextPulses is provided for convenience on an as-is and as-available basis. Metrics, scores, recommendations, and estimates may be inaccurate, incomplete, or unsuitable for a particular purpose.",
            "To the maximum extent permitted by law, TextPulses and its operator will not be liable for losses arising from use of the site, reliance on its estimates, publication decisions, missed requirements, data loss, downtime, or third-party services."
          ]
        },
        {
          title: "Availability and changes",
          body: [
            "TextPulses may change, improve, pause, or remove features over time.",
            "The site is provided on an as-is and as-available basis without a guarantee that every metric will be available or error-free at all times."
          ]
        },
        {
          title: "Governing law",
          body: [
            "These terms are governed by the laws of England and Wales, unless mandatory local consumer law requires otherwise.",
            "Because TextPulses is available internationally, users are responsible for complying with local laws that apply to their use of the site."
          ]
        },
        {
          title: "Changes to these terms",
          body: [
            "TextPulses may update these terms as the site, legal requirements, or third-party services change.",
            "The Last updated date shows when this page was most recently revised."
          ]
        }
      ]}
    />
  );
}
