import { ContactForm } from "@/components/ContactForm";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact TextPulses",
  description:
    "Contact TextPulses for support, feedback, corrections, privacy questions, business inquiries, or technical issues.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Contact</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        Contact TextPulses
      </h1>
      <div className="mt-5 grid gap-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
        <p>
          Use this page to contact TextPulses about support, feedback, corrections, privacy
          questions, business inquiries, or technical issues.
        </p>
        <p>
          TextPulses is a browser-based writing utility. The main analyzer is designed so your
          draft does not need to be uploaded for word count, readability, keyword density, or
          PublishFit scoring.
        </p>
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
        Email:{" "}
        <a className="text-pulse-blue hover:underline" href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
      </p>

      <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/60 dark:bg-amber-950/30">
        <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">Before you send</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          Please do not send sensitive private drafts, passwords, personal documents,
          confidential client work, medical information, legal documents, or financial
          information through this form.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
        <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">What to include</h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {[
            "The page where you found the issue.",
            "What you expected to happen.",
            "What actually happened.",
            "Your browser and device type if the issue is technical.",
            "A short example only if it is safe to share."
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-pulse-green" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <ContactForm />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
        <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">Corrections</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          If you believe a guide contains unclear or outdated advice, include the page URL and
          the section that needs review. TextPulses aims to keep its writing guidance practical,
          transparent, and easy to understand.
        </p>
      </section>
    </main>
  );
}
