"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    title: "Routine Maintenance",
    href: "/routine-maintenance",
    description: "Oil changes, fluid checks, filters, wiper blades, and scheduled 30K/60K/90K services.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Brake Services",
    href: "/brake-services",
    description: "Pad replacements, rotor resurfacing, caliper repair, ABS diagnostics, and fluid flushes.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Engine Diagnostics & Repair",
    href: "/engine-diagnostics-and-repair",
    description: "Check engine light, spark plugs, timing belt, head gasket, performance tuning, and rebuilds.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Transmission Services",
    href: "/transmission-services",
    description: "Fluid flushes, leak repair, clutch replacement, automatic diagnostics, and rebuilds.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Suspension & Steering",
    href: "/suspension-and-steering",
    description: "Shocks, struts, ball joints, tie rods, wheel alignment, and steering rack repair.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: "Exhaust System",
    href: "/exhaust-system",
    description: "Muffler repair, catalytic converter replacement, exhaust pipe welding, and emission checks.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Electrical System Repairs",
    href: "/electrical-system-repairs",
    description: "Battery, alternator, starter motor, wiring harness, fuses, and EV/hybrid electrical work.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "AC & Heating",
    href: "/ac-and-heating",
    description: "Refrigerant recharge, compressor repair, heater core, and climate control diagnostics.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Tire Services",
    href: "/tires",
    description: "Rotation & balancing, flat repair, TPMS diagnostics, wheel alignment, and seasonal swaps.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            What We Do
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tighter text-white max-w-md">
              Our Services
            </h2>
            <p className="text-muted text-sm max-w-sm md:text-right">
              All vehicle makes and models, including hybrid and electric. ASE-certified
              mechanics using OEM-quality parts.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <Link
                href={service.href}
                className="group block bg-[#0a0a0a] hover:bg-[#111111] p-6 border-t-2 border-transparent hover:border-accent transition-all h-full"
              >
                <div className="text-muted group-hover:text-accent transition-colors mb-4">
                  {service.icon}
                </div>
                <h3 className="font-heading font-semibold text-base text-white mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-[#444] group-hover:text-accent transition-colors">
                  <span>Learn more</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-sm text-muted"
        >
          Don&apos;t see your service?{" "}
          <a href="tel:6612512515" className="text-accent hover:underline">
            Call us
          </a>{" "}
          — we handle it all.
        </motion.p>
      </div>
    </section>
  );
}
