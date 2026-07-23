import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Auto Electrical Repair, Santa Clarita",
  description:
    "Auto electrical repair in Santa Clarita, CA. Batteries, alternators, starters, wiring, and hybrid/EV electrical systems. Call 661-251-2515.",
  alternates: { canonical: "/electrical-system-repairs" },
};

export default function ElectricalSystemPage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Auto Electrical Repair in Santa Clarita, CA"
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
      sections={[
        {
          heading: "Signs You Need Electrical System Repair in Santa Clarita",
          body: [
            "Electrical faults can be some of the most frustrating car problems because they often come and go. A car that will not start one morning may crank fine the next, and a warning light may flicker on and off. Catching these symptoms early makes them far easier to track down. If you notice any of the following around Santa Clarita, it is worth having the electrical system checked.",
          ],
          bullets: [
            "Slow or labored engine cranking, or a single click with no start",
            "Dimming headlights or interior lights, especially at idle",
            "A battery or charging-system warning light on the dash",
            "Power windows, door locks, or accessories working intermittently",
            "Fuses that keep blowing again after they are replaced",
            "A burning smell or corrosion around the battery terminals",
            "Flickering dashboard gauges or an instrument cluster that resets",
            "A swollen battery case, or a battery more than three to five years old",
          ],
        },
        {
          heading: "What to Expect at SCV Auto Repairs",
          body: [
            "Electrical work rewards careful diagnosis. Our ASE-certified technicians use advanced diagnostic tools to test the battery, alternator, starter, and charging output, then trace wiring, grounds, fuses, and relays to find the actual source of the fault instead of swapping parts and hoping. Intermittent problems get the time they need to be reproduced and confirmed.",
            "Once we have isolated the issue, we explain what we found and what the repair involves before we begin, using OEM-quality parts for any component we replace. From a simple battery or alternator to a hard-to-find short in a wiring harness, the work is backed by our 3-year/36,000-mile nationwide warranty.",
          ],
        },
        {
          heading: "How Santa Clarita Heat Affects Your Battery and Electrical System",
          body: [
            "Heat is the enemy of car batteries, and Santa Clarita summers are hard on them. When temperatures climb into the triple digits across Canyon Country, Saugus, and out toward Acton and Agua Dulce, the heat under the hood speeds up the chemical wear inside a battery and accelerates corrosion at the terminals. That is why batteries in this valley often fade faster than the mileage alone would suggest, sometimes failing with little warning on the next cool morning.",
            "The alternator and cooling fans also work harder in the heat, and long climbs like the Newhall Pass grade on I-5 keep the charging system under load. We test battery health and charging output as part of our electrical service, so a weak battery gets caught before it strands you in a parking lot.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "SCV Auto Repairs services all makes and models, and our ASE-certified technicians are trained to safely work on the high-voltage systems in hybrid and electric vehicles as well as conventional 12-volt electronics. Every completed electrical repair is backed by our 3-year/36,000-mile nationwide warranty and uses OEM-quality parts. If your car is slow to start, showing warning lights, or acting up electrically, call us at 661-251-2515 or book a visit online.",
          ],
        },
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
        {
          q: "Does summer heat really shorten battery life?",
          a: "Yes. High under-hood temperatures speed up the internal wear and corrosion that age a battery, which is why batteries in the Santa Clarita Valley often need replacing sooner than in milder climates. Having the battery and charging system tested before summer helps avoid a surprise failure.",
        },
        {
          q: "My car has an electrical problem that comes and goes. Can you still find it?",
          a: "Often, yes. Intermittent faults are the hardest to diagnose, but our technicians use systematic testing to reproduce the condition and trace it to the root cause, whether it is a loose ground, a failing relay, or a chafed wire.",
        },
      ]}
    />
  );
}
