"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-[#111111] border border-accent/30 rounded-lg p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-white mb-2">Message Sent!</h3>
        <p className="text-muted text-sm mb-5">
          We&apos;ll get back to you as soon as possible. For urgent matters, call us at{" "}
          <a href="tel:6612512515" className="text-accent">661-251-2515</a>.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-sm text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[#ccc] mb-2">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full bg-[#111111] border border-[#262626] rounded px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-accent transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-[#ccc] mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full bg-[#111111] border border-[#262626] rounded px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-accent transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#ccc] mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full bg-[#111111] border border-[#262626] rounded px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-accent transition-colors"
          placeholder="661-555-0100"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#ccc] mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-[#111111] border border-[#262626] rounded px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-accent transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#ccc] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-[#111111] border border-[#262626] rounded px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Describe your vehicle issue or the service you need..."
        />
        <p className="text-xs text-[#444] mt-1">
          Please include your vehicle make, model, and year if applicable.
        </p>
      </div>

      {state === "error" && (
        <p className="text-sm text-red-400 bg-red-950/30 border border-red-800/30 rounded px-4 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded text-sm transition-all active:-translate-y-px flex items-center justify-center gap-2"
      >
        {state === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
