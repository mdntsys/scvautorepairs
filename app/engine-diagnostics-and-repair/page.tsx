import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Engine Diagnostics & Repair",
  description:
    "Precision engine diagnostics and repair in Santa Clarita, CA. Check engine light, spark plugs, timing belt, head gasket, and engine rebuilds by ASE-certified mechanics.",
};

export default function EngineDiagnosticsPage() {
  return (
    <ServicePageLayout
      subtitle="Precision Engine Solutions in Santa Clarita, CA"
      title="Engine Diagnostics & Repair"
      description="When your check engine light comes on or your engine isn't performing like it should, you need mechanics you can trust. SCV Auto Repairs uses advanced diagnostic tools and deep expertise to identify issues fast and fix them right — from minor tune-ups to complete engine rebuilds — all with OEM-quality parts and our 3-year/36,000-mile warranty."
      services={[
        "Check engine light diagnostics",
        "Engine noise and vibration diagnosis",
        "No-start condition diagnosis",
        "Engine performance tuning",
        "Spark plug replacement",
        "Timing belt and chain replacement",
        "Head gasket repair",
        "Valve cover gasket replacement",
        "Engine rebuild or replacement",
        "Fuel injector cleaning and replacement",
      ]}
      faqs={[
        {
          q: "What does a check engine light mean?",
          a: "It can indicate anything from a loose gas cap to a failing catalytic converter. Our advanced diagnostics pinpoint the exact cause so we only fix what's needed.",
        },
        {
          q: "How long does an engine diagnostic take?",
          a: "A basic diagnostic scan takes about 30–60 minutes. A full inspection to confirm the root cause may take a few hours depending on symptoms.",
        },
        {
          q: "How do I know if I need a timing belt replacement?",
          a: "Most manufacturers recommend replacing the timing belt every 60,000–100,000 miles. Check your owner's manual, or bring it in and we'll inspect it.",
        },
        {
          q: "Can you fix engines on hybrid and electric vehicles?",
          a: "Yes. Our mechanics are trained on hybrid and electric powertrains and can handle diagnostics and repairs for these vehicles.",
        },
      ]}
    />
  );
}
