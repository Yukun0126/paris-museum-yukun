import { ArtworkCard } from "@/components/ui/ArtworkCard";
import type { Artwork } from "@/lib/types";

type RelatedWorksProps = {
  artworks: Artwork[];
};

export function RelatedWorks({ artworks }: RelatedWorksProps) {
  return (
    <div className="space-y-4">
      {artworks.map((artwork) => (
        <ArtworkCard artwork={artwork} key={artwork.id} />
      ))}
    </div>
  );
}
