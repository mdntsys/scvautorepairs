import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPublishedPosts } from "@/lib/blog";

// Re-evaluate the date gate every 6 hours so scheduled posts appear on time
// even without the cron. The Wednesday cron just makes the reveal prompt.
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Car Care Tips for Santa Clarita Drivers",
  description:
    "Practical car care advice for Santa Clarita drivers, from the ASE-certified team at SCV Auto Repairs. Local, honest, and specific to the SCV.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00-07:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
}

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <section className="bg-[#0c0c0c] border-b border-[#1a1a1a] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            Car Care Tips
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tighter text-white mb-4">
            Advice for Santa Clarita Drivers
          </h1>
          <p className="text-[#bbb] text-lg leading-relaxed">
            Honest, local car care from the team at SCV Auto Repairs, written for
            how people actually drive in the Santa Clarita Valley.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-muted text-center py-12">
              New articles are on the way. Check back soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-[#111111] border border-[#1e1e1e] rounded-lg overflow-hidden hover:border-accent transition-colors"
                >
                  {post.heroImage && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.heroImage}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs text-muted font-mono mb-2">
                      {formatDate(post.publishDate)}
                    </p>
                    <h2 className="font-heading font-bold text-xl text-white group-hover:text-accent transition-colors mb-2 tracking-tight">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-4">
                      Read more
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
