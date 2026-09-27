import { site } from "@/lib/site";

const items = [
  {
    label: "Companies House",
    value: site.company.number,
  },
  {
    label: "Redress scheme",
    value: site.company.redress,
  },
  {
    label: "Insurance",
    value: "Public liability & PI — details TBC",
  },
  {
    label: "Licensing",
    value: "Deal completes only with the right licence",
  },
];

export function TrustBar() {
  return (
    <section
      aria-label="Trust and compliance"
      className="border-y border-line bg-paper"
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-stone">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-snug text-navy">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl border-t border-line px-5 py-4 text-sm text-muted sm:px-8">
        We only proceed with written consent to sublet, and lender and insurer
        consent where required. HMO or selective licensing must be in place before
        occupation where the use needs it. We do not currently hold client money
        or occupier deposits.
      </div>
    </section>
  );
}
