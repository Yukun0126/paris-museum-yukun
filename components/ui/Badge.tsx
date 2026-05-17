import type { LucideIcon } from "lucide-react";
import { Award } from "lucide-react";

type BadgeProps = {
  id?: string;
  title: string;
  description?: string;
  unlocked?: boolean;
  icon?: LucideIcon;
  className?: string;
};

type CartoonBadgeArtProps = {
  id?: string;
  unlocked: boolean;
};

function CartoonBadgeArt({ id, unlocked }: CartoonBadgeArtProps) {
  const muted = unlocked ? "" : "opacity-55 grayscale";
  const art = id ?? "default";

  return (
    <div className={`relative h-full w-full overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,#fff8ea,#ead8bd)] ${muted}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.9),transparent_28%),radial-gradient(circle_at_78%_82%,rgba(184,155,94,0.22),transparent_30%)]" />
      <div className="absolute inset-x-5 bottom-4 h-3 rounded-full bg-ink/10 blur-sm" />

      {art === "first-louvre" ? (
        <>
          <div className="absolute left-1/2 top-7 h-12 w-16 -translate-x-1/2 rounded-t-[30px] border-4 border-[#4b3721] bg-[#f7dfad]" />
          <div className="absolute left-1/2 top-[70px] h-11 w-24 -translate-x-1/2 rounded-[16px] bg-[#cfa766] shadow-card" />
          <div className="absolute left-[38%] top-[86px] h-7 w-6 rounded-t-full bg-[#fff4dc]" />
          <div className="absolute left-[55%] top-[86px] h-7 w-6 rounded-t-full bg-[#fff4dc]" />
          <div className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 rounded-full bg-[#a65f46]" />
        </>
      ) : null}

      {art === "three-icons" ? (
        <>
          <div className="absolute left-6 top-9 h-16 w-12 rounded-t-full bg-[#f1d8a3] shadow-card" />
          <div className="absolute left-[58px] top-7 h-20 w-14 rounded-[24px] bg-[#fff1c9] shadow-card" />
          <div className="absolute right-6 top-10 h-14 w-11 rounded-t-full bg-[#dfb86f] shadow-card" />
          <div className="absolute left-[68px] top-[58px] flex gap-2">
            <span className="size-2 rounded-full bg-[#4b3721]" />
            <span className="size-2 rounded-full bg-[#4b3721]" />
          </div>
          <div className="absolute left-[76px] top-[76px] h-1 w-5 rounded-full bg-[#4b3721]/70" />
          <div className="absolute right-8 top-7 h-5 w-8 bg-[#b89b5e] [clip-path:polygon(0_100%,20%_30%,42%_80%,62%_18%,82%_78%,100%_28%,100%_100%)]" />
        </>
      ) : null}

      {art === "french-history" ? (
        <>
          <div className="absolute left-10 top-9 h-20 w-2 rounded-full bg-[#5a3a22]" />
          <div className="absolute left-12 top-10 h-10 w-14 rounded-r-[18px] bg-[#a65f46] shadow-card" />
          <div className="absolute left-12 top-10 h-3 w-14 bg-[#f7f0df]" />
          <div className="absolute left-12 top-[42px] h-3 w-14 bg-[#6f8fa8]" />
          <div className="absolute bottom-8 right-8 h-16 w-16 rounded-full bg-[#d7c295]" />
          <div className="absolute bottom-11 right-11 h-10 w-10 rounded-full bg-[#fff4dc]" />
        </>
      ) : null}

      {art === "ancient-explorer" ? (
        <>
          <div className="absolute left-8 top-10 h-24 w-16 rounded-t-[28px] bg-[#4c4238] shadow-card" />
          <div className="absolute left-11 top-14 h-3 w-10 rounded-full bg-[#d8c69a]" />
          <div className="absolute left-11 top-[88px] h-1.5 w-9 rounded-full bg-[#d8c69a]/80" />
          <div className="absolute left-11 top-[108px] h-1.5 w-11 rounded-full bg-[#d8c69a]/70" />
          <div className="absolute right-9 bottom-8 h-16 w-20 bg-[#d9b56d] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
          <div className="absolute right-14 bottom-8 h-12 w-10 bg-[#f3d98e] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        </>
      ) : null}

      {art === "goddess-route" ? (
        <>
          <div className="absolute left-1/2 top-7 h-16 w-10 -translate-x-1/2 rounded-t-full bg-[#f2d8b8] shadow-card" />
          <div className="absolute left-1/2 top-[66px] h-20 w-24 -translate-x-1/2 bg-[#d6bea0] [clip-path:polygon(38%_0,62%_0,88%_100%,12%_100%)]" />
          <div className="absolute left-[34px] top-[50px] h-14 w-16 rotate-[-22deg] rounded-full border-t-8 border-[#b89b5e]" />
          <div className="absolute right-[34px] top-[50px] h-14 w-16 rotate-[22deg] rounded-full border-t-8 border-[#b89b5e]" />
          <div className="absolute left-[77px] top-[42px] flex gap-2">
            <span className="size-1.5 rounded-full bg-[#4b3721]" />
            <span className="size-1.5 rounded-full bg-[#4b3721]" />
          </div>
        </>
      ) : null}

      {art === "quiet-route" || art === "default" ? (
        <>
          <div className="absolute left-8 top-9 h-24 w-20 rotate-[-4deg] rounded-[14px] border border-[#b89b5e]/60 bg-[#fff3d7] shadow-card" />
          <div className="absolute left-14 top-14 h-3 w-9 rounded-full bg-[#b89b5e]/55" />
          <div className="absolute left-14 top-[88px] h-1.5 w-10 rounded-full bg-[#756a5d]/35" />
          <div className="absolute left-14 top-[108px] h-1.5 w-8 rounded-full bg-[#756a5d]/30" />
          <div className="absolute right-8 bottom-8 h-12 w-10 rounded-t-full bg-[#cfa766]" />
          <div className="absolute right-10 bottom-[74px] h-8 w-6 rounded-full bg-[#f5d7b8]" />
        </>
      ) : null}
    </div>
  );
}

export function Badge({ id, title, description, unlocked = true, icon: Icon = Award, className = "" }: BadgeProps) {
  return (
    <div className={`paper-surface rounded-booklet p-3 ${unlocked ? "text-ink" : "opacity-55"} ${className}`}>
      <div className="relative aspect-[1.22] rounded-[22px] border border-line/80 bg-paper/58 p-2 shadow-card">
        <CartoonBadgeArt id={id} unlocked={unlocked} />
        <div className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-paper/80 bg-paper/82 shadow-card">
          <Icon className={unlocked ? "text-gold" : "text-stone"} size={15} />
        </div>
      </div>
      <p className="mt-3 text-sm font-black leading-5">{title}</p>
      {description ? <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted">{description}</p> : null}
      <p className="mt-2 text-xs font-bold text-muted">{unlocked ? "已解锁" : "未解锁"}</p>
    </div>
  );
}
