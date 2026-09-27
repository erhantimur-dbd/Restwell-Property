import Link from "next/link";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className = "", tone = "dark" }: LogoProps) {
  const word = tone === "light" ? "text-paper" : "text-navy";
  const sub = tone === "light" ? "text-stone-soft" : "text-stone";

  return (
    <Link href="/" className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span className={`font-display text-2xl tracking-tight ${word} sm:text-[1.7rem]`}>
        Restwell
      </span>
      <span
        className={`text-[0.7rem] font-medium uppercase tracking-[0.18em] ${sub} sm:text-xs`}
      >
        Property
      </span>
    </Link>
  );
}
