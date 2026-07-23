import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Auto Repair Financing, Santa Clarita CA",
  description:
    "Finance your car repairs at SCV Auto Repairs in Santa Clarita, CA through Snap Finance. No credit needed to apply, quick decision. Call 661-251-2515.",
  alternates: { canonical: "/financing" },
};

// Snap Finance application link (the shop's referral link).
const SNAP_APPLY_URL = "https://snapf.in/SdNfI7S";

const STEPS = [
  {
    title: "Apply online in minutes",
    body: "Fill out Snap Finance's short application. No credit needed to apply, and it will not affect your credit to check your options.",
  },
  {
    title: "Get a fast decision",
    body: "Snap reviews your application quickly and lets you know your approved amount, often within minutes.",
  },
  {
    title: "Repair now, pay over time",
    body: "Use your approved amount toward any repair or service at SCV Auto Repairs, and pay it back over time on Snap's terms.",
  },
];

const FINANCEABLE = [
  "Brake repair and replacement",
  "Engine diagnostics and repair",
  "Transmission service and repair",
  "Suspension and steering work",
  "AC and heating repair",
  "Tires and alignment",
  "Batteries, alternators, and electrical",
  "Scheduled maintenance and more",
];

const FAQS = [
  {
    q: "Do I need good credit to apply?",
    a: "No credit is needed to apply through Snap Finance. Snap looks at more than just your credit score, and approval and terms are determined by Snap, not by SCV Auto Repairs.",
  },
  {
    q: "What can I use the financing for?",
    a: "Any repair or service we perform at SCV Auto Repairs, from brakes and engine work to tires and routine maintenance. If we can fix it, you can finance it.",
  },
  {
    q: "How do I apply?",
    a: "Click the Apply with Snap Finance button on this page. It opens Snap's secure application in a new tab and only takes a few minutes.",
  },
  {
    q: "Is there a cost to apply?",
    a: "Applying is free. If you are approved, the repayment amount and terms are set by Snap Finance and shown to you before you agree to anything.",
  },
];

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BUSINESS.url}/financing#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FinancingPage() {
  return (
    <>
      <FaqSchema />

      {/* Hero */}
      <section className="bg-[#0c0c0c] border-b border-[#1a1a1a] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            Financing Available
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tighter text-white mb-5">
            Auto Repair Financing in Santa Clarita, CA
          </h1>
          <p className="text-[#bbb] text-lg leading-relaxed">
            Car trouble never waits for a good time. At SCV Auto Repairs, you can
            finance your repairs through Snap Finance and get back on the road now,
            then pay over time. No credit needed to apply.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={SNAP_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded text-sm transition-all active:-translate-y-px"
            >
              Apply with Snap Finance
            </a>
            <a
              href={BUSINESS.phone.href}
              className="border border-[#333] hover:border-[#555] text-text font-semibold px-6 py-3 rounded text-sm transition-all"
            >
              Call {BUSINESS.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-tight text-white mb-8 text-center">
            How Financing Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="bg-[#111111] border border-[#1e1e1e] rounded-lg p-6"
              >
                <div className="w-9 h-9 rounded-full bg-accent/15 text-accent font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can finance */}
      <section className="py-4 px-6">
        <div className="max-w-5xl mx-auto bg-[#0c0c0c] border border-[#1a1a1a] rounded-lg p-8">
          <h2 className="font-heading font-bold text-2xl tracking-tight text-white mb-6">
            What You Can Finance
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {FINANCEABLE.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#ccc] text-sm">
                <svg
                  className="w-4 h-4 text-accent mt-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-tight text-white mb-8">
            Financing Questions
          </h2>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-[#1e1e1e] pb-5">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={SNAP_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded text-sm transition-all active:-translate-y-px"
            >
              Apply with Snap Finance
            </a>
            <p className="text-muted text-xs mt-5 max-w-xl mx-auto">
              Financing provided by Snap Finance. Applying opens Snap&apos;s secure
              site in a new tab. Approval and terms are set by Snap Finance, not
              SCV Auto Repairs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
