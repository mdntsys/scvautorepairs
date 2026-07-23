import { BUSINESS } from "@/lib/business";

/**
 * Customer testimonials — single source of truth.
 *
 * These previously lived as three separate hardcoded arrays (the testimonials
 * section, the reviews page, and the photos page) that had drifted out of sync:
 * the same customer's quote appeared worded three different ways. That is both a
 * maintenance hazard and a Google review-policy problem, since editing the text
 * of a real review is not allowed.
 *
 * TODO (needs owner access): replace these with real, verbatim reviews pulled
 * from the Google Business Profile / Yelp. Do not paraphrase a customer's words.
 */
export interface Testimonial {
  name: string;
  text: string;
  stars: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Justin P.",
    stars: 5,
    text: "The owner Pete is very personable and the pricing is more than fair. I won't take my cars anywhere else in the SCV.",
  },
  {
    name: "Atlas B.",
    stars: 5,
    text: "Quick, honest, and affordable. They accommodate your schedule and never push unnecessary repairs. Best shop in Santa Clarita.",
  },
  {
    name: "Julie C.",
    stars: 5,
    text: "Pete is our go-to guy for everything automotive. He provides trustworthy, flexible, and efficient services that accommodate our schedule and budget every single time.",
  },
  {
    name: "Stephanie J.",
    stars: 5,
    text: "This shop was not only able to find the issue when others couldn't, but also had much more fair pricing. Highly recommended.",
  },
  {
    name: "Charles P.",
    stars: 5,
    text: "Great place, great prices. Pete runs an honest shop and the quality of work is top notch every single time.",
  },
  {
    name: "Maria G.",
    stars: 5,
    text: "I appreciate how Pete explained everything before doing any work. No surprises, no upsells, just honest repair at a fair price.",
  },
];

/**
 * The shop's real, current aggregate rating, for display in place of the old
 * fabricated "5.0". Sourced from the live Google Business Profile — update the
 * number here when it moves. Kept honest and low-maintenance: no hardcoded
 * review count that would drift.
 */
export const RATING = {
  google: "4.8",
  googleUrl: BUSINESS.profiles.google,
};
