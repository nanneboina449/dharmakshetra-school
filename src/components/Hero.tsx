"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { school } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-32 pb-24 sm:pt-36 lg:pt-40 lg:pb-28">
      {/* restrained, premium glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-navy-600/40 blur-3xl" />
        <div className="absolute -right-16 top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-light"
          >
            <span className="h-px w-7 bg-gold-light/60" />
            CBSE · Nursery to Class 7 · Machilipatnam
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
            className="mt-7 font-display text-[2.6rem] font-medium leading-[1.05] text-cream text-balance sm:text-5xl lg:text-[4rem]"
          >
            Where learning becomes a{" "}
            <span className="gradient-text">place of righteousness.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-cream/70"
          >
            A leading CBSE school in Machilipatnam where education extends beyond
            textbooks — blending tradition with innovation to nurture values,
            curiosity and confidence in every child.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-navy shadow-card transition-transform duration-300 hover:-translate-y-0.5"
            >
              Apply for Admission
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-4 text-base font-medium text-cream transition-colors hover:bg-cream/[0.06]"
            >
              Discover the School
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32, ease }}
            className="mt-12 flex items-center gap-5 border-t border-cream/10 pt-7"
          >
            <div className="flex items-center gap-1 text-gold-light" aria-hidden>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm leading-snug text-cream/65">
              Trusted by families across Machilipatnam for a values-first,
              future-ready education.
            </p>
          </motion.div>
        </div>

        {/* hero visual — large, cohesive photography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.25rem] shadow-card ring-1 ring-cream/10">
            <Image
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1100&q=80"
              alt="Students learning together at Dharmakshetra International School"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
          </div>

          {/* single refined floating card */}
          <div className="absolute -left-4 bottom-10 flex items-center gap-3.5 rounded-2xl bg-cream/95 p-4 pr-6 shadow-card backdrop-blur sm:-left-8 animate-float-slow">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-sm font-semibold text-gold">
              CBSE
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-navy">Affiliated Curriculum</span>
              <span className="block text-xs text-muted">Tradition meets innovation</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
