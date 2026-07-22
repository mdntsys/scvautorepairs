import type { NextConfig } from "next";

// The April 2026 rebuild renamed service routes without redirects, which dropped
// the rankings attached to the old URLs. Each entry below maps a URL that ranked
// before the relaunch to its closest topical equivalent.
// `permanent: true` emits a 308, which Google treats as a 301 for ranking transfer.
const LEGACY_ROUTE_REDIRECTS = [
  { source: "/tire-services", destination: "/tires", permanent: true },
  { source: "/exhaust-system-services", destination: "/exhaust-system", permanent: true },
];

const nextConfig: NextConfig = {
  async redirects() {
    return LEGACY_ROUTE_REDIRECTS;
  },
};

export default nextConfig;
