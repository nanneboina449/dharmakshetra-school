import type { Metadata } from "next";
import PageHeader, { Mark } from "@/components/ui/PageHeader";
import Academics from "@/components/Academics";
import WhyUs from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Our CBSE academic programme for Nursery to Class 7 — activity-based, inquiry-led learning that balances rigour with joy.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        crumb="Academics"
        eyebrow="Academics"
        title={
          <>
            A CBSE foundation for <Mark>curious</Mark> minds
          </>
        }
        intro="From Nursery to Class 7, our programme balances academic rigour with the joy of discovery — giving every child the confidence to ask, explore and grow."
      />
      <Academics />
      <WhyUs />
    </>
  );
}
