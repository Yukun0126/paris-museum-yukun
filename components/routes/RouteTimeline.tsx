import { RouteStepCard } from "@/components/routes/RouteStepCard";
import type { Artwork } from "@/lib/types";

type RouteTimelineProps = {
  artworks: Artwork[];
};

export function RouteTimeline({ artworks }: RouteTimelineProps) {
  return (
    <div className="space-y-4">
      {artworks.map((artwork, index) => (
        <RouteStepCard artwork={artwork} index={index} key={artwork.id} />
      ))}
    </div>
  );
}
