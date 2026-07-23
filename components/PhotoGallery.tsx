"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * Real photos of the shop, recovered from the previous version of the site.
 * The first entry is the high-resolution storefront and is used as the hero;
 * the rest fill the grid. All open in a lightbox.
 */
interface Photo {
  src: string;
  alt: string;
  w: number;
  h: number;
}

const PHOTOS: Photo[] = [
  {
    src: "/photos/01-shop-exterior.jpg",
    w: 1800,
    h: 1350,
    alt: "SCV Auto Repairs storefront at 20723 Soledad Canyon Rd in Santa Clarita, with a classic red Chevrolet El Camino SS parked out front",
  },
  {
    src: "/photos/03-service-bays.jpg",
    w: 640,
    h: 330,
    alt: "The open service bays at SCV Auto Repairs in Santa Clarita",
  },
  {
    src: "/photos/04-shop-interior.jpg",
    w: 640,
    h: 330,
    alt: "Inside the SCV Auto Repairs shop, showing two-post lifts and organized tool storage",
  },
  {
    src: "/photos/05-cars-on-lifts.jpg",
    w: 640,
    h: 330,
    alt: "Customer vehicles up on the lifts inside SCV Auto Repairs, with a classic red El Camino in the foreground",
  },
  {
    src: "/photos/06-technician-bmw.jpg",
    w: 640,
    h: 330,
    alt: "An ASE-certified technician servicing a white BMW 7-series at SCV Auto Repairs",
  },
  {
    src: "/photos/07-two-technicians.jpg",
    w: 640,
    h: 330,
    alt: "Two SCV Auto Repairs technicians working together on a vehicle",
  },
  {
    src: "/photos/08-technician-engine.jpg",
    w: 640,
    h: 330,
    alt: "An SCV Auto Repairs technician working under the hood of a vehicle",
  },
  {
    src: "/photos/09-classic-engine.jpg",
    w: 640,
    h: 330,
    alt: "A classic car engine bay being serviced at SCV Auto Repairs in Santa Clarita",
  },
  {
    src: "/photos/10-brake-service.jpg",
    w: 640,
    h: 330,
    alt: "Brake service in progress on a vehicle lifted at SCV Auto Repairs",
  },
  {
    src: "/photos/11-belt-wall.jpg",
    w: 640,
    h: 330,
    alt: "Drive belts stocked on the wall at SCV Auto Repairs",
  },
  {
    src: "/photos/12-tool-drawer.jpg",
    w: 640,
    h: 330,
    alt: "A drawer of professional tools at SCV Auto Repairs",
  },
  {
    src: "/photos/13-brake-lathe.jpg",
    w: 640,
    h: 330,
    alt: "Resurfacing a brake rotor on the lathe at SCV Auto Repairs",
  },
  {
    src: "/photos/14-wheel-balancing.jpg",
    w: 640,
    h: 330,
    alt: "Wheel balancing equipment at SCV Auto Repairs in Santa Clarita",
  },
];

export default function PhotoGallery() {
  const [hero, ...grid] = PHOTOS;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + dir + PHOTOS.length) % PHOTOS.length,
      ),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    // Lock background scroll while the lightbox is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, step]);

  const current = openIndex === null ? null : PHOTOS[openIndex];

  return (
    <div>
      {/* Hero */}
      <button
        type="button"
        onClick={() => setOpenIndex(0)}
        className="group relative block w-full overflow-hidden rounded-lg border border-[#1e1e1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        aria-label={`Open photo: ${hero.alt}`}
      >
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.w}
          height={hero.h}
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
          <span className="text-white text-sm font-medium">
            SCV Auto Repairs — 20723 Soledad Canyon Rd, Santa Clarita, CA
          </span>
        </span>
      </button>

      {/* Grid */}
      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {grid.map((photo, i) => (
          <button
            type="button"
            key={photo.src}
            onClick={() => setOpenIndex(i + 1)}
            className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-[#1e1e1e] bg-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            aria-label={`Open photo: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white text-4xl leading-none px-3 py-2"
          >
            ‹
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full"
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.w}
              height={current.h}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
            <figcaption className="mt-3 text-center text-sm text-white/60">
              {current.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white text-4xl leading-none px-3 py-2"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
