import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHeader, { Mark } from "@/components/ui/PageHeader";
import Contact from "@/components/Contact";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { admissionSteps, admissionDocs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions are open for Nursery to Class 7 at Dharmakshetra International School, Machilipatnam. Discover our simple, four-step admission process.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        crumb="Admissions"
        eyebrow="Admissions Open · 2025–26"
        title={
          <>
            Begin your child&apos;s <Mark>journey</Mark> with us
          </>
        }
        intro="Admissions are open for Nursery to Class 7. We&apos;ve made the process simple, warm and transparent — every step of the way."
      />

      {/* Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                A simple, <Mark>four-step</Mark> process
              </>
            }
            intro="From your first enquiry to your child's first day, our admissions team guides you with care."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((s, i) => (
              <Reveal key={s.step} delay={(i % 4) * 0.06}>
                <div className="relative h-full rounded-2xl border border-navy/10 bg-cream p-7">
                  <span className="font-display text-5xl font-medium text-gold/30">{s.step}</span>
                  <span className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                    <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documents required */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Checklist"
            title={
              <>
                Documents <Mark>required</Mark>
              </>
            }
            intro="Please keep the following ready when you apply. Our team will confirm anything specific to your child's grade."
          />
          <Reveal>
            <ul className="grid gap-3">
              {admissionDocs.map((doc) => (
                <li
                  key={doc}
                  className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-cream p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-navy/80">{doc}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Contact showHeading={false} />
    </>
  );
}
