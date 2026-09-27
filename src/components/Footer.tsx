import Link from "next/link";
import { Logo } from "@/components/Logo";
import { legalNav, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-soft">
            {site.positioning}
          </p>
          <p className="mt-6 text-xs leading-relaxed text-stone-soft/80">
            The guarantee is a contract with Restwell as your tenant, not a
            rent-guarantee insurance policy. We only proceed with written consent
            to sublet, and lender and insurer consent where required.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-stone">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-stone-soft">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="transition hover:text-paper">
                Request a review
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-stone">
            Company
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-stone-soft">
            <li>{site.company.legalName}</li>
            <li>Company no. {site.company.number}</li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="transition hover:text-paper"
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={site.contact.phoneHref}
                className="transition hover:text-paper"
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="pt-2 text-xs leading-relaxed">
              Redress: {site.company.redress}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-stone-soft/80 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.company.legalName}. All rights
            reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
