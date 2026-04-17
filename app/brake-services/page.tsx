import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Brake Services",
  description:
    "Expert brake repair in Santa Clarita, CA. Pad replacements, rotor resurfacing, caliper repair, ABS diagnostics, and brake fluid flushes by ASE-certified mechanics.",
};

export default function BrakeServicesPage() {
  return (
    <ServicePageLayout
      subtitle="Brake Repair in Santa Clarita, CA"
      title="Brake Services"
      description="Your brakes are your vehicle's most critical safety system. At SCV Auto Repairs, our ASE-certified mechanics handle every aspect of brake service — from routine pad replacements to complex ABS diagnostics — using OEM-quality parts. We work quickly and affordably to get you back on the road with full confidence in your stopping power."
      services={[
        "Brake pad replacement",
        "Brake rotor resurfacing and replacement",
        "Brake caliper repair and replacement",
        "Brake fluid flush",
        "Brake line inspection and repair",
        "ABS system diagnostics and repair",
        "Parking brake adjustment",
        "Brake noise and vibration diagnosis",
        "Full brake system inspection",
      ]}
      faqs={[
        {
          q: "How do I know when my brakes need service?",
          a: "Common signs include squealing or grinding noises, a vibrating brake pedal, pulling to one side when stopping, or increased stopping distance. If you notice any of these, schedule service immediately.",
        },
        {
          q: "How long does a brake job take?",
          a: "A standard pad and rotor replacement typically takes 1–2 hours per axle. More complex repairs may take longer.",
        },
        {
          q: "Do I need to replace rotors when replacing pads?",
          a: "Not always. We inspect your rotors for minimum thickness and surface condition. If they can be safely resurfaced, we'll do that instead.",
        },
        {
          q: "How often should brake fluid be flushed?",
          a: "Brake fluid should typically be flushed every 2–3 years or 30,000 miles, as it absorbs moisture over time which can reduce braking performance.",
        },
      ]}
    />
  );
}
