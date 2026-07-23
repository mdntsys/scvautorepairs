"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import QuickContactForm from "@/components/QuickContactForm";
import { BUSINESS } from "@/lib/business";

export default function HeroVideo() {
  return (
    // Full-bleed on normal screens, but capped so tall monitors don't stretch
    // the hero into a wall of empty space above the fold.
    <section className="relative min-h-[min(100svh,880px)] flex items-center overflow-hidden">
      {/* Video background. The poster paints instantly (the video is decorative
          and sits under a 65% black overlay), so there's no black flash while
          the muted loop loads. */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        src="/scvautorepairs_hero_video.mp4"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left — hero text */}
          <div>
            {/* Badge. Slide-only entrance (no opacity fade) so the above-the-fold
                hero text is painted at full opacity in the server HTML. Hiding it
                with opacity:0 delayed the LCP element until JS hydrated. */}
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-3 py-1.5 rounded text-sm text-accent font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              ASE-Certified Mechanics — Santa Clarita, CA
            </motion.div>

            {/* Headline — the LCP element. Slide-only, no opacity fade, so it
                paints immediately instead of waiting on hydration. */}
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-extrabold text-5xl md:text-6xl xl:text-7xl tracking-tighter leading-none text-white mb-6"
            >
              {/* Block spans rather than <br/> — a <br/> contributes no
                  whitespace when text is extracted, so this previously read as
                  "Complete VehicleServices&Repairs" to crawlers and AI. */}
              {/* The {" "} between lines is load-bearing. These spans are
                  display:block, so browsers insert breaks — but a crawler that
                  strips tags without applying CSS would otherwise read
                  "Complete VehicleServices & Repairsin Santa Clarita, CA".
                  The spaces collapse to nothing visually between block elements. */}
              <span className="block">Complete Vehicle</span>{" "}
              <span className="block">
                {/* Explicit string, not `</span> &amp; Repairs` — JSX drops the
                    space before the entity and it renders as "Services& Repairs". */}
                <span className="text-accent">Services</span>
                {" & Repairs"}
              </span>{" "}
              <span className="block text-2xl md:text-3xl xl:text-4xl tracking-tight text-[#a0a0a0] mt-4">
                in Santa Clarita, CA
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[#a0a0a0] text-base md:text-lg max-w-md leading-relaxed mb-8"
            >
              We go the extra mile so you can drive the extra miles. Serving the
              Santa Clarita Valley with honesty, quality, and a{" "}
              <span className="text-white font-medium">3-year/36,000-mile warranty</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={BUSINESS.phone.href}
                className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded text-sm transition-all active:-translate-y-px"
              >
                Call {BUSINESS.phone.display}
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
              className="flex flex-wrap gap-x-6 gap-y-2 mt-10"
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

          {/* Right — glass contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full"
          >
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50">
              {/* Form header */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                  Free Estimate
                </p>
                <h2 className="font-heading font-bold text-xl text-white">
                  Request Service
                </h2>
                <p className="text-white/40 text-xs mt-1">
                  We&apos;ll reach out within one business day.
                </p>
              </div>

              <QuickContactForm variant="hero" />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
