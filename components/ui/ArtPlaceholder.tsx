import { Landmark } from "lucide-react";

type ArtPlaceholderProps = {
  title: string;
  label?: string;
  className?: string;
  tone?: "gold" | "terracotta" | "stone";
};

const tones = {
  gold: "from-[#f0d78d] via-[#b89b5e] to-[#5f432f]",
  terracotta: "from-[#e7dac8] via-[#a65f46] to-[#3a2d20]",
  stone: "from-[#f4efe6] via-[#b8aea0] to-[#756a5d]"
};

export function ArtPlaceholder({ title, label = "Museum Plate", className = "", tone = "gold" }: ArtPlaceholderProps) {
  return (
    <div
      aria-label={title}
      className={`relative overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
      role="img"
    >
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_28%_18%,rgba(255,255,255,.6),transparent_7rem),radial-gradient(circle_at_76%_78%,rgba(255,255,255,.18),transparent_8rem),repeating-linear-gradient(90deg,rgba(255,255,255,.08)_0_1px,transparent_1px_7px)]" />
      <div className="absolute -left-8 top-8 h-32 w-32 rounded-full border border-paper/35" />
      <div className="absolute right-5 top-5 h-20 w-px rotate-12 bg-paper/40" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-paper/78">{label}</p>
          <p className="mt-1 line-clamp-2 text-sm font-black leading-5 text-paper">{title}</p>
        </div>
        <div className="grid size-9 shrink-0 place-items-center rounded-full border border-paper/45 bg-paper/18 text-paper backdrop-blur">
          <Landmark size={16} />
        </div>
      </div>
    </div>
  );
}
