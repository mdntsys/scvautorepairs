import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import PhotoGallery from "@/components/PhotoGallery";
import { TESTIMONIALS } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Our Santa Clarita Auto Repair Shop",
  description:
    "Photo gallery of SCV Auto Repairs in Santa Clarita, CA. See our shop, our work, and our ASE-certified team in action.",
  alternates: { canonical: "/photos" },
};

// Julie C., pulled from the shared testimonials source so it can't drift out of
// sync with the wording on the reviews page again.
const featuredReview = TESTIMONIALS.find((r) => r.name === "Julie C.")!;

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
            Inside Our Santa Clarita Auto Shop
          </h1>
          <p className="text-muted max-w-lg">
            A look inside SCV Auto Repairs — showcasing our expert auto care in Santa
            Clarita, CA.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <PhotoGallery />

          {/* Testimonial */}
          <div className="mt-12 bg-[#111111] border border-[#1e1e1e] p-8 rounded-lg">
            <h2 className="font-heading font-bold text-2xl tracking-tight text-white mb-4">
              What Our Customers Are Saying
            </h2>
            <blockquote className="text-[#ccc] leading-relaxed italic border-l-2 border-accent pl-4">
              &ldquo;{featuredReview.text}&rdquo;
            </blockquote>
            <p className="text-muted text-sm mt-3">— {featuredReview.name}, Customer</p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
