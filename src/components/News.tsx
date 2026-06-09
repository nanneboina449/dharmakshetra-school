import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading, { Mark } from "./ui/SectionHeading";
import { news } from "@/lib/data";

export default function News() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Notice Board"
            title={
              <>
                Latest news &amp; <Mark>updates</Mark>
              </>
            }
            intro="Stay close to what's happening on campus — from admissions to events."
          />
          <Reveal>
            <Link
              href="/admissions"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
            >
              View admissions
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.07}>
              <article className="group flex h-full items-start gap-5 rounded-2xl border border-navy/10 bg-cream p-6 transition-colors duration-300 hover:border-gold/40">
                <div className="hidden flex-col items-center justify-center rounded-xl bg-navy px-4 py-3 text-cream sm:flex">
                  <CalendarDays className="h-5 w-5 text-gold-light" />
                </div>
                <div className="flex-1">
                  <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    {n.tag}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-medium text-navy">{n.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{n.desc}</p>
                  <span className="mt-3 block text-xs font-medium text-muted">{n.date}</span>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-navy/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-dark" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
