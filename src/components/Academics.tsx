import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading, { Mark } from "./ui/SectionHeading";

const points = [
  "CBSE curriculum delivered with care and clarity",
  "Foundational years from Nursery to Class 7",
  "Activity-based, experiential and inquiry-led learning",
  "Strong focus on language, numeracy and life skills",
  "Arts, music, sports and wellbeing woven into every week",
  "Continuous, supportive assessment over rote pressure",
];

export default function Academics() {
  return (
    <section id="academics" className="bg-grid py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Academics"
            title={
              <>
                A CBSE foundation for <Mark>curious</Mark> minds
              </>
            }
            intro="Our academic programme balances rigour with joy — giving children the confidence to ask, explore and grow at every stage."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p} delay={(i % 2) * 0.05} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-leaf">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-navy/80">{p}</span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Enquire about admissions
            </a>
          </Reveal>
        </div>

        <Reveal className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=700&q=80"
                alt="Students engaged in a lesson"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80"
                alt="A bright, modern classroom"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
