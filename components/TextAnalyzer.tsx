"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { CleanTextTools } from "@/components/CleanTextTools";
import { KeywordDensity } from "@/components/KeywordDensity";
import { MetricsCard } from "@/components/MetricsCard";
import { PublishFitPanel } from "@/components/PublishFitPanel";
import { WritingHealthPanel } from "@/components/WritingHealthPanel";
import { analyzeText } from "@/lib/textAnalysis";
import { evaluatePublishFit, type PublishFitPresetId } from "@/lib/publishFitRules";

const TEXT_STORAGE_KEY = "textpulse-local-draft";
const AUTOSAVE_STORAGE_KEY = "textpulse-autosave";
const THEME_STORAGE_KEY = "textpulse-theme";
const PRESET_STORAGE_KEY = "textpulse-publishfit-preset";

const sampleText = `TextPulse helps writers move from rough draft to publish-ready copy with clearer signals. A simple count is useful, but publishing decisions often need more context: length, readability, repetition, keyword balance, and fit for the channel.

Before sending an email, publishing a blog post, or writing a social caption, paste the text into the editor and review the recommendations. The analysis runs in the browser, so private drafts stay on your device unless you choose to save them locally.`;

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  ariaLabel?: string;
};

function Button({ children, onClick, disabled, variant = "secondary", ariaLabel }: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-pulse-blue to-pulse-violet text-white shadow-glow hover:-translate-y-0.5",
    secondary:
      "border border-slate-200 bg-white text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-pulse-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
    ghost:
      "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`rounded-2xl px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-45 ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

function Toggle({
  label,
  checked,
  onChange
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
    >
      <span
        className={`relative h-5 w-9 rounded-full ${checked ? "bg-pulse-blue" : "bg-slate-300 dark:bg-slate-700"}`}
        aria-hidden="true"
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow ${checked ? "left-4" : "left-0.5"}`}
        />
      </span>
      {label}
    </button>
  );
}

function formatMinutes(minutes: number) {
  if (minutes <= 0) {
    return "0 min";
  }

  if (minutes < 1) {
    return "<1 min";
  }

  return `${minutes.toFixed(1)} min`;
}

function compactSentence(text: string) {
  if (text.length <= 96) {
    return text;
  }

  return `${text.slice(0, 94)}...`;
}

export function TextAnalyzer() {
  const [text, setText] = useState("");
  const [autoSave, setAutoSave] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [presetId, setPresetId] = useState<PublishFitPresetId>("blog");
  const [showCleanTools, setShowCleanTools] = useState(false);
  const [actionStatus, setActionStatus] = useState("");
  const [hydrated, setHydrated] = useState(false);

  const analysis = useMemo(() => analyzeText(text), [text]);
  const publishFit = useMemo(() => evaluatePublishFit(text, analysis, presetId), [analysis, presetId, text]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as "light" | "dark" | null;
    const nextTheme =
      savedTheme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const savedAutoSave = window.localStorage.getItem(AUTOSAVE_STORAGE_KEY) === "true";
    const savedPreset = window.localStorage.getItem(PRESET_STORAGE_KEY) as PublishFitPresetId | null;

    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setAutoSave(savedAutoSave);

    if (savedPreset) {
      setPresetId(savedPreset);
    }

    if (savedAutoSave) {
      setText(window.localStorage.getItem(TEXT_STORAGE_KEY) ?? "");
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [hydrated, theme]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(AUTOSAVE_STORAGE_KEY, String(autoSave));

    if (autoSave) {
      window.localStorage.setItem(TEXT_STORAGE_KEY, text);
    } else {
      window.localStorage.removeItem(TEXT_STORAGE_KEY);
    }
  }, [autoSave, hydrated, text]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(PRESET_STORAGE_KEY, presetId);
  }, [hydrated, presetId]);

  const metricCards = [
    { label: "Words", value: analysis.wordCount, helper: "Total detected words." },
    { label: "Characters", value: analysis.characterCount, helper: "Including spaces." },
    { label: "No spaces", value: analysis.characterCountNoSpaces, helper: "Characters without whitespace." },
    { label: "Sentences", value: analysis.sentenceCount, helper: "Approximate sentence count." },
    { label: "Paragraphs", value: analysis.paragraphCount, helper: "Separated by blank lines." },
    { label: "Lines", value: analysis.lineCount, helper: "Visible line breaks." },
    { label: "Unique words", value: analysis.uniqueWords, helper: "Distinct normalized words." },
    { label: "Avg word", value: analysis.averageWordLength, helper: "Characters per word." },
    { label: "Avg sentence", value: analysis.averageSentenceLength, helper: "Words per sentence." },
    { label: "Reading", value: formatMinutes(analysis.estimatedReadingTime), helper: "At 225 wpm." },
    { label: "Speaking", value: formatMinutes(analysis.estimatedSpeakingTime), helper: "At 150 wpm." },
    { label: "Handwriting", value: formatMinutes(analysis.estimatedHandwritingTime), helper: "At 25 wpm." }
  ];

  const warnings = [
    analysis.repeatedWords.length > 0
      ? `Repeated words: ${analysis.repeatedWords.slice(0, 4).join(", ")}`
      : null,
    analysis.overusedKeywords.length > 0
      ? `Overused keyword: "${analysis.overusedKeywords[0].phrase}" at ${analysis.overusedKeywords[0].density}%`
      : null,
    analysis.longSentences.length > 0
      ? `${analysis.longSentences.length} long sentence${analysis.longSentences.length === 1 ? "" : "s"} found`
      : null
  ].filter(Boolean);

  const clearText = () => {
    setText("");
    setActionStatus("Editor cleared.");
  };

  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    setActionStatus("Text copied to clipboard.");
  };

  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "textpulse-analysis.txt";
    link.click();
    URL.revokeObjectURL(url);
    setActionStatus("Text file created.");
  };

  const loadSample = () => {
    setText(sampleText);
    setActionStatus("Sample text loaded.");
  };

  const applyCleanText = (nextText: string) => {
    setText(nextText);
    setActionStatus("Clean-up applied.");
  };

  return (
    <section id="tool" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">Live analyzer</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Count, clean, and check fit before you publish
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Toggle
            label={theme === "dark" ? "Dark mode" : "Light mode"}
            checked={theme === "dark"}
            onChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
          <Toggle label="Auto-save locally" checked={autoSave} onChange={setAutoSave} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(330px,0.75fr)]">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900/90 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label htmlFor="textpulse-editor" className="text-base font-extrabold text-slate-950 dark:text-white">
              Text editor
            </label>
            <div
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
              title="Text analysis runs locally in your browser."
            >
              Privacy-first: your text stays in your browser.
            </div>
          </div>

          <textarea
            id="textpulse-editor"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Paste or write your text here. TextPulse analyzes it privately in your browser."
            className="mt-4 min-h-[420px] w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 p-5 text-base leading-7 text-slate-950 shadow-inner placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <Button onClick={clearText} disabled={!text}>
              Clear
            </Button>
            <Button onClick={copyText} disabled={!text}>
              Copy
            </Button>
            <Button onClick={downloadText} disabled={!text}>
              Download .txt
            </Button>
            <Button onClick={loadSample}>Sample Text</Button>
            <Button onClick={() => setShowCleanTools((current) => !current)} variant="primary">
              Clean Text
            </Button>
          </div>

          <p className="mt-3 min-h-5 text-sm font-semibold text-slate-500 dark:text-slate-400" aria-live="polite">
            {actionStatus || "Ready for private browser-based analysis."}
          </p>

          {showCleanTools ? (
            <div className="mt-4">
              <CleanTextTools text={text} onApply={applyCleanText} />
            </div>
          ) : null}
        </div>

        <aside className="grid gap-4" aria-label="Text metrics">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {metricCards.map((metric) => (
              <MetricsCard key={metric.label} label={metric.label} value={metric.value} helper={metric.helper} />
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/88 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
            <h3 className="text-sm font-extrabold text-slate-950 dark:text-white">Reading level</h3>
            <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{analysis.readingLevel.level}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {analysis.readingLevel.grade} · {analysis.readingLevel.description}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/88 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
            <h3 className="text-sm font-extrabold text-slate-950 dark:text-white">Sentence extremes</h3>
            <dl className="mt-3 grid gap-3 text-sm">
              <div>
                <dt className="font-bold text-slate-500 dark:text-slate-400">Longest sentence</dt>
                <dd className="mt-1 text-slate-700 dark:text-slate-300">
                  {analysis.longestSentence
                    ? `${analysis.longestSentence.wordCount} words - ${compactSentence(analysis.longestSentence.text)}`
                    : "No sentence detected yet."}
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-500 dark:text-slate-400">Shortest sentence</dt>
                <dd className="mt-1 text-slate-700 dark:text-slate-300">
                  {analysis.shortestSentence
                    ? `${analysis.shortestSentence.wordCount} words - ${compactSentence(analysis.shortestSentence.text)}`
                    : "No sentence detected yet."}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/88 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
            <h3 className="text-sm font-extrabold text-slate-950 dark:text-white">Live warnings</h3>
            {warnings.length > 0 ? (
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-amber-800 dark:text-amber-200">
                {warnings.map((warning) => (
                  <li key={warning}>{warning}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                No repeated-word, overused-keyword, or long-sentence warnings yet.
              </p>
            )}
          </div>

          <AdSlot format="sidebar" className="hidden xl:flex" />
        </aside>
      </div>

      <div className="mt-6 grid gap-6">
        <PublishFitPanel result={publishFit} presetId={presetId} onPresetChange={setPresetId} />
        <WritingHealthPanel health={analysis.writingHealth} publishFitScore={publishFit.score} />
        <KeywordDensity
          oneWord={analysis.oneWordPhrases}
          twoWord={analysis.twoWordPhrases}
          threeWord={analysis.threeWordPhrases}
        />
      </div>
    </section>
  );
}
