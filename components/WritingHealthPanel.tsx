import type { WritingHealth } from "@/lib/textAnalysis";

type WritingHealthPanelProps = {
  health: WritingHealth;
  publishFitScore: number;
};

const scoreDescriptions: Record<string, string> = {
  "Clarity Score": "Penalizes very long sentences and repeated adjacent words.",
  "Variety Score": "Rewards a broader mix of unique words.",
  "Keyword Balance": "Penalizes unusually high top-keyword density.",
  "Sentence Flow": "Rewards a useful mix of short and medium sentences.",
  Readability: "Based on an approximate reading ease formula.",
  PublishFit: "Channel readiness from the selected PublishFit preset."
};

function scoreTone(score: number) {
  if (score >= 82) {
    return "text-emerald-700 dark:text-emerald-300";
  }

  if (score >= 64) {
    return "text-blue-700 dark:text-blue-300";
  }

  return "text-amber-700 dark:text-amber-300";
}

export function WritingHealthPanel({ health, publishFitScore }: WritingHealthPanelProps) {
  const cards = [
    { label: "Clarity Score", score: health.clarity },
    { label: "Variety Score", score: health.variety },
    { label: "Keyword Balance", score: health.keywordBalance },
    { label: "Sentence Flow", score: health.sentenceFlow },
    { label: "Readability", score: health.readability },
    { label: "PublishFit", score: publishFitScore }
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88" aria-labelledby="writing-health-title">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pulse-blue">Writing Health</p>
          <h2 id="writing-health-title" className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Rule-based quality signals
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Scores use simple, transparent rules. They are helpful signals, not editorial verdicts.
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60"
            title={scoreDescriptions[card.label]}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200">{card.label}</h3>
              <span className={`text-xl font-black ${scoreTone(card.score)}`}>{card.score}</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pulse-blue via-pulse-violet to-pulse-green"
                style={{ width: `${card.score}%` }}
              />
            </div>
          </article>
        ))}
      </div>

      {health.warnings.length > 0 ? (
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30">
          <h3 className="text-sm font-bold text-amber-900 dark:text-amber-200">Warnings to review</h3>
          <ul className="mt-2 grid gap-1 text-sm leading-6 text-amber-900/85 dark:text-amber-100/85">
            {health.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-200">
          No major repetition, keyword, or long-sentence warnings yet.
        </div>
      )}
    </section>
  );
}
