import Link from "next/link";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import { buildArtworkCardIntro } from "@/lib/artworkNarrative";
import type { Artwork } from "@/lib/types";

type ArtworkCardProps = {
  artwork: Artwork;
  index?: number;
  href?: string;
  className?: string;
};

export function ArtworkCard({ artwork, index, href = `/artworks/${artwork.id}`, className = "" }: ArtworkCardProps) {
  return (
    <SectionCard as={Link} className={`grid grid-cols-[88px_1fr] gap-3 p-2 ${className}`} href={href}>
      <ArtworkImage
        artworkId={artwork.id}
        className="h-24 w-full rounded-[18px]"
        src={artwork.image}
        title={artwork.titleZh}
      />
      <div className="flex min-w-0 flex-col justify-between py-1">
        <div>
          <div className="flex items-center gap-2">
            {typeof index === "number" ? (
              <span className="grid size-6 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold-soft/35 text-[11px] font-black text-ink">
                {index + 1}
              </span>
            ) : null}
            <p className="truncate text-[15px] font-black">{artwork.titleZh}</p>
          </div>
          <p className="mt-1 truncate text-xs text-muted">{artwork.titleEn}</p>
          <p className="mt-1 truncate text-xs font-semibold text-muted">{artwork.artist}</p>
          <p className="mt-1.5 line-clamp-2 text-xs font-black leading-5 text-ink">{artwork.oneLine}</p>
          <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-muted">{buildArtworkCardIntro(artwork)}</p>
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="truncate text-[11px] font-semibold text-muted">{artwork.wing} · {artwork.floor} · {artwork.room}</span>
          <Tag>{artwork.category}</Tag>
        </div>
      </div>
    </SectionCard>
  );
}
