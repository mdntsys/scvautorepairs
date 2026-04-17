import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Electrical System Repairs",
  description:
    "Expert auto electrical repair in Santa Clarita, CA. Battery, alternator, starter motor, wiring harness, and EV/hybrid electrical repairs by ASE-certified mechanics.",
};

export default function ElectricalSystemPage() {
  return (
    <ServicePageLayout
      subtitle="Powering Your Vehicle in Santa Clarita, CA"
      title="Electrical System Repairs"
      description="Modern vehicles rely on complex electrical systems to start, run, and keep you safe. From a dead battery to a failing alternator or a mysterious short circuit, SCV Auto Repairs uses advanced diagnostic tools to pinpoint issues fast. Our ASE-certified mechanics handle all electrical repairs — including hybrid and electric vehicles — with OEM-quality parts."
      services={[
        "Battery testing and replacement",
        "Alternator repair and replacement",
        "Starter motor repair and replacement",
        "Headlight and taillight replacement",
        "Wiring harness repair",
        "Fuse and relay replacement",
        "Power window and door lock repair",
        "Electrical system diagnostics",
        "Hybrid and EV battery system service",
        "Instrument cluster diagnostics",
      ]}
      faqs={[
        {
          q: "How do I know if my battery needs replacing?",
          a: "Signs include slow engine cranking, dim headlights, a swollen battery case, or a battery warning light. Most batteries last 3–5 years.",
        },
        {
          q: "What causes electrical problems in cars?",
          a: "Common causes include corroded connections, blown fuses, a failing alternator, damaged wiring, or a defective component. Our diagnostics trace the root cause.",
        },
        {
          q: "Can you work on hybrid and electric vehicle electrical systems?",
          a: "Yes. Our mechanics are trained to safely service high-voltage hybrid and EV electrical systems including battery inspection and charging components.",
        },
        {
          q: "How long does electrical diagnosis take?",
          a: "A basic diagnostic scan takes 30–60 minutes. Tracking down an intermittent electrical fault may take longer depending on the complexity.",
        },
      ]}
    />
  );
}
