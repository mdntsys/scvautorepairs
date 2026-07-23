import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Oil Change & Maintenance, Santa Clarita",
  description:
    "Oil changes, fluid checks, filters, and 30K/60K/90K scheduled maintenance in Santa Clarita, CA by ASE-certified mechanics. Call 661-251-2515.",
  alternates: { canonical: "/routine-maintenance" },
};

export default function RoutineMaintenancePage() {
  return (
    <ServicePageLayout
      subtitle="ASE-Certified · 3-Year/36,000-Mile Warranty"
      title="Routine Maintenance in Santa Clarita, CA"
      description="Regular maintenance is the key to a long-lasting, reliable vehicle. At SCV Auto Repairs, our ASE-certified mechanics follow manufacturer guidelines for all makes and models — including hybrid and electric vehicles — using OEM-quality parts. From quick oil changes to comprehensive 90K services, we keep you on schedule so your vehicle keeps running at its best."
      services={[
        "Oil and filter changes",
        "Coolant, brake, and transmission fluid checks & top-offs",
        "Air filter replacement",
        "Cabin filter replacement",
        "Wiper blade replacement",
        "Fuel system cleaning",
        "30K / 60K / 90K mile scheduled services",
        "Battery health check",
        "Tire pressure inspection",
        "Multi-point vehicle inspection",
      ]}
      faqs={[
        {
          q: "How often should I get an oil change?",
          a: "We recommend every 3,000–5,000 miles for conventional oil, or every 5,000–7,500 miles for synthetic oil. Check your owner's manual for the manufacturer's recommendation.",
        },
        {
          q: "How long does routine maintenance take?",
          a: "A standard oil change and inspection typically takes 30–60 minutes. More comprehensive services like 60K or 90K checkups may take 2–3 hours.",
        },
        {
          q: "Do you service hybrid and electric vehicles?",
          a: "Yes. Our team is trained and equipped to handle hybrid and electric vehicles for all routine maintenance needs.",
        },
        {
          q: "Why does regular maintenance matter?",
          a: "Routine maintenance prevents small issues from becoming costly repairs, improves fuel efficiency, and extends the life of your vehicle.",
        },
        {
          q: "What is included in a 30K, 60K, or 90K service?",
          a: "These scheduled services follow your manufacturer guidelines and typically combine fluid changes, filter replacements, and a thorough inspection of wear items at set mileage intervals. The exact list varies by make and model, and we follow what your vehicle calls for.",
        },
        {
          q: "What is the difference between an oil change and routine maintenance?",
          a: "An oil change replaces your engine oil and filter. Routine maintenance is broader and includes fluid checks, filters, the battery, tire pressure, and a multi-point inspection to catch wear before it becomes a problem.",
        },
      ]}
      sections={[
        {
          heading: "Signs Your Vehicle Is Due for Maintenance",
          body: [
            "Some maintenance runs on a schedule and some shows up as a symptom. Either way, staying ahead of it costs far less than repairing what neglect eventually breaks. Bring your vehicle in if you notice any of these:",
          ],
          bullets: [
            "A maintenance-required or oil-life light on the dash",
            "Dark, gritty engine oil, or more miles since your last oil change than the manufacturer recommends",
            "You cannot remember the last time the fluids were checked or topped off",
            "Reduced fuel economy or an engine that feels less responsive than usual",
            "Weak airflow from the vents or a musty cabin, both signs of a clogged cabin filter",
            "Streaking, chattering wiper blades that no longer clear the glass",
            "Slow engine cranking or a battery that is several years old",
            "You are approaching a 30,000, 60,000, or 90,000-mile milestone",
          ],
        },
        {
          heading: "What to Expect at SCV Auto Repairs",
          body: [
            "Routine service here is more than an oil change. Our ASE-certified technicians follow your manufacturer maintenance schedule and perform a multi-point inspection while your vehicle is in the shop, checking fluids, filters, the battery, tire pressure, and the parts that tend to wear, so we catch small problems before they turn into expensive ones. We change oil for every kind of vehicle, and you can learn more about intervals and what is included on our oil change page.",
            "If we find something that needs attention, we explain what we found and why it matters, then let you decide before any work begins. We use OEM-quality parts throughout, and every completed repair is backed by our 3-year/36,000-mile nationwide warranty.",
          ],
        },
        {
          heading: "Why Regular Maintenance Matters More in Santa Clarita",
          body: [
            "Santa Clarita drivers rack up miles quickly. Commutes on the I-5 and Highway 14 mean long stretches of freeway driving, and the stop-and-go crawl through the pass adds engine hours that the odometer alone does not always reflect. Those miles and hours are exactly why sticking to your service schedule matters more here than in a town where cars mostly run short errands.",
            "The local climate adds its own demands. Triple-digit summer heat is hard on oil, coolant, and batteries, so keeping the fluids fresh and the cooling system healthy helps your engine handle the worst of it. The dusty canyon air around Canyon Country and Castaic clogs engine and cabin air filters faster than average. Staying on top of your 30K, 60K, and 90K scheduled services keeps everything working the way the manufacturer intended, mile after mile.",
          ],
        },
        {
          heading: "Backed by Our 3-Year/36,000-Mile Warranty",
          body: [
            "SCV Auto Repairs keeps all makes and models on schedule, including hybrid and electric vehicles, from quick oil and filter changes to full 30K, 60K, and 90K services. Our ASE-certified technicians use OEM-quality parts, and every completed repair is backed by a 3-year/36,000-mile nationwide warranty. To stay ahead of costly repairs and keep your vehicle running its best, call 661-251-2515 or book online. We serve Santa Clarita, Canyon Country, Saugus, Newhall, Valencia, Stevenson Ranch, Castaic, Acton, and Agua Dulce.",
          ],
        },
      ]}
    />
  );
}
