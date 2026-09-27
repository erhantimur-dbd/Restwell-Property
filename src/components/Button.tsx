import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

  const styles = {
    primary:
      "bg-navy text-paper shadow-[0_1px_0_rgba(26,39,68,0.15)] hover:bg-navy-deep",
    secondary:
      "border border-navy/20 bg-paper/70 text-navy hover:border-navy/40 hover:bg-paper",
    onDark: "bg-paper text-navy hover:bg-off-white",
    ghost: "text-paper/90 underline-offset-4 hover:text-paper hover:underline",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
