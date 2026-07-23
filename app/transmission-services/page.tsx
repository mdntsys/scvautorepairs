import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Transmission Repair, Santa Clarita CA",
  description:
    "Transmission repair in Santa Clarita, CA. Fluid flushes, leak repair, clutch replacement, diagnostics, and rebuilds. Call 661-251-2515.",
  alternates: { canonical: "/transmission-services" },
};

export default function TransmissionServicesPage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Transmission Repair in Santa Clarita, CA"
      description="Transmission problems — slipping gears, delayed shifts, or unusual noises — rarely fix themselves. At SCV Auto Repairs, our ASE-certified mechanics have the tools and expertise to diagnose and repair both automatic and manual transmissions accurately. We use OEM-quality parts and back every repair with our 3-year/36,000-mile warranty."
      sections={[
        {
          heading: "Signs You Need Transmission Service in Santa Clarita",
          body: [
            "A transmission usually warns you before it fails, but the signs are easy to write off as normal until shifting gets noticeably worse. Because transmission repairs get more involved the longer a problem is left alone, it pays to act on the early symptoms. These are the ones our technicians hear about most.",
          ],
          bullets: [
            "Gears that slip, where the engine revs but the vehicle does not accelerate the way it should.",
            "Delayed, hard, or jerky shifts, or a noticeable clunk when the transmission changes gears.",
            "A red or brown fluid leak on the driveway, one of the most common early warning signs.",
            "A burning smell, which can mean the transmission fluid is overheating.",
            "Whining, humming, or grinding noises that change with speed or gear.",
            "A check engine or transmission warning light, or the vehicle dropping into a limited limp mode.",
            "On a manual, a clutch that slips, chatters, or feels different at the pedal.",
          ],
        },
        {
          heading: "What to Expect at SCV Auto Repairs",
          body: [
            "Transmission trouble can have many causes, so we start by pinning down the real one. Our ASE-certified technicians scan for trouble codes, check the fluid level and condition, inspect for leaks, and road-test the vehicle to feel exactly how and when the problem shows up. That keeps you from paying for a rebuild when a solenoid, a leak, or a fluid service is the actual fix.",
            "We explain what we find and walk you through the options, whether that is a straightforward repair or a larger job, before any work starts. We use OEM-quality parts on both automatic and manual transmissions and back every completed repair with our 3-year, 36,000-mile nationwide warranty.",
          ],
        },
        {
          heading: "How Santa Clarita Driving Wears Out Transmissions",
          body: [
            "Heat is the number one enemy of any transmission, and the Santa Clarita Valley serves up plenty of it. Triple-digit summer temperatures raise transmission fluid temperatures, and hot fluid breaks down faster and protects less, which is why local vehicles often benefit from staying on top of fluid service rather than stretching the interval.",
            "Terrain makes it harder still. Towing or climbing the steep Newhall Pass grades on the I-5, or pulling Highway 14 toward Acton, forces the transmission to work hard and run hotter, and those same grades are just as tough on your brakes, so a descent through the pass is a good reminder to have both systems checked. Add the constant stop-and-go on Soledad Canyon Road and Bouquet Canyon Road, and it is easy to see why transmission fluid here earns its keep.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "Every transmission repair we complete is backed by a 3-year, 36,000-mile nationwide warranty, so you can put the vehicle back in service with confidence. Our ASE-certified technicians service automatic and manual transmissions on all makes and models, including hybrid and electric vehicles, using OEM-quality parts. If you have noticed slipping, rough shifts, or a leak, call SCV Auto Repairs at 661-251-2515 or book online to have it checked before it gets worse.",
          ],
        },
      ]}
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
        {
          q: "What color should my transmission fluid be?",
          a: "Healthy automatic transmission fluid is usually bright to deep red. If it looks brown or dark or smells burnt, that is a sign the fluid is breaking down and should be checked. A puddle in that color under the car is worth bringing in.",
        },
        {
          q: "Can you service the transmission on hybrid and electric vehicles?",
          a: "Yes. We service all makes and models, including hybrids and EVs. Their drivetrains differ from conventional automatics, and our ASE-certified technicians are trained to diagnose and service them correctly.",
        },
      ]}
    />
  );
}
