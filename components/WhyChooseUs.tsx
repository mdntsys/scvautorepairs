"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    stat: "ASE",
    label: "Certified Mechanics",
    description:
      "Every technician holds active ASE certification. We invest in training so you get expert-level service, not guesswork.",
  },
  {
    stat: "OEM",
    label: "Quality Parts",
    description:
      "We source OEM-quality replacement parts for all makes and models — including hybrid and electric vehicles.",
  },
  {
    stat: "3yr",
    label: "/ 36K Mile Warranty",
    description:
      "Our work is backed by a 3-year, 36,000-mile nationwide warranty. Drive with confidence long after you leave our shop.",
  },
  {
    stat: "Free",
    label: "Roadside Assistance",
    description:
      "Every completed repair includes complimentary roadside assistance — because emergencies don't follow business hours.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0c0c0c] py-24 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
              Why SCV Auto Repairs
            </p>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tighter text-white mb-6">
              Honest work.
              <br />
              Fair prices.
              <br />
              <span className="text-muted">Every time.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Pete and the team at SCV Auto Repairs have built a reputation on doing the
              right thing — even when that means telling you a repair isn&apos;t
              necessary. No upsells, no surprises. Just straightforward auto care you
              can trust.
            </p>
            <a
              href="tel:6612512515"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Schedule a visit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right — stats */}
          <div className="grid sm:grid-cols-2 gap-px bg-[#1a1a1a]">
            {reasons.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + 0.1 * i }}
                className="bg-[#0c0c0c] p-6"
              >
                <div className="font-heading font-extrabold text-3xl text-accent tracking-tight mb-1">
                  {item.stat}
                  <span className="text-white text-lg ml-1">{item.label}</span>
                </div>
                <p className="text-sm text-muted leading-relaxed mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
