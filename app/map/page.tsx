"use client";

import { Info, Maximize2, Sparkles } from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MobileShell } from "@/components/layout/MobileShell";
import { CoreCollectionList } from "@/components/louvre/CoreCollectionList";
import { FloorSwitcher } from "@/components/map/FloorSwitcher";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import { artworks } from "@/lib/data";
import { louvreMapImages, type LouvreMapFloor } from "@/lib/louvreMaps";

type Floor = LouvreMapFloor;

const floors: Floor[] = ["Niveau 2", "Niveau 1", "Niveau 0", "Niveau -1", "Niveau -2"];

function isFloor(value: string | null): value is Floor {
  return Boolean(value && floors.includes(value as Floor));
}

const floorNotes: Record<Floor, { theme: string; zones: string[]; tips: string }> = {
  "Niveau 2": {
    theme: "北方绘画，适合慢慢抬头看",
    zones: ["Richelieu 北方绘画", "Sully 绘画区", "高层展厅动线"],
    tips: "这里更适合补看荷兰、法国与欧洲北方绘画。人流相对松一些，留给你安静读画的时间。"
  },
  "Niveau 1": {
    theme: "名作最密集的一层",
    zones: ["Denon 700-712", "Mona Lisa 711", "阿波罗长廊", "Richelieu 装饰艺术"],
    tips: "蒙娜丽莎、自由引导人民、拿破仑加冕和阿波罗长廊都在这里。它很精彩，也很拥挤，适合提前知道自己要停在哪里。"
  },
  "Niveau 0": {
    theme: "雕塑、石碑和古文明的低声部",
    zones: ["Denon 403", "Sully 344-345", "Richelieu 近东古物"],
    tips: "米洛的维纳斯、垂死的奴隶和近东古物在这一层。这里适合把身体、石头、文字和权力放在一起看。"
  },
  "Niveau -1": {
    theme: "入口、庭院与转场",
    zones: ["马利庭院", "地下连接", "服务动线"],
    tips: "这一层像博物馆的呼吸处：庭院、入口、楼梯和换区路径，决定你怎样进入下一段观看。"
  },
  "Niveau -2": {
    theme: "地下入口与换区动线",
    zones: ["玻璃金字塔入口", "地下连接", "服务区域"],
    tips: "它主要帮助你理解入馆、换区和服务动线。若想看作品，建议回到 Niveau 1 或 Niveau 0。"
  }
};

function MapPageContent() {
  const searchParams = useSearchParams();
  const requestedFloor = searchParams.get("floor");
  const mapScrollerRef = useRef<HTMLDivElement>(null);
  const [activeFloor, setActiveFloor] = useState<Floor>(() => (isFloor(requestedFloor) ? requestedFloor : "Niveau 1"));
  const current = floorNotes[activeFloor];
  const floorArtworks = artworks.filter((artwork) => artwork.floor === activeFloor);

  useEffect(() => {
    if (isFloor(requestedFloor)) {
      setActiveFloor(requestedFloor);
    }
  }, [requestedFloor]);

  useEffect(() => {
    const scroller = mapScrollerRef.current;
    if (!scroller) return;

    const centerMap = () => {
      scroller.scrollLeft = Math.max(0, (scroller.scrollWidth - scroller.clientWidth) / 2);
    };

    const frame = window.requestAnimationFrame(centerMap);
    return () => window.cancelAnimationFrame(frame);
  }, [activeFloor]);

  return (
    <MobileShell withBottomNav>
      <section className="space-y-5 px-5 pb-8 pt-8">
        <header className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">Floor Atlas</p>
              <h1 className="mt-2 text-3xl font-black leading-tight">卢浮宫分层地图</h1>
            </div>
            <Tag>{activeFloor}</Tag>
          </div>
          <div className="flex gap-2 rounded-[22px] border border-line/80 bg-paper/55 p-3 text-xs font-bold leading-5 text-muted backdrop-blur">
            <Info className="mt-0.5 shrink-0 text-gold" size={16} />
            这是一张区域级楼层图：帮你先理解馆翼和展厅关系。现场移动仍以馆内指示牌为准。
          </div>
        </header>

        <FloorSwitcher activeFloor={activeFloor} floors={floors} onChange={setActiveFloor} />

        <SectionCard className="overflow-hidden p-0">
          <div className="border-b border-line/80 p-5">
            <p className="eyebrow">Current Floor</p>
            <h2 className="mt-2 text-2xl font-black leading-tight">{current.theme}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{current.tips}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {current.zones.map((zone) => (
                <Tag key={zone}>{zone}</Tag>
              ))}
            </div>
          </div>

          <div className="relative bg-[#e8e7e5] p-3">
            <div className="mb-3 flex items-center gap-2 px-1 text-xs font-bold text-muted">
              <Maximize2 className="text-gold" size={15} />
              左右滑动，看看这一层的完整轮廓
            </div>
            <div ref={mapScrollerRef} className="overflow-x-auto rounded-[24px] border border-line/80 bg-paper shadow-card">
              <img
                alt={`${activeFloor} 卢浮宫真实楼层地图细节`}
                className="h-[200px] min-w-[640px] object-contain"
                onLoad={() => {
                  const scroller = mapScrollerRef.current;
                  if (!scroller) return;
                  scroller.scrollLeft = Math.max(0, (scroller.scrollWidth - scroller.clientWidth) / 2);
                }}
                src={louvreMapImages[activeFloor]}
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard className="p-5">
          <div className="mb-5 flex items-start gap-3">
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-soft/45 text-gold">
              <Sparkles size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="eyebrow">Works On This Floor</p>
              <h2 className="mt-2 text-2xl font-black leading-tight">{activeFloor} 重点藏品</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                先露出少量重点作品，像地图边上的展签。需要时再展开，避免还没进馆就被信息淹没。
              </p>
            </div>
          </div>
          {floorArtworks.length ? (
            <CoreCollectionList artworks={floorArtworks} maxLabel="继续展开或收起这一层。" />
          ) : (
            <div className="rounded-[22px] border border-line/80 bg-paper/52 p-5 text-sm font-bold leading-7 text-muted">
              这一层暂时没有标注重点作品。可以切到 Niveau 1 或 Niveau 0，那里更接近经典观看线。
            </div>
          )}
        </SectionCard>
      </section>
    </MobileShell>
  );
}

export default function MapPage() {
  return (
    <Suspense
      fallback={
        <MobileShell withBottomNav>
          <section className="px-5 py-8">
            <SectionCard className="p-5">
              <p className="eyebrow">Floor Atlas</p>
              <h1 className="mt-2 text-3xl font-black leading-tight">卢浮宫分层地图</h1>
              <p className="mt-3 text-sm leading-7 text-muted">正在整理楼层图...</p>
            </SectionCard>
          </section>
        </MobileShell>
      }
    >
      <MapPageContent />
    </Suspense>
  );
}
