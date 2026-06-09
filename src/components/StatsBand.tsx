"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import Reveal from "./ui/Reveal";
import { stats } from "@/lib/data";

/** Counts up to a numeric value when scrolled into view; renders text values as-is. */
function StatValue({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(target && !reduce ? 0 : target ?? 0);

  useEffect(() => {
    if (target === null || reduce || !inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduce]);

  return (
    <div ref={ref} className={className}>
      {target === null ? value : `${n}${suffix}`}
    </div>
  );
}

export default function StatsBand({ pull = true }: { pull?: boolean }) {
  return (
    <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${pull ? "-mt-12" : ""}`}>
      <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 shadow-soft md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="group bg-cream px-6 py-10 text-center transition-colors hover:bg-white">
            <StatValue
              value={s.value}
              className="font-display text-4xl font-medium text-navy sm:text-[2.75rem]"
            />
            <div className="mx-auto mt-2 h-px w-8 bg-gold/50" />
            <div className="mt-3 text-sm font-medium text-muted">{s.label}</div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
