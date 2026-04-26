"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submitMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new URLSearchParams({
      "form-name": "contact",
      name,
      email,
      message
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setName("");
      setEmail("");
      setMessage("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={submitMessage}
      className="mt-8 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/90"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          Name
          <input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            autoComplete="email"
            required
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
        Message
        <textarea
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-40 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          required
        />
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400" aria-live="polite">
          {status === "sent"
            ? "Thanks. Your message was sent successfully."
            : status === "error"
              ? "Something went wrong. Please email hello@textpulses.com."
              : "For support, feedback, or business inquiries, contact us."}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-2xl bg-gradient-to-r from-pulse-blue to-pulse-violet px-5 py-3 text-sm font-extrabold text-white shadow-glow hover:-translate-y-0.5"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
