"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { Tag } from "@/components/ui/Tag";
import type { StyleNetworkGroup } from "@/lib/styleNetwork";
import type { Artwork } from "@/lib/types";

type StyleNetworkListProps = {
  groups: StyleNetworkGroup[];
  artworks: Artwork[];
};

export function StyleNetworkList({ groups, artworks }: StyleNetworkListProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleGroups = expanded ? groups : groups.slice(0, 2);

  return (
    <div className="space-y-3">
      {visibleGroups.map((group) => (
        <Link
          className="block rounded-[20px] border border-line/80 bg-paper/46 p-3 transition hover:-translate-y-0.5 active:scale-[0.99]"
          href={`/louvre/network/${group.id}`}
          key={group.id}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-gold">{group.period}</p>
              <h3 className="mt-1 text-base font-black leading-tight text-ink">{group.title}</h3>
            </div>
            <Tag>{group.ids.length} 件</Tag>
          </div>
          <p className="mt-2 line-clamp-3 text-xs leading-5 text-muted">{group.thesis}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {group.links.slice(0, 4).map((link) => (
              <Tag key={link}>{link}</Tag>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {group.ids.slice(0, 4).map((id) => {
              const artwork = artworks.find((item) => item.id === id);
              if (!artwork) return null;
              return (
                <div className="min-w-0 rounded-[14px] border border-line/80 bg-paper/70 p-1.5" key={id}>
                  <ArtworkImage artworkId={id} className="h-14 rounded-[10px]" src={artwork.image} title={artwork.titleZh} />
                  <p className="mt-1 line-clamp-2 text-[10px] font-black leading-3">{artwork.titleZh}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-3 text-xs font-black text-gold">查看专题详情</div>
        </Link>
      ))}

      <button
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-line/80 bg-paper/64 px-4 text-sm font-bold text-ink shadow-card transition active:scale-[0.98]"
        onClick={() => setExpanded((value) => !value)}
        type="button"
      >
        {expanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
        {expanded ? "收起关联专题" : `展开其余 ${Math.max(groups.length - 2, 0)} 组专题`}
      </button>
    </div>
  );
}
