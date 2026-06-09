import { Star } from "lucide-react";

const items = [
  "Admissions Open for 2025–26",
  "Nursery to Class 7",
  "CBSE Affiliated",
  "Value-Based Education",
  "Digital Classrooms & STEAM Labs",
  "100% Secure Campus",
  "Building Responsible Citizens",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-gold/20 bg-gold py-3 text-navy">
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-6 text-sm font-semibold uppercase tracking-wide">
            {item}
            <Star className="h-3.5 w-3.5 fill-navy" />
          </span>
        ))}
      </div>
    </div>
  );
}
