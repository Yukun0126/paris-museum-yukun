import { Bookmark, Medal, Route, Sparkles } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";

const stats = [
  { label: "停留作品", value: "25", icon: Sparkles },
  { label: "走完路线", value: "1", icon: Route },
  { label: "私藏作品", value: "5", icon: Bookmark },
  { label: "点亮徽章", value: "3", icon: Medal }
];

export function StatsCard() {
  return (
    <SectionCard className="p-5">
      <p className="eyebrow">Today In The Museum</p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div className="rounded-[22px] border border-line/75 bg-paper/45 p-4" key={item.label}>
              <Icon className="text-gold" size={19} />
              <p className="mt-4 text-3xl font-black leading-none">{item.value}</p>
              <p className="mt-2 text-xs font-bold text-muted">{item.label}</p>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
