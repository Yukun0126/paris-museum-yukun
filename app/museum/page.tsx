import Link from "next/link";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { PageBlock } from "@/components/ui/PageBlock";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";

const parisMuseums = [
  {
    name: "卢浮宫博物馆",
    en: "Musée du Louvre",
    area: "巴黎 1 区 · 塞纳河右岸",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Louvre_Museum_Wikimedia_Commons.jpg?width=900",
    href: "/louvre",
    active: true,
    meta: ["25 件名作", "5 条观看线", "现在可进入"]
  },
  {
    name: "蓬皮杜艺术中心",
    en: "Centre Pompidou",
    area: "巴黎 4 区 · 玛黑附近",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pompidou_Centre.jpg?width=900",
    href: "/louvre",
    active: false,
    meta: ["现代艺术", "彩色管线", "建筑会说话"]
  },
  {
    name: "奥赛博物馆",
    en: "Musée d'Orsay",
    area: "巴黎 7 区 · 塞纳河左岸",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mus%C3%A9e_d%27Orsay%2C_Paris_7th_001.JPG?width=900",
    href: "/louvre",
    active: false,
    meta: ["印象派", "旧火车站", "光线很会跑"]
  },
  {
    name: "橘园美术馆",
    en: "Musée de l'Orangerie",
    area: "巴黎 1 区 · 杜乐丽花园",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mus%C3%A9e_de_l%E2%80%99Orangerie_exterior.JPG?width=900",
    href: "/louvre",
    active: false,
    meta: ["莫奈睡莲", "安静小馆", "适合慢看"]
  },
  {
    name: "罗丹博物馆",
    en: "Musée Rodin",
    area: "巴黎 7 区 · 荣军院附近",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Musee_Rodin.jpg?width=900",
    href: "/louvre",
    active: false,
    meta: ["雕塑花园", "罗丹手稿", "身体与泥土"]
  },
  {
    name: "荣军院",
    en: "Les Invalides",
    area: "巴黎 7 区 · 拿破仑墓",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paris_-_Les_invalides_-_Le_D%C3%B4me_-_138.jpg?width=900",
    href: "/louvre",
    active: false,
    meta: ["帝国记忆", "金色圆顶", "法兰西侧影"]
  },
  {
    name: "吉美亚洲艺术博物馆",
    en: "Musée Guimet",
    area: "巴黎 16 区 · 亚洲艺术",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mus%C3%A9e_Guimet_%28520%29.jpg?width=900",
    href: "/louvre",
    active: false,
    meta: ["亚洲艺术", "佛教造像", "另一条文明线"]
  }
];

function MuseumTile({ museum }: { museum: (typeof parisMuseums)[number] }) {
  const content = (
    <>
      <div className="relative h-36 overflow-hidden rounded-[20px] border border-line/80 bg-paper-deep">
        <img alt={museum.name} className="h-full w-full object-cover" src={museum.image} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,32,27,0.05),rgba(36,32,27,0.72))]" />
        <div className="absolute left-3 top-3">
          {museum.active ? <Tag className="border-gold/60 bg-paper/76 text-ink">今日可逛</Tag> : <Tag className="border-paper/45 bg-paper/70 text-muted">即将开放</Tag>}
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-paper">
          <p className="text-[10px] font-black uppercase tracking-[0.13em] text-paper/78">{museum.en}</p>
          <h2 className="mt-1 text-lg font-black leading-tight">{museum.name}</h2>
        </div>
      </div>

      <div className="mt-2.5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-bold text-muted">{museum.area}</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {museum.meta.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
        <span
          className={`grid size-9 shrink-0 place-items-center rounded-full shadow-card ${
            museum.active ? "bg-ink text-paper" : "border border-line bg-paper/60 text-muted"
          }`}
        >
          {museum.active ? <ArrowRight size={18} /> : <Building2 size={17} />}
        </span>
      </div>
    </>
  );

  if (museum.active) {
    return (
      <SectionCard as={Link} className="block p-2 transition duration-200 active:scale-[0.99]" href={museum.href}>
        {content}
      </SectionCard>
    );
  }

  return <SectionCard className="p-2 transition duration-200 active:scale-[0.99]">{content}</SectionCard>;
}

export default function MuseumPage() {
  return (
    <MobileShell withBottomNav>
      <PageBlock className="pb-8 pt-8">
        <section>
          <p className="eyebrow">Paris Museum Atlas</p>
          <h1 className="mt-3 text-3xl font-black leading-tight">巴黎博物馆目录</h1>
          <p className="mt-3 text-sm leading-7 text-muted">
            以博物馆为入口，进入巴黎不同的艺术现场。当前先开放卢浮宫，其余馆藏将陆续扩展。
          </p>
        </section>

        <SectionCard className="border-gold/40 bg-[linear-gradient(145deg,rgba(216,198,154,0.26),rgba(251,247,239,0.76))] p-5">
          <div className="flex items-start gap-3">
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-soft/45 text-gold">
              <Sparkles size={18} />
            </div>
            <div>
              <h2 className="text-lg font-black">卢浮宫导览已开放</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                包含重点藏品、风格关系、分层地图与 5 条主题观看路线。
              </p>
            </div>
          </div>
        </SectionCard>

        <div className="space-y-4">
          {parisMuseums.map((museum) => (
            <MuseumTile key={museum.name} museum={museum} />
          ))}
        </div>
      </PageBlock>
    </MobileShell>
  );
}
