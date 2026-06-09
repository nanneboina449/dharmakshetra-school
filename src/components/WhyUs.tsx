import Reveal from "./ui/Reveal";
import SectionHeading, { Mark } from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import { differentiators } from "@/lib/data";
import { accent } from "@/lib/palette";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-joy relative py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Dharmakshetra"
          title={
            <>
              Eight reasons families <Mark>love</Mark> us
            </>
          }
          intro="Every detail of our school is designed around one belief — that children flourish when strong values meet joyful, world-class learning."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => {
            const c = accent[d.color];
            return (
              <Reveal key={d.title} delay={(i % 4) * 0.06}>
                <div
                  className={`group h-full rounded-3xl border border-transparent ${c.soft} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop ${c.border}`}
                >
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${c.chip} shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105`}
                  >
                    <Icon name={d.icon} className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">{d.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
