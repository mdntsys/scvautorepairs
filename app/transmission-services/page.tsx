import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Transmission Services",
  description:
    "Expert transmission repair in Santa Clarita, CA. Fluid flushes, leak repair, clutch replacement, automatic diagnostics, and transmission rebuilds by ASE-certified mechanics.",
};

export default function TransmissionServicesPage() {
  return (
    <ServicePageLayout
      subtitle="Smooth Shifting With Expert Care in Santa Clarita"
      title="Transmission Services"
      description="Transmission problems — slipping gears, delayed shifts, or unusual noises — rarely fix themselves. At SCV Auto Repairs, our ASE-certified mechanics have the tools and expertise to diagnose and repair both automatic and manual transmissions accurately. We use OEM-quality parts and back every repair with our 3-year/36,000-mile warranty."
      services={[
        "Transmission fluid flush and replacement",
        "Transmission leak inspection and repair",
        "Clutch repair and replacement (manual)",
        "Automatic transmission diagnostics",
        "Transmission rebuild or replacement",
        "Torque converter repair",
        "Shift solenoid replacement",
        "Transfer case service",
        "Transmission mount inspection and replacement",
      ]}
      faqs={[
        {
          q: "What are signs of transmission problems?",
          a: "Watch for slipping gears, delayed or rough shifting, fluid leaks under the car, a burning smell, or unusual noises when shifting. Catch these early to avoid costly repairs.",
        },
        {
          q: "How often should I service my transmission?",
          a: "Most manufacturers recommend a transmission fluid change every 30,000–60,000 miles. Check your owner's manual for your vehicle's specific interval.",
        },
        {
          q: "How long does a transmission repair take?",
          a: "Simple repairs like fluid flushes can be done in under an hour. A full rebuild or replacement typically takes 2–4 days depending on parts availability.",
        },
        {
          q: "Is it worth repairing my transmission or should I replace it?",
          a: "It depends on the condition of the vehicle and cost of repair vs. replacement. We'll give you an honest assessment of both options before any work begins.",
        },
      ]}
    />
  );
}
