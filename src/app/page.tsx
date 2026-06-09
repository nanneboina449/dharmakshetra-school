import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsBand from "@/components/StatsBand";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Academics from "@/components/Academics";
import Facilities from "@/components/Facilities";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { school } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: school.name,
  alternateName: school.shortName,
  slogan: school.tagline,
  description:
    "A leading CBSE school in Machilipatnam offering value-based, future-ready education from Nursery to Class 7.",
  url: "https://dharmakshetraschools.org",
  telephone: school.phones,
  email: school.emails[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kokanarayanapalem Road, Sultanagaram",
    addressLocality: "Machilipatnam",
    addressRegion: "Andhra Pradesh",
    postalCode: "521003",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Marquee />
      <div className="py-20">
        <StatsBand pull={false} />
      </div>
      <About />
      <WhyUs />
      <Academics />
      <Facilities />
      <Leadership />
      <Gallery />
      <News />
      <Testimonials />
      <Contact />
    </>
  );
}
