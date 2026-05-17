import { Camera, Sparkles } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type CameraFrameProps = {
  recognizing: boolean;
  onStart: () => void;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function CameraFrame({
  recognizing,
  onStart,
  imageSrc = "/images/scan/mona-lisa-scan-bg.png",
  imageAlt = "模拟识别中的蒙娜丽莎线稿",
  className = ""
}: CameraFrameProps) {
  return (
    <div className={`relative h-[520px] overflow-hidden rounded-[32px] border border-line/70 bg-paper/74 p-5 shadow-card ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(216,198,154,0.12),transparent_14rem),linear-gradient(180deg,rgba(251,247,239,0.78),rgba(231,218,200,0.26))]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-center justify-between text-ink">
          <span className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-paper/68 px-3 py-2 text-xs font-black backdrop-blur">
            <Camera size={15} />
            Louvre AI
          </span>
          <span className="rounded-full border border-line/70 bg-paper/68 px-3 py-2 text-xs font-black text-ink backdrop-blur">
          {recognizing ? "正在辨认..." : "等待取景"}
          </span>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden rounded-[28px] border border-line/70 bg-paper/38 p-4">
          <div className="absolute inset-y-3 left-1/2 w-[72%] -translate-x-1/2 overflow-hidden rounded-[24px] border border-line/55 bg-[#f7efe1]">
            <img
              alt={imageAlt}
              className="h-full w-full object-cover object-center opacity-100 contrast-[1.05] saturate-[0.98]"
              src={imageSrc}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,247,239,0.02),rgba(251,247,239,0.04))]" />
            <div className={`scan-line absolute left-6 right-6 ${recognizing ? "top-[48%]" : "top-[30%]"} transition-all duration-700`} />
            <span className="pointer-events-none absolute left-5 top-5 size-8 border-l border-t border-gold/65" />
            <span className="pointer-events-none absolute right-5 top-5 size-8 border-r border-t border-gold/65" />
            <span className="pointer-events-none absolute bottom-5 left-5 size-8 border-b border-l border-gold/65" />
            <span className="pointer-events-none absolute bottom-5 right-5 size-8 border-b border-r border-gold/65" />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="rounded-[22px] border border-line/60 bg-paper/68 p-4 text-ink backdrop-blur">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 shrink-0 text-gold" size={18} />
              <p className="text-sm font-bold leading-6">
                {recognizing ? "正在读取线条、人物和展签线索..." : "把作品放进取景框，像翻开一张会说话的展签。"}
              </p>
            </div>
          </div>
          <PrimaryButton className="gap-2" onClick={onStart}>
            {recognizing ? "识别中..." : "开始辨认"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
