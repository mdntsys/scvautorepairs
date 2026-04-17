import type { Metadata } from "next";
import HeroVideo from "@/components/HeroVideo";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "SCV Auto Repairs | Complete Vehicle Services in Santa Clarita, CA",
  description:
    "ASE-certified auto repair shop in Santa Clarita, CA. Expert brake service, engine diagnostics, oil changes, transmission, and more. 3-year/36,000-mile warranty. Call 661-251-2515.",
};

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
