import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Read the TextPulses privacy policy, including browser-based analysis, localStorage use, contact forms, Google AdSense, and advertising cookies.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="This policy explains how TextPulses handles text, preferences, browser storage, contact submissions, advertising, and third-party services."
      updated="April 26, 2026"
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
          title: "Contact forms and email",
          body: [
            "If you contact TextPulses by email or through the contact form, your name, email address, message, and related technical metadata may be processed so we can receive, review, and respond to the request.",
            "Contact form submissions are handled by Netlify Forms. Email delivery or forwarding may also involve Cloudflare Email Routing and the email provider used by the site operator."
          ]
        },
        {
          title: "Google AdSense and advertising cookies",
          body: [
            "TextPulses may display advertisements through Google AdSense or related Google advertising services. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.",
            "Google's use of advertising cookies enables Google and its partners to serve ads to users based on visits to TextPulses and/or other sites on the Internet. Other third-party vendors or ad networks may also use cookies or similar technologies to serve ads, measure performance, prevent fraud, limit frequency, and support ad delivery.",
            "Users can opt out of personalized advertising by visiting Google's Ads Settings at https://adssettings.google.com. Users may also learn about opting out of some third-party vendors' personalized advertising by visiting https://www.aboutads.info."
          ]
        },
        {
          title: "Consent in the UK, EEA, and Switzerland",
          body: [
            "Where required by law, TextPulses should request consent before using non-essential cookies or similar technologies. For visitors in the EEA, the UK, and Switzerland, personalized ads served through Google publisher products require a Google-certified consent management platform that integrates with the IAB Transparency and Consent Framework.",
            "If a consent banner or consent management platform is shown, users should be able to make clear choices about advertising cookies, analytics cookies, and other non-essential technologies."
          ]
        },
        {
          title: "Service providers",
          body: [
            "TextPulses may rely on hosting, domain, DNS, security, form handling, analytics, email, advertising, and deployment providers to operate the site. These providers process data according to their own terms and privacy policies.",
            "Current operational providers may include Netlify for hosting and forms, Cloudflare for DNS and email routing, GitHub for source hosting, and Google if AdSense or other Google services are enabled."
          ]
        },
        {
          title: "Contact",
          body: [
            "For privacy questions, contact hello@textpulses.com.",
            "Because TextPulses is a browser-based writing utility, please avoid sending sensitive private drafts through the contact form."
          ]
        }
      ]}
    />
  );
}
