import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Brake Repair in Santa Clarita, CA",
  description:
    "Brake repair in Santa Clarita, CA. Pad replacement, rotors, calipers, ABS diagnostics, and fluid flushes by ASE-certified mechanics. Call 661-251-2515.",
  alternates: { canonical: "/brake-services" },
};

export default function BrakeServicesPage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Brake Repair in Santa Clarita, CA"
      description="Your brakes are your vehicle's most critical safety system. At SCV Auto Repairs, our ASE-certified mechanics handle every aspect of brake service — from routine pad replacements to complex ABS diagnostics — using OEM-quality parts. We work quickly and affordably to get you back on the road with full confidence in your stopping power."
      sections={[
        {
          heading: "Signs You Need Brake Service in Santa Clarita",
          body: [
            "Brakes wear gradually, so the warning signs are easy to ignore until stopping distances stretch and a small fix turns into a major one. Because braking is the one system standing between you and the vehicle ahead, it pays to act on the first symptom rather than the last. These are the signs our technicians hear about most from local drivers.",
          ],
          bullets: [
            "A high-pitched squeal or squeak when you press the pedal, often the built-in wear indicator telling you the pads are near the end of their life.",
            "A grinding or metal-on-metal sound, which usually means the pads are worn through and the rotors are being damaged.",
            "A brake pedal that pulses or vibrates under your foot, a common sign of warped or unevenly worn rotors.",
            "The vehicle pulling to one side when you brake, which can point to a sticking caliper or uneven pad wear.",
            "A soft, spongy, or sinking pedal, which may indicate air or moisture in the brake fluid or a leak in the system.",
            "A brake or ABS warning light on the dashboard.",
            "Longer stopping distances or a burning smell after repeated braking, especially on a downhill grade.",
          ],
        },
        {
          heading: "What to Expect at SCV Auto Repairs",
          body: [
            "Every brake job starts with a full inspection. Our ASE-certified technicians measure pad thickness, check the rotors against factory minimum specifications, examine the calipers, hoses, and brake lines, and test the fluid for moisture. That tells us exactly what your brakes need instead of relying on a quick guess.",
            "Before we pick up a wrench, we walk you through what we found and what we recommend, so you can make the call with the full picture in front of you. We fit OEM-quality parts, resurface rotors only when they can be brought safely back to spec and replace them when they cannot, and road-test the vehicle afterward to confirm a firm pedal and straight, quiet stops. Every completed brake repair is covered by our 3-year, 36,000-mile nationwide warranty.",
          ],
        },
        {
          heading: "How Santa Clarita Driving Wears Out Brakes",
          body: [
            "Driving around the Santa Clarita Valley is unusually demanding on a brake system. The long descent through the Newhall Pass on the I-5, along with the grades on Highway 14, forces your brakes to shed a lot of speed and heat on the way down, and repeated heavy braking on a hot summer afternoon can glaze the pads and warp the rotors faster than gentler driving would.",
            "Add the daily stop-and-go on Soledad Canyon Road and Bouquet Canyon Road, the tight turns of the canyon routes, and desert heat that pushes temperatures higher, and it is easy to see why local pads and fluid do not always reach their textbook mileage. Your brakes also do not work in isolation. Worn tires lengthen stopping distances and tired suspension parts change how weight shifts when you slow down, so we keep an eye on tire and suspension health as part of keeping you safe when you stop.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "Every brake repair we complete is backed by a 3-year, 36,000-mile nationwide warranty, so you can drive away confident the work will hold up. Our ASE-certified technicians service all makes and models, including hybrid and electric vehicles, using OEM-quality parts. If your brakes are squealing, grinding, or simply do not feel right, call SCV Auto Repairs at 661-251-2515 or book online to have them inspected.",
          ],
        },
      ]}
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
        {
          q: "My brakes squeal but still feel fine. Should I worry?",
          a: "Many pads have a small metal wear indicator that squeals on purpose once the pad gets thin, giving you warning before stopping performance drops off. A steady squeal is worth an inspection even if braking still feels normal.",
        },
        {
          q: "Do you service brakes on hybrid and electric vehicles?",
          a: "Yes. Hybrids and EVs use regenerative braking that can extend pad life, but the calipers, rotors, and fluid still need attention. We service all makes and models.",
        },
      ]}
    />
  );
}
