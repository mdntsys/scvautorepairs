import type { MetadataRoute } from "next";

const BASE_URL = "https://www.scvautorepairs.com";

const SERVICE_ROUTES = [
  "/routine-maintenance",
  "/brake-services",
  "/engine-diagnostics-and-repair",
  "/transmission-services",
  "/suspension-and-steering",
  "/exhaust-system",
  "/electrical-system-repairs",
  "/ac-and-heating",
  "/tires",
];

// /photos is deliberately excluded — it currently renders an empty placeholder
// grid with "coming soon" copy. Add it back once it has real photos.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICE_ROUTES.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/contact-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
