import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Read the TextPulses privacy policy, including browser-based analysis, localStorage use, and future advertising considerations.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="This policy explains how TextPulses handles text, preferences, browser storage, and future advertising integrations."
      sections={[
        {
          title: "Text analysis stays in your browser",
          body: [
            "TextPulses performs word counts, character counts, readability estimates, keyword density checks, cleanup actions, and PublishFit scoring in the browser.",
            "The text you paste or write into the editor is not sent to TextPulses servers for analysis. The application is designed so the main analysis features can run without a backend."
          ]
        },
        {
          title: "LocalStorage use",
          body: [
            "TextPulses may use localStorage for preferences such as theme, selected PublishFit preset, and whether Auto-save locally is enabled.",
            "Auto-save locally is disabled by default. If you turn it on, your draft text may be stored in your browser localStorage on that device. Disable Auto-save locally or use Clear to remove the saved draft."
          ]
        },
        {
          title: "Contact information",
          body: [
            "If you contact TextPulses by email, your email address and message are handled by the email services involved in that communication.",
            "The contact form on this site creates a mailto email. It does not submit your message to a TextPulses backend."
          ]
        },
        {
          title: "Advertising and third parties",
          body: [
            "The site includes clearly labeled advertisement placeholders for future Google AdSense use. Until real ad code is added, these placeholders do not display third-party ads.",
            "If AdSense or similar advertising is activated in the future, Google and other advertising partners may use cookies or similar technologies for ad delivery, measurement, fraud prevention, and personalization where permitted by law and consent settings."
          ]
        },
        {
          title: "Consent in the UK, EU, and EEA",
          body: [
            "If advertising, analytics, or other non-essential tracking is enabled, TextPulses should integrate a consent management platform or cookie banner appropriate for visitors in the UK, EU, EEA, and other regions with similar requirements.",
            "Users should be able to make clear choices about non-essential cookies before they are used."
          ]
        }
      ]}
    />
  );
}
