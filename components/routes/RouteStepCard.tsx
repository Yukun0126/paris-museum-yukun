import { ArtworkCard } from "@/components/ui/ArtworkCard";
import type { Artwork } from "@/lib/types";

type RouteStepCardProps = {
  artwork: Artwork;
  index: number;
};

export function RouteStepCard({ artwork, index }: RouteStepCardProps) {
  return <ArtworkCard artwork={artwork} index={index} />;
}
