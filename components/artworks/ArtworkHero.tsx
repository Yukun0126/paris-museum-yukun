import { Tag } from "@/components/ui/Tag";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import type { Artwork } from "@/lib/types";

type ArtworkHeroProps = {
  artwork: Artwork;
};

export function ArtworkHero({ artwork }: ArtworkHeroProps) {
  return (
    <>
      <div className="px-4 pt-4">
        <ArtworkImage
          artworkId={artwork.id}
          className="museum-image h-[330px] w-full"
          src={artwork.image}
          title={artwork.titleZh}
        />
      </div>
      <div className="px-5 pt-7">
        <div className="mb-4 flex items-center gap-2">
          <Tag>{artwork.category}</Tag>
          <span className="text-xs font-semibold text-muted">{artwork.wing} · {artwork.floor} · {artwork.room}</span>
        </div>
        <h1 className="text-3xl font-black leading-tight">{artwork.titleZh}</h1>
        <p className="mt-2 text-sm text-muted">
          {artwork.titleEn} · {artwork.artist}
        </p>
      </div>
    </>
  );
}
