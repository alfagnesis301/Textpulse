"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/seo";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const createEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`TextPulses inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, "", message].join("\n")
    );

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={createEmail}
      className="mt-8 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/90"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          Name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
        Message
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-40 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
          For support, feedback, or business inquiries, contact us.
        </p>
        <button
          type="submit"
          className="rounded-2xl bg-gradient-to-r from-pulse-blue to-pulse-violet px-5 py-3 text-sm font-extrabold text-white shadow-glow hover:-translate-y-0.5"
        >
          Create email
        </button>
      </div>
    </form>
  );
}
