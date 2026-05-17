"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers, Route } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { RouteCard } from "@/components/ui/RouteCard";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import { artworks, routes } from "@/lib/data";
import { louvreMapImages } from "@/lib/louvreMaps";

const floorZones = [
  { floor: "Niveau 2", zones: ["北方绘画", "法国绘画", "安静小画"] },
  { floor: "Niveau 1", zones: ["德农馆绘画", "阿波罗长廊", "拿破仑三世套房"] },
  { floor: "Niveau 0", zones: ["希腊罗马雕塑", "近东古物", "法国雕塑"] },
  { floor: "Niveau -1", zones: ["埃及入口", "马利庭院", "服务动线"] }
];

function routeImages(ids: string[]) {
  return ids
    .slice(0, 3)
    .map((id) => artworks.find((artwork) => artwork.id === id))
    .filter((artwork): artwork is (typeof artworks)[number] => Boolean(artwork))
    .map((artwork) => ({ id: artwork.id, src: artwork.image, alt: artwork.titleZh }));
}

export default function ExplorePage() {
  const [routesExpanded, setRoutesExpanded] = useState(false);
  const [mapsExpanded, setMapsExpanded] = useState(false);
  const visibleRoutes = routesExpanded ? routes : routes.slice(0, 2);
  const visibleFloors = mapsExpanded ? floorZones : floorZones.slice(0, 2);

  return (
    <MobileShell withBottomNav>
      <section className="space-y-6 px-5 pb-5 pt-8">
        <section>
          <p className="eyebrow">Explore</p>
          <h1 className="mt-3 text-3xl font-black leading-tight">导览路线与楼层图</h1>
          <p className="mt-3 text-sm leading-7 text-muted">
            先选择主题观看路线，也可以打开分层地图，理解展厅、楼层与馆翼之间的关系。
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Viewing Routes</p>
              <h2 className="mt-2 text-2xl font-black leading-tight">主题导览路线</h2>
            </div>
            <Route className="text-gold" size={22} />
          </div>
          <div className="space-y-5">
            {visibleRoutes.map((route) => (
              <RouteCard
                key={route.id}
                route={{
                  title: route.title,
                  duration: route.duration,
                  artworkCount: route.artworkIds.length,
                  crowdLevel: route.crowdLevel,
                  targetUser: route.targetUser,
                  tags: route.tags,
                  href: `/explore/${route.id}`,
                  cta: "沿这条线看",
                  coverImages: routeImages(route.artworkIds)
                }}
              />
            ))}
          </div>
          <button
            className="w-full rounded-full border border-line bg-paper/70 px-4 py-3 text-sm font-black text-ink shadow-card transition hover:-translate-y-0.5 active:scale-[0.98]"
            onClick={() => setRoutesExpanded((current) => !current)}
            type="button"
          >
            {routesExpanded ? "先收起一点" : `再看看其余 ${routes.length - 2} 条`}
          </button>
        </section>

        <SectionCard className="p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-gold-soft/45 text-gold">
              <Layers size={19} />
            </div>
            <div>
              <p className="eyebrow">Floor Atlas</p>
              <h2 className="mt-1 text-xl font-black">卢浮宫分层地图</h2>
            </div>
          </div>
          <div className="space-y-3">
            {visibleFloors.map((floor) => (
              <Link
                className="block overflow-hidden rounded-[22px] border border-line/80 bg-paper/48 p-3 transition hover:-translate-y-0.5 active:scale-[0.99]"
                href={`/map?floor=${encodeURIComponent(floor.floor)}`}
                key={floor.floor}
              >
                <div className="relative h-28 overflow-hidden rounded-[16px] border border-line/70 bg-paper-deep">
                  <img
                    alt={`${floor.floor} 卢浮宫真实楼层地图`}
                    className="h-full w-full object-cover"
                    src={louvreMapImages[floor.floor as keyof typeof louvreMapImages]}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,32,27,0.04),rgba(36,32,27,0.42))]" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-ink/78 px-3 py-1.5 text-xs font-black text-paper backdrop-blur">
                    {floor.floor}
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-paper/88 px-3 py-1.5 text-[11px] font-black text-ink shadow-card">
                    打开这一层
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {floor.zones.map((zone) => (
                    <Tag key={zone}>{zone}</Tag>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <button
            className="mt-4 w-full rounded-full border border-line bg-paper/70 px-4 py-3 text-sm font-black text-ink shadow-card transition hover:-translate-y-0.5 active:scale-[0.98]"
            onClick={() => setMapsExpanded((current) => !current)}
            type="button"
          >
            {mapsExpanded ? "收起楼层" : `再展开 ${floorZones.length - 2} 个楼层`}
          </button>
        </SectionCard>
      </section>
    </MobileShell>
  );
}
