import { UserPlus, Users } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { BadgeGrid } from "@/components/profile/BadgeGrid";
import { StatsCard } from "@/components/profile/StatsCard";
import { PageBlock } from "@/components/ui/PageBlock";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionCard } from "@/components/ui/SectionCard";

export default function ProfilePage() {
  return (
    <MobileShell withNav>
      <PageBlock className="pb-32 pt-8">
        <section>
          <p className="eyebrow">My Museum Trail</p>
          <h1 className="mt-3 text-3xl font-black leading-tight">个人导览记录</h1>
          <p className="mt-3 text-sm leading-7 text-muted">
            你停下来的每一件作品，都会在这里留下小小的回声。
          </p>
        </section>

        <StatsCard />

        <SectionCard className="p-6">
          <p className="eyebrow">Visit Summary</p>
          <h2 className="mt-3 text-2xl font-black leading-tight">卢浮宫路线完成概览</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            25 件作品把你从古文明带到文艺复兴，再带到法国浪漫主义。很好，你已经不只是来打卡那张微笑了。
          </p>
          <PrimaryButton className="mt-6" variant="secondary">
            生成我的小展签
          </PrimaryButton>
        </SectionCard>

        <section className="space-y-4">
          <div>
            <p className="eyebrow">Little Trophies</p>
            <h2 className="mt-2 text-xl font-black">成就与纪念章</h2>
          </div>
          <BadgeGrid />
        </section>

        <SectionCard className="p-5">
          <p className="eyebrow">Friends</p>
          <h2 className="mt-3 text-xl font-black">同行与分享</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            以后可以看看朋友今天被哪件作品拦住，也交换一下各自收集到的小徽章。
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="rounded-[22px] border border-line/80 bg-paper/52 p-4 text-left text-sm font-black text-ink shadow-card" type="button">
              <UserPlus className="mb-3 text-gold" size={21} />
              添加同行人
            </button>
            <button className="rounded-[22px] border border-line/80 bg-paper/52 p-4 text-left text-sm font-black text-ink shadow-card" type="button">
              <Users className="mb-3 text-gold" size={21} />
              看朋友的徽章
            </button>
          </div>
        </SectionCard>
      </PageBlock>
    </MobileShell>
  );
}
