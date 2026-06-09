import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
          <span className="h-px w-6 bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.08] font-semibold text-balance ${
          dark ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-cream/75" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
