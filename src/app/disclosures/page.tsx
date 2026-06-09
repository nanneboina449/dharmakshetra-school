import type { Metadata } from "next";
import { FileText } from "lucide-react";
import PageHeader, { Mark } from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { disclosures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mandatory Disclosures",
  description:
    "Mandatory public disclosure of Dharmakshetra International School as per CBSE affiliation bye-laws.",
};

export default function DisclosuresPage() {
  return (
    <>
      <PageHeader
        crumb="Mandatory Disclosures"
        eyebrow="Transparency"
        title={
          <>
            Mandatory <Mark>disclosures</Mark>
          </>
        }
        intro="Published in accordance with the CBSE affiliation bye-laws. Official documents and details will be updated here."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            align="left"
            eyebrow="General Information"
            title="School particulars"
          />
          <Reveal className="mt-10 overflow-hidden rounded-2xl border border-navy/10">
            <table className="w-full text-left text-sm">
              <tbody>
                {disclosures.general.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-cream" : "bg-sand/60"}>
                    <th scope="row" className="w-1/3 border-b border-navy/5 px-5 py-4 font-medium text-navy">
                      {row.label}
                    </th>
                    <td className="border-b border-navy/5 px-5 py-4 text-muted">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <div className="mt-20">
            <SectionHeading
              align="left"
              eyebrow="Documents & Certificates"
              title="Statutory documents"
              intro="The following documents are maintained by the school and available for inspection."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {disclosures.documents.map((doc, i) => (
                <Reveal key={doc} delay={(i % 2) * 0.05}>
                  <div className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-cream p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                      <FileText className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="text-sm font-medium text-navy/85">{doc}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <p className="mt-12 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-sm leading-relaxed text-muted">
            <strong className="font-semibold text-navy">Note:</strong> This page lists the standard
            mandatory disclosure items. Affiliation numbers, certificate scans and the principal&apos;s
            details should be replaced with the school&apos;s official records before publication.
          </p>
        </div>
      </section>
    </>
  );
}
