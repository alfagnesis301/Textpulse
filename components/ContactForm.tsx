"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type ContactFormLabels = {
  name: string;
  email: string;
  message: string;
  privacy: string;
  privacyLinkLabel: string;
  submit: string;
  sending: string;
  idle: string;
  sent: string;
  error: string;
  sensitiveNotice: string;
};

const defaultLabels: ContactFormLabels = {
  name: "Name",
  email: "Email",
  message: "Message",
  privacy: "I have read and accept the Privacy Policy.",
  privacyLinkLabel: "Privacy Policy",
  submit: "Send message",
  sending: "Sending...",
  idle: "For support, feedback, or business inquiries, contact us.",
  sent: "Thanks. Your message was sent successfully.",
  error: "Something went wrong. Please email hello@textpulses.com.",
  sensitiveNotice:
    "Please do not send sensitive private drafts, passwords, confidential documents, medical information, legal documents, or financial details."
};

export function ContactForm({
  labels = defaultLabels,
  privacyPolicyHref = "/privacy-policy"
}: {
  labels?: ContactFormLabels;
  privacyPolicyHref?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submitMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const encoded = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        encoded.append(key, value);
      }
    });

    try {
      const response = await fetch("/forms/contact.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encoded.toString()
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setName("");
      setEmail("");
      setMessage("");
      setAcceptedPrivacy(false);
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
      netlify-honeypot="bot-field"
      action="/forms/contact.html"
      onSubmit={submitMessage}
      className="mt-8 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/90"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden aria-hidden="true">
        <label aria-hidden="true">
          Leave this field empty
          <input
            name="bot-field"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </label>
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          {labels.name}
          <input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            autoComplete="name"
            maxLength={120}
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          {labels.email}
          <input
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            autoComplete="email"
            maxLength={180}
            required
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
        {labels.message}
        <textarea
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-40 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          minLength={20}
          maxLength={3000}
          rows={8}
          required
        />
      </label>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {labels.sensitiveNotice}
      </p>
      <label className="mt-4 flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">
        <input
          name="privacy_accepted"
          type="checkbox"
          value="accepted"
          checked={acceptedPrivacy}
          onChange={(event) => setAcceptedPrivacy(event.target.checked)}
          className="mt-1 h-5 w-5 rounded border-slate-300 text-pulse-blue"
          required
        />
        <span>
          {labels.privacy}{" "}
          <Link href={privacyPolicyHref} className="font-extrabold text-pulse-blue hover:underline">
            {labels.privacyLinkLabel}
          </Link>
        </span>
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400" aria-live="polite">
          {status === "sent"
            ? labels.sent
            : status === "error"
              ? labels.error
              : labels.idle}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-2xl bg-gradient-to-r from-pulse-blue to-pulse-violet px-5 py-3 text-sm font-extrabold text-white shadow-glow hover:-translate-y-0.5"
        >
          {status === "sending" ? labels.sending : labels.submit}
        </button>
      </div>
    </form>
  );
}
