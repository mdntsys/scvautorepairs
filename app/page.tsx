import type { Metadata } from "next";
import HeroVideo from "@/components/HeroVideo";
import FinancingBanner from "@/components/FinancingBanner";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Auto Repair in Santa Clarita, CA | SCV Auto Repairs",
  description:
    "ASE-certified auto repair in Canyon Country, Santa Clarita CA. Brakes, engine diagnostics, oil changes, tires. 3-year/36,000-mile warranty. 661-251-2515.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <FinancingBanner />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
