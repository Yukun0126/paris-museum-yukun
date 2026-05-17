"use client";

import Link from "next/link";
import { Check, Headphones, Heart, MapPinned } from "lucide-react";
import { useEffect, useState } from "react";

type ArtworkActionsProps = {
  artworkId: string;
};

export function ArtworkActions({ artworkId }: ArtworkActionsProps) {
  const [playing, setPlaying] = useState(false);
  const [seen, setSeen] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const seenIds = JSON.parse(window.localStorage.getItem("seenArtworks") || "[]") as string[];
    const savedIds = JSON.parse(window.localStorage.getItem("savedArtworks") || "[]") as string[];
    setSeen(seenIds.includes(artworkId));
    setSaved(savedIds.includes(artworkId));
  }, [artworkId]);

  function toggleStorage(key: string, active: boolean, setter: (next: boolean) => void) {
    const ids = JSON.parse(window.localStorage.getItem(key) || "[]") as string[];
    const next = active ? ids.filter((id) => id !== artworkId) : Array.from(new Set([...ids, artworkId]));
    window.localStorage.setItem(key, JSON.stringify(next));
    setter(!active);
  }

  return (
    <div className="space-y-3">
      <button
        className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-bold shadow-button transition active:scale-[0.98] ${
          playing ? "bg-gold text-ink" : "bg-ink text-paper"
        }`}
        onClick={() => setPlaying(true)}
        type="button"
      >
        <Headphones size={18} />
        {playing ? "正在讲这一段..." : "听一段 30 秒"}
      </button>

      <div className="grid grid-cols-2 gap-3">
        <button
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-4 text-sm font-bold shadow-card transition active:scale-[0.98] ${
            seen ? "border-gold bg-gold-soft/45 text-ink" : "border-line bg-paper/58 text-ink"
          }`}
          onClick={() => toggleStorage("seenArtworks", seen, setSeen)}
          type="button"
        >
          <Check size={17} />
          {seen ? "已收入足迹" : "记入足迹"}
        </button>
        <button
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-4 text-sm font-bold shadow-card transition active:scale-[0.98] ${
            saved ? "border-terracotta bg-terracotta/12 text-ink" : "border-line bg-paper/58 text-ink"
          }`}
          onClick={() => toggleStorage("savedArtworks", saved, setSaved)}
          type="button"
        >
          <Heart className={saved ? "fill-terracotta text-terracotta" : ""} size={17} />
          {saved ? "已私藏" : "私藏"}
        </button>
      </div>

      <Link
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-line/80 bg-paper/58 px-5 text-sm font-bold text-ink shadow-card backdrop-blur transition active:scale-[0.98]"
        href="/map"
      >
        <MapPinned size={18} />
        回到路线继续看
      </Link>
    </div>
  );
}
