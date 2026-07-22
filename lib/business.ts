/**
 * Single source of truth for the shop's name, address, phone and hours (NAP).
 *
 * Before this existed the address was written six different ways across the
 * codebase — the sitewide contact block dropped "CA 91351" entirely, and hours
 * appeared in four different formats. Inconsistent NAP actively works against
 * local ranking, and structured data has to agree with what's on the page.
 *
 * Anything user-facing that states the address, phone or hours should read from
 * here rather than hardcoding it.
 */

export const BUSINESS = {
  name: "SCV Auto Repairs",

  /**
   * There are several similarly-named shops within two miles, including
   * "SCV Auto Repair" (singular) at 26821 Ruether Ave, which is an unrelated
   * business. Always write the plural form — never "SCV Auto Repair".
   */
  url: "https://www.scvautorepairs.com",

  address: {
    street: "20723 Soledad Canyon Rd",
    locality: "Santa Clarita",
    /** 91351 is the Canyon Country area of Santa Clarita. */
    neighborhood: "Canyon Country",
    region: "CA",
    postalCode: "91351",
    country: "US",
  },

  /** Verified geocode of the street address, house-level precision. */
  geo: {
    latitude: 34.4206761,
    longitude: -118.4989979,
  },

  phone: {
    /** As shown to people. */
    display: "661-251-2515",
    /** E.164, required by schema.org and correct for international dialling. */
    e164: "+16612512515",
    /** href value for tel: links. */
    href: "tel:+16612512515",
  },

  hours: {
    /** One canonical display string. Use this everywhere. */
    display: "Mon–Fri: 7:30 AM – 4:00 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "07:30",
    closes: "16:00",
    closed: ["Saturday", "Sunday"] as const,
  },

  warranty: "3-year / 36,000-mile nationwide warranty on all completed repairs.",

  /** Communities the shop draws from, used in copy and in schema areaServed. */
  areaServed: [
    "Santa Clarita",
    "Canyon Country",
    "Saugus",
    "Newhall",
    "Valencia",
    "Stevenson Ranch",
    "Castaic",
    "Acton",
    "Agua Dulce",
  ],

  /**
   * Official profiles, used for schema `sameAs`. These are what let Google and
   * AI assistants tie this domain to the right business — which matters more
   * than usual here given the name collisions in the area.
   *
   * NOTE: the Yelp listing is currently titled "SCV Auto Repair" (singular)
   * despite being this shop's listing at this address. It is being renamed
   * off-site; the URL slug will stay valid.
   */
  profiles: {
    google: "https://share.google/uFKPBzpdICOkXMPXE",
    facebook: "https://www.facebook.com/scvautorepairs/",
    yelp: "https://www.yelp.com/biz/scv-auto-repair-santa-clarita",
  },
} as const;

/** "20723 Soledad Canyon Rd, Santa Clarita, CA 91351" */
export const FULL_ADDRESS = `${BUSINESS.address.street}, ${BUSINESS.address.locality}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}`;

/** "Santa Clarita, CA 91351" */
export const CITY_STATE_ZIP = `${BUSINESS.address.locality}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}`;

export const MAP_URL = `https://maps.google.com/?q=${encodeURIComponent(FULL_ADDRESS)}`;

/** The 9 service pages, used for the sitewide OfferCatalog and nav consistency. */
export const SERVICES = [
  { name: "Routine Maintenance", slug: "/routine-maintenance" },
  { name: "Brake Repair", slug: "/brake-services" },
  { name: "Engine Diagnostics & Repair", slug: "/engine-diagnostics-and-repair" },
  { name: "Transmission Repair", slug: "/transmission-services" },
  { name: "Suspension & Steering", slug: "/suspension-and-steering" },
  { name: "Exhaust & Muffler Repair", slug: "/exhaust-system" },
  { name: "Auto Electrical Repair", slug: "/electrical-system-repairs" },
  { name: "Car AC & Heating Repair", slug: "/ac-and-heating" },
  { name: "Tire Service", slug: "/tires" },
] as const;
