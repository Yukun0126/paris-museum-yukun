"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { ArtworkCard } from "@/components/ui/ArtworkCard";
import type { Artwork } from "@/lib/types";

type CoreCollectionListProps = {
  artworks: Artwork[];
  maxLabel?: string;
};

const initialCount = 3;
const step = 5;

export function CoreCollectionList({ artworks, maxLabel = "最多展开 25 件，收起会回到最初 3 件。" }: CoreCollectionListProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visibleArtworks = artworks.slice(0, visibleCount);
  const canExpand = visibleCount < artworks.length;
  const canCollapse = visibleCount > initialCount;

  function expand() {
    setVisibleCount((current) => Math.min(current + step, artworks.length));
  }

  function collapse() {
    setVisibleCount((current) => Math.max(current - step, initialCount));
  }

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {visibleArtworks.map((artwork, index) => (
          <ArtworkCard artwork={artwork} index={index} key={artwork.id} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line/80 bg-paper/58 px-4 text-sm font-bold text-ink shadow-card transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-35"
          disabled={!canCollapse}
          onClick={collapse}
          type="button"
        >
          <ChevronUp size={17} />
          收起 5 件
        </button>
        <button
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-bold text-paper shadow-button transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-35"
          disabled={!canExpand}
          onClick={expand}
          type="button"
        >
          展开 5 件
          <ChevronDown size={17} />
        </button>
      </div>

      <p className="text-center text-xs font-bold text-muted">
        已显示 {visibleArtworks.length}/{artworks.length} 件，{maxLabel}
      </p>
    </div>
  );
}
