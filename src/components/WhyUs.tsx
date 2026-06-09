import Reveal from "./ui/Reveal";
import SectionHeading, { Mark } from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import { differentiators } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-joy relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Dharmakshetra"
          title={
            <>
              Eight reasons families choose <Mark>us</Mark>
            </>
          }
          intro="Every detail of our school is designed around one belief — that children flourish when strong values meet a considered, world-class education."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={(i % 4) * 0.05}>
              <div className="group h-full bg-cream p-7 transition-colors duration-300 hover:bg-white">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-dark transition-colors duration-300 group-hover:bg-navy group-hover:text-gold">
                  <Icon name={d.icon} className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-lg font-medium text-navy">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
