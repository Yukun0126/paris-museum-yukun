import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "bg-ink text-paper shadow-button",
  secondary: "border border-line/80 bg-paper/55 text-ink shadow-card backdrop-blur",
  ghost: "bg-transparent text-ink"
};

export function PrimaryButton({
  href,
  children,
  variant = "primary",
  className = "",
  onClick
}: PrimaryButtonProps) {
  const classes = `inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 text-sm font-bold transition duration-200 ease-out active:scale-[0.97] ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  );
}
