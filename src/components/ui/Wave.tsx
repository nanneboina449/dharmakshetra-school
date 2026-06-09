/**
 * Organic wave divider. Renders a curved edge filled with `color`,
 * sitting flush at the top or bottom of a section.
 */
export default function Wave({
  color = "text-cream",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none leading-[0] ${color} ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`block h-[60px] w-full sm:h-[90px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          fill="currentColor"
          d="M0,40 C240,90 480,90 720,55 C960,20 1200,20 1440,55 L1440,90 L0,90 Z"
        />
      </svg>
    </div>
  );
}
