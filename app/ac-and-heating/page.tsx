import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Car AC Repair in Santa Clarita, CA",
  description:
    "Car AC and heating repair in Santa Clarita, CA. Refrigerant recharge, compressors, heater cores, and climate control diagnostics. Call 661-251-2515.",
  alternates: { canonical: "/ac-and-heating" },
};

export default function AcHeatingPage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Car AC & Heating Repair in Santa Clarita, CA"
      description="Whether it's a scorching Santa Clarita summer or a cold winter morning, your vehicle's climate control system needs to work reliably. SCV Auto Repairs diagnoses and repairs all AC and heating issues — from refrigerant recharges to heater core replacements — keeping you comfortable in every season with OEM-quality parts."
      services={[
        "AC refrigerant recharge",
        "AC compressor repair and replacement",
        "AC condenser repair and replacement",
        "Evaporator core service",
        "Heater core replacement",
        "Blower motor repair and replacement",
        "Cabin air filter replacement",
        "Climate control system diagnostics",
        "AC leak detection and repair",
        "Thermostat replacement",
      ]}
      faqs={[
        {
          q: "Why is my AC blowing warm air?",
          a: "Common causes include low refrigerant, a failing compressor, a clogged condenser, or a malfunctioning blend door. We'll diagnose the exact cause.",
        },
        {
          q: "How often should I recharge my AC?",
          a: "Most vehicles don't need regular AC recharges — if your system is properly sealed, refrigerant doesn't run out. A loss of refrigerant usually indicates a leak that needs to be fixed.",
        },
        {
          q: "What causes weak heat in my car?",
          a: "Weak heat is often caused by a clogged heater core, low coolant, a faulty thermostat, or a failing heater control valve.",
        },
        {
          q: "How long does AC repair take?",
          a: "A refrigerant recharge takes about an hour. More complex repairs like compressor or heater core replacement can take half a day or more.",
        },
        {
          q: "Should I have my AC checked before summer?",
          a: "Yes. Santa Clarita summers are hard on AC systems, and a marginal system often fails on the hottest days of the year. A pre-summer check lets us catch a low charge or a small leak before it leaves you without cold air.",
        },
        {
          q: "Do you service AC on hybrid and electric vehicles?",
          a: "Yes. We diagnose and repair climate control systems on all makes and models, including hybrid and electric vehicles.",
        },
      ]}
      sections={[
        {
          heading: "Signs You Need AC or Heating Repair in Santa Clarita",
          body: [
            "Climate control problems rarely fix themselves, and a small fault tends to get worse fast once the summer heat sets in. If you notice any of the following, it is worth having our ASE-certified technicians take a look before a minor issue turns into a compressor or heater core failure:",
          ],
          bullets: [
            "Air that blows warm or barely cool even when the AC is set to its coldest setting",
            "A cabin that takes far too long to cool down, or that only cools while you are moving",
            "Weak or no airflow from the vents even with the fan turned all the way up",
            "Lukewarm or cold air from the heater on a chilly morning",
            "Musty or unusual smells when the system runs, or fog that lingers on the inside of the windshield",
            "Rattling, squealing, or clicking noises when the AC compressor kicks on",
            "Puddles or oily residue under the vehicle, which can point to a refrigerant or coolant leak",
          ],
        },
        {
          heading: "What to Expect at SCV Auto Repairs",
          body: [
            "Every AC and heating job starts with a proper diagnosis rather than a guess. Our technicians check the full system, including refrigerant charge and pressures, the compressor and its clutch, the condenser, the evaporator, the blower motor, the blend doors, and the cabin air filter, so we find the real cause instead of just topping off refrigerant that will leak right back out. For heating complaints, we look at coolant level, the thermostat, the heater core, and the controls that route warm air into the cabin.",
            "Once we know what is going on, we explain what we found and walk you through your options before any work begins. You approve the repair first, and we use OEM-quality parts so the fix holds up over time. Every completed repair is covered by our 3-year/36,000-mile nationwide warranty, so you can drive away with confidence.",
          ],
        },
        {
          heading: "Why Santa Clarita Summers Are So Hard on Your AC",
          body: [
            "Santa Clarita sits in a high desert valley where summer afternoons routinely climb past 100 degrees, and Canyon Country, Saugus, and Castaic feel every bit of it. That kind of heat pushes an automotive AC system to its limit. A car that cools fine in spring can struggle badly by July, and a weak system that never gets attention often gives out during the hottest week of the year. Long stretches of stop-and-go traffic on the I-5 and Highway 14, where little air moves across the condenser, make an already strained system work even harder.",
            "The desert environment is tough in other ways too. Dusty canyon air clogs cabin air filters faster than many drivers expect, which chokes airflow and makes the whole system feel weak even when the refrigerant is fine. Having your AC checked before the worst of the summer, and keeping the cabin filter fresh, goes a long way toward avoiding a breakdown on the day you need cold air the most.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "SCV Auto Repairs services all makes and models, including hybrid and electric vehicles, and our ASE-certified technicians handle everything from a simple refrigerant recharge to a full compressor or heater core replacement. Every completed repair is backed by a 3-year/36,000-mile nationwide warranty using OEM-quality parts. If your AC is not keeping up or your heater is falling short, call us at 661-251-2515 or book online, and we will get your climate control working the way it should. We proudly serve Santa Clarita, Canyon Country, Saugus, Newhall, Valencia, Stevenson Ranch, Castaic, Acton, and Agua Dulce.",
          ],
        },
      ]}
    />
  );
}
