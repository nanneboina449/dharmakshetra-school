"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Star, Sparkles, ShieldCheck } from "lucide-react";
import { school } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const WORDS = ["curiosity", "confidence", "courage", "kindness", "character"];

function RotatingWord() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="relative inline-grid">
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        confidence
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          className="gradient-text col-start-1 row-start-1"
          initial={reduce ? false : { y: "0.5em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: "-0.5em", opacity: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-28 pb-24 sm:pt-32 lg:pt-36">
      {/* playful color orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal/25 blur-3xl" />
        <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-lilac/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold-light"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Admissions Open · {school.classes}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.04] text-cream text-balance sm:text-5xl lg:text-[3.75rem]"
          >
            Where every child
            <br className="hidden sm:block" /> grows in <RotatingWord />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75"
          >
            A leading CBSE school in Machilipatnam where learning extends beyond
            textbooks — blending tradition with innovation to build responsible,
            joyful citizens for a better tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-bold text-navy shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Apply for Admission
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Take a Look Around
            </a>
          </motion.div>

          {/* friendly trust pill */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="mt-9 inline-flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.06] px-5 py-3"
          >
            <div className="flex -space-x-2" aria-hidden>
              {["bg-coral", "bg-teal", "bg-sun", "bg-lilac"].map((c) => (
                <span key={c} className={`h-8 w-8 rounded-full border-2 border-navy ${c}`} />
              ))}
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1 text-gold-light">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" aria-hidden />
                ))}
              </div>
              <span className="text-sm font-medium text-cream/80">
                Loved by families across Machilipatnam
              </span>
            </div>
          </motion.div>
        </div>

        {/* hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* main squircle image */}
          <div
            className="relative aspect-square w-full overflow-hidden border-4 border-cream/10 shadow-card"
            style={{ borderRadius: "42% 58% 56% 44% / 50% 46% 54% 50%" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1100&q=80"
              alt="Smiling students learning together at Dharmakshetra International School"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* floating CBSE chip */}
          <div className="absolute -left-3 bottom-12 flex items-center gap-3 rounded-2xl bg-cream p-3 pr-5 shadow-pop animate-float-slow sm:-left-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-sm font-bold text-gold">
              CBSE
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-navy">Affiliated</span>
              <span className="block text-xs text-muted">Trusted curriculum</span>
            </span>
          </div>

          {/* floating safe & happy chip */}
          <div className="absolute -right-2 top-10 flex items-center gap-2 rounded-2xl bg-cream px-4 py-3 shadow-pop animate-float-soft sm:-right-4">
            <ShieldCheck className="h-5 w-5 text-leaf" />
            <span className="text-sm font-bold text-navy">100% Safe Campus</span>
          </div>

          {/* spinning sticker */}
          <div className="absolute -right-1 bottom-2 hidden h-20 w-20 sm:block" aria-hidden>
            <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
              <defs>
                <path id="circlePath" d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" />
              </defs>
              <circle cx="50" cy="50" r="48" fill="#f0a91e" />
              <text className="fill-navy text-[10px] font-bold uppercase tracking-[0.18em]">
                <textPath href="#circlePath">
                  Learn · Play · Grow · Shine ·
                </textPath>
              </text>
            </svg>
            <Sparkles className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-navy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
