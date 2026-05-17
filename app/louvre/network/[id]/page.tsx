import { notFound } from "next/navigation";
import { BookOpen, Network, Sparkles } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import { artworks } from "@/lib/data";
import { getStyleNetworkGroup, styleNetworkGroups } from "@/lib/styleNetwork";

type StyleNetworkDetailPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return styleNetworkGroups.map((group) => ({ id: group.id }));
}

export default function StyleNetworkDetailPage({ params }: StyleNetworkDetailPageProps) {
  const group = getStyleNetworkGroup(params.id);
  if (!group) notFound();

  const groupArtworks = group.ids
    .map((id) => artworks.find((artwork) => artwork.id === id))
    .filter((artwork): artwork is (typeof artworks)[number] => Boolean(artwork));

  return (
    <MobileShell withBottomNav>
      <section className="space-y-5 px-5 pb-8 pt-8">
        <SectionCard className="overflow-hidden p-0">
          <div className="grid h-44 grid-cols-3 gap-2 p-3">
            {groupArtworks.slice(0, 3).map((artwork) => (
              <ArtworkImage
                artworkId={artwork.id}
                className="h-full rounded-[18px]"
                key={artwork.id}
                ratio="portrait"
                src={artwork.image}
                title={artwork.titleZh}
              />
            ))}
          </div>
          <div className="p-5">
            <p className="eyebrow">Style Network</p>
            <h1 className="mt-3 text-3xl font-black leading-tight">{group.title}</h1>
            <p className="mt-3 text-sm font-bold leading-6 text-gold">{group.period}</p>
            <p className="mt-4 text-sm leading-7 text-muted">{group.thesis}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.links.map((link) => (
                <Tag key={link}>{link}</Tag>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard className="border-gold/40 bg-[linear-gradient(145deg,rgba(216,198,154,0.26),rgba(251,247,239,0.78))] p-5">
          <div className="mb-3 flex items-center gap-2">
            <Network className="text-gold" size={18} />
            <p className="eyebrow">Curatorial Note</p>
          </div>
          <h2 className="text-xl font-black leading-tight">专题导览说明</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{group.summary}</p>
        </SectionCard>

        <section className="space-y-3">
          <div>
            <p className="eyebrow">Historical Thread</p>
            <h2 className="mt-2 text-2xl font-black leading-tight">历史与风格脉络</h2>
          </div>
          {group.sections.map((section, index) => (
            <SectionCard className="p-5" key={section.title}>
              <div className="mb-3 flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold-soft/45 text-xs font-black text-ink">
                  {index + 1}
                </span>
                <h3 className="text-base font-black leading-tight">{section.title}</h3>
              </div>
              <p className="text-sm leading-7 text-muted">{section.body}</p>
            </SectionCard>
          ))}
        </section>

        <SectionCard className="p-5">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="text-gold" size={18} />
            <h2 className="text-xl font-black">观看时可以追问</h2>
          </div>
          <div className="space-y-2">
            {group.questions.map((question) => (
              <div className="rounded-[18px] border border-line/80 bg-paper/52 px-4 py-3 text-sm font-bold leading-6 text-muted" key={question}>
                {question}
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="space-y-3">
          <div>
            <p className="eyebrow">Related Works</p>
            <h2 className="mt-2 text-2xl font-black leading-tight">专题相关藏品</h2>
          </div>
          <div className="space-y-3">
            {groupArtworks.map((artwork) => (
              <SectionCard as="a" className="block p-3" href={`/artworks/${artwork.id}`} key={artwork.id}>
                <div className="grid grid-cols-[86px_1fr] gap-3">
                  <ArtworkImage
                    artworkId={artwork.id}
                    className="h-24 rounded-[16px]"
                    ratio="portrait"
                    src={artwork.image}
                    title={artwork.titleZh}
                  />
                  <div className="min-w-0 py-1">
                    <Tag>{artwork.category}</Tag>
                    <h3 className="mt-2 line-clamp-1 text-base font-black">{artwork.titleZh}</h3>
                    <p className="mt-1 line-clamp-1 text-xs font-bold text-muted">{artwork.titleEn}</p>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted">{artwork.oneLine}</p>
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>
        </section>

        <SectionCard className="p-5">
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="text-gold" size={18} />
            <h2 className="text-xl font-black">返回观前手册</h2>
          </div>
          <p className="mb-5 text-sm leading-7 text-muted">
            你可以回到卢浮宫观前手册，继续查看其他艺术史关联专题。
          </p>
          <PrimaryButton href="/louvre" variant="secondary">
            返回藏品风格与历史关联
          </PrimaryButton>
        </SectionCard>
      </section>
    </MobileShell>
  );
}
