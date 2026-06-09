"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./ui/Logo";
import { navLinks, school } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft py-2.5" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={school.name}>
          <Logo className="h-10 w-10 shrink-0" />
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-navy sm:text-lg">
              Dharmakshetra
            </span>
            <span className="block text-[0.62rem] font-medium uppercase tracking-[0.2em] text-gold-dark">
              International School
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-navy/5 text-navy"
                  : "text-navy/75 hover:bg-navy/5 hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${school.phones[0].replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy/5 xl:inline-flex"
          >
            <Phone className="h-4 w-4" strokeWidth={1.8} />
            {school.phones[0]}
          </a>
          <Link
            href="/admissions"
            className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-navy-700 sm:inline-flex"
          >
            Apply for Admission
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-navy/40" onClick={() => setOpen(false)} />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream p-6 shadow-card"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Logo className="h-9 w-9" />
                  <span className="font-display text-lg font-semibold text-navy">Dharmakshetra</span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                      isActive(link.href) ? "bg-navy/5 text-navy" : "text-navy hover:bg-navy/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="mt-auto rounded-full bg-navy px-5 py-3.5 text-center text-base font-semibold text-cream"
              >
                Apply for Admission
              </Link>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
