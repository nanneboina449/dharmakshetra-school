import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Wave from "./Wave";
import { Mark } from "./SectionHeading";
import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  intro,
  crumb,
  waveColor = "text-cream",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  crumb: string;
  waveColor?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-28 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-6 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-coral/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-1.5 text-sm text-cream/60">
          <Link href="/" className="transition-colors hover:text-gold-light">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden />
          <span className="text-cream/90">{crumb}</span>
        </nav>

        {eyebrow && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-gold-light">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {eyebrow}
          </span>
        )}

        <h1 className="font-display text-4xl font-semibold leading-[1.06] text-cream text-balance sm:text-5xl">
          {title}
        </h1>

        {intro && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">{intro}</p>}
      </div>

      <Wave color={waveColor} className="absolute inset-x-0 bottom-0" />
    </section>
  );
}

export { Mark };
