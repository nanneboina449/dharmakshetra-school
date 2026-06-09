import { Quote } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import { leadership, promises } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Leadership"
          title="Guided by experience and heart"
          intro="A founding team that pairs decades of vision with a genuine devotion to every child's growth."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {leadership.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.08}>
              <figure className="relative h-full rounded-3xl border border-navy/10 bg-cream p-8 shadow-soft">
                <Quote className="absolute right-7 top-7 h-9 w-9 text-gold/30" />
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy font-display text-xl font-semibold text-gold-light">
                    {person.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {person.name}
                      <span className="ml-2 text-sm font-medium text-muted">{person.creds}</span>
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                      {person.role}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-5 leading-relaxed text-navy/75">{person.bio}</blockquote>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* What we promise */}
        <Reveal className="mt-20">
          <h3 className="text-center font-display text-2xl font-semibold text-navy sm:text-3xl">
            What We Promise
          </h3>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={(i % 5) * 0.05}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-navy/10 bg-cream p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-dark transition-colors duration-300 group-hover:bg-navy group-hover:text-gold">
                  <Icon name={p.icon} className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h4 className="mt-4 font-display text-base font-medium leading-snug text-navy">
                  {p.title}
                </h4>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">{p.source}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
