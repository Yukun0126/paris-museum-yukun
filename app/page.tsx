import { ArrowRight } from "lucide-react";
import { MobileShell } from "@/components/layout/MobileShell";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export default function SplashPage() {
  return (
    <MobileShell showBackButton={false}>
      <section className="relative flex min-h-screen flex-col overflow-hidden px-7 py-10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.38),transparent_14rem),radial-gradient(circle_at_20%_78%,rgba(216,198,154,0.16),transparent_12rem),linear-gradient(180deg,rgba(251,247,239,0.12),rgba(244,239,230,0.22))]" />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
          <p className="eyebrow">Paris Museum Atlas</p>
          <h1 className="mt-5 text-[4.05rem] font-black leading-[0.92] text-ink">
            巴黎
            <br />
            博物图鉴
          </h1>
          <div className="mx-auto mt-7 h-px w-24 bg-gold" />
          <p className="mx-auto mt-7 max-w-[18rem] text-xl font-black leading-8 text-ink">
            把巴黎的博物馆，读成一本随身图鉴。
          </p>
          <p className="mx-auto mt-4 max-w-[18rem] text-sm leading-7 text-muted">
            从卢浮宫出发，在名作、路线与足迹之间，慢慢找到自己的观看方式。
          </p>
          <PrimaryButton href="/museum" className="mt-9 gap-2">
            翻开图鉴
            <ArrowRight size={18} />
          </PrimaryButton>
        </div>

      </section>
    </MobileShell>
  );
}
