import { MobileShell } from "@/components/layout/MobileShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageBlock } from "@/components/ui/PageBlock";
import { RouteCard } from "@/components/ui/RouteCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { artworks, routes } from "@/lib/data";

function routeImages(ids: string[]) {
  return ids
    .slice(0, 3)
    .map((id) => artworks.find((artwork) => artwork.id === id))
    .filter((artwork): artwork is (typeof artworks)[number] => Boolean(artwork))
    .map((artwork) => ({ id: artwork.id, src: artwork.image, alt: artwork.titleZh }));
}

export default function RoutesPage() {
  return (
    <MobileShell withBottomNav>
      <PageHeader backHref="/louvre" title="观看线" />
      <PageBlock>
        <SectionTitle
          eyebrow="Recommended Routes"
          title="推荐观看路线"
          copy="每条路线围绕不同主题串联重点藏品，帮助你在有限时间内建立清晰的观看结构。"
        />

        <div className="space-y-5">
          {routes.map((route, index) => (
            <RouteCard
              featured={index === 0}
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
      </PageBlock>
    </MobileShell>
  );
}
