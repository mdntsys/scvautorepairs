import type { NextConfig } from "next";

/**
 * Legacy URL redirects.
 *
 * This site has had three generations of URLs:
 *   Gen A  ~2015–early 2025  WordPress, trailing-slash paths, /services/* children, a /2015/ blog
 *   Gen B  ~mid 2025–2026    flat paths, e.g. /tire-services, /ac-and-heating-services
 *   Gen C  2026-04-16→       the current Next.js build
 *
 * The Gen C rebuild renamed routes without redirects, so every ranking attached
 * to a Gen B URL was dropped — organic traffic fell 55% in the two months after.
 * Each entry below is evidenced by a Wayback capture and/or a historical Ahrefs
 * ranking; nothing here is guessed.
 *
 * `permanent: true` emits a 308, which Google treats as a 301 for ranking transfer.
 * Trailing-slash variants need no rules — Next normalises `/path/` → `/path` with
 * its own 308 first, so the Gen A URLs chain through these correctly.
 */

// Gen B → Gen C. These were in the global nav of every pre-rebuild page and are
// where the traffic loss actually lives.
const GEN_B_REDIRECTS = [
  { source: "/tire-services", destination: "/tires", permanent: true },
  { source: "/exhaust-system-services", destination: "/exhaust-system", permanent: true },
  { source: "/ac-and-heating-services", destination: "/ac-and-heating", permanent: true },
  // Separately-indexable duplicate of the homepage, linked as "Home" sitewide.
  { source: "/home", destination: "/", permanent: true },
  // NOTE: /Reviews (capital R, hard-coded in the old header nav) is handled in
  // middleware.ts, NOT here. Matching in this file is case-insensitive, so a
  // "/Reviews" rule also matches "/reviews" and loops the real page onto itself.
];

// Gen A WordPress pages that still held rankings or backlinks when they died.
const GEN_A_REDIRECTS = [
  // Ranked for ~340/mo of combined oil-change volume. Now that a dedicated
  // oil-change page exists, these point to it directly.
  { source: "/services/oil-change-service", destination: "/oil-change", permanent: true },
  { source: "/oil-change-services", destination: "/oil-change", permanent: true },
  { source: "/services/brake-pads-and-braking-systems", destination: "/brake-services", permanent: true },
  { source: "/brake-pads-and-braking-system", destination: "/brake-services", permanent: true },
  { source: "/services/electrical-repair", destination: "/electrical-system-repairs", permanent: true },
  { source: "/computer-diagnostic", destination: "/engine-diagnostics-and-repair", permanent: true },
  { source: "/services/computer-diagnostics", destination: "/engine-diagnostics-and-repair", permanent: true },
  { source: "/services/heating-ac-services", destination: "/ac-and-heating", permanent: true },
  { source: "/services/suspension", destination: "/suspension-and-steering", permanent: true },
  { source: "/services/belts-and-hoses", destination: "/routine-maintenance", permanent: true },
  { source: "/belts-and-hoses", destination: "/routine-maintenance", permanent: true },
  { source: "/manufacturer-recommended-maintenance", destination: "/routine-maintenance", permanent: true },
  { source: "/ultimate-multi-point-check", destination: "/routine-maintenance", permanent: true },
  // Typo is in the original URL, not a mistake here.
  { source: "/services/ultimate-mulit-point-check", destination: "/routine-maintenance", permanent: true },
  { source: "/contact_us", destination: "/contact-us", permanent: true },
  { source: "/parts-plus-warranty", destination: "/", permanent: true },
];

// Blog posts from the WordPress era that still carry referring domains.
const LEGACY_BLOG_REDIRECTS = [
  { source: "/2015/06/tire-safety-check-your-tires-for-wear-and-tear", destination: "/tires", permanent: true },
  { source: "/2015/07/7-symptoms-of-worn-out-brakes", destination: "/brake-services", permanent: true },
  { source: "/2015/07/is-your-check-engine-light-on-here-are-some-causes", destination: "/check-engine-light", permanent: true },
  { source: "/2015/07/general-troubleshooting-guide", destination: "/services", permanent: true },
];

// The Gen B footer used schema-less hrefs (`href="scvautorepairs.com/photos"`),
// which browsers resolved as relative paths — so a whole phantom tree got
// crawled and indexed. Collapse it back onto the real routes.
const PHANTOM_PREFIX_REDIRECT = [
  { source: "/scvautorepairs.com/:path*", destination: "/:path*", permanent: true },
];

/**
 * Deliberately NOT redirected — no honest equivalent exists, and pointing these
 * at a loosely-related page is a soft-404 that recovers nothing:
 *   /auto-repair-coupons     (2 refdomains) — revisit if an offers page is added
 *   /privacy-policy          — should be created, then redirected
 *   /accessibility-statement — same
 *   /vehicle-care-guide, /sitemap, date + category + tag archives, WordPress cruft
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...GEN_B_REDIRECTS,
      ...GEN_A_REDIRECTS,
      ...LEGACY_BLOG_REDIRECTS,
      ...PHANTOM_PREFIX_REDIRECT,
    ];
  },
};

export default nextConfig;
