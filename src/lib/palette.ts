// Static, literal Tailwind class strings per accent so the JIT engine detects them.
export type Accent = "coral" | "teal" | "leaf" | "sky" | "sun" | "lilac" | "rose";

type AccentClasses = {
  /* soft tinted card surface */
  soft: string;
  /* vibrant icon chip (solid) */
  chip: string;
  /* vibrant text/accent */
  text: string;
  /* subtle hover border */
  border: string;
};

export const accent: Record<Accent, AccentClasses> = {
  coral: {
    soft: "bg-coral-soft",
    chip: "bg-coral text-white",
    text: "text-coral",
    border: "hover:border-coral/40",
  },
  teal: {
    soft: "bg-teal-soft",
    chip: "bg-teal text-white",
    text: "text-teal",
    border: "hover:border-teal/40",
  },
  leaf: {
    soft: "bg-leaf-soft",
    chip: "bg-leaf text-white",
    text: "text-leaf",
    border: "hover:border-leaf/40",
  },
  sky: {
    soft: "bg-sky-soft",
    chip: "bg-sky text-white",
    text: "text-sky",
    border: "hover:border-sky/40",
  },
  sun: {
    soft: "bg-sun-soft",
    chip: "bg-sun text-white",
    text: "text-sun",
    border: "hover:border-sun/40",
  },
  lilac: {
    soft: "bg-lilac-soft",
    chip: "bg-lilac text-white",
    text: "text-lilac",
    border: "hover:border-lilac/40",
  },
  rose: {
    soft: "bg-rose-soft",
    chip: "bg-rose text-white",
    text: "text-rose",
    border: "hover:border-rose/40",
  },
};
