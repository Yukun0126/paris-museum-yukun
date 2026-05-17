import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { ArtPlaceholder } from "@/components/ui/ArtPlaceholder";
import { Tag } from "@/components/ui/Tag";
import type { Museum } from "@/lib/types";

type MuseumCardProps = {
  museum: Museum;
};

export function MuseumCard({ museum }: MuseumCardProps) {
  const enabled = museum.id === "louvre";

  return (
    <SectionCard
      as={Link}
      className={`grid grid-cols-[112px_1fr] gap-4 p-2.5 ${enabled ? "" : "pointer-events-none opacity-55"}`}
      href={enabled ? "/louvre" : "#"}
    >
      <ArtPlaceholder className="h-32 rounded-[22px]" label={museum.city} title={museum.name} tone={enabled ? "gold" : "stone"} />
      <div className="flex flex-col justify-between py-3">
        <div>
          <p className="text-xl font-black">{museum.name}</p>
          <p className="mt-1 text-sm text-muted">{museum.city}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Tag>{museum.status}</Tag>
          {enabled ? <ArrowRight className="text-gold" size={18} /> : null}
        </div>
      </div>
    </SectionCard>
  );
}
