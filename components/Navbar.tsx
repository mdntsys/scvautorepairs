"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Photos", href: "/photos" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#262626]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/scvautorepairs_logo.png"
            alt="SCV Auto Repairs"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="font-heading font-700 text-sm tracking-wide text-text hidden sm:block">
            SCV AUTO REPAIRS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                pathname === link.href
                  ? "text-accent"
                  : "text-muted hover:text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`px-3 py-2 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                pathname.startsWith("/") && services.some((s) => pathname === s.href)
                  ? "text-accent"
                  : "text-muted hover:text-text"
              }`}
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-64 bg-[#111111] border border-[#262626] rounded-lg overflow-hidden shadow-xl shadow-black/50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-2.5 text-sm transition-colors border-l-2 ${
                        pathname === service.href
                          ? "text-accent border-accent bg-[#1a1a1a]"
                          : "text-muted border-transparent hover:text-text hover:border-accent hover:bg-[#1a1a1a]"
                      }`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:6612512515"
            className="text-sm font-medium text-muted hover:text-text transition-colors"
          >
            661-251-2515
          </a>
          <a
            href="tel:6612512515"
            className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded transition-all active:-translate-y-px"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-muted hover:text-text transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-px bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-[#0a0a0a] border-b border-[#262626]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 text-sm font-medium border-b border-[#1a1a1a] ${
                    pathname === link.href ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="py-2 text-xs uppercase tracking-widest text-[#555] mt-2">Services</div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`py-2 text-sm pl-3 border-l-2 ${
                    pathname === service.href
                      ? "text-accent border-accent"
                      : "text-muted border-[#262626]"
                  }`}
                >
                  {service.label}
                </Link>
              ))}
              <a
                href="tel:6612512515"
                className="mt-4 bg-accent text-white text-sm font-semibold px-4 py-3 rounded text-center"
              >
                Call 661-251-2515
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
