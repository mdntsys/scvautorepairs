"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { BUSINESS, FULL_ADDRESS } from "@/lib/business";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#111111] border-t border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">
              Ready to get started?
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tighter text-white">
              Schedule Your Service Today
            </h2>
            <p className="text-muted text-sm mt-2">
              {BUSINESS.hours.display} · {FULL_ADDRESS}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={BUSINESS.phone.href}
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded text-sm transition-all active:-translate-y-px"
            >
              Call {BUSINESS.phone.display}
            </a>
            <Link
              href="/contact-us"
              className="border border-[#333] hover:border-[#555] text-text font-semibold px-6 py-3 rounded text-sm transition-all active:-translate-y-px"
            >
              Send a Message
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
