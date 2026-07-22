import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Case-sensitive legacy redirects (Next 16 "proxy" convention — the old
 * middleware.ts file convention is deprecated).
 *
 * These can't live in next.config.ts: redirect `source` matching there is
 * case-insensitive, so a "/Reviews" rule also matches "/reviews" and redirects
 * the real page to itself — an infinite loop that takes a live page offline.
 * Middleware sees the exact pathname, so an exact string lookup is safe.
 */
const CASE_SENSITIVE_REDIRECTS: Record<string, string> = {
  // Hard-coded with a capital R in the previous site's header nav, so inbound
  // links and crawler records still point at it. The real route is lowercase.
  "/Reviews": "/reviews",
};

export function proxy(request: NextRequest) {
  const destination = CASE_SENSITIVE_REDIRECTS[request.nextUrl.pathname];

  // Exact-match only. Any other casing (including the real "/reviews") falls
  // through untouched, which is what keeps this loop-proof.
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Reviews"],
};
