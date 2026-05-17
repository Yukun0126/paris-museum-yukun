"use client";

import Link from "next/link";
import { Check, Headphones, MessageCircle, Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import { MobileShell } from "@/components/layout/MobileShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tag } from "@/components/ui/Tag";
import { getArtwork } from "@/lib/data";

export default function ScanResultPage() {
  const artwork = getArtwork("mona-lisa");
  const [playing, setPlaying] = useState(false);
  const [added, setAdded] = useState(false);
  const [question, setQuestion] = useState("");

  if (!artwork) return null;

  return (
    <MobileShell withBottomNav>
      <PageHeader backHref="/scan" title="识别结果" />
      <section className="space-y-6 px-5 py-7">
        <section>
          <p className="eyebrow">Possible Match</p>
          <h1 className="mt-3 text-3xl font-black leading-tight">识别结果：蒙娜丽莎</h1>
          <p className="mt-3 text-sm font-bold text-muted">匹配度 92% · 可继续核对展签</p>
        </section>

        <SectionCard className="p-3">
          <ArtworkImage artworkId="mona-lisa" className="h-52 w-full rounded-[22px]" src={artwork.image} title="蒙娜丽莎" />
          <div className="p-3">
            <div className="mb-4 flex flex-wrap gap-2">
              <Tag>文艺复兴</Tag>
              <Tag>肖像画</Tag>
              <Tag>达·芬奇</Tag>
              <Tag>神秘微笑</Tag>
            </div>
            <h2 className="text-2xl font-black">{artwork.titleZh}</h2>
            <p className="mt-2 text-sm font-semibold text-muted">{artwork.titleEn}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{artwork.artist}</p>
            <p className="mt-2 text-xs font-bold leading-5 text-muted">
              {artwork.wing} · {artwork.floor} · {artwork.room}
            </p>
          </div>
        </SectionCard>

        <SectionCard className="border-gold/40 bg-[linear-gradient(145deg,rgba(36,32,27,0.94),rgba(123,96,74,0.88))] p-6 text-paper">
          <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-gold-soft">
            <Sparkles size={14} />
            AI 先说一句
          </p>
          <p className="mt-4 text-xl font-black leading-8">
            这不只是一个微笑，而是一场关于视线、空气和神秘感的文艺复兴实验。
          </p>
        </SectionCard>

        <div className="space-y-3">
          <button
            className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-bold shadow-button transition active:scale-[0.98] ${
              playing ? "bg-gold text-ink" : "bg-ink text-paper"
            }`}
            onClick={() => setPlaying(!playing)}
            type="button"
          >
            <Headphones size={18} />
            {playing ? "正在讲这一段..." : "听一段 30 秒讲解"}
          </button>
          <PrimaryButton href="/artworks/mona-lisa" variant="secondary">
            打开完整图录页
          </PrimaryButton>
          <button
            className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border px-5 text-sm font-bold shadow-card transition active:scale-[0.98] ${
              added ? "border-gold bg-gold-soft/45 text-ink" : "border-line bg-paper/58 text-ink"
            }`}
            onClick={() => setAdded(true)}
            type="button"
          >
            {added ? <Check size={18} /> : <Plus size={18} />}
            {added ? "已放入今天的路线" : "放入今天的路线"}
          </button>
        </div>

        <SectionCard className="p-5">
          <div className="mb-4 flex items-center gap-2">
            <MessageCircle className="text-gold" size={18} />
            <h2 className="text-base font-black">继续提问</h2>
          </div>
          <input
            className="w-full rounded-full border border-line bg-paper/70 px-4 py-3 text-sm font-semibold outline-none transition focus:border-gold"
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="比如：她为什么总像在看我？"
            value={question}
          />
        </SectionCard>

        <SectionCard className="p-5">
          <p className="eyebrow">Keep Looking</p>
          <h2 className="mt-3 text-xl font-black">相关观看建议</h2>
          <div className="mt-5 space-y-3">
            {[
              { label: "岩间圣母", href: "/artworks/virgin-rocks" },
              { label: "走进经典观看线", href: "/explore/classic-route" },
              { label: "继续看文艺复兴的谜面", href: "/explore/quiet-highlights-route" }
            ].map((item) => (
              <Link
                className="block rounded-[18px] border border-line/80 bg-paper/52 px-4 py-3 text-sm font-bold text-muted"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SectionCard>
      </section>
    </MobileShell>
  );
}
