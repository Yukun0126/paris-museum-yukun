import { BadgeCheck } from "lucide-react";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import type { Artwork } from "@/lib/types";

type ScanResultCardProps = {
  artwork: Artwork;
};

export function ScanResultCard({ artwork }: ScanResultCardProps) {
  return (
    <SectionCard className="p-3">
      <ArtworkImage
        artworkId={artwork.id}
        className="h-52 w-full rounded-[22px]"
        src={artwork.image}
        title={artwork.titleZh}
      />
      <div className="mt-5 flex items-center gap-2">
        <Tag className="gap-1 border-gold/60 bg-gold-soft/35">
          <BadgeCheck size={14} />
          98% 匹配
        </Tag>
        <span className="text-xs font-semibold text-muted">{artwork.wing} · {artwork.room}</span>
      </div>
      <h1 className="mt-4 text-2xl font-black">{artwork.titleZh}</h1>
      <p className="mt-2 text-sm text-muted">{artwork.titleEn}</p>
    </SectionCard>
  );
}
