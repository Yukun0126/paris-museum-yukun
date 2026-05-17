import { MapPinned } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageBlock } from "@/components/ui/PageBlock";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import { artworks } from "@/lib/data";

const classicSteps = [
  "winged-victory",
  "mona-lisa",
  "napoleon-coronation",
  "liberty-leading",
  "apollo-gallery",
  "dying-slave",
  "venus-de-milo",
  "hammurabi-code"
];

const routeMeta = [
  "约 2.5-3 小时",
  "8 个关键停留",
  "步行强度适中",
  "热门展厅较多"
];

function formatWing(wing: string) {
  if (wing.startsWith("Denon")) return "Denon";
  if (wing.startsWith("Sully")) return "Sully";
  if (wing.startsWith("Richelieu")) return "Richelieu";
  return wing;
}

export default function ClassicRoutePage() {
  const steps = classicSteps
    .map((id) => artworks.find((artwork) => artwork.id === id))
    .filter((artwork): artwork is (typeof artworks)[number] => Boolean(artwork));

  return (
    <MobileShell withBottomNav>
      <PageHeader backHref="/routes" title="经典观看线" />
      <PageBlock className="pb-56">
        <SectionCard className="overflow-hidden p-0">
          <div className="relative h-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_12%,rgba(255,255,255,0.86),transparent_10rem),radial-gradient(circle_at_80%_68%,rgba(216,198,154,0.42),transparent_11rem),linear-gradient(135deg,rgba(251,247,239,0.8),rgba(231,218,200,0.72))]" />
            <div className="absolute inset-5 grid grid-cols-4 gap-2">
              {steps.slice(0, 4).map((artwork) => (
                <ArtworkImage
                  artworkId={artwork.id}
                  className="h-full rounded-[18px] shadow-card"
                  key={artwork.id}
                  src={artwork.image}
                  title={artwork.titleZh}
                />
              ))}
            </div>
          </div>
          <div className="p-6">
            <p className="eyebrow">Classic Route</p>
            <h1 className="mt-3 text-3xl font-black leading-tight">初见卢浮宫：光与石的序章</h1>
            <p className="mt-3 text-sm leading-7 text-muted">第一次来，不求看完，只求真正记住这 8 个瞬间。</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {routeMeta.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">
              类型：绘画 / 雕塑 / 古文明 / 装饰艺术
            </p>
          </div>
        </SectionCard>

        <section className="space-y-4">
          <div>
            <p className="eyebrow">Route Index</p>
            <h2 className="mt-2 text-xl font-black">路线顺序</h2>
          </div>

          <div className="space-y-3">
            {steps.map((artwork, index) => (
              <SectionCard className="grid grid-cols-[44px_1fr] items-center gap-4 p-3" key={artwork.id}>
                <div className="grid size-11 place-items-center rounded-full border border-gold/50 bg-gold-soft/32 text-sm font-black text-ink">
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-black">{artwork.titleZh}</h3>
                  <p className="mt-1 truncate text-xs font-semibold text-muted">
                    {formatWing(artwork.wing)} · {artwork.floor} · {artwork.room}
                  </p>
                </div>
              </SectionCard>
            ))}
          </div>
        </section>
      </PageBlock>

      <div className="fixed inset-x-0 bottom-[calc(5.9rem+env(safe-area-inset-bottom))] z-30 mx-auto w-full max-w-[430px] border-t border-line/70 bg-paper/78 px-5 pb-4 pt-4 shadow-soft backdrop-blur-xl">
        <PrimaryButton href="/map" className="gap-2">
          <MapPinned size={18} />
          打开楼层图
        </PrimaryButton>
      </div>
    </MobileShell>
  );
}
