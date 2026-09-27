"use client";

import Link from "next/link";
import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "restwell-cookie-consent";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
  return "pending";
}

export function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const persist = useCallback((value: string) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event("storage"));
  }, []);

  if (consent === "pending" || consent) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper p-4 shadow-[0_-8px_30px_rgba(18,27,48,0.08)] sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-navy">Cookies</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            We use essential cookies to run the site. Analytics cookies are only
            used once configured and after you accept. See our{" "}
            <Link href="/cookies" className="underline underline-offset-2">
              cookie policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              privacy policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => persist("essential")}
            className="rounded-sm border border-line px-4 py-2.5 text-sm text-navy transition hover:border-navy/30"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="rounded-sm bg-navy px-4 py-2.5 text-sm font-medium text-paper transition hover:bg-navy-deep"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
