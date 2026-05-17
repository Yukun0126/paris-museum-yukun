"use client";

import Link from "next/link";
import { ArrowRight, Headphones, MessageCircle, Pause, Route as RouteIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import { buildArtworkDeepIntro } from "@/lib/artworkNarrative";
import type { Artwork, GuideRoute } from "@/lib/types";

type ExploreClientProps = {
  artworks: Artwork[];
  routes: GuideRoute[];
  initialRouteId?: string;
};

export function ExploreClient({ artworks, routes, initialRouteId }: ExploreClientProps) {
  const route = useMemo(
    () => routes.find((item) => item.id === initialRouteId) ?? routes[0],
    [initialRouteId, routes]
  );
  const routeArtworks = useMemo(
    () =>
      route.artworkIds
        .map((id) => artworks.find((artwork) => artwork.id === id))
        .filter((artwork): artwork is Artwork => Boolean(artwork)),
    [artworks, route.artworkIds]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [question, setQuestion] = useState("");

  const current = routeArtworks[currentIndex] ?? routeArtworks[0];
  const nextIndex = currentIndex < routeArtworks.length - 1 ? currentIndex + 1 : 0;
  const progress = Math.round(((currentIndex + 1) / routeArtworks.length) * 100);

  if (!current) return null;

  return (
    <div className="space-y-5 px-5 py-7">
      <section>
        <p className="eyebrow">Now Viewing</p>
        <h1 className="mt-2 text-3xl font-black leading-tight">{route.title}</h1>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{route.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Tag>{currentIndex + 1}/{routeArtworks.length}</Tag>
          <Tag>{route.duration}</Tag>
          <Tag>{route.difficulty}</Tag>
        </div>
      </section>

      <SectionCard className="overflow-hidden p-0">
        <ArtworkImage
          artworkId={current.id}
          className="h-[260px] w-full"
          src={current.image}
          title={current.titleZh}
        />
        <div className="p-4">
          <div className="mb-3 h-2 rounded-full bg-paper-deep">
            <div className="h-2 rounded-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <p className="eyebrow">Stop {String(currentIndex + 1).padStart(2, "0")}</p>
          <h2 className="mt-2 text-2xl font-black leading-tight">{current.titleZh}</h2>
          <p className="mt-2 text-sm font-semibold text-muted">{current.titleEn}</p>
          <p className="mt-2 text-xs font-bold leading-5 text-muted">
            {current.artist} · {current.wing} · {current.floor} · {current.room}
          </p>
        </div>
      </SectionCard>

      <SectionCard className="p-5">
        <p className="eyebrow">Quick Read</p>
        <h3 className="mt-2 text-lg font-black">作品速读</h3>
        <p className="mt-3 text-base font-black leading-7 text-ink">{current.oneLine}</p>
        <p className="mt-3 line-clamp-5 text-sm leading-7 text-muted">{buildArtworkDeepIntro(current)}</p>
      </SectionCard>

      <SectionCard className="p-5">
        <p className="eyebrow">Connections</p>
        <h3 className="mt-2 text-lg font-black">路线中的关联线索</h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          这一站属于「{current.category}」线索。把它和同路线里的作品放在一起看，作者、风格、历史背景和观看姿态就不再是零散知识，而像展厅里彼此照应的回声。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {current.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </SectionCard>

      <SectionCard className="p-5">
        <div className="flex gap-3">
          <button
            className={`inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold shadow-button transition active:scale-[0.98] ${
              playing ? "bg-gold text-ink" : "bg-ink text-paper"
            }`}
            onClick={() => setPlaying((value) => !value)}
            type="button"
          >
            {playing ? <Pause size={18} /> : <Headphones size={18} />}
            {playing ? "正在讲这一段" : "听这一段"}
          </button>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-paper/70 px-5 text-sm font-bold text-ink shadow-card active:scale-[0.98]"
            href={`/artworks/${current.id}`}
          >
            打开图录页
          </Link>
        </div>
      </SectionCard>

      <SectionCard className="p-5">
        <div className="mb-4 flex items-center gap-2">
          <MessageCircle className="text-gold" size={18} />
          <h3 className="text-base font-black">导览追问</h3>
        </div>
        <input
          className="w-full rounded-full border border-line bg-paper/70 px-4 py-3 text-sm font-semibold outline-none transition focus:border-gold"
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="比如：为什么它值得停下来？"
          value={question}
        />
        <p className="mt-3 text-xs leading-5 text-muted">
          当前为模拟追问入口，后续可接入多轮中文讲解。
        </p>
      </SectionCard>

      <div className="sticky bottom-[calc(6.6rem+env(safe-area-inset-bottom))] z-20 rounded-[26px] border border-line/80 bg-paper/84 p-3 shadow-soft backdrop-blur-xl">
        <button
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-paper shadow-button transition active:scale-[0.98]"
          onClick={() => {
            setCurrentIndex(nextIndex);
            setPlaying(false);
          }}
          type="button"
        >
          <RouteIcon size={18} />
          去下一件：{routeArtworks[nextIndex]?.titleZh}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
