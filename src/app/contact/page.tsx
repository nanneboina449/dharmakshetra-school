import type { Metadata } from "next";
import PageHeader, { Mark } from "@/components/ui/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dharmakshetra International School, Machilipatnam — address, phone, email and an admissions enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Get in Touch"
        title={
          <>
            We&apos;d love to <Mark>hear</Mark> from you
          </>
        }
        intro="Questions about admissions, the curriculum or campus life? Our team is here to help."
        waveColor="text-navy"
      />
      <Contact showHeading={false} />
    </>
  );
}
