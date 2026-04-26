import { LegalPage } from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "Learn how TextPulses uses browser storage and how cookies may be used if advertising or analytics are added.",
  path: "/cookie-policy"
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Cookie Policy"
      title="Cookie Policy"
      intro="This policy explains how TextPulses uses browser storage, cookies, advertising technologies, and consent controls."
      updated="April 26, 2026"
      sections={[
        {
          title: "Preference storage",
          body: [
            "TextPulses uses localStorage for product preferences such as light or dark mode, selected PublishFit preset, and Auto-save locally status.",
            "Draft text is not stored unless you manually enable Auto-save locally. When that setting is off, TextPulses removes the saved local draft key."
          ]
        },
        {
          title: "Essential and functional technologies",
          body: [
            "Some technologies are needed for the site to work, protect submissions, remember user choices, or keep the tool usable. These may include hosting, security, form handling, and local preference storage.",
            "You can usually clear localStorage and cookies through your browser settings. Clearing them may reset preferences such as theme or Auto-save locally."
          ]
        },
        {
          title: "Google AdSense and advertising cookies",
          body: [
            "TextPulses may display ads through Google AdSense. Google and other advertising partners may use cookies, web beacons, or similar technologies to deliver ads, personalize ads where permitted, measure ad performance, prevent fraud, limit ad frequency, and improve advertising systems.",
            "Google advertising cookies can allow Google and its partners to serve ads based on visits to TextPulses and other websites. Users can manage personalized ads through Google's Ads Settings at https://adssettings.google.com.",
            "Ad placements on TextPulses should remain clearly labeled and separate from navigation, downloads, form submissions, or primary tool actions."
          ]
        },
        {
          title: "Consent management",
          body: [
            "For visitors in regions such as the UK, EEA, and Switzerland, non-essential advertising or analytics cookies may require consent before use.",
            "Before serving personalized Google ads to users in the EEA, the UK, or Switzerland, TextPulses should use a Google-certified consent management platform that integrates with the IAB Transparency and Consent Framework."
          ]
        },
        {
          title: "How to control cookies",
          body: [
            "You can block, delete, or limit cookies in your browser settings. You can also manage personalized advertising choices through Google Ads Settings and supported industry opt-out tools such as aboutads.info.",
            "Blocking some technologies may affect preferences, form protection, or ad relevance, but the core text analyzer is designed to work without sending private drafts to a server."
          ]
        }
      ]}
    />
  );
}
