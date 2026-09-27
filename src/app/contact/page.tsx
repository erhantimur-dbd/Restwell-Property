import type { Metadata } from "next";
import { LandlordForm } from "@/components/LandlordForm";
import { PageHero, Section, Eyebrow } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact / Request a review",
  description:
    "Request a property review from Restwell Property. Send house details for a guaranteed rent conversation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact">
        <p>
          Request a property review, or reach us by phone or email. We respond
          after looking at the basics — not with an instant rent figure.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Reach us</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-navy">
              Property review enquiries
            </h2>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-stone">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-navy underline-offset-2 hover:underline"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-stone">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={site.contact.phoneHref}
                    className="text-navy underline-offset-2 hover:underline"
                  >
                    {site.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-stone">Areas</dt>
                <dd className="mt-1 text-muted">{site.areas}</dd>
              </div>
              <div>
                <dt className="text-stone">Property focus</dt>
                <dd className="mt-1 text-muted">{site.propertyFocus}</dd>
              </div>
            </dl>
            <p className="mt-8 max-w-sm text-sm text-muted">
              We only proceed with written consent to sublet, and lender and
              insurer consent where required.
            </p>
          </div>
          <LandlordForm />
        </div>
      </Section>
    </>
  );
}
