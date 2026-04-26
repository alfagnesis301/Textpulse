import type { KeywordDensityEntry } from "@/lib/textAnalysis";

type KeywordDensityProps = {
  oneWord: KeywordDensityEntry[];
  twoWord: KeywordDensityEntry[];
  threeWord: KeywordDensityEntry[];
};

function DensityList({ title, entries }: { title: string; entries: KeywordDensityEntry[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/80">
      <h3 className="text-sm font-bold text-slate-950 dark:text-white">{title}</h3>
      {entries.length === 0 ? (
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Add more text to see phrase frequency.</p>
      ) : (
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              <tr>
                <th className="px-3 py-2">Phrase</th>
                <th className="px-3 py-2 text-right">Count</th>
                <th className="px-3 py-2 text-right">Density</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {entries.map((entry) => (
                <tr key={entry.phrase}>
                  <td className="px-3 py-2 font-semibold text-slate-800 dark:text-slate-200">{entry.phrase}</td>
                  <td className="px-3 py-2 text-right text-slate-600 dark:text-slate-400">{entry.count}</td>
                  <td className="px-3 py-2 text-right text-slate-600 dark:text-slate-400">{entry.density}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </article>
  );
}

export function KeywordDensity({ oneWord, twoWord, threeWord }: KeywordDensityProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88" aria-labelledby="keyword-density-title">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pulse-violet">Keyword density</p>
          <h2 id="keyword-density-title" className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Top words and phrase frequency
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Stop words are ignored for one-word density so repeated meaningful terms stand out faster.
        </p>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <DensityList title="One-word phrases" entries={oneWord} />
        <DensityList title="Two-word phrases" entries={twoWord} />
        <DensityList title="Three-word phrases" entries={threeWord} />
      </div>
    </section>
  );
}
