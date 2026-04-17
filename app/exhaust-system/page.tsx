import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Exhaust System Services",
  description:
    "Expert exhaust system repair in Santa Clarita, CA. Muffler repair, catalytic converter replacement, exhaust pipe welding, and emission checks by ASE-certified mechanics.",
};

export default function ExhaustSystemPage() {
  return (
    <ServicePageLayout
      subtitle="Quiet, Clean, and Efficient in Santa Clarita, CA"
      title="Exhaust System Services"
      description="A failing exhaust system affects performance, fuel economy, and the air you breathe inside your vehicle. At SCV Auto Repairs, our ASE-certified mechanics diagnose and repair all exhaust system issues — from a loud muffler to a failing catalytic converter — using OEM-quality parts and precision welding equipment."
      services={[
        "Muffler repair and replacement",
        "Catalytic converter replacement",
        "Exhaust pipe welding and repair",
        "Oxygen sensor replacement",
        "Exhaust manifold repair and replacement",
        "Resonator replacement",
        "Exhaust leak diagnosis",
        "Emissions system inspection",
        "Flex pipe replacement",
        "Custom exhaust fabrication",
      ]}
      faqs={[
        {
          q: "How do I know if my exhaust has a problem?",
          a: "Common signs include louder-than-normal exhaust noise, a sulfur or burning smell inside the vehicle, decreased fuel economy, or a check engine light related to O2 sensors.",
        },
        {
          q: "Is a cracked exhaust manifold serious?",
          a: "Yes. Exhaust leaks from a cracked manifold can allow toxic gases to enter the cabin and reduce engine performance. It should be repaired promptly.",
        },
        {
          q: "Can a bad catalytic converter affect my emissions test?",
          a: "Absolutely. A failing catalytic converter will cause you to fail an emissions inspection. We can diagnose and replace it before your test.",
        },
        {
          q: "How long do exhaust repairs take?",
          a: "Simple muffler or pipe repairs can take 1–2 hours. More extensive work like manifold or catalytic converter replacement may take a full day.",
        },
      ]}
    />
  );
}
