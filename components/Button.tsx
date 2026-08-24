import Link from "next/link";
import { ReactNode } from "react";

type Variant = "accent" | "outlineWhite" | "navy" | "outlineNavy";

const VARIANT_CLASSES: Record<Variant, string> = {
  accent:
    "bg-accent-500 text-brand-900 shadow-[0_10px_22px_-10px_rgba(245,146,15,0.7)] hover:bg-accent-600 hover:-translate-y-0.5",
  outlineWhite:
    "border-2 border-white/70 text-white hover:bg-white/10 hover:-translate-y-0.5",
  navy: "bg-brand-800 text-white hover:bg-brand-900 hover:-translate-y-0.5",
  outlineNavy:
    "border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white hover:-translate-y-0.5",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  small?: boolean;
}

export default function Button({
  href,
  children,
  variant = "accent",
  className = "",
  small = false,
}: ButtonProps) {
  const size = small ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-[15px]";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 ${size} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
