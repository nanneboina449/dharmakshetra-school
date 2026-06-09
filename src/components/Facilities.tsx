import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import { facilities } from "@/lib/data";

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Infrastructure"
          title="World-class facilities for whole-child growth"
          intro="From digital classrooms to a garden of stars, every space is crafted to spark wonder, comfort and discovery."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy/10 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="absolute inset-x-0 -bottom-10 h-20 bg-gold/0 blur-2xl transition-all duration-300 group-hover:bg-gold/20" />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold-light">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-navy">{f.title}</h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
