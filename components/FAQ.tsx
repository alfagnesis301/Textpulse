const faqs = [
  {
    question: "Is TextPulses free to use?",
    answer:
      "Yes. TextPulses is a free writing utility designed for quick word counts, character counts, readability checks, keyword density review, and PublishFit scoring."
  },
  {
    question: "Does TextPulses send my text to a server?",
    answer:
      "No. The analyzer runs in your browser. Your text is not transmitted to TextPulses servers for counting or scoring."
  },
  {
    question: "What is PublishFit Score?",
    answer:
      "PublishFit Score is a rule-based readiness score that compares your text against practical ranges for formats like blog posts, SEO titles, meta descriptions, social posts, email subjects, essays, and speeches."
  },
  {
    question: "Are readability scores exact?",
    answer:
      "No. Readability and timing values are estimates for convenience. They can vary by language, formatting, reading speed, audience, and delivery style."
  },
  {
    question: "Can I use TextPulses for SEO writing?",
    answer:
      "Yes. You can check title length, meta description length, keyword balance, overused phrases, and general clarity before publishing."
  },
  {
    question: "Can TextPulses replace an editor or teacher?",
    answer:
      "No. It can highlight useful signals, but human judgment is still important for accuracy, tone, originality, and context."
  },
  {
    question: "What happens if I enable Auto-save locally?",
    answer:
      "TextPulses stores your current text in your own browser localStorage. It is not uploaded, but anyone with access to the same browser profile may be able to see it."
  },
  {
    question: "Will this site show ads?",
    answer:
      "The layout includes clearly labeled advertisement placements for future AdSense use. They should only be activated after approval and with the appropriate privacy and consent setup."
  }
];

export function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8" id="faq">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">FAQ</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Practical answers before you paste a draft
        </h2>
      </div>
      <div className="mt-10 grid gap-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/82"
          >
            <summary className="cursor-pointer list-none text-base font-bold text-slate-950 marker:hidden dark:text-white">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-700 group-open:rotate-45 dark:bg-slate-800 dark:text-slate-300">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
