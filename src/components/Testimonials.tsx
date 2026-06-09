import { Quote, Star } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Parent Voices"
          title="Trusted by families in Machilipatnam"
          intro="The warmth of our community is best heard in the words of the parents who entrust us with their children."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-navy/10 bg-cream p-7 shadow-soft">
                <Quote className="h-8 w-8 text-gold/40" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-navy/80">“{t.quote}”</blockquote>
                <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4">
                  <figcaption>
                    <span className="block font-semibold text-navy">{t.name}</span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </figcaption>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
