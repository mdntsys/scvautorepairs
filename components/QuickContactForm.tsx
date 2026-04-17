"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface QuickContactFormProps {
  /** Glass style applied over video; "section" uses solid-dark glass */
  variant?: "hero" | "section";
}

const inputBase =
  "w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors";

const heroInput =
  "bg-white/5 border border-white/10 focus:border-accent/70 focus:bg-white/8";

const sectionInput =
  "bg-[#0a0a0a]/70 border border-[#2a2a2a] focus:border-accent/60 placeholder-[#555]";

export default function QuickContactForm({ variant = "section" }: QuickContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const inputClass = `${inputBase} ${variant === "hero" ? heroInput : sectionInput}`;
  const labelClass = `block text-xs font-medium mb-1.5 ${variant === "hero" ? "text-white/60" : "text-[#888]"}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError("");

    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      serviceRequested: (form.elements.namedItem("serviceRequested") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Something went wrong.");
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
      <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold font-heading text-lg">Message Sent!</p>
        <p className="text-white/50 text-sm">We&apos;ll reach out to you shortly.</p>
        <button
          onClick={() => setState("idle")}
          className="text-xs text-accent hover:underline mt-1"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor={`fullName-${variant}`} className={labelClass}>Full Name</label>
        <input
          id={`fullName-${variant}`}
          name="fullName"
          type="text"
          required
          placeholder="John Smith"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor={`phone-${variant}`} className={labelClass}>Phone Number</label>
        <input
          id={`phone-${variant}`}
          name="phone"
          type="tel"
          required
          placeholder="661-555-0100"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor={`email-${variant}`} className={labelClass}>Email Address</label>
        <input
          id={`email-${variant}`}
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor={`serviceRequested-${variant}`} className={labelClass}>Service Requested</label>
        <input
          id={`serviceRequested-${variant}`}
          name="serviceRequested"
          type="text"
          required
          placeholder="e.g. Oil change, Brake repair..."
          className={inputClass}
        />
      </div>

      {state === "error" && (
        <p className="text-xs text-red-400 bg-red-950/30 border border-red-800/30 rounded px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg text-sm transition-all active:-translate-y-px flex items-center justify-center gap-2 mt-1"
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
          "Request Service"
        )}
      </button>
    </form>
  );
}
