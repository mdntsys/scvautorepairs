"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SNAP_ALT =
  "Snap Finance — apply for financing on your auto repair. No credit needed.";

export default function FinancingBanner() {
  return (
    <section className="bg-[#0a0a0a] border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        {/* Animates on mount rather than on scroll: the hero is capped at 880px,
            so on taller screens this sits above the fold and needs to land as
            the last beat of the hero's cascade (which ends at 0.7s). */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
            Financing Available
          </p>
          <h2 className="font-heading font-bold text-xl md:text-2xl tracking-tight text-white mb-5">
            Repair Now, Pay Over Time
          </h2>

          {/* Snap Finance banners — mobile and desktop creatives have their own links */}

          {/* Mobile: the 646x80 creative scales down to ~50%, which leaves Snap's
              fine print unreadable and the tap target under 44px. Keep the
              creative for brand recognition, but pair it with a real button. */}
          <div className="w-full md:hidden">
            <a
              href="https://snapf.in/syNsluQ"
              target="_blank"
              rel="noopener noreferrer sponsored"
              aria-hidden="true"
              tabIndex={-1}
              className="block w-full max-w-[646px] mx-auto rounded-md overflow-hidden shadow-lg shadow-black/60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://merchant-banners-s3.snapfinance.com/Loans/EN/A646x80.jpeg"
                alt=""
                width={646}
                height={80}
                loading="lazy"
                className="w-full h-auto"
              />
            </a>
            <a
              href="https://snapf.in/syNsluQ"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-3 flex items-center justify-center w-full min-h-[48px] bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded text-sm transition-all active:-translate-y-px"
            >
              Apply with Snap Finance
            </a>
          </div>

          <a
            href="https://snapf.in/SdNfI7S"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="hidden w-full max-w-[1280px] rounded-md overflow-hidden shadow-lg shadow-black/60 transition-transform hover:-translate-y-0.5 md:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://merchant-banners-s3.snapfinance.com/Loans/EN/A1280x158.jpeg"
              alt={SNAP_ALT}
              width={1280}
              height={158}
              loading="lazy"
              className="w-full h-auto"
            />
          </a>

          <p className="text-muted text-xs mt-4 max-w-xl">
            Financing provided by Snap Finance. Applying opens Snap&apos;s secure
            site in a new tab — approval and terms are set by Snap Finance, not
            SCV Auto Repairs.
          </p>
          <Link
            href="/financing"
            className="text-accent hover:underline text-sm font-medium mt-3"
          >
            Learn more about financing at SCV Auto Repairs →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
