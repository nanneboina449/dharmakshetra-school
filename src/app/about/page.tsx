import type { Metadata } from "next";
import PageHeader, { Mark } from "@/components/ui/PageHeader";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import StatsBand from "@/components/StatsBand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dharmakshetra International School — our vision, mission, leadership and the values that shape a CBSE education in Machilipatnam.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About Us"
        eyebrow="About the School"
        title={
          <>
            A place of <Mark>righteousness</Mark>, learning and growth
          </>
        }
        intro="Dharmakshetra International School blends tradition with innovation to nurture compassionate, responsible and globally competent individuals."
      />
      <div className="py-20 sm:py-24">
        <StatsBand pull={false} />
      </div>
      <About />
      <Leadership />
    </>
  );
}
