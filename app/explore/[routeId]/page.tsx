import { notFound } from "next/navigation";
import { MapPinned, Route as RouteIcon } from "lucide-react";
import { ExploreClient } from "@/components/explore/ExploreClient";
import { MobileShell } from "@/components/layout/MobileShell";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import { artworks, routes } from "@/lib/data";

type RouteDetailPageProps = {
  params: {
    routeId: string;
  };
};

export function generateStaticParams() {
  return routes.map((route) => ({ routeId: route.id }));
}

export default function RouteDetailPage({ params }: RouteDetailPageProps) {
  const route = routes.find((item) => item.id === params.routeId);
  if (!route) notFound();

  const routeArtworks = route.artworkIds
    .map((id) => artworks.find((artwork) => artwork.id === id))
    .filter((artwork): artwork is (typeof artworks)[number] => Boolean(artwork));

  return (
    <MobileShell withBottomNav>
      <section className="space-y-5 px-5 pb-6 pt-8">
        <SectionCard className="overflow-hidden p-0">
          <div className="grid h-40 grid-cols-5 gap-2 p-3">
            {routeArtworks.slice(0, 5).map((artwork) => (
              <ArtworkImage
                artworkId={artwork.id}
                className="h-full rounded-[16px]"
                key={artwork.id}
                src={artwork.image}
                title={artwork.titleZh}
              />
            ))}
          </div>
          <div className="p-5">
            <p className="eyebrow">Route Notebook</p>
            <h1 className="mt-3 text-3xl font-black leading-tight">{route.title}</h1>
            <p className="mt-3 text-sm leading-7 text-muted">{route.subtitle}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Tag>{route.duration}</Tag>
              <Tag>{route.difficulty}</Tag>
              <Tag>{route.crowdLevel}</Tag>
              <Tag>{routeArtworks.length} 件作品</Tag>
            </div>
          </div>
        </SectionCard>

        <SectionCard className="p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-gold-soft/45 text-gold">
              <RouteIcon size={18} />
            </div>
            <div>
              <p className="eyebrow">How To Read</p>
              <h2 className="mt-1 text-xl font-black">路线导览逻辑</h2>
            </div>
          </div>
          <p className="text-sm leading-7 text-muted">{route.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {route.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </SectionCard>

        <SectionCard className="p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-gold-soft/45 text-gold">
              <MapPinned size={18} />
            </div>
            <div>
              <p className="eyebrow">Route Index</p>
              <h2 className="mt-1 text-xl font-black">路线藏品索引</h2>
            </div>
          </div>
          <div className="space-y-2">
            {routeArtworks.slice(0, 25).map((artwork, index) => (
              <div className="grid grid-cols-[30px_1fr] gap-3 rounded-[16px] border border-line/80 bg-paper/52 px-3 py-2" key={artwork.id}>
                <span className="grid size-7 place-items-center rounded-full bg-gold-soft/45 text-[11px] font-black text-ink">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-ink">{artwork.titleZh}</p>
                  <p className="mt-0.5 truncate text-[11px] font-bold text-muted">
                    {artwork.wing} · {artwork.floor} · {artwork.room}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <PrimaryButton href="#route-guide" className="mt-5" variant="secondary">
            从第一件开始听
          </PrimaryButton>
        </SectionCard>
      </section>

      <section id="route-guide">
        <ExploreClient artworks={artworks} initialRouteId={route.id} routes={routes} />
      </section>
    </MobileShell>
  );
}
