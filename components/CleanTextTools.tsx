"use client";

import { useState } from "react";
import { cleanText, defaultCleanTextOptions, type CaseTransform, type CleanTextOptions } from "@/lib/cleanText";

type CleanTextToolsProps = {
  text: string;
  onApply: (text: string) => void;
};

const caseOptions: { label: string; value: CaseTransform }[] = [
  { label: "Keep case", value: "none" },
  { label: "Sentence case", value: "sentence" },
  { label: "lowercase", value: "lower" },
  { label: "UPPERCASE", value: "upper" },
  { label: "Title Case", value: "title" }
];

function Checkbox({
  label,
  checked,
  onChange
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4 rounded border-slate-300 text-pulse-blue focus:ring-pulse-blue"
      />
      {label}
    </label>
  );
}

export function CleanTextTools({ text, onApply }: CleanTextToolsProps) {
  const [options, setOptions] = useState<CleanTextOptions>(defaultCleanTextOptions);

  const updateOption = <K extends keyof CleanTextOptions>(key: K, value: CleanTextOptions[K]) => {
    setOptions((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60" aria-labelledby="clean-text-title">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h3 id="clean-text-title" className="text-base font-extrabold text-slate-950 dark:text-white">
            Clean Text Tool
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Apply only the cleanup actions you choose. Changes happen locally in your browser.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onApply(cleanText(text, options))}
          className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm hover:-translate-y-0.5 hover:bg-pulse-blue dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          Apply clean-up
        </button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Checkbox
          label="Remove extra spaces"
          checked={options.removeExtraSpaces}
          onChange={(checked) => updateOption("removeExtraSpaces", checked)}
        />
        <Checkbox
          label="Remove duplicate line breaks"
          checked={options.removeDuplicateLineBreaks}
          onChange={(checked) => updateOption("removeDuplicateLineBreaks", checked)}
        />
        <Checkbox
          label="Trim lines"
          checked={options.trimLines}
          onChange={(checked) => updateOption("trimLines", checked)}
        />
        <Checkbox
          label="Fix smart quotes"
          checked={options.fixSmartQuotes}
          onChange={(checked) => updateOption("fixSmartQuotes", checked)}
        />
        <Checkbox
          label="Remove empty lines"
          checked={options.removeEmptyLines}
          onChange={(checked) => updateOption("removeEmptyLines", checked)}
        />
        <label className="grid gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200">
          Case conversion
          <select
            value={options.caseTransform}
            onChange={(event) => updateOption("caseTransform", event.target.value as CaseTransform)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
          >
            {caseOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
