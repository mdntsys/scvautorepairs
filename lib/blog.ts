/**
 * Blog data model and the date-gated "drip" logic.
 *
 * Posts are plain TypeScript modules under content/blog/ (no CMS). Each post
 * carries a publishDate; a post stays hidden from the index, the sitemap, and
 * search engines until that date arrives. Revealing happens automatically:
 * the blog pages use ISR (see `revalidate` in the route files) and a Vercel
 * cron nudges revalidation every Wednesday. See app/api/cron/publish/route.ts.
 */

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Post {
  slug: string;
  title: string;
  /** Meta description, <=155 chars. */
  description: string;
  /** YYYY-MM-DD (Pacific). Post is hidden until this date passes. */
  publishDate: string;
  /** Short summary for the index card. */
  excerpt: string;
  /** Optional hero image from /public. */
  heroImage?: string;
  /** Contextual internal link to the matching service page. */
  relatedService?: { label: string; href: string };
  sections: BlogSection[];
  faqs?: { q: string; a: string }[];
}

// --- Post registry -------------------------------------------------------
// Each post file is imported and registered here. Adding a post = one import
// plus one array entry; nothing else needs to change.
import summerAc from "@/content/blog/santa-clarita-summer-ac";
import grapevinePreTrip from "@/content/blog/grapevine-pre-road-trip";
import oilChangeFrequency from "@/content/blog/santa-clarita-oil-change-frequency";
import newhallPassBrakes from "@/content/blog/newhall-pass-brakes";
import checkEngineSmog from "@/content/blog/check-engine-light-smog-santa-clarita";
import tireHeat from "@/content/blog/santa-clarita-tire-heat";
import fallCarCare from "@/content/blog/fall-car-care-santa-clarita";
import gradesTransmission from "@/content/blog/santa-clarita-grades-transmission";
import grapevineHoliday from "@/content/blog/grapevine-holiday-travel-check";
import coldBattery from "@/content/blog/cold-mornings-car-battery-santa-clarita";
import smogGuide from "@/content/blog/smog-check-santa-clarita-guide";
import newYearCarCare from "@/content/blog/new-year-car-care-santa-clarita";

const ALL_POSTS: Post[] = [
  summerAc,
  grapevinePreTrip,
  oilChangeFrequency,
  newhallPassBrakes,
  checkEngineSmog,
  tireHeat,
  fallCarCare,
  gradesTransmission,
  grapevineHoliday,
  coldBattery,
  smogGuide,
  newYearCarCare,
];

// --- Helpers -------------------------------------------------------------

/** All posts, newest publishDate first (used for generateStaticParams too). */
export function getAllPosts(): Post[] {
  return [...ALL_POSTS].sort((a, b) =>
    a.publishDate < b.publishDate ? 1 : -1,
  );
}

export function isPublished(post: Post, now: Date = new Date()): boolean {
  return new Date(`${post.publishDate}T00:00:00-07:00`).getTime() <= now.getTime();
}

/** Only posts whose publishDate has arrived, newest first. */
export function getPublishedPosts(now: Date = new Date()): Post[] {
  return getAllPosts().filter((p) => isPublished(p, now));
}

export function getPostBySlug(slug: string): Post | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}
