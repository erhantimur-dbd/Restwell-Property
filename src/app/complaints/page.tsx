import type { Metadata } from "next";
import { LegalBlock, LegalLayout } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Complaints",
};

export default function ComplaintsPage() {
  return (
    <LegalLayout
      title="Complaints"
      intro="How to raise a complaint about Restwell Property’s service."
    >
      <LegalBlock title="Tell us first">
        <p>
          Email{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or
          call {site.contact.phone} with your name, property address, and what
          went wrong. We aim to acknowledge promptly and investigate.
        </p>
      </LegalBlock>

      <LegalBlock title="Redress scheme">
        <p>
          Membership details: {site.company.redress}. Once confirmed, unresolved
          complaints may be referred to that scheme in line with its rules.
        </p>
      </LegalBlock>

      <LegalBlock title="What we need">
        <p>
          Please include dates, copies of relevant correspondence, and the
          outcome you are seeking. We will not treat a complaint as a way to
          renegotiate an agreed commercial rent outside the lease terms.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
