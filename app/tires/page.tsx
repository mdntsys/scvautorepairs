import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Tire Services",
  description:
    "Expert tire services in Santa Clarita, CA. Rotation, balancing, flat repair, TPMS diagnostics, wheel alignment, and installation by ASE-certified mechanics.",
};

export default function TiresPage() {
  return (
    <ServicePageLayout
      subtitle="Tire Services in Santa Clarita, CA"
      title="Tire Services"
      description="Your tires are the only thing between your vehicle and the road. At SCV Auto Repairs, we provide comprehensive tire services — from quick rotations to full replacements — using advanced equipment and genuine expertise. Properly maintained tires improve safety, fuel economy, and handling on every road in the Santa Clarita Valley."
      services={[
        "Tire rotation and balancing",
        "Flat tire repair",
        "New tire installation and replacement",
        "TPMS (Tire Pressure Monitoring System) diagnostics and repair",
        "Wheel alignment",
        "Tire wear and damage inspection",
        "Seasonal tire changeover",
        "Nitrogen tire inflation",
        "Run-flat tire service",
      ]}
      faqs={[
        {
          q: "How often should I rotate my tires?",
          a: "We recommend rotating your tires every 5,000–7,500 miles to ensure even wear and maximize tire life.",
        },
        {
          q: "Can a flat tire always be repaired?",
          a: "Not always. Tires with punctures in the sidewall or with damage larger than 1/4 inch typically need to be replaced. We'll assess it and give you an honest recommendation.",
        },
        {
          q: "What is a wheel alignment and do I need one?",
          a: "A wheel alignment adjusts the angles of your tires to manufacturer specs. You may need one if your vehicle pulls to one side, your tires are wearing unevenly, or after hitting a large pothole.",
        },
        {
          q: "How long does tire service take?",
          a: "Rotations and balance jobs typically take 30–60 minutes. Full tire replacement with alignment may take 1.5–2 hours.",
        },
      ]}
    />
  );
}
