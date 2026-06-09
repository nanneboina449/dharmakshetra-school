import Reveal from "./ui/Reveal";
import SectionHeading, { Mark } from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import { facilities } from "@/lib/data";

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Infrastructure"
          title={
            <>
              Spaces designed to spark <Mark>wonder</Mark>
            </>
          }
          intro="From digital classrooms to a garden of stars, every space is crafted for comfort, curiosity and discovery."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.05}>
              <div className="group h-full rounded-2xl border border-navy/10 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-dark transition-colors duration-300 group-hover:bg-navy group-hover:text-gold">
                  <Icon name={f.icon} className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-lg font-medium text-navy">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
