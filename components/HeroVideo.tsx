"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/scvautorepairs_hero_video.mp4"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-3 py-1.5 rounded text-sm text-accent font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            ASE-Certified Mechanics — Santa Clarita, CA
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-extrabold text-5xl md:text-7xl tracking-tighter leading-none text-white mb-6"
          >
            Complete Vehicle
            <br />
            <span className="text-accent">Services</span> &amp;
            <br />
            Repairs
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[#a0a0a0] text-lg max-w-lg leading-relaxed mb-8"
          >
            We go the extra mile so you can drive the extra miles. Serving the
            Santa Clarita Valley with honesty, quality, and a{" "}
            <span className="text-white font-medium">3-year/36,000-mile warranty</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="tel:6612512515"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded text-sm transition-all active:-translate-y-px"
            >
              Call 661-251-2515
            </a>
            <Link
              href="/services"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded text-sm transition-all active:-translate-y-px"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-6 mt-12"
          >
            {[
              "ASE Certified",
              "OEM Quality Parts",
              "3-Year Warranty",
              "Free Roadside Assistance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#888]">
                <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
