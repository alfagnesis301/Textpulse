type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, updated, sections }: LegalPageProps) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">{intro}</p>
      {updated ? (
        <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
          Last updated: {updated}
        </p>
      ) : null}

      <div className="mt-10 grid gap-6">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/88"
          >
            <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">{section.title}</h2>
            <div className="mt-3 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
