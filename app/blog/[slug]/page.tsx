import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BUSINESS } from "@/lib/business";
import { getAllPosts, getPostBySlug, isPublished } from "@/lib/blog";

// Same 6-hour ISR window as the index, so a post flips from noindex/hidden to
// published on schedule.
export const revalidate = 21600;

export function generateStaticParams() {
  // Every post, including future-dated ones, so they render at their preview
  // URL immediately. The date gate controls indexing and listing, not routing.
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const live = isPublished(post);
  return {
    // Editorial titles stand on their own — skip the "| SCV Auto Repairs"
    // template suffix so blog <title>s don't run long.
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    // Keep unpublished previews out of the index until their date arrives.
    robots: live ? undefined : { index: false, follow: false },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00-07:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const live = isPublished(post);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BUSINESS.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    author: { "@type": "Organization", name: BUSINESS.name, url: `${BUSINESS.url}/` },
    publisher: { "@id": `${BUSINESS.url}/#organization` },
    mainEntityOfPage: `${BUSINESS.url}/blog/${post.slug}`,
    ...(post.heroImage ? { image: `${BUSINESS.url}${post.heroImage}` } : {}),
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${BUSINESS.url}/blog/${post.slug}#faq`,
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <article className="pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {!live && (
        <div className="max-w-3xl mx-auto px-6 mb-6">
          <p className="text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded px-3 py-2">
            Preview — scheduled to publish {formatDate(post.publishDate)}. Not yet
            public or indexed.
          </p>
        </div>
      )}

      <header className="max-w-3xl mx-auto px-6 mb-8">
        <Link href="/blog" className="text-accent text-sm font-medium hover:underline">
          ← All articles
        </Link>
        <p className="text-xs text-muted font-mono mt-4 mb-3">
          {formatDate(post.publishDate)}
        </p>
        <h1 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tighter text-white leading-tight">
          {post.title}
        </h1>
      </header>

      {post.heroImage && (
        <div className="max-w-4xl mx-auto px-6 mb-10">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-[#1e1e1e]">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6">
        {post.sections.map((section, i) => (
          <section key={i} className="mb-8">
            {section.heading && (
              <h2 className="font-heading font-bold text-2xl tracking-tight text-white mb-4">
                {section.heading}
              </h2>
            )}
            {section.paragraphs?.map((para, j) => (
              <p key={j} className="text-[#c9c9c9] leading-relaxed text-base mb-4">
                {para}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 mb-4">
                {section.bullets.map((b, k) => (
                  <li key={k} className="flex items-start gap-3 text-[#c9c9c9] text-base">
                    <svg className="w-4 h-4 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-12 border-t border-[#1e1e1e] pt-8">
            <h2 className="font-heading font-bold text-2xl tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {post.faqs.map((faq) => (
                <div key={faq.q} className="border-b border-[#1e1e1e] pb-5">
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {post.relatedService && (
          <div className="mt-12 bg-[#111111] border border-[#1e1e1e] rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                Related service
              </p>
              <p className="text-white font-medium">
                Need help now? See our {post.relatedService.label} in Santa Clarita.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href={post.relatedService.href}
                className="border border-[#333] hover:border-[#555] text-text font-semibold px-5 py-2.5 rounded text-sm transition-all"
              >
                {post.relatedService.label}
              </Link>
              <a
                href={BUSINESS.phone.href}
                className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded text-sm transition-all"
              >
                Call {BUSINESS.phone.display}
              </a>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
