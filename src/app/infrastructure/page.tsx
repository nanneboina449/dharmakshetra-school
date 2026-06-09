import type { Metadata } from "next";
import PageHeader, { Mark } from "@/components/ui/PageHeader";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "Explore the campus of Dharmakshetra International School — digital classrooms, STEAM labs, library, sports, gardens and a 100% secure environment.",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader
        crumb="Infrastructure"
        eyebrow="Our Campus"
        title={
          <>
            A campus built for <Mark>safe</Mark>, joyful learning
          </>
        }
        intro="World-class facilities, thoughtful design and a 100% secure environment where children can explore, play and grow with confidence."
      />
      <Facilities />
      <Gallery />
    </>
  );
}
