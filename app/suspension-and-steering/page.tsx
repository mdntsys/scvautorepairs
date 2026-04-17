import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Suspension & Steering",
  description:
    "Expert suspension and steering repair in Santa Clarita, CA. Shocks, struts, ball joints, wheel alignment, and steering rack repair by ASE-certified mechanics.",
};

export default function SuspensionSteeringPage() {
  return (
    <ServicePageLayout
      subtitle="Smooth Handling and Comfort in Santa Clarita"
      title="Suspension & Steering Services"
      description="A worn suspension affects not just comfort — it affects safety. From rough roads to sharp corners, your vehicle's suspension and steering components work together to keep you in control. SCV Auto Repairs uses advanced equipment and OEM-quality parts to restore precision handling and ride quality on all vehicle makes and models."
      services={[
        "Shock absorber replacement",
        "Strut replacement",
        "Ball joint replacement",
        "Tie rod end replacement",
        "Power steering fluid flush",
        "Steering rack or gearbox repair",
        "Wheel alignment",
        "Control arm and bushing replacement",
        "Sway bar link and bushing replacement",
        "Steering pump repair and replacement",
      ]}
      faqs={[
        {
          q: "How often should suspension be inspected?",
          a: "We recommend a suspension inspection every 12,000 miles or once per year, especially if you drive on rough roads or notice any changes in handling.",
        },
        {
          q: "What are signs of suspension problems?",
          a: "Signs include excessive bouncing, pulling to one side, uneven tire wear, clunking noises over bumps, or a drifting feeling when turning.",
        },
        {
          q: "How long does a suspension repair take?",
          a: "Simple repairs like shock or strut replacements typically take 1–2 hours. More complex jobs involving multiple components may take longer.",
        },
        {
          q: "Do you include wheel alignment with suspension repairs?",
          a: "Yes. Any steering or suspension repair that affects wheel position includes a wheel alignment check as part of the service.",
        },
      ]}
    />
  );
}
