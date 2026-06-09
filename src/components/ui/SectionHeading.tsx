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
          className={`mb-5 inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
            dark ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          <span className="h-px w-7 bg-current opacity-60" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-[2rem] font-medium leading-[1.12] text-balance sm:text-4xl md:text-[2.9rem] ${
          dark ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-cream/70" : "text-muted"}`}>
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
