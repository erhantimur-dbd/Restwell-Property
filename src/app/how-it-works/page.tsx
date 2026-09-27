import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero, Section, Eyebrow } from "@/components/Section";
import { steps } from "@/lib/copy";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Restwell Property’s guaranteed rent company let works: review, offer, commercial lease, licensing, and monthly standing order.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero title="How it works">
        <p>
          From property details to a monthly standing order. Clear steps for
          owners — and enough detail for a solicitor to follow without alarm.
        </p>
      </PageHero>

      <Section>
        <ol className="space-y-0">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-4 border-t border-line py-8 md:grid-cols-[7rem_1fr] md:gap-10"
            >
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone">
                Step {index + 1}
              </p>
              <div>
                <h2 className="font-display text-2xl text-navy sm:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-3 max-w-2xl text-muted">{step.body}</p>
              </div>
            </li>
          ))}
          <div className="border-t border-line" />
        </ol>
      </Section>

      <Section className="bg-paper">
        <Eyebrow>Who does what</Eyebrow>
        <h2 className="mt-3 font-display text-3xl text-navy">
          During the term
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="border border-line bg-off-white p-6">
            <h3 className="text-lg font-medium text-navy">Restwell</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Pays agreed rent every month</li>
              <li>Finds and manages occupiers</li>
              <li>Handles voids and arrears on the head lease</li>
              <li>Day-to-day maintenance within the contract</li>
              <li>Licensing where we are the operator</li>
              <li>Safety certificates we are responsible for</li>
            </ul>
          </div>
          <div className="border border-line bg-off-white p-6">
            <h3 className="text-lg font-medium text-navy">You as owner</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Keep the asset</li>
              <li>Maintain buildings insurance for the permitted use</li>
              <li>Provide lender consent where required</li>
              <li>Major structural works unless agreed otherwise</li>
              <li>Retain residual statutory duties as superior landlord</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Button href="/contact">Request a property review</Button>
        </div>
      </Section>
    </>
  );
}
