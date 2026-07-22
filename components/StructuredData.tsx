import {
  BUSINESS,
  FULL_ADDRESS,
  MAP_URL,
  SERVICES,
} from "@/lib/business";

/**
 * Sitewide JSON-LD.
 *
 * The job here is entity disambiguation, not rich results. There are eight
 * similarly-named auto shops within two miles of this one, and AI assistants
 * currently conflate them. This markup is the machine-readable statement that
 * this domain, this address, this phone number and these profiles are one
 * business.
 *
 * Deliberately absent: `aggregateRating` and `review`. Google's review-snippet
 * policy makes a business ineligible for star treatment when it controls the
 * reviews about itself, so marking up the on-site testimonials would be a
 * spammy-structured-data violation for zero benefit. Ratings in search and AI
 * answers come from Google Business Profile and Yelp, which `sameAs` points at.
 */

const BUSINESS_ID = `${BUSINESS.url}/#business`;
const ORG_ID = `${BUSINESS.url}/#organization`;

function graph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoRepair", "LocalBusiness"],
        "@id": BUSINESS_ID,
        name: BUSINESS.name,
        url: `${BUSINESS.url}/`,
        image: `${BUSINESS.url}/scvautorepairs_logo.png`,
        logo: `${BUSINESS.url}/scvautorepairs_logo.png`,
        telephone: BUSINESS.phone.e164,
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Credit Card, Debit Card, Snap Finance",
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.address.street,
          addressLocality: BUSINESS.address.locality,
          addressRegion: BUSINESS.address.region,
          postalCode: BUSINESS.address.postalCode,
          addressCountry: BUSINESS.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        hasMap: MAP_URL,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [...BUSINESS.hours.days],
            opens: BUSINESS.hours.opens,
            closes: BUSINESS.hours.closes,
          },
        ],
        areaServed: BUSINESS.areaServed.map((name) => ({
          "@type": "Place",
          name,
        })),
        sameAs: [
          BUSINESS.profiles.google,
          BUSINESS.profiles.facebook,
          BUSINESS.profiles.yelp,
        ],
        knowsAbout: SERVICES.map((s) => s.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Auto Repair Services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              url: `${BUSINESS.url}${s.slug}`,
            },
          })),
        },
      },
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: BUSINESS.name,
        url: `${BUSINESS.url}/`,
        logo: {
          "@type": "ImageObject",
          url: `${BUSINESS.url}/scvautorepairs_logo.png`,
        },
        sameAs: [
          BUSINESS.profiles.google,
          BUSINESS.profiles.facebook,
          BUSINESS.profiles.yelp,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: BUSINESS.phone.e164,
          contactType: "customer service",
          areaServed: "US",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BUSINESS.url}/#website`,
        url: `${BUSINESS.url}/`,
        name: BUSINESS.name,
        publisher: { "@id": ORG_ID },
        description: `ASE-certified auto repair at ${FULL_ADDRESS}.`,
      },
    ],
  };
}

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph()) }}
    />
  );
}

/** Reusable id so per-page Service markup can point at the business node. */
export { BUSINESS_ID };
