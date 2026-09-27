import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { LandlordForm } from "@/components/LandlordForm";
import { PageHero, Section, Eyebrow } from "@/components/Section";
import { TrustBar } from "@/components/TrustBar";
import { landlordFaqs } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guaranteed rent for landlords",
  description:
    "Company let for UK landlords: fixed rental income, we become your tenant, and we look after the home for the term.",
  alternates: {
    canonical: "/for-landlords",
  },
};

export default function ForLandlordsPage() {
  return (
    <>
      <PageHero title="Guaranteed rent for landlords">
        <p>
          Restwell takes a written company lease on your house, with permission
          to sublet. We pay an agreed monthly sum whether the property is full or
          empty, then manage the home for the term — typically 2–5 years.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>The offer</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-navy">
              Fixed income. We become your tenant.
            </h2>
            <p className="mt-4 text-muted">
              You keep the asset and any capital growth. We take occupancy risk,
              day-to-day management, and most of the operational work. Our
              profit is the gap between occupier income and the rent we pay you,
              after bills, voids and compliance.
            </p>
            <p className="mt-4 text-muted">
              The landlord offer is usually a little below open-market rent in
              exchange for certainty and no management. We never publish a rent
              percentage before seeing the property.
            </p>
          </div>
          <div className="border border-line bg-paper p-6 sm:p-8">
            <h3 className="font-display text-2xl text-navy">Who it is for</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>Tired landlords who want stewardship without daily calls</li>
              <li>Overseas or distant owners</li>
              <li>Inherited stock and vacant houses</li>
              <li>
                Small portfolio owners who want income without being a full-time
                landlord after the Renters’ Rights Act
              </li>
            </ul>
            <p className="mt-6 text-sm text-navy">
              It is not for owners who want maximum market rent and are happy to
              manage.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-paper">
        <Eyebrow>Before a deal completes</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-navy">
          What must be true
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Written owner consent to sublet",
            "Lender and buildings-insurer consent where required",
            "The correct HMO or selective licence before occupation, if needed",
            "A commercial head lease (Restwell will not live there)",
            "Safety certificates and proper insurance",
            "Right-to-rent checks for occupiers we place",
          ].map((item) => (
            <li
              key={item}
              className="border border-line bg-off-white px-5 py-4 text-sm text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Eyebrow>Honest limit</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-navy">
          A contract, not an insurance product.
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-muted">
          <p>
            The guarantee is contractual — Restwell is the tenant — not a
            rent-guarantee insurance policy. You still have residual statutory
            risk as superior landlord if an operator fails on licensing or
            housing standards.
          </p>
          <p>
            Under the Renters’ Rights Act, superior landlords can still carry
            risk if the operator breaches housing or licensing law. We recommend
            independent legal advice before you sign.
          </p>
          <p>
            We do not promise vacant possession at the end of the term as if
            older possession routes still applied unchanged.
          </p>
        </div>
      </Section>

      <TrustBar />

      <Section className="bg-paper">
        <Eyebrow>FAQs</Eyebrow>
        <h2 className="mt-3 font-display text-3xl text-navy">
          Questions owners and solicitors ask
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {landlordFaqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none text-base font-medium text-navy [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="text-stone transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <Section className="surface-grain">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Property review</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-navy">
              Request a review of your house
            </h2>
            <p className="mt-4 text-muted">
              {site.areas}. Focus on {site.propertyFocus.toLowerCase()}. Offer
              follows a proper review — not an instant figure on the form.
            </p>
            <div className="mt-6">
              <Button href="/how-it-works" variant="secondary">
                See how it works
              </Button>
            </div>
          </div>
          <LandlordForm />
        </div>
      </Section>
    </>
  );
}
