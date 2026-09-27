import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero, Section, Eyebrow } from "@/components/Section";
import { TrustBar } from "@/components/TrustBar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Restwell Property — guaranteed rent for UK landlords, run by Erhan Kennedy Timur.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Restwell Property">
        <p>
          The name is the offer: the landlord rests well. We pay fixed rent, take
          on the running of the home, and treat stewardship as the product.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Eyebrow>Who runs it</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-navy">
              {site.founder.name}
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.14em] text-stone">
              {site.founder.role}
            </p>
            <div className="mt-6 max-w-xl space-y-4 text-muted">
              <p>
                Restwell Property is a UK guaranteed-rent operator. We lease a
                landlord’s house on a commercial agreement, pay a fixed rent on
                the same date every month, and run the home ourselves — usually
                as professional rooms, a single let, or serviced stays.
              </p>
              <p>
                Phase one of this site exists to win property supply. Occupier
                pages will follow once there is stock. We write like a regional
                property firm because that is how we intend to operate: calm,
                plain English, properly licensed work.
              </p>
            </div>
          </div>
          <div className="border border-line bg-paper p-6 sm:p-8">
            <h3 className="font-display text-2xl text-navy">Company details</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-stone">Legal name</dt>
                <dd className="mt-1 text-navy">{site.company.legalName}</dd>
              </div>
              <div>
                <dt className="text-stone">Companies House</dt>
                <dd className="mt-1 text-navy">{site.company.number}</dd>
              </div>
              <div>
                <dt className="text-stone">Registered address</dt>
                <dd className="mt-1 text-navy">{site.contact.address}</dd>
              </div>
              <div>
                <dt className="text-stone">Redress</dt>
                <dd className="mt-1 text-navy">{site.company.redress}</dd>
              </div>
              <div>
                <dt className="text-stone">Insurance</dt>
                <dd className="mt-1 text-navy">{site.company.insurance}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <TrustBar />

      <Section className="bg-paper">
        <Eyebrow>Why the name</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-navy">
          Your property. Fixed rent. You rest well.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Guaranteed rent should feel quiet, not loud. No seminar language. No
          inflated promises. A standing order, an inspected house, and a clear
          commercial lease.
        </p>
        <div className="mt-8">
          <Button href="/contact">Request a property review</Button>
        </div>
      </Section>
    </>
  );
}
