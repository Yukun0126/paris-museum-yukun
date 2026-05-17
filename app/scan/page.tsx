"use client";

import Link from "next/link";
import { Camera, MessageCircle, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MobileShell } from "@/components/layout/MobileShell";
import { CameraFrame } from "@/components/scan/CameraFrame";
import { PageBlock } from "@/components/ui/PageBlock";
import { SectionCard } from "@/components/ui/SectionCard";

export default function ScanPage() {
  const router = useRouter();
  const [recognizing, setRecognizing] = useState(false);
  const [query, setQuery] = useState("");

  function startRecognition() {
    if (recognizing) return;
    setRecognizing(true);
    window.setTimeout(() => {
      router.push("/scan/result");
    }, 2000);
  }

  return (
    <MobileShell withBottomNav>
      <PageBlock className="pb-28 pt-8">
        <section>
          <p className="eyebrow">Identify</p>
          <h1 className="mt-3 text-3xl font-black leading-tight">作品识别导览</h1>
          <p className="mt-3 text-sm leading-7 text-muted">
            通过拍摄模拟或名称检索，快速获得作品的中文讲解与延伸线索。
          </p>
        </section>

        <CameraFrame recognizing={recognizing} onStart={startRecognition} imageAlt="模拟识别中的蒙娜丽莎" />

        <SectionCard className="p-5">
          <div className="mb-4 flex items-center gap-2">
            <Search className="text-gold" size={18} />
            <h2 className="text-base font-black">藏品名称检索</h2>
          </div>
          <input
            className="w-full rounded-full border border-line bg-paper/70 px-4 py-3 text-sm font-semibold outline-none transition focus:border-gold"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="例如：蒙娜丽莎 / 胜利女神 / 汉谟拉比法典"
            value={query}
          />
          <Link
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-paper shadow-button active:scale-[0.98]"
            href="/scan/result"
          >
            <Camera size={18} />
            看看识别结果
          </Link>
        </SectionCard>

        <SectionCard className="p-5">
          <div className="mb-4 flex items-center gap-2">
            <MessageCircle className="text-gold" size={18} />
            <h2 className="text-base font-black">延伸提问</h2>
          </div>
          <p className="text-sm leading-7 text-muted">
            当前版本先做交互模拟，后续可以接入多轮 AI 讲解，让每件作品都能被继续追问。
          </p>
        </SectionCard>
      </PageBlock>
    </MobileShell>
  );
}
