import Image from "next/image";
import { Compass, Target } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading, { Mark } from "./ui/SectionHeading";
import { stats } from "@/lib/data";

const statColors = ["text-coral", "text-teal", "text-sun", "text-lilac"];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      {/* stats band */}
      <div className="mx-auto -mt-12 mb-20 max-w-6xl px-5 sm:px-8">
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 shadow-soft md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="bg-cream px-6 py-8 text-center">
              <div className={`font-display text-3xl font-semibold sm:text-4xl ${statColors[i % statColors.length]}`}>
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-muted">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1100&q=80"
              alt="A classroom at Dharmakshetra International School"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-navy px-6 py-5 text-cream shadow-card sm:block">
            <div className="font-display text-2xl font-semibold text-gold-light">Dharma</div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/70">kshetra · righteousness</div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About the School"
            title={
              <>
                Learning that extends <Mark>beyond</Mark> textbooks
              </>
            }
            intro="At Dharmakshetra International School, we nurture values, curiosity and confidence while fostering creativity and global awareness — preparing every child for a meaningful, future-ready life."
          />

          <div className="mt-9 space-y-5">
            <Reveal delay={0.05} className="flex gap-4 rounded-2xl border border-navy/10 bg-white/60 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <Compass className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy">Our Vision</h3>
                <p className="mt-1 text-muted">
                  To develop compassionate, responsible and globally competent individuals through
                  value-based education rooted in integrity and cultural heritage.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="flex gap-4 rounded-2xl border border-navy/10 bg-white/60 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                <Target className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy">Our Mission</h3>
                <p className="mt-1 text-muted">
                  To blend tradition with innovation — instilling values and curiosity while equipping
                  students with the skills and confidence to thrive.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
