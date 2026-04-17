import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete auto repair services in Santa Clarita, CA. Brakes, engine diagnostics, transmission, suspension, AC, tires, and more by ASE-certified mechanics.",
};

const services = [
  {
    title: "Routine Maintenance",
    href: "/routine-maintenance",
    description:
      "Oil changes, fluid checks, air & cabin filters, wiper blades, and full 30K/60K/90K scheduled services to keep your vehicle running like new.",
    timeframe: "30–60 min",
  },
  {
    title: "Brake Services",
    href: "/brake-services",
    description:
      "Pad replacements, rotor resurfacing, caliper repair, ABS diagnostics, and brake fluid flushes. Your safety starts here.",
    timeframe: "1–3 hrs",
  },
  {
    title: "Engine Diagnostics & Repair",
    href: "/engine-diagnostics-and-repair",
    description:
      "Check engine light diagnostics, spark plugs, timing belt/chain, head gaskets, performance tuning, and complete engine rebuilds.",
    timeframe: "Varies",
  },
  {
    title: "Transmission Services",
    href: "/transmission-services",
    description:
      "Fluid flushes, leak repair, clutch replacement (manual), automatic transmission diagnostics, and full transmission rebuilds.",
    timeframe: "1 hr – 4 days",
  },
  {
    title: "Suspension & Steering",
    href: "/suspension-and-steering",
    description:
      "Shocks, struts, ball joints, tie rods, wheel alignment, steering rack repair, and control arm replacements.",
    timeframe: "1–3 hrs",
  },
  {
    title: "Exhaust System",
    href: "/exhaust-system",
    description:
      "Muffler repair, catalytic converter replacement, exhaust pipe welding, O2 sensor replacement, and emissions inspection.",
    timeframe: "1–6 hrs",
  },
  {
    title: "Electrical System Repairs",
    href: "/electrical-system-repairs",
    description:
      "Battery, alternator, starter motor, wiring harness, fuses, and full electrical diagnostics including hybrid and EV systems.",
    timeframe: "1–4 hrs",
  },
  {
    title: "AC & Heating",
    href: "/ac-and-heating",
    description:
      "Refrigerant recharge, compressor repair, heater core replacement, blower motor, and complete climate control diagnostics.",
    timeframe: "1–6 hrs",
  },
  {
    title: "Tire Services",
    href: "/tires",
    description:
      "Rotation & balancing, flat repair, installation & replacement, TPMS diagnostics, wheel alignment, and seasonal changeovers.",
    timeframe: "30 min – 2 hrs",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0c0c0c] border-b border-[#1a1a1a] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            Santa Clarita, CA
          </p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tighter text-white mb-4 max-w-2xl">
            Our Services
          </h1>
          <p className="text-muted text-lg max-w-xl">
            All vehicle makes and models, including hybrid and electric. ASE-certified mechanics using
            OEM-quality parts, backed by a 3-year/36,000-mile warranty.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block bg-[#0a0a0a] hover:bg-[#111111] p-7 border-t-2 border-transparent hover:border-accent transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-heading font-bold text-lg text-white group-hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <span className="text-xs text-[#444] bg-[#1a1a1a] px-2 py-1 rounded shrink-0 ml-3">
                    {service.timeframe}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center gap-1 text-xs text-[#444] group-hover:text-accent transition-colors">
                  <span>Learn more</span>
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Don't see your service */}
          <div className="mt-8 text-center py-12 border border-[#1e1e1e] rounded-lg bg-[#0c0c0c]">
            <h2 className="font-heading font-bold text-2xl tracking-tight text-white mb-2">
              Don&apos;t see your service?
            </h2>
            <p className="text-muted text-sm mb-5">
              We handle it all. Give us a call and we&apos;ll let you know if we can help.
            </p>
            <a
              href="tel:6612512515"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded text-sm transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 661-251-2515
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
