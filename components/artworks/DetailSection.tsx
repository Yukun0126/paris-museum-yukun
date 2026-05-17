import type { ReactNode } from "react";
import { SectionCard } from "@/components/ui/SectionCard";

type DetailSectionProps = {
  title: string;
  children: ReactNode;
  highlighted?: boolean;
};

export function DetailSection({ title, children, highlighted = false }: DetailSectionProps) {
  return (
    <SectionCard
      className={`p-5 ${highlighted ? "border-gold/40 bg-[linear-gradient(145deg,rgba(216,198,154,0.28),rgba(251,247,239,0.74))]" : ""}`}
    >
      <h2 className="text-sm font-black">{title}</h2>
      <div className="mt-4">{children}</div>
    </SectionCard>
  );
}
