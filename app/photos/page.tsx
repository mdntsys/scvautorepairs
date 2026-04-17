import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Photo gallery of SCV Auto Repairs in Santa Clarita, CA. See our shop, our work, and our ASE-certified team in action.",
};

export default function PhotosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0c0c0c] border-b border-[#1a1a1a] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            Our Work
          </p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tighter text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-muted max-w-lg">
            A look inside SCV Auto Repairs — showcasing our expert auto care in Santa
            Clarita, CA.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Gallery placeholder grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-[#111111] border border-[#1e1e1e] rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <svg
                  className="w-8 h-8 text-[#333] group-hover:text-accent transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center py-10 border border-dashed border-[#262626] rounded-lg">
            <p className="text-muted text-sm mb-2">
              Photo gallery coming soon — check back shortly.
            </p>
            <p className="text-[#444] text-xs">
              In the meantime, visit us at 20723 Soledad Canyon Rd, Santa Clarita, CA 91351
            </p>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-[#111111] border border-[#1e1e1e] p-8 rounded-lg">
            <h2 className="font-heading font-bold text-2xl tracking-tight text-white mb-4">
              What Our Customers Are Saying
            </h2>
            <blockquote className="text-[#ccc] leading-relaxed italic border-l-2 border-accent pl-4">
              &ldquo;Pete is our go-to guy for everything automotive. He provides trustworthy,
              flexible, and efficient services that accommodate our schedule and budget.&rdquo;
            </blockquote>
            <p className="text-muted text-sm mt-3">— Julie C., Verified Customer</p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
