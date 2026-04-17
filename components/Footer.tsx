import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Routine Maintenance", href: "/routine-maintenance" },
  { label: "Brake Services", href: "/brake-services" },
  { label: "Engine Diagnostics & Repair", href: "/engine-diagnostics-and-repair" },
  { label: "Transmission Services", href: "/transmission-services" },
  { label: "Suspension & Steering", href: "/suspension-and-steering" },
  { label: "Exhaust System", href: "/exhaust-system" },
  { label: "Electrical System Repairs", href: "/electrical-system-repairs" },
  { label: "AC & Heating", href: "/ac-and-heating" },
  { label: "Tire Services", href: "/tires" },
];

const pages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Photos", href: "/photos" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/scvautorepairs_logo.png"
                alt="SCV Auto Repairs"
                width={52}
                height={52}
                className="object-contain"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-4">
              We go the extra mile so you can drive the extra miles. ASE-certified
              mechanics serving Santa Clarita since day one.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <span className="text-muted">Mon–Fri 7:30 AM – 4:00 PM</span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-[#555] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-[#555] mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-[#555] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:6612512515"
                  className="text-sm text-muted hover:text-accent transition-colors flex items-start gap-2"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  661-251-2515
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@scvautorepairs.com"
                  className="text-sm text-muted hover:text-accent transition-colors flex items-start gap-2"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@scvautorepairs.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=20723+Soledad+Canyon+Rd+Santa+Clarita+CA+91351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent transition-colors flex items-start gap-2"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  20723 Soledad Canyon Rd<br />Santa Clarita, CA 91351
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#444]">
            © {new Date().getFullYear()} SCV Auto Repairs. All rights reserved.
          </p>
          <p className="text-xs text-[#444]">
            Built by{" "}
            <a
              href="https://sixstarsites.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted transition-colors"
            >
              Six Star Sites
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
