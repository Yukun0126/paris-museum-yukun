"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";

type SeenButtonProps = {
  artworkId: string;
};

export function SeenButton({ artworkId }: SeenButtonProps) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const seenIds = JSON.parse(window.localStorage.getItem("seenArtworks") || "[]") as string[];
    setSeen(seenIds.includes(artworkId));
  }, [artworkId]);

  function toggleSeen() {
    const seenIds = JSON.parse(window.localStorage.getItem("seenArtworks") || "[]") as string[];
    const next = seen ? seenIds.filter((id) => id !== artworkId) : Array.from(new Set([...seenIds, artworkId]));
    window.localStorage.setItem("seenArtworks", JSON.stringify(next));
    setSeen(!seen);
  }

  return (
    <button
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-bold shadow-button transition active:scale-[0.98] ${
        seen ? "bg-gold text-ink" : "bg-ink text-paper"
      }`}
      onClick={toggleSeen}
      type="button"
    >
      <Check size={18} />
      {seen ? "已收入观看足迹" : "记入观看足迹"}
    </button>
  );
}
