import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`flex max-w-2xl flex-col ${
        isCenter ? "mx-auto items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
            dark ? "bg-white/10 text-gold-light" : "bg-gold/15 text-gold-dark"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-semibold leading-[1.08] text-balance sm:text-4xl md:text-[2.75rem] ${
          dark ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-cream/75" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/** Highlighter-style emphasis for a word inside a heading. */
export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="marker">
      <span>{children}</span>
    </span>
  );
}
