"use client";

import { Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

type ArtworkImageProps = {
  artworkId: string;
  title: string;
  src?: string;
  className?: string;
  label?: string;
  ratio?: "portrait" | "wide" | "square";
};

const palettes: Record<string, string> = {
  "mona-lisa": "from-[#cab37b] via-[#8f7751] to-[#2f2a22]",
  "winged-victory": "from-[#efe4d1] via-[#c9b58b] to-[#6f6b61]",
  "venus-de-milo": "from-[#f1e8dc] via-[#d8c9b7] to-[#a99b8c]",
  "napoleon-coronation": "from-[#d9b56b] via-[#9f5f49] to-[#33251e]",
  "liberty-leading": "from-[#d7c08a] via-[#a65f46] to-[#273239]",
  "medusa-raft": "from-[#d2b486] via-[#7b604a] to-[#24201b]",
  "dying-slave": "from-[#eee7db] via-[#b8aea0] to-[#6f665d]",
  "apollo-gallery": "from-[#f0d78d] via-[#b89b5e] to-[#5f432f]",
  "hammurabi-code": "from-[#c9bca9] via-[#5b5148] to-[#171513]",
  "virgin-rocks": "from-[#d8c69a] via-[#7b806f] to-[#242820]"
};

function isLocalArtwork(src?: string) {
  return Boolean(src?.startsWith("/images/artworks/"));
}

function isRemoteArtwork(src?: string) {
  return Boolean(src?.startsWith("https://") || src?.startsWith("http://"));
}

function displaySrc(src?: string) {
  if (!src) return src;
  if (src.includes("commons.wikimedia.org/wiki/Special:FilePath/") && !src.includes("?")) {
    return `${src}?width=900`;
  }
  return src;
}

const ratios = {
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/10]",
  square: "aspect-square"
};

export function ArtworkImage({ artworkId, title, src, className = "", label, ratio = "portrait" }: ArtworkImageProps) {
  const [failed, setFailed] = useState(false);
  const ratioClass = ratios[ratio];

  useEffect(() => {
    setFailed(false);

    if (!(isLocalArtwork(src) || isRemoteArtwork(src))) return undefined;

    let active = true;
    const probe = new window.Image();
    const timeout = window.setTimeout(() => {
      if (active) setFailed(true);
    }, 4500);

    probe.onload = () => {
      window.clearTimeout(timeout);
      if (active && probe.naturalWidth === 0) setFailed(true);
    };
    probe.onerror = () => {
      window.clearTimeout(timeout);
      if (active) setFailed(true);
    };
    probe.src = displaySrc(src) ?? "";

    return () => {
      active = false;
      window.clearTimeout(timeout);
    };
  }, [src]);

  if (!failed && (isLocalArtwork(src) || isRemoteArtwork(src))) {
    return (
      <img
        alt={title}
        className={`${ratioClass} bg-paper-deep object-cover ${className}`}
        onError={() => setFailed(true)}
        src={displaySrc(src)}
      />
    );
  }

  const palette = palettes[artworkId] ?? "from-[#efe4d1] via-[#d8c69a] to-[#756a5d]";
  const displayLabel = label ?? artworkId.split("-").slice(0, 2).join(" ");

  return (
    <div
      aria-label={title}
      className={`relative overflow-hidden bg-gradient-to-br ${ratioClass} ${palette} ${className}`}
      role="img"
    >
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_24%_22%,rgba(255,255,255,.58),transparent_7rem),radial-gradient(circle_at_82%_76%,rgba(255,255,255,.2),transparent_8rem),repeating-linear-gradient(90deg,rgba(255,255,255,.08)_0_1px,transparent_1px_7px)]" />
      <div className="absolute -left-8 top-8 h-32 w-32 rounded-full border border-paper/35" />
      <div className="absolute right-5 top-5 h-20 w-px rotate-12 bg-paper/40" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-paper/78">Louvre Plate</p>
          <p className="mt-1 line-clamp-2 text-sm font-black leading-5 text-paper">{title}</p>
        </div>
        <div className="grid size-9 shrink-0 place-items-center rounded-full border border-paper/45 bg-paper/18 text-paper backdrop-blur">
          <ImageIcon size={16} />
        </div>
      </div>
      <span className="absolute left-5 top-5 rounded-full border border-paper/35 bg-paper/16 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-paper backdrop-blur">
        {displayLabel}
      </span>
    </div>
  );
}
