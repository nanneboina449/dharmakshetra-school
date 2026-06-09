"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data";
import Reveal from "./ui/Reveal";
import SectionHeading, { Mark } from "./ui/SectionHeading";

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((p) => (p === null ? p : (p + 1) % galleryImages.length));
      if (e.key === "ArrowLeft")
        setOpen((p) => (p === null ? p : (p - 1 + galleryImages.length) % galleryImages.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Gallery"
          title={
            <>
              Moments from <Mark>campus life</Mark>
            </>
          }
          intro="A glimpse into the everyday joy, curiosity and care that fill our classrooms and grounds."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {galleryImages.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.05} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Open image ${i + 1} in lightbox`}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="Campus life at Dharmakshetra International School"
                  fill
                  sizes="(max-width: 640px) 50vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/20" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((p) => (p === null ? p : (p - 1 + galleryImages.length) % galleryImages.length));
              }}
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.div
              key={open}
              className="relative h-[72vh] w-full max-w-4xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[open]}
                alt="Campus life at Dharmakshetra International School"
                fill
                sizes="100vw"
                className="rounded-2xl object-contain"
              />
            </motion.div>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((p) => (p === null ? p : (p + 1) % galleryImages.length));
              }}
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
