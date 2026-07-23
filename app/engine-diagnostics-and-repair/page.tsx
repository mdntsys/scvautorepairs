import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Engine Diagnostics, Santa Clarita CA",
  description:
    "Engine diagnostics and repair in Santa Clarita, CA. Check engine light, spark plugs, timing belts, head gaskets, and rebuilds. Call 661-251-2515.",
  alternates: { canonical: "/engine-diagnostics-and-repair" },
};

export default function EngineDiagnosticsPage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Engine Diagnostics & Repair in Santa Clarita, CA"
      description="When your check engine light comes on or your engine isn't performing like it should, you need mechanics you can trust. SCV Auto Repairs uses advanced diagnostic tools and deep expertise to identify issues fast and fix them right — from minor tune-ups to complete engine rebuilds — all with OEM-quality parts and our 3-year/36,000-mile warranty."
      sections={[
        {
          heading: "Signs You Need Engine Diagnostics in Santa Clarita",
          body: [
            "Modern engines rarely fail without warning. They drop hints through sounds, smells, and small changes in how the vehicle drives, and catching those early is often the difference between a simple repair and a major one. If your check engine light is on, learn more on our check engine light page. Otherwise, these are the symptoms our technicians see most often.",
          ],
          bullets: [
            "A check engine light that is on steady or flashing. A flashing light means stop driving and get it looked at right away.",
            "Rough idling, stalling, or hesitation when you accelerate.",
            "A noticeable drop in fuel economy or power, especially climbing a grade.",
            "Knocking, ticking, or tapping noises from under the hood.",
            "Hard starting, extended cranking, or a no-start condition.",
            "Smoke or an unusual smell from the exhaust, such as burnt oil or a sweet coolant odor.",
            "Visible fluid leaks or the smell of coolant or oil after the engine warms up.",
          ],
        },
        {
          heading: "What to Expect at SCV Auto Repairs",
          body: [
            "An accurate repair starts with an accurate diagnosis. Our ASE-certified technicians connect to your vehicle's computer to pull trouble codes, then go further by testing sensors, checking fuel and ignition components, and inspecting the engine by hand to confirm the real root cause rather than simply replacing the first part a code points to.",
            "Once we know what is wrong, we explain the findings in plain language and lay out your options before any work begins, so there are no surprises. We use OEM-quality parts on every repair, from a single spark plug to a full engine rebuild, and back completed work with our 3-year, 36,000-mile nationwide warranty.",
          ],
        },
        {
          heading: "Why Santa Clarita Driving Is Hard on Engines",
          body: [
            "The climate and terrain around the Santa Clarita Valley put real stress on an engine. Triple-digit summer heat forces the cooling system to work overtime, and heat is hard on everything from hoses and gaskets to the oil that keeps the engine protected. When the cooling system falls behind, small problems escalate quickly.",
            "Terrain adds to the load. Pulling the grades on the I-5 through the Newhall Pass or climbing Highway 14 toward Acton and Agua Dulce makes the engine work harder than flat-ground driving, while daily stop-and-go traffic keeps it running hot at low speeds. Regular diagnostics and maintenance help local engines shrug off that mix of heat and hard work instead of breaking down in it.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "Every engine repair we complete comes with a 3-year, 36,000-mile nationwide warranty, so you can trust the fix as much as we do. Our ASE-certified technicians work on all makes and models, including hybrid and electric vehicles, and use OEM-quality parts throughout. If your check engine light is on or your engine is not running the way it should, call SCV Auto Repairs at 661-251-2515 or book online for a diagnosis you can rely on.",
          ],
        },
      ]}
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
        {
          q: "Is it safe to drive with the check engine light on?",
          a: "If the light is steady and the car drives normally, it is usually safe to drive to the shop soon, but do not ignore it. A flashing check engine light signals a serious problem, often a misfire that can damage the catalytic converter, so pull over safely and call us.",
        },
        {
          q: "My car runs fine but the light is on. Do I still need a diagnostic?",
          a: "Yes. The light means the computer has logged a fault, and some issues that do not feel obvious, like a failing sensor or an emissions problem, get worse and more expensive the longer they wait. A scan tells us what the computer sees.",
        },
      ]}
    />
  );
}
