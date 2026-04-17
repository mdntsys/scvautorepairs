import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SCV Auto Repairs in Santa Clarita, CA. Call 661-251-2515 or send a message. We're open Monday–Friday 7:30 AM – 4:00 PM.",
};

const hours = [
  { day: "Monday", time: "7:30 AM – 4:00 PM" },
  { day: "Tuesday", time: "7:30 AM – 4:00 PM" },
  { day: "Wednesday", time: "7:30 AM – 4:00 PM" },
  { day: "Thursday", time: "7:30 AM – 4:00 PM" },
  { day: "Friday", time: "7:30 AM – 4:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0c0c0c] border-b border-[#1a1a1a] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            Get in Touch
          </p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tighter text-white mb-4">
            Contact Us
          </h1>
          <p className="text-muted max-w-lg">
            Have a question or ready to schedule service? Reach out by phone or send us a
            message and we&apos;ll get back to you promptly.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick contact */}
            <div>
              <h2 className="font-heading font-bold text-xl text-white mb-5">
                Reach Us Directly
              </h2>
              <div className="space-y-4">
                <a
                  href="tel:6612512515"
                  className="flex items-center gap-4 p-4 bg-[#111111] border border-[#1e1e1e] rounded-lg hover:border-accent/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">Phone</p>
                    <p className="text-white font-medium group-hover:text-accent transition-colors">
                      661-251-2515
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:contact@scvautorepairs.com"
                  className="flex items-center gap-4 p-4 bg-[#111111] border border-[#1e1e1e] rounded-lg hover:border-accent/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">Email</p>
                    <p className="text-white font-medium group-hover:text-accent transition-colors text-sm">
                      contact@scvautorepairs.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=20723+Soledad+Canyon+Rd+Santa+Clarita+CA+91351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#111111] border border-[#1e1e1e] rounded-lg hover:border-accent/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">Address</p>
                    <p className="text-white font-medium group-hover:text-accent transition-colors text-sm">
                      20723 Soledad Canyon Rd<br />Santa Clarita, CA 91351
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="font-heading font-bold text-xl text-white mb-5">
                Business Hours
              </h2>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between text-sm py-2 border-b border-[#1a1a1a]"
                  >
                    <span className="text-muted">{h.day}</span>
                    <span
                      className={
                        h.time === "Closed" ? "text-[#444]" : "text-white font-medium"
                      }
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-xl text-white mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
