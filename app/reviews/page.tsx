import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read what customers are saying about SCV Auto Repairs in Santa Clarita, CA. Honest, fair, and expert auto service by Pete and the team.",
};

const reviews = [
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
    text: "I appreciate how Pete explained everything before doing any work. No surprises, no upsells — just honest repair at a fair price.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0c0c0c] border-b border-[#1a1a1a] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            What People Are Saying
          </p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tighter text-white mb-4">
            Customer Reviews
          </h1>
          <p className="text-muted max-w-lg">
            SCV Auto Repairs has built a reputation on honesty, fair pricing, and expert
            workmanship. Here&apos;s what our customers have to say.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-[#1a1a1a] px-6">
        <div className="max-w-7xl mx-auto py-8 flex flex-wrap gap-10">
          {[
            { stat: "5.0", label: "Average rating" },
            { stat: "ASE", label: "Certified mechanics" },
            { stat: "3yr", label: "/ 36K mi warranty" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-heading font-extrabold text-3xl text-accent tracking-tight">
                {item.stat}
              </p>
              <p className="text-muted text-sm mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-[#111111] border border-[#1e1e1e] p-6 rounded-lg flex flex-col"
              >
                <Stars count={review.stars} />
                <p className="text-[#ccc] text-sm leading-relaxed mt-4 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-[#1e1e1e] pt-4 mt-4">
                  <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{review.name}</p>
                    <p className="text-[#444] text-xs">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted text-sm mb-4">
              Hundreds of satisfied customers across the Santa Clarita Valley.
            </p>
            <a
              href="tel:6612512515"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded text-sm transition-all"
            >
              Experience it yourself — Call 661-251-2515
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
