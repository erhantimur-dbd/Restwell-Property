export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-8 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone">
      {children}
    </p>
  );
}

export function PageHero({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="surface-grain border-b border-line px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {children}
        </div>
        <div className="accent-line mt-8 h-px w-24 bg-stone" />
      </div>
    </section>
  );
}
