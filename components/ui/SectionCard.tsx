import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SectionCardProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  body?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "title">;

export function SectionCard<T extends ElementType = "section">({
  as,
  children,
  className = "",
  title,
  eyebrow,
  subtitle,
  body,
  ...props
}: SectionCardProps<T>) {
  const Component = as ?? "section";

  return (
    <Component className={`paper-surface rounded-booklet ${className}`} {...props}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2 className="mt-2 text-xl font-black leading-tight text-ink">{title}</h2> : null}
      {subtitle ? <p className="mt-2 text-sm font-bold leading-6 text-muted">{subtitle}</p> : null}
      {body ? <p className="mt-4 text-sm leading-7 text-muted">{body}</p> : null}
      {children}
    </Component>
  );
}
