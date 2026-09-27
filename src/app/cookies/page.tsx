import type { Metadata } from "next";
import { LegalBlock, LegalLayout } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie policy",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie policy"
      intro="How this site uses cookies and similar technologies."
    >
      <LegalBlock title="Essential cookies">
        <p>
          We use essential cookies to run the site securely, remember cookie
          preferences, and deliver core pages and forms.
        </p>
      </LegalBlock>

      <LegalBlock title="Analytics">
        <p>
          Analytics cookies are only activated once configured and after you
          accept them on the cookie banner. Until then, we do not load non-essential
          tracking.
        </p>
      </LegalBlock>

      <LegalBlock title="Managing cookies">
        <p>
          You can change browser settings to block cookies. Essential cookies may
          still be required for the site to function. For questions, email{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
