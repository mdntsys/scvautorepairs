import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Oil Change in Santa Clarita, CA",
  description:
    "Oil change in Santa Clarita, CA. Conventional, synthetic-blend, and full-synthetic oil changes for all makes by ASE-certified techs. Call 661-251-2515.",
  alternates: { canonical: "/oil-change" },
};

export default function OilChangePage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Oil Change in Santa Clarita, CA"
      description="Need an oil change in Santa Clarita? SCV Auto Repairs performs conventional, synthetic-blend, and full-synthetic oil changes for all makes and models, including hybrids. Every service includes a fresh oil filter, oil matched to your vehicle's specification, and a multi-point inspection so small problems get caught early. Our ASE-certified technicians serve Santa Clarita and Canyon Country, and every visit is backed by our 3-year/36,000-mile nationwide warranty. Call 661-251-2515 to schedule."
      services={[
        "Conventional oil change",
        "Synthetic-blend oil change",
        "Full-synthetic oil change",
        "Oil filter replacement",
        "Multi-point vehicle inspection",
        "Fluid level check and top-off",
        "Oil-life and maintenance light reset",
        "Hybrid vehicle oil change",
      ]}
      sections={[
        {
          heading: "How Often Should You Change Your Oil?",
          body: [
            "There is no single number that fits every car. How often you need an oil change depends on your oil type, your vehicle's age, and how you drive. The most reliable guide is your owner's manual, which lists the interval the manufacturer recommends for your vehicle.",
            "Conventional oil generally needs changing more often than full-synthetic, and many newer vehicles running synthetic can go noticeably longer between services. What matters just as much is the kind of driving you do. Severe-service conditions shorten the safe interval, and a lot of Santa Clarita driving falls into that category: stop-and-go errands, long freeway commutes over the pass, and the summer heat Canyon Country is known for all put extra stress on your oil.",
            "If most of your miles look like that, change your oil toward the shorter end of the recommended range. Not sure what your vehicle needs? Bring it in and our ASE-certified technicians will help you set a sensible schedule.",
          ],
          bullets: [
            "Frequent short trips that never fully warm the engine",
            "Long freeway commutes and towing",
            "Extended idling in stop-and-go traffic",
            "Extreme summer heat, common across the Santa Clarita Valley",
          ],
        },
        {
          heading: "What's Included in an Oil Change at SCV Auto Repairs",
          body: [
            "An oil change should be more than draining old oil and pouring in new. When you bring your vehicle to SCV Auto Repairs, here is what actually happens:",
            "The multi-point inspection is where a lot of the value hides. Our technicians flag a worn belt or a low fluid before it leaves you stranded, then explain what they find so you can decide what to do next.",
          ],
          bullets: [
            "Draining the old, worn-out oil completely",
            "Installing a new oil filter",
            "Refilling with oil matched to your manufacturer's specification and viscosity",
            "Resetting the oil-life indicator or maintenance light",
            "A multi-point inspection covering fluids, belts, hoses, and tires",
            "The whole service backed by our 3-year/36,000-mile nationwide warranty",
          ],
        },
        {
          heading: "Conventional vs. Synthetic",
          body: [
            "One of the most common questions we hear is which oil to use. The honest answer is that it depends on your vehicle and how you drive, and there is no pressure either way.",
            "Conventional oil is a proven, economical choice that works well for many vehicles kept on a regular schedule. Synthetic-blend offers a step up in protection, and full-synthetic flows better in temperature extremes and generally holds up longest, which is why many modern engines and hybrids call for it specifically.",
            "Some vehicles require a particular grade, and using the wrong one can affect performance or even your factory warranty coverage. Our technicians will check your manufacturer's specification and walk you through the options so you can make the call that fits your car.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "Every oil change at SCV Auto Repairs is covered by our 3-year/36,000-mile nationwide warranty and performed by ASE-certified technicians using OEM-quality parts. That means the work is done right and stands behind you wherever you drive.",
            "We are located at 20723 Soledad Canyon Rd in Canyon Country and serve drivers across Santa Clarita, Saugus, Newhall, Valencia, Stevenson Ranch, Castaic, Acton, and Agua Dulce. Our hours are Monday through Friday, 7:30 AM to 4:00 PM. Call 661-251-2515 to schedule your oil change or ask us anything about what your vehicle needs.",
          ],
        },
      ]}
      faqs={[
        {
          q: "How often should I get an oil change?",
          a: "It depends on your oil type, your vehicle, and how you drive. Follow the interval in your owner's manual, and lean toward the shorter end if you do a lot of short trips, freeway commuting, or hot-weather driving. When in doubt, call 661-251-2515 and we'll help you set a schedule.",
        },
        {
          q: "How long does an oil change take?",
          a: "Most oil changes take around 30 to 45 minutes. If our multi-point inspection turns up something worth addressing, we'll let you know before doing any additional work.",
        },
        {
          q: "Do you take walk-ins for oil changes?",
          a: "We do our best to accommodate walk-ins, but wait times vary. The surest way to get in quickly is to call ahead at 661-251-2515 so we can keep your wait short.",
        },
        {
          q: "Synthetic or conventional: which should I use?",
          a: "Both are good options; the right choice depends on your vehicle and how you drive. Many modern engines and hybrids are designed for synthetic, while conventional works well for many others on a regular schedule. We'll check your manufacturer's specification and explain the trade-offs, no pressure either way.",
        },
        {
          q: "Do you service hybrid vehicles?",
          a: "Yes. We change oil and perform maintenance on hybrid vehicles, and we work on all makes and models. Just let us know what you drive when you call.",
        },
      ]}
    />
  );
}
