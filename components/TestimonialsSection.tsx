"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const testimonials = [
  {
    name: "Justin P.",
    text: "The owner Pete is very personable and the pricing is more than fair. I won't take my cars anywhere else in the SCV.",
    stars: 5,
  },
  {
    name: "Atlas B.",
    text: "Quick, honest, and affordable service. They accommodate your schedule and never push for unnecessary repairs.",
    stars: 5,
  },
  {
    name: "Julie C.",
    text: "Trustworthy and efficient — Pete and his team go out of their way to fit your budget and timeline.",
    stars: 5,
  },
  {
    name: "Stephanie J.",
    text: "This shop was not only able to find the issue when others couldn't, but also had much more fair pricing. Highly recommended.",
    stars: 5,
  },
  {
    name: "Charles P.",
    text: "Great place, great prices. Pete runs an honest shop and the quality of work is top notch every single time.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
              Customer Reviews
            </p>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tighter text-white">
              What Our Customers
              <br />
              Are Saying
            </h2>
          </div>
          <Link
            href="/reviews"
            className="text-sm font-medium text-muted hover:text-accent transition-colors flex items-center gap-1 shrink-0"
          >
            View all reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-[#111111] border border-[#1e1e1e] p-6 rounded-lg"
            >
              <Stars count={t.stars} />
              <p className="text-[#ccc] text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-[#1e1e1e] pt-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                  {t.name[0]}
                </div>
                <span className="text-sm font-medium text-white">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large feature quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 bg-[#111111] border border-[#1e1e1e] p-8 rounded-lg flex flex-col md:flex-row gap-6 items-start"
        >
          <svg className="w-10 h-10 text-accent/30 shrink-0" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <div>
            <p className="text-white text-lg leading-relaxed mb-4">
              Pete is our go-to guy for everything automotive. He provides trustworthy, flexible,
              and efficient services that accommodate our schedule and budget every single time.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                J
              </div>
              <div>
                <p className="text-sm font-medium text-white">Julie C.</p>
                <Stars count={5} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
