import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Exhaust & Muffler Repair, Santa Clarita",
  description:
    "Exhaust and muffler repair in Santa Clarita, CA. Catalytic converters, pipe welding, oxygen sensors, and emissions checks. Call 661-251-2515.",
  alternates: { canonical: "/exhaust-system" },
};

export default function ExhaustSystemPage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Exhaust & Muffler Repair in Santa Clarita, CA"
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
      sections={[
        {
          heading: "Signs You Need Exhaust or Muffler Repair in Santa Clarita",
          body: [
            "The exhaust system does more than quiet your engine. It routes hot, toxic gases safely away from the cabin, controls emissions, and helps the engine breathe efficiently. Problems usually start small and get louder or worse over time. If you notice any of these signs around Santa Clarita, have the system checked before a minor leak becomes a bigger repair or a health concern.",
          ],
          bullets: [
            "A louder-than-normal roar, rumble, or rasp, especially when accelerating",
            "A hissing or ticking sound that points to an exhaust leak or cracked manifold",
            "A sulfur or rotten-egg smell, or fumes making their way into the cabin",
            "Reduced fuel economy or a noticeable drop in power",
            "A check engine light traced to an oxygen sensor or catalytic converter",
            "Rattling from under the car, often a loose heat shield or failing converter",
            "Visible rust, holes, or hanging pipes underneath the vehicle",
            "Failing an emissions test at your smog station",
          ],
        },
        {
          heading: "What to Expect at SCV Auto Repairs",
          body: [
            "We start by locating the actual source of the problem. Our ASE-certified technicians inspect the exhaust from the manifold back through the catalytic converter, pipes, resonator, and muffler, checking for leaks, rust-through, failed hangers, and bad oxygen sensors. When a check engine light is involved, we scan the system so we are repairing the real cause rather than throwing parts at a symptom.",
            "Before any work begins, we explain what we found and what it will take to fix it, so there are no surprises. Many exhaust repairs can be handled with precision welding rather than replacing an entire assembly, and when parts are needed we use OEM-quality components. Every completed repair is covered by our 3-year/36,000-mile nationwide warranty.",
          ],
        },
        {
          heading: "Emissions, Smog Tests, and Your Exhaust",
          body: [
            "California has some of the strictest emissions standards in the country, and a failed smog test is one of the most common reasons drivers come to us for exhaust work. A failing catalytic converter, a bad oxygen sensor, or a leak upstream of a sensor can all cause a vehicle to fail. We do not perform official smog checks, but we do diagnose and repair the underlying emissions problem so your vehicle can pass on a retest.",
            "Local driving adds to the wear. Long climbs like the Newhall Pass grade on I-5 and sustained runs out Highway 14 keep the exhaust and catalytic converter running hot for extended stretches, while short stop-and-go trips around Canyon Country and Saugus let moisture collect inside the system and speed up rust. Both patterns are hard on mufflers, pipes, and converters over time.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "SCV Auto Repairs services all makes and models, including hybrid and electric vehicles, and stands behind every exhaust and muffler repair with our 3-year/36,000-mile nationwide warranty. Our ASE-certified technicians use OEM-quality parts and precision welding to get the job done right. If your car is loud, failing emissions, or showing a check engine light, call us at 661-251-2515 or book a visit online.",
          ],
        },
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
        {
          q: "Is it safe to drive with an exhaust leak?",
          a: "It is not recommended. An exhaust leak can let carbon monoxide and other fumes into the cabin, which is a health risk, and it also hurts performance and fuel economy. Have it inspected promptly.",
        },
        {
          q: "Do you repair exhaust leaks or replace the whole system?",
          a: "Whenever possible we repair the specific problem, such as welding a cracked pipe or replacing a single failed section or sensor, rather than replacing the entire exhaust. We recommend full replacement only when a component is too corroded to repair safely.",
        },
      ]}
    />
  );
}
