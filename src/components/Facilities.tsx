import Reveal from "./ui/Reveal";
import SectionHeading, { Mark } from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import { facilities } from "@/lib/data";
import { accent } from "@/lib/palette";

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Infrastructure"
          title={
            <>
              Spaces that spark <Mark>wonder</Mark>
            </>
          }
          intro="From digital classrooms to a garden of stars, every space is crafted for comfort, curiosity and discovery."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => {
            const c = accent[f.color];
            return (
              <Reveal key={f.title} delay={(i % 4) * 0.05}>
                <div className="group h-full rounded-3xl border border-navy/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop">
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${c.soft} ${c.text} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105`}
                  >
                    <Icon name={f.icon} className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
