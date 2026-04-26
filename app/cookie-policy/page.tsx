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
      intro="This policy explains the browser storage currently used by TextPulses and how cookies may be used if optional services are added in the future."
      sections={[
        {
          title: "Current storage",
          body: [
            "TextPulses uses localStorage for product preferences such as light or dark mode, selected PublishFit preset, and Auto-save locally status.",
            "Draft text is not stored unless you manually enable Auto-save locally. When that setting is off, TextPulses removes the saved local draft key."
          ]
        },
        {
          title: "Essential and preference storage",
          body: [
            "Preference storage helps keep the tool comfortable to use. For example, the site can remember your selected theme or chosen PublishFit preset.",
            "These preferences are stored in your own browser and can usually be cleared through your browser settings."
          ]
        },
        {
          title: "Future advertising cookies",
          body: [
            "If Google AdSense or similar advertising is activated, advertising partners may use cookies or similar technologies to deliver, measure, limit, and personalize ads where allowed.",
            "Ad placements should remain clearly labeled and separate from navigation, downloads, form submissions, or primary tool actions."
          ]
        },
        {
          title: "Consent management",
          body: [
            "For visitors in regions such as the UK, EU, and EEA, non-essential advertising or analytics cookies may require consent before use.",
            "TextPulses includes space in the policy and codebase to add a consent management platform or cookie banner before non-essential third-party scripts are enabled."
          ]
        }
      ]}
    />
  );
}
