import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import { differentiators } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Why Dharmakshetra"
          title="Eight reasons families choose us"
          intro="Every detail of our school is designed around one belief — that children flourish when strong values meet world-class learning."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={(i % 4) * 0.06}>
              <div className="group h-full rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-cream/[0.07]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-light transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon name={d.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-cream">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
