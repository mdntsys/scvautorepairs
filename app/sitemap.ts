import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";

const BASE_URL = "https://www.scvautorepairs.com";

// Keep the sitemap in step with the blog drip: newly-published posts appear
// here on the same revalidation as the rest of the blog surfaces.
export const revalidate = 21600;

const SERVICE_ROUTES = [
  "/routine-maintenance",
  "/oil-change",
  "/brake-services",
  "/engine-diagnostics-and-repair",
  "/check-engine-light",
  "/transmission-services",
  "/suspension-and-steering",
  "/exhaust-system",
  "/electrical-system-repairs",
  "/ac-and-heating",
  "/tires",
];

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
      url: `${BASE_URL}/financing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
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
    {
      url: `${BASE_URL}/photos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...getPublishedPosts().map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(`${post.publishDate}T00:00:00-07:00`),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
