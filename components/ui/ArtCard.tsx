import type { ReactNode } from "react";
import { ArtPlaceholder } from "@/components/ui/ArtPlaceholder";
import { SectionCard } from "@/components/ui/SectionCard";

type ArtCardProps = {
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
};

export function ArtCard({ title, subtitle, image, children }: ArtCardProps) {
  return (
    <SectionCard className="p-3">
      {image?.startsWith("/images/") ? (
        <img alt={title} className="h-44 w-full rounded-[22px] object-cover" src={image} />
      ) : (
        <ArtPlaceholder className="h-44 w-full rounded-[22px]" title={title} />
      )}
      <div className="p-2">
        <h3 className="text-lg font-black">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
        {children ? <div className="mt-4">{children}</div> : null}
      </div>
    </SectionCard>
  );
}
