import { ArtworkActions } from "@/components/artworks/ArtworkActions";
import { RelatedWorks } from "@/components/artworks/RelatedWorks";
import { MobileShell } from "@/components/layout/MobileShell";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import { buildArtworkDeepIntro } from "@/lib/artworkNarrative";
import { artworks, getArtwork } from "@/lib/data";

type ArtworkPageProps = {
  params: { id: string };
};

type Artwork = (typeof artworks)[number];

export function generateStaticParams() {
  return artworks.map((artwork) => ({ id: artwork.id }));
}

function relatedFor(current: Artwork) {
  return artworks
    .filter((artwork) => artwork.id !== current.id)
    .filter((artwork) => artwork.category === current.category || artwork.routeIds.some((routeId) => current.routeIds.includes(routeId)))
    .slice(0, 2);
}

function locationText(artwork: Artwork) {
  return `${artwork.wing} · ${artwork.floor} · ${artwork.room}`;
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = getArtwork(params.id);

  if (!artwork) {
    return (
      <MobileShell withBottomNav>
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="eyebrow">Artwork Not Found</p>
          <h1 className="mt-4 text-3xl font-black">这件作品暂未入册</h1>
          <p className="mt-3 text-sm leading-7 text-muted">也许它还在下一版导览里。先回到地图，继续今天的观看线。</p>
          <PrimaryButton className="mt-8" href="/map">回到楼层图</PrimaryButton>
        </section>
      </MobileShell>
    );
  }

  const related = relatedFor(artwork);

  return (
    <MobileShell withBottomNav>
      <article className="pb-8">
        <section className="px-5 pt-5">
          <SectionCard className="border-gold/45 bg-[linear-gradient(145deg,rgba(216,198,154,0.3),rgba(251,247,239,0.78))] p-6">
            <p className="eyebrow">First Glance</p>
            <h2 className="mt-3 text-2xl font-black leading-tight">{artwork.oneLine}</h2>
          </SectionCard>
        </section>

        <section className="relative px-4 pt-4">
          <div className="paper-surface overflow-hidden rounded-[32px]">
            <ArtworkImage
              artworkId={artwork.id}
              className="h-[360px] w-full"
              src={artwork.image}
              title={artwork.titleZh}
            />
            <div className="p-5">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Tag>{artwork.category}</Tag>
                <Tag>推荐停留 {artwork.importance}/10</Tag>
              </div>
              <h1 className="text-3xl font-black leading-tight">{artwork.titleZh}</h1>
              <p className="mt-2 text-sm font-semibold text-muted">{artwork.titleEn}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{artwork.artist}</p>
              <p className="mt-2 text-xs font-bold leading-5 text-muted">{locationText(artwork)}</p>
            </div>
          </div>
        </section>

        <section className="space-y-6 px-5 py-7">
          <SectionCard className="p-5">
            <ArtworkActions artworkId={artwork.id} />
          </SectionCard>

          <SectionCard className="p-6">
            <p className="eyebrow">30 Seconds Guide</p>
            <h2 className="mt-3 text-xl font-black">把这件作品慢慢说清楚</h2>
            <p className="mt-4 text-base leading-8 text-muted">{buildArtworkDeepIntro(artwork)}</p>
          </SectionCard>

          <SectionCard className="p-6">
            <p className="eyebrow">Look Closer</p>
            <h2 className="mt-3 text-xl font-black">请多看这三处</h2>
            <div className="mt-5 space-y-3">
              {artwork.details.slice(0, 3).map((detail, index) => (
                <div className="grid grid-cols-[32px_1fr] gap-3 rounded-[18px] border border-line/80 bg-paper/52 p-3" key={detail}>
                  <span className="grid size-8 place-items-center rounded-full bg-gold-soft/45 text-xs font-black text-ink">
                    {index + 1}
                  </span>
                  <p className="self-center text-sm font-bold leading-6 text-muted">{detail}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard className="p-6">
            <p className="eyebrow">Behind The Work</p>
            <h2 className="mt-3 text-xl font-black">它从哪里来到这里</h2>
            <p className="mt-4 text-sm leading-8 text-muted">{artwork.story}</p>
          </SectionCard>

          {related.length ? (
            <section className="space-y-4">
              <div>
                <p className="eyebrow">Nearby Echoes</p>
                <h2 className="mt-2 text-xl font-black">可以顺路看这些</h2>
              </div>
              <RelatedWorks artworks={related} />
            </section>
          ) : null}
        </section>
      </article>
    </MobileShell>
  );
}
