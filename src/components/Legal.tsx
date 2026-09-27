import type { ReactNode } from "react";
import { PageHero, Section } from "@/components/Section";

export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero title={title}>
        <p>{intro}</p>
        <p className="mt-3 text-sm">
          Draft for solicitor review. Placeholders will be replaced once company
          details are confirmed.
        </p>
      </PageHero>
      <Section>
        <div className="prose-legal mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
          {children}
        </div>
      </Section>
    </>
  );
}

export function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl text-navy">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
