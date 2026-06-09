import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { news, galleryImages } from "@/lib/data";

export default function News() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* News */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Notice Board"
              title="Latest news & updates"
              intro="Stay close to what's happening on campus — from admissions to events."
            />
            <div className="mt-8 space-y-4">
              {news.map((n, i) => (
                <Reveal key={n.title} delay={i * 0.07}>
                  <article className="group flex items-start gap-5 rounded-2xl border border-navy/10 bg-white/70 p-5 transition-colors hover:border-gold/40">
                    <div className="hidden sm:flex flex-col items-center justify-center rounded-xl bg-navy px-4 py-3 text-cream">
                      <CalendarDays className="h-5 w-5 text-gold-light" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                        {n.tag}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-semibold text-navy">{n.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{n.desc}</p>
                      <span className="mt-2 block text-xs font-medium text-muted">{n.date}</span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-navy/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-dark" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Gallery"
              title="Moments from campus life"
            />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {galleryImages.map((src, i) => (
                <Reveal
                  key={src}
                  delay={(i % 3) * 0.05}
                  className={i === 0 ? "col-span-2 row-span-2" : ""}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl ${
                      i === 0 ? "aspect-square" : "aspect-square"
                    } group`}
                  >
                    <Image
                      src={src}
                      alt="Campus life at Dharmakshetra International School"
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/15" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
