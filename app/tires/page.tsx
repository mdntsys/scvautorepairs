import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Tire Shop in Santa Clarita, CA",
  description:
    "Tire service in Santa Clarita, CA. Rotation, balancing, flat repair, TPMS diagnostics, wheel alignment, and new tire installation. 661-251-2515.",
  alternates: { canonical: "/tires" },
};

export default function TiresPage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Tire Service in Santa Clarita, CA"
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
        {
          q: "How do I know if I need an alignment or just a rotation?",
          a: "Uneven wear across a single tire, a pull to one side, or an off-center steering wheel usually points to an alignment issue. Even wear that simply needs balancing out across all four tires calls for a rotation. We inspect for both and tell you which one your vehicle actually needs.",
        },
        {
          q: "Does the way my car drives affect tire wear?",
          a: "Yes. Worn suspension and steering parts and an alignment that is out of spec cause tires to wear unevenly and wear out early, which is why we check those components as part of tire service.",
        },
      ]}
      sections={[
        {
          heading: "Signs You Need Tire Service in Santa Clarita",
          body: [
            "Tires wear gradually, so the warning signs are easy to overlook until handling or safety is affected. Have our team take a look if you notice any of these:",
          ],
          bullets: [
            "Uneven tread wear, or noticeably more wear on one edge of a tire than the other",
            "Vibration through the steering wheel or seat, especially at freeway speed",
            "The vehicle pulling to one side on a straight, level road",
            "Tread worn down to or near the built-in wear bars",
            "A tire that keeps losing pressure, or a TPMS warning light on the dash",
            "Cracks, bulges, or visible damage in the sidewall",
            "Cupping or scalloped patches across the tread, which often point to worn suspension parts",
          ],
        },
        {
          heading: "What to Expect at SCV Auto Repairs",
          body: [
            "We start by inspecting your tires along with the parts that affect how they wear, from tread depth across each tire and inflation pressure to the condition of the suspension and steering components and whether the wheels are balanced and aligned. Tire wear is rarely just about the tires. Worn shocks, struts, or steering parts and an alignment that is out of spec will chew through even brand-new tires, so we look at the whole picture instead of only what is on the surface.",
            "After the inspection we tell you honestly what we found and what actually needs doing, whether that is a straightforward rotation and balance, a wheel alignment, a flat repair, or replacement. Nothing happens until you approve it. We use OEM-quality parts, and every completed repair is backed by our 3-year/36,000-mile nationwide warranty.",
          ],
        },
        {
          heading: "How Santa Clarita Roads Wear Your Tires",
          body: [
            "Drivers here put serious highway miles on their vehicles. Long daily commutes down the I-5 and Highway 14 mean tires spend hours at freeway speed, where wheels that are slightly out of balance or an alignment that is off will wear the tread quickly and unevenly. Summer heat adds to the strain, since hot pavement raises tire temperatures and pressures, and an underinflated or aging tire is far more likely to fail on a triple-digit afternoon.",
            "The dusty canyon roads and rougher shoulders around Canyon Country, Castaic, and Acton take their toll as well, and the potholes that open up after a rare heavy rain can knock an alignment out in an instant. Regular rotation, balancing, and alignment checks keep wear even across all four tires, which stretches their life and keeps the vehicle tracking straight through all those freeway miles.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "SCV Auto Repairs handles tire service for all makes and models, including hybrid and electric vehicles, from rotations and flat repairs to new tire installation, TPMS diagnostics, and wheel alignment. Our ASE-certified technicians use OEM-quality parts, and every completed repair comes with a 3-year/36,000-mile nationwide warranty. If your tires are wearing unevenly, your steering wheel shakes, or you are simply due for a rotation, call 661-251-2515 or book online. We serve Santa Clarita, Canyon Country, Saugus, Newhall, Valencia, Stevenson Ranch, Castaic, Acton, and Agua Dulce.",
          ],
        },
      ]}
    />
  );
}
