import { Network } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { CoreCollectionList } from "@/components/louvre/CoreCollectionList";
import { StyleNetworkList } from "@/components/louvre/StyleNetworkList";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import { artworks } from "@/lib/data";
import { styleNetworkGroups } from "@/lib/styleNetwork";

const relationGroups = [
  {
    title: "古典身体：从静态理想到迎风降落",
    period: "古希腊 / 希腊化 / 罗马复制",
    thesis: "这一组不是在比“谁更美”，而是在看古典世界怎样处理身体：维纳斯偏向理想比例，胜利女神强调风、速度和戏剧性，狄安娜与赫尔玛佛洛狄忒斯则让身体变成身份、神话和观看角度的游戏。",
    ids: ["venus-de-milo", "winged-victory", "diana-versailles", "sleeping-hermaphroditus", "psyche-cupid"],
    links: ["理想比例", "运动感", "神话身份", "残缺想象", "观看角度"]
  },
  {
    title: "文艺复兴：人、光线和“别把话说满”",
    period: "15-16 世纪意大利",
    thesis: "达·芬奇、拉斐尔和威尼斯画派可以放在一条线上看：达·芬奇关心空气、边界和心理暧昧；拉斐尔追求稳定、和谐和理想秩序；维罗内塞则把宗教故事变成盛大的舞台和色彩宴会。",
    ids: ["mona-lisa", "virgin-rocks", "st-john-baptist", "beautiful-gardener", "baldassare-castiglione", "wedding-cana"],
    links: ["晕涂法", "三角构图", "理想人文主义", "威尼斯色彩", "宗教叙事舞台化"]
  },
  {
    title: "权力图像：王权、共和国和帝国的视觉剧本",
    period: "17-19 世纪法国政治图像",
    thesis: "阿波罗长廊、荷拉斯兄弟、拿破仑加冕和拿破仑三世套房，其实都在回答同一个问题：权力如何让自己看起来合理？有时靠神话和金色空间，有时靠罗马道德，有时靠巨幅画面和精心站位。",
    ids: ["apollo-gallery", "oath-horatii", "napoleon-coronation", "napoleon-apartments", "marly-horses"],
    links: ["太阳王符号", "新古典主义", "公共责任", "帝国宣传", "宫廷空间"]
  },
  {
    title: "浪漫主义：新闻、革命和情绪冲上画布",
    period: "19 世纪法国浪漫主义",
    thesis: "《梅杜萨之筏》和《自由引导人民》把绘画从古代英雄故事拉回当代现场：海难、尸体、烟雾、街垒、旗帜。浪漫主义不是“浪漫爱情”，而是把强烈情绪、现实事件和政治想象画到让人无法轻松路过。",
    ids: ["medusa-raft", "liberty-leading", "grande-odalisque", "turkish-bath", "bather-valpincon"],
    links: ["当代事件", "公共舆论", "革命象征", "身体与欲望", "东方主义想象"]
  },
  {
    title: "古文明：文字、神权和公共秩序的诞生",
    period: "古埃及 / 美索不达米亚 / 近东",
    thesis: "狮身人面像、书记坐像、汉谟拉比法典和人面翼牛，都不是单纯的“古物”。它们分别在讲：王权如何神圣化，书写者如何管理社会，法律如何被公开展示，守护神兽如何把建筑入口变成权力边界。",
    ids: ["great-sphinx-tanis", "seated-scribe", "hammurabi-code", "lamassu"],
    links: ["王权神圣化", "书写与行政", "法律公开化", "守护神兽", "城市与帝国"]
  },
  {
    title: "空间线索：卢浮宫本身也是一件作品",
    period: "王宫空间到现代博物馆",
    thesis: "不要只把卢浮宫当作装作品的盒子。阿波罗长廊、马利庭院、拿破仑三世套房和达鲁楼梯都在塑造观看方式：你在哪里停下、抬头、转弯、被震住，都是空间替作品做的导览。",
    ids: ["apollo-gallery", "marly-courtyard", "napoleon-apartments", "winged-victory", "wedding-cana"],
    links: ["王宫遗产", "庭院光线", "楼梯戏剧性", "展厅尺度", "观看动线"]
  }
];

function pickRankedWorks() {
  const ranks = [4, 5, 10, 15, 12, 11];
  return ranks
    .map((rank) => {
      const artwork = artworks[rank - 1] ?? artworks[artworks.length - 1];
      return artwork ?? null;
    })
    .filter((item): item is (typeof artworks)[number] => Boolean(item));
}

export default function LouvreHomePage() {
  const famousWorks = artworks.slice(0, 25);
  const rankedPreviewWorks = pickRankedWorks();

  return (
    <MobileShell withNav>
      <section className="px-5 pb-3 pt-8">
        <p className="eyebrow">Musée du Louvre</p>
        <h1 className="mt-4 text-[2.8rem] font-black leading-[0.98] text-ink">
          卢浮宫
          <br />
          观前手册
        </h1>
        <p className="mt-4 text-sm leading-7 text-muted">
          先建立一张脑内地图：哪些名作值得停留，它们彼此又在悄悄回应什么。
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Tag>25 件名作</Tag>
          <Tag>5 条观看线</Tag>
          <Tag>分层导览</Tag>
        </div>
      </section>

      <section className="space-y-6 px-5 py-5">
        <SectionCard className="overflow-hidden p-0">
          <div className="grid grid-cols-3 gap-2 p-3">
            {rankedPreviewWorks.map((artwork) => (
              <ArtworkImage
                artworkId={artwork.id}
                className="h-24 rounded-[16px]"
                key={artwork.id}
                ratio="portrait"
                src={artwork.image}
                title={artwork.titleZh}
              />
            ))}
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Essential Works</p>
                <h2 className="mt-3 text-2xl font-black leading-tight">卢浮宫重点藏品导览</h2>
              </div>
              <Tag>25 件</Tag>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted">
              不必一口气征服卢浮宫。先记住这组坐标，文艺复兴、古典身体、法国历史与古文明就会慢慢连成路。
            </p>
            <div className="mt-5">
              <CoreCollectionList artworks={famousWorks} />
            </div>
          </div>
        </SectionCard>

        <SectionCard className="p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-gold-soft/45 text-gold">
              <Network size={19} />
            </div>
            <div>
              <p className="eyebrow">Style Network</p>
              <h2 className="mt-1 text-xl font-black">藏品风格与历史关联</h2>
            </div>
          </div>
          <p className="mb-5 text-sm leading-7 text-muted">
            这里不按展厅编号排队，而按艺术史的线索重新串联：谁继承古典身体，谁制造权力图像，谁把新闻画成公共记忆，谁让空间本身也开口说话。
          </p>
          <StyleNetworkList artworks={artworks} groups={styleNetworkGroups} />
        </SectionCard>
      </section>
    </MobileShell>
  );
}
