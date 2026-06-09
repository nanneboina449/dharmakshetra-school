import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./ui/Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./ui/SocialIcons";
import { school, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-11" light />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-cream">Dharmakshetra</span>
              <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-gold-light">
                International School
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            {school.motto}. A leading CBSE school in {school.location} — where tradition meets
            innovation.
          </p>
          <div className="mt-5 flex gap-3">
            <Social href={school.social.facebook} label="Facebook">
              <FacebookIcon className="h-4.5 w-4.5" />
            </Social>
            <Social href={school.social.instagram} label="Instagram">
              <InstagramIcon className="h-4.5 w-4.5" />
            </Social>
            <Social href={school.social.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-4.5 w-4.5" />
            </Social>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-cream">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-cream">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/admissions" className="transition-colors hover:text-gold-light">Admissions</Link></li>
            <li><Link href="/about" className="transition-colors hover:text-gold-light">About Dharmakshetra</Link></li>
            <li><Link href="/infrastructure" className="transition-colors hover:text-gold-light">Infrastructure</Link></li>
            <li><Link href="/about" className="transition-colors hover:text-gold-light">Our Leadership</Link></li>
            <li><Link href="/disclosures" className="transition-colors hover:text-gold-light">Mandatory Disclosures</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-cream">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-light" />
              <span className="text-cream/60">{school.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-light" />
              <span className="flex flex-col">
                {school.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="transition-colors hover:text-gold-light">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-light" />
              <a href={`mailto:${school.emails[0]}`} className="break-all transition-colors hover:text-gold-light">
                {school.emails[0]}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream/50 sm:flex-row sm:px-8">
          <p>© {2026} {school.name}. All rights reserved.</p>
          <p>{school.tagline} · {school.board}</p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-navy"
    >
      {children}
    </a>
  );
}
