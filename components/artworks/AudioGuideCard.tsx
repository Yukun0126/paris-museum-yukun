import { Headphones } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";

export function AudioGuideCard() {
  return (
    <SectionCard className="flex items-center gap-3 p-4">
      <div className="grid size-11 place-items-center rounded-full bg-gold-soft/35 text-gold">
        <Headphones size={20} />
      </div>
      <div>
        <p className="text-sm font-black">中文讲解 · 6 分钟</p>
        <p className="mt-1 text-xs text-muted">模拟音频导览入口</p>
      </div>
    </SectionCard>
  );
}
