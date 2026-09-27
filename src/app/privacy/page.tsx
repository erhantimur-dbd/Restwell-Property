import type { Metadata } from "next";
import { LegalBlock, LegalLayout } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy policy"
      intro="How Restwell Property collects and uses personal information from landlord enquiries and site visitors."
    >
      <LegalBlock title="Who we are">
        <p>
          {site.company.legalName} (“Restwell”, “we”) operates{" "}
          {site.domain}. Company number {site.company.number}. Registered
          address: {site.contact.address}.
        </p>
        <p>
          Contact:{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> /{" "}
          {site.contact.phone}.
        </p>
      </LegalBlock>

      <LegalBlock title="What we collect">
        <p>
          When you request a property review we collect name, phone, email,
          postcode, property details, rent information, subletting restriction
          answers, optional notes, and any photos you upload.
        </p>
        <p>
          We may also collect basic technical data such as IP address and browser
          type through hosting logs and, if configured and consented, analytics
          cookies.
        </p>
      </LegalBlock>

      <LegalBlock title="Why we use it">
        <p>
          We process enquiry data to review properties, respond to you, prepare
          offers, and keep records of communications. The legal bases are
          typically steps prior to a contract and our legitimate interests in
          operating a property business. Where required, we rely on consent for
          non-essential cookies.
        </p>
      </LegalBlock>

      <LegalBlock title="Sharing">
        <p>
          We may share information with professional advisers, insurers,
          licensing authorities, lenders’ processes where relevant, IT providers
          (including email delivery), and regulators if legally required. We do
          not sell personal data.
        </p>
      </LegalBlock>

      <LegalBlock title="Retention">
        <p>
          Enquiry records are kept for as long as needed to handle the
          conversation and for a reasonable period afterwards for legal,
          accounting and dispute purposes. Exact periods will be confirmed in the
          final solicitor-approved policy.
        </p>
      </LegalBlock>

      <LegalBlock title="Your rights">
        <p>
          Depending on UK GDPR, you may have rights to access, rectify, erase,
          restrict, object, or port your data, and to complain to the ICO. Contact
          us using the details above.
        </p>
      </LegalBlock>

      <LegalBlock title="Updates">
        <p>
          We may update this page. The version published on this site is the
          current draft.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
