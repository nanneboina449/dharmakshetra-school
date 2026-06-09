"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { school } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-28 pb-20 sm:pt-32 lg:pt-36">
      {/* layered backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Admissions Open · {school.classes}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-cream text-balance sm:text-5xl lg:text-6xl"
          >
            Where learning becomes a{" "}
            <span className="gradient-text">place of righteousness.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75"
          >
            A leading CBSE school in Machilipatnam where education extends beyond
            textbooks — nurturing values, curiosity and confidence to build
            responsible citizens for a better tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-navy shadow-card transition-transform hover:-translate-y-0.5"
            >
              Apply for Admission
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Discover the School
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-cream/80"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="h-5 w-5 text-gold-light" /> 100% Secure Campus
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <GraduationCap className="h-5 w-5 text-gold-light" /> Experienced Educators
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="h-5 w-5 text-gold-light" /> Value-Based Learning
            </span>
          </motion.div>
        </div>

        {/* hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-cream/10 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1100&q=80"
              alt="Students learning at Dharmakshetra International School"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
          </div>

          {/* floating accreditation chip */}
          <motion.div
            className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl bg-cream p-3.5 pr-5 shadow-card animate-float-slow sm:-left-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-sm font-bold text-gold">
              CBSE
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-navy">Affiliated Curriculum</span>
              <span className="block text-xs text-muted">Tradition meets innovation</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
