import { ArrowRight, Landmark, Route } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArtworkCard } from "@/components/ui/ArtworkCard";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { PageBlock } from "@/components/ui/PageBlock";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionCard } from "@/components/ui/SectionCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { artworks } from "@/lib/data";

const masterpieceIds = ["mona-lisa", "winged-victory", "venus-de-milo"];

export default function PreviewPage() {
  const masterpieces = masterpieceIds
    .map((id) => artworks.find((artwork) => artwork.id === id))
    .filter((artwork): artwork is (typeof artworks)[number] => Boolean(artwork));

  return (
    <MobileShell withBottomNav>
      <PageHeader backHref="/louvre" title="游前小册" />
      <PageBlock className="pb-10">
        <SectionTitle
          eyebrow="Before Visit"
          title="卢浮宫观前导览"
          copy="进入展厅之前，先建立基本的历史、空间与观看框架。"
        />

        <div className="space-y-5">
          <SectionCard className="p-6">
            <div className="flex h-24 items-end overflow-hidden rounded-[20px] border border-line/80 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.86),transparent_7rem),linear-gradient(135deg,rgba(216,198,154,0.42),rgba(251,247,239,0.62))] p-4">
              <Landmark className="text-gold" size={42} />
            </div>
            <h2 className="mt-6 text-2xl font-black leading-tight">从王宫到博物馆</h2>
            <p className="mt-3 text-sm leading-7 text-muted">所以你看到的不只是作品，还有权力、收藏、战争和审美如何层层堆叠。</p>
          </SectionCard>

          <SectionCard className="p-6">
            <div className="grid h-24 grid-cols-3 gap-2 rounded-[20px] border border-line/80 bg-paper/45 p-2">
              {artworks.slice(3, 6).map((artwork) => (
                <ArtworkImage
                  artworkId={artwork.id}
                  className="h-full rounded-[16px]"
                  key={artwork.id}
                  src={artwork.image}
                  title={artwork.titleZh}
                />
              ))}
            </div>
            <h2 className="mt-6 text-2xl font-black leading-tight">有限时间内的观看策略</h2>
            <p className="mt-3 text-sm leading-7 text-muted">第一次来，只要真正看懂几件作品，就已经很赚。</p>
          </SectionCard>

          <SectionCard className="p-6">
            <p className="eyebrow">Three Icons</p>
            <h2 className="mt-3 text-2xl font-black leading-tight">三件代表性藏品</h2>
            <div className="mt-5 space-y-4">
              {masterpieces.map((artwork, index) => (
                <ArtworkCard artwork={artwork} index={index} key={artwork.id} />
              ))}
            </div>
          </SectionCard>

          <SectionCard className="p-6">
            <div className="flex h-24 items-center justify-center rounded-[20px] border border-line/80 bg-[linear-gradient(135deg,rgba(36,32,27,0.94),rgba(123,96,74,0.82))] text-paper">
              <Route className="text-gold-soft" size={44} />
            </div>
            <h2 className="mt-6 text-2xl font-black leading-tight">选择适合的观看路线</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              时间、兴趣和体力不同，卢浮宫也会变成不同的样子。
            </p>
            <PrimaryButton href="/preferences" className="mt-6 gap-2">
              选今天的节奏
              <ArrowRight size={18} />
            </PrimaryButton>
          </SectionCard>
        </div>
      </PageBlock>
    </MobileShell>
  );
}
