import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "AC & Heating Services",
  description:
    "Expert AC and heating repair in Santa Clarita, CA. Refrigerant recharge, compressor repair, heater core replacement, and climate control diagnostics by ASE-certified mechanics.",
};

export default function AcHeatingPage() {
  return (
    <ServicePageLayout
      subtitle="Comfort All Year Long in Santa Clarita, CA"
      title="AC & Heating Services"
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
      ]}
    />
  );
}
