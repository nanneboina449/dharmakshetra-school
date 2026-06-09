"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { school } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const grade = String(data.get("grade") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Admission enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nGrade of interest: ${grade}\n\n${message}`
    );
    window.location.href = `mailto:${school.emails[0]}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Admissions & Contact"
          title="Begin your child's journey with us"
          intro="Admissions are open for Nursery to Class 7. Reach out and our team will be glad to guide you through every step."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* info */}
          <div className="space-y-4">
            <Reveal className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-light">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-cream">Visit the Campus</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/70">{school.address}</p>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-light">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-cream">Call Us</h3>
                {school.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-cream/70 transition-colors hover:text-gold-light"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-light">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-cream">Email Us</h3>
                {school.emails.map((m) => (
                  <a
                    key={m}
                    href={`mailto:${m}`}
                    className="mt-1 block break-all text-sm text-cream/70 transition-colors hover:text-gold-light"
                  >
                    {m}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18} className="overflow-hidden rounded-2xl border border-cream/10">
              <iframe
                title="Dharmakshetra International School location"
                src="https://www.google.com/maps?q=Machilipatnam,Andhra+Pradesh+521003&output=embed"
                className="h-52 w-full grayscale-[0.3]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-cream p-7 shadow-card sm:p-9">
              {sent ? (
                <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-gold" />
                  <h3 className="mt-4 font-display text-2xl font-semibold text-navy">Thank you!</h3>
                  <p className="mt-2 max-w-sm text-muted">
                    Your email client should now be open with your enquiry. Our admissions team will be
                    in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-xl font-semibold text-navy">Enquire about admission</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Parent / Guardian name" name="name" placeholder="Your full name" required />
                    <Field label="Phone number" name="phone" type="tel" placeholder="+91 ..." required />
                  </div>
                  <Field label="Grade of interest" name="grade" placeholder="e.g. Class 2" />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us a little about your child..."
                      className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors placeholder:text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:bg-navy-700"
                  >
                    Send Enquiry <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-muted">
                    We respect your privacy and will only use your details to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-amber"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors placeholder:text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}
