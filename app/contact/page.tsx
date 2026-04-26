import { ContactForm } from "@/components/ContactForm";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact TextPulses for support, feedback, business inquiries, or product questions.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Contact</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        Get in touch
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
        For support, feedback, or business inquiries, contact us. This form creates an
        email in your mail app and does not submit data to a TextPulses backend.
      </p>
      <p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
        Email: <a className="text-pulse-blue hover:underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
      </p>
      <ContactForm />
    </main>
  );
}
