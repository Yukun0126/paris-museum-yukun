import type { ReactNode } from "react";

type PageBlockProps = {
  children: ReactNode;
  className?: string;
};

export function PageBlock({ children, className = "" }: PageBlockProps) {
  return <section className={`space-y-7 px-5 py-7 ${className}`}>{children}</section>;
}
