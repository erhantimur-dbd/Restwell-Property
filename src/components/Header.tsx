"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-off-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm bg-navy px-4 py-2.5 text-sm font-medium text-paper transition hover:bg-navy-deep"
          >
            Request a review
          </Link>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={site.contact.phoneHref}
            className="text-sm font-medium text-navy"
          >
            Call
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-sm border border-line px-3 py-2 text-sm text-navy"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 text-base text-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-2 inline-flex rounded-sm bg-navy px-4 py-3 text-sm font-medium text-paper"
                onClick={() => setOpen(false)}
              >
                Request a property review
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
