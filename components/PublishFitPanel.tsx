"use client";

import type { PublishFitPresetId, PublishFitResult } from "@/lib/publishFitRules";
import { publishFitPresets } from "@/lib/publishFitRules";

type PublishFitPanelProps = {
  result: PublishFitResult;
  presetId: PublishFitPresetId;
  onPresetChange: (preset: PublishFitPresetId) => void;
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

function barTone(score: number) {
  if (score >= 82) {
    return "from-emerald-500 to-pulse-green";
  }

  if (score >= 64) {
    return "from-pulse-blue to-pulse-violet";
  }

  return "from-amber-500 to-orange-500";
}

export function PublishFitPanel({ result, presetId, onPresetChange }: PublishFitPanelProps) {
  const indicators = Object.values(result.indicators);

  return (
    <section
      id="publishfit"
      className="rounded-2xl border border-blue-100 bg-white/90 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/90 sm:p-6"
      aria-labelledby="publishfit-title"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pulse-violet">
            Unique tool
          </p>
          <h2 id="publishfit-title" className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            PublishFit Score
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            Choose a channel and TextPulse checks length, clarity, readability, keyword balance,
            and publication readiness using transparent browser-side rules.
          </p>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Channel preset
          <select
            value={presetId}
            onChange={(event) => onPresetChange(event.target.value as PublishFitPresetId)}
            className="min-w-64 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            aria-label="Choose PublishFit preset"
          >
            {publishFitPresets.map((preset) => (
              <option key={preset.id} value={preset.id}>
                {preset.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/60">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Score</p>
              <p className={`mt-1 text-5xl font-black tracking-tight ${scoreTone(result.score)}`}>
                {result.score}
              </p>
            </div>
            <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">
              {result.state}
            </div>
          </div>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${barTone(result.score)}`}
              style={{ width: `${result.score}%` }}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={result.score}
              aria-label="PublishFit score"
            />
          </div>
          <dl className="mt-5 grid gap-3 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="font-semibold text-slate-500 dark:text-slate-400">Current length</dt>
              <dd className="font-bold text-slate-950 dark:text-white">{result.measuredLabel}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500 dark:text-slate-400">Recommended limit</dt>
              <dd className="mt-1 text-slate-700 dark:text-slate-300">{result.preset.recommendedLimit}</dd>
            </div>
          </dl>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {indicators.map((item) => (
              <article key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/60">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-slate-950 dark:text-white">{item.label}</h3>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{item.status}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-pulse-blue to-pulse-violet"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <p className="mt-2 text-sm font-extrabold text-slate-950 dark:text-white">{item.score}/100</p>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/60">
            <h3 className="text-sm font-bold text-slate-950 dark:text-white">Actionable recommendations</h3>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {result.recommendations.map((recommendation) => (
                <li key={recommendation} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse-green" />
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
