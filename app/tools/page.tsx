import Link from "next/link";
import { toolPages } from "@/lib/tools";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Writing Tools | TextPulses",
  description: "Browser-based writing, SEO, readability, and publish readiness tools from TextPulses.",
  path: "/tools"
});

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-pulse-blue">TextPulses tools</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">Writing and publish readiness tools</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
        Each tool runs locally in your browser and includes a focused Publish Readiness Report for the channel you are checking.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {toolPages.map((tool) => (
          <article key={tool.slug} className="rounded-2xl border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/88">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white">
              <Link href={`/tools/${tool.slug}`} className="hover:text-pulse-blue">{tool.title}</Link>
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{tool.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
