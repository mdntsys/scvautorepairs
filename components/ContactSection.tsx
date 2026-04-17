"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import QuickContactForm from "@/components/QuickContactForm";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#0c0c0c] border-t border-[#1a1a1a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text + contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
              Get in Touch
            </p>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tighter text-white mb-4">
              Schedule Your
              <br />
              Service Today
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm">
              Fill out the form and we&apos;ll reach out within one business day. Prefer to call?
              We&apos;re happy to help right away.
            </p>

            <div className="space-y-4">
              <a
                href="tel:6612512515"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Call us directly</p>
                  <p className="text-white font-medium text-sm group-hover:text-accent transition-colors">661-251-2515</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Business hours</p>
                  <p className="text-white font-medium text-sm">Mon–Fri · 7:30 AM – 4:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Location</p>
                  <p className="text-white font-medium text-sm">20723 Soledad Canyon Rd, Santa Clarita</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — glass form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-[#111111]/80 backdrop-blur-md border border-[#262626] rounded-2xl p-6 md:p-8 shadow-xl shadow-black/30">
              <div className="mb-6">
                <h3 className="font-heading font-bold text-lg text-white">Request a Service</h3>
                <p className="text-muted text-xs mt-1">All fields required. We&apos;ll confirm your appointment by phone.</p>
              </div>
              <QuickContactForm variant="section" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
