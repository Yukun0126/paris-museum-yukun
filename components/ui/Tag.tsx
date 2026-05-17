import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className = "" }: TagProps) {
  return <span className={`quiet-tag ${className}`}>{children}</span>;
}
