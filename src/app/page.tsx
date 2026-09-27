import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { LandlordForm } from "@/components/LandlordForm";
import { Section, Eyebrow } from "@/components/Section";
import { TrustBar } from "@/components/TrustBar";
import {
  comparison,
  homeFaqs,
  promises,
  steps,
} from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `Restwell Property | Guaranteed rent for landlords in the UK`,
  },
  description:
    "Guaranteed rent for UK landlords. We become your tenant, pay fixed income on the same date every month, and look after the home.",
  keywords: [
    "guaranteed rent UK",
    "fixed rental income",
    "company let for landlords",
    "hands-off property management",
  ],
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-plane absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12 lg:py-24">
          <div className="max-w-xl text-paper lg:sticky lg:top-28 lg:pt-2">
            <p className="reveal text-[0.7rem] font-medium uppercase tracking-[0.2em] text-stone-soft">
              {site.name}
            </p>
            <h1 className="reveal reveal-delay-1 mt-4 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-[3.35rem]">
              Your property. Fixed rent. You rest well.
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-md text-base leading-relaxed text-paper/85 sm:text-lg">
              We become your tenant, pay you on the same date every month, and
              look after the property.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
              <Button href="#review" variant="onDark">
                Request a property review
              </Button>
              <Button href="/how-it-works" variant="ghost">
                See how it works
              </Button>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <LandlordForm id="review" />
          </div>
        </div>
      </section>

      <Section>
        <Eyebrow>Three promises</Eyebrow>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-navy sm:text-4xl">
          Fixed income. Clear stewardship.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {promises.map((item) => (
            <div key={item.title} className="border-t border-stone/40 pt-5">
              <h3 className="text-lg font-medium text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-paper">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
              Six calm steps from enquiry to standing order.
            </h2>
            <p className="mt-4 text-muted">
              A commercial company lease. Permission to sublet. Rent paid whether
              the house is full or empty.
            </p>
            <div className="mt-6">
              <Button href="/how-it-works" variant="secondary">
                Full process
              </Button>
            </div>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="border border-line bg-off-white/70 p-5"
              >
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-stone">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 font-medium text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <Eyebrow>Responsibilities</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-navy sm:text-4xl">
          What we take on, and what stays with you.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="border border-line bg-paper p-6 sm:p-8">
            <h3 className="font-display text-2xl text-navy">Restwell</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
              <li>Agreed rent every month by standing order</li>
              <li>Occupier find and management</li>
              <li>Voids and arrears on the head lease</li>
              <li>Day-to-day maintenance within the contract</li>
              <li>Safety certificates we are responsible for</li>
              <li>Licensing applications where we are the operator</li>
            </ul>
          </div>
          <div className="border border-line bg-off-white p-6 sm:p-8">
            <h3 className="font-display text-2xl text-navy">Owner</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
              <li>The asset and any capital growth</li>
              <li>Buildings insurance (confirm the policy allows this use)</li>
              <li>Lender consent where required</li>
              <li>Major structural works unless agreed otherwise</li>
              <li>Residual statutory duties as superior landlord</li>
            </ul>
            <p className="mt-6 text-sm text-navy">
              We will not say you have no legal responsibility. Independent legal
              advice is recommended.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-navy text-paper">
        <Eyebrow>
          <span className="text-stone">Compare</span>
        </Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl">
          Restwell vs high-street agent vs self-managing
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {comparison.map((col) => (
            <div
              key={col.label}
              className={`border p-6 ${
                col.label === "Restwell"
                  ? "border-stone/50 bg-navy-deep"
                  : "border-white/15 bg-white/5"
              }`}
            >
              <h3 className="text-lg font-medium">{col.label}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-paper/80">
                {col.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Houses across the UK</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
              Properties we take on
            </h2>
            <p className="mt-4 text-muted">
              We focus on houses suitable for professional rooms, a single let, or
              carefully run serviced stays — where licensing and consents can be
              put in order.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-navy">
              <li>Areas: {site.areas}</li>
              <li>Property focus: {site.propertyFocus}</li>
              <li>Terms: typically 2–5 years</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              We will not take on homes where consent to sublet cannot be obtained,
              or where the required licence cannot be secured before occupation.
            </p>
            <div className="mt-6">
              <Button href="/for-landlords" variant="secondary">
                For landlords
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-line bg-stone-soft/30">
            <Image
              src="/images/interior-placeholder.svg"
              alt="Placeholder for a calm, well-kept residential interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-paper">
        <Eyebrow>Short FAQ</Eyebrow>
        <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
          Honest answers first.
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {homeFaqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 text-base font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
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
        <p className="mt-6 text-sm text-muted">
          More detail on the{" "}
          <a href="/for-landlords" className="underline underline-offset-2">
            for landlords
          </a>{" "}
          page.
        </p>
      </Section>

      <Section className="surface-grain">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>Next step</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
              Tell us about the house.
            </h2>
            <p className="mt-4 text-muted">
              Send the basics. We review. If it fits, we offer a fixed rent and
              term.
            </p>
            <p className="mt-6 text-sm text-muted">
              Prefer to talk?{" "}
              <a
                href={site.contact.phoneHref}
                className="font-medium text-navy underline-offset-2 hover:underline"
              >
                {site.contact.phone}
              </a>{" "}
              or{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="font-medium text-navy underline-offset-2 hover:underline"
              >
                {site.contact.email}
              </a>
              .
            </p>
          </div>
          <LandlordForm id="final-review" />
        </div>
      </Section>
    </>
  );
}
