import type { Metadata } from "next";
import { LegalBlock, LegalLayout } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website terms",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Website terms"
      intro="Terms for using the Restwell Property website. Separate terms apply to any commercial lease."
    >
      <LegalBlock title="About these terms">
        <p>
          This website is operated by {site.company.legalName}. By using the
          site you agree to these terms. Property offers are subject to review,
          due diligence, licensing and written contract.
        </p>
      </LegalBlock>

      <LegalBlock title="No instant offer">
        <p>
          Information on this site is general. Submitting the review form does
          not create a lease or guarantee a rent figure. Any offer follows
          assessment of the property and required consents.
        </p>
      </LegalBlock>

      <LegalBlock title="Accuracy">
        <p>
          We aim to keep content accurate but do not warrant it is complete or
          current. Company, insurance and redress details marked TBC will be
          updated when confirmed.
        </p>
      </LegalBlock>

      <LegalBlock title="Liability">
        <p>
          Nothing on this site excludes liability that cannot be excluded under
          UK law. Otherwise, to the fullest extent permitted, we are not liable
          for loss arising from use of this website.
        </p>
      </LegalBlock>

      <LegalBlock title="Governing law">
        <p>These terms are governed by the laws of England and Wales.</p>
      </LegalBlock>
    </LegalLayout>
  );
}
