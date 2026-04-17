"use client";

import { motion } from "framer-motion";
import CTABanner from "@/components/CTABanner";

interface FAQ {
  q: string;
  a: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  faqs?: FAQ[];
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  services,
  faqs,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0c0c0c] border-b border-[#1a1a1a] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
              {subtitle}
            </p>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tighter text-white max-w-3xl">
              {title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[#bbb] leading-relaxed text-base">{description}</p>
            </motion.div>

            {/* Services list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-heading font-bold text-2xl tracking-tight text-white mb-6">
                Services Included
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {services.map((service, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * i + 0.2 }}
                    className="flex items-start gap-3 p-4 bg-[#111111] border-l-2 border-accent"
                  >
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
                    <span className="text-sm text-[#ccc]">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* FAQs */}
            {faqs && faqs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <h2 className="font-heading font-bold text-2xl tracking-tight text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-[#1e1e1e] pb-4">
                      <h3 className="text-white font-semibold text-sm mb-2">{faq.q}</h3>
                      <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111111] border border-[#1e1e1e] p-6 rounded-lg"
            >
              <h3 className="font-heading font-bold text-lg text-white mb-4">
                Schedule Service
              </h3>
              <p className="text-muted text-sm mb-5">
                Ready to book or have a question? Give us a call or stop by.
              </p>
              <a
                href="tel:6612512515"
                className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 rounded text-sm transition-all active:-translate-y-px mb-3"
              >
                Call 661-251-2515
              </a>
              <a
                href="/contact-us"
                className="block w-full text-center border border-[#333] hover:border-[#555] text-text font-semibold py-3 rounded text-sm transition-all"
              >
                Send a Message
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#111111] border border-[#1e1e1e] p-6 rounded-lg space-y-3"
            >
              <h3 className="font-heading font-bold text-base text-white">Shop Info</h3>
              <div className="text-sm text-muted space-y-2">
                <p>📍 20723 Soledad Canyon Rd<br />Santa Clarita, CA 91351</p>
                <p>🕐 Mon–Fri: 7:30 AM – 4:00 PM</p>
                <p>📞 661-251-2515</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-accent/10 border border-accent/20 p-6 rounded-lg"
            >
              <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                Our Promise
              </p>
              <p className="text-sm text-[#ccc]">
                3-year / 36,000-mile nationwide warranty on all completed repairs. ASE-certified
                mechanics using OEM-quality parts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
