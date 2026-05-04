"use client";
import { useState } from "react";

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  limit: number;
  optimal: number;
  placeholder: string;
  hint: string;
  rows?: number;
};

function LengthField({ id, label, value, onChange, limit, optimal, placeholder, hint, rows = 2 }: FieldProps) {
  const len = value.length;
  const pct = Math.min(100, (len / limit) * 100);
  const status =
    len === 0 ? "empty" : len <= optimal ? "good" : len <= limit ? "warn" : "over";

  const barColor =
    status === "good"
      ? "bg-emerald-500"
      : status === "warn"
      ? "bg-amber-400"
      : status === "over"
      ? "bg-red-500"
      : "bg-slate-200 dark:bg-slate-700";

  const countColor =
    status === "good"
      ? "text-emerald-700 dark:text-emerald-300"
      : status === "warn"
      ? "text-amber-600 dark:text-amber-300"
      : status === "over"
      ? "text-red-600 dark:text-red-400"
      : "text-slate-500 dark:text-slate-400";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-base font-extrabold text-slate-950 dark:text-white">
          {label}
        </label>
        <span className={`text-sm font-bold tabular-nums ${countColor}`} aria-live="polite">
          {len} / {limit}
        </span>
      </div>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{hint}</p>

      <div className="relative mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className={`h-2 rounded-full transition-all duration-200 ${barColor}`}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={len}
          aria-valuemax={limit}
          aria-label={`${label} character count progress`}
        />
        <span
          className="absolute top-0 h-2 border-l-2 border-dashed border-slate-400/60 dark:border-slate-500/60"
          style={{ left: `${(optimal / limit) * 100}%` }}
          title={`Recommended max: ${optimal} characters`}
        />
      </div>

      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="mt-3 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-950 placeholder:text-slate-400 focus:border-pulse-blue focus:outline-none focus:ring-1 focus:ring-pulse-blue dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
      />

      {status === "over" && (
        <p className="mt-2 text-xs font-semibold text-red-600 dark:text-red-400" role="alert">
          {len - limit} characters over limit — Google may truncate this in search results.
        </p>
      )}
      {status === "good" && len > 0 && (
        <p className="mt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
          ✓ Good length — within the recommended range.
        </p>
      )}
      {status === "warn" && (
        <p className="mt-2 text-xs font-semibold text-amber-600 dark:text-amber-300">
          Approaching the limit — verify Google does not truncate.
        </p>
      )}
    </div>
  );
}

export function SeoSnippetChecker() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <section
      id="seo-checker"
      className="border-b border-slate-200 bg-white/60 py-12 dark:border-slate-800 dark:bg-slate-950/50"
      aria-labelledby="seo-checker-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">
            SEO Snippet Checker
          </p>
          <h2
            id="seo-checker-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
          >
            Check SEO title and meta description length
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
            Google typically shows the first{" "}
            <strong className="font-bold text-slate-800 dark:text-slate-200">50–60 characters</strong>{" "}
            of a title tag and up to{" "}
            <strong className="font-bold text-slate-800 dark:text-slate-200">160 characters</strong>{" "}
            of a meta description. Paste your text below to check the length in real time. The
            bar turns red when you exceed the recommended limit.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <LengthField
            id="seo-title-input"
            label="SEO Title Tag"
            value={title}
            onChange={setTitle}
            limit={60}
            optimal={55}
            placeholder="Paste your page title here…"
            hint="Ideal: 50–60 characters. Titles longer than 60 chars may be cut off by Google."
            rows={2}
          />
          <LengthField
            id="seo-meta-description-input"
            label="Meta Description"
            value={description}
            onChange={setDescription}
            limit={160}
            optimal={150}
            placeholder="Paste your meta description here…"
            hint="Ideal: 140–160 characters. Descriptions longer than 160 chars may be truncated."
            rows={3}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" aria-hidden="true" />
            Within ideal range
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-amber-400" aria-hidden="true" />
            Approaching limit
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
            Over limit — may be truncated
          </span>
        </div>
      </div>
    </section>
  );
}
