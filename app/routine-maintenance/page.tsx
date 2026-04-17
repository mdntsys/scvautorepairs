import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Routine Maintenance",
  description:
    "Keep your vehicle running at its best with routine maintenance services in Santa Clarita, CA. Oil changes, fluid checks, filters, and scheduled services by ASE-certified mechanics.",
};

export default function RoutineMaintenancePage() {
  return (
    <ServicePageLayout
      subtitle="Santa Clarita, CA"
      title="Routine Maintenance"
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
      ]}
    />
  );
}
