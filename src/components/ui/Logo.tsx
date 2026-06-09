export default function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const mark = light ? "#e3c77e" : "#c8a24a";
  const ring = light ? "rgba(227,199,126,0.35)" : "rgba(11,31,58,0.12)";
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Dharmakshetra crest">
      <circle cx="24" cy="24" r="23" fill="none" stroke={ring} strokeWidth="1.5" />
      {/* stylised diya / flame of knowledge over an open book */}
      <path
        d="M24 9c2.6 3.4 4 6.2 4 9.1 0 2.8-1.8 4.9-4 4.9s-4-2.1-4-4.9c0-2.9 1.4-5.7 4-9.1Z"
        fill={mark}
      />
      <path
        d="M12 27c4-2.2 8-3.3 12-3.3S32 24.8 36 27v9c-4-2.2-8-3.3-12-3.3S16 33.8 12 36v-9Z"
        fill="none"
        stroke={mark}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line x1="24" y1="24.6" x2="24" y2="33" stroke={mark} strokeWidth="2" />
    </svg>
  );
}
