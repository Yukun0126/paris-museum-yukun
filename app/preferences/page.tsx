"use client";

import { useState } from "react";
import { MobileShell } from "@/components/layout/MobileShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageBlock } from "@/components/ui/PageBlock";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionCard } from "@/components/ui/SectionCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

const groups = [
  {
    id: "time",
    title: "可用时间",
    options: ["1 小时，只看高光", "2-3 小时，慢慢进入", "半天，把线索看完整"]
  },
  {
    id: "interest",
    title: "兴趣方向",
    options: ["镇馆名作", "绘画与光", "身体与雕塑", "古文明", "法国历史", "安静角落"]
  },
  {
    id: "preference",
    title: "参观偏好",
    options: ["少走一点", "避开人潮", "想拍几张好图", "喜欢听故事", "想看细节"]
  }
];

export default function PreferencesPage() {
  const [selected, setSelected] = useState<Record<string, string[]>>({
    time: ["2-3 小时，慢慢进入"],
    interest: ["镇馆名作"],
    preference: []
  });

  function toggle(groupId: string, option: string) {
    setSelected((current) => {
      const values = current[groupId] ?? [];
      const nextValues = values.includes(option)
        ? values.filter((item) => item !== option)
        : [...values, option];

      return {
        ...current,
        [groupId]: nextValues
      };
    });
  }

  return (
    <MobileShell withBottomNav>
      <PageHeader backHref="/preview" title="路线偏好" />
      <PageBlock className="pb-60">
        <SectionTitle
          eyebrow="Preferences"
          title="设置今日导览偏好"
          copy="根据可用时间、兴趣方向与体力偏好，生成更适合本次参观的路线。"
        />

        <div className="space-y-5">
          {groups.map((group) => (
            <SectionCard className="p-5" key={group.id}>
              <h2 className="text-base font-black">{group.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const active = selected[group.id]?.includes(option);
                  return (
                    <button
                      className={`rounded-full border px-4 py-2.5 text-sm font-bold transition active:scale-[0.98] ${
                        active
                          ? "border-gold bg-gold-soft/45 text-ink shadow-card"
                          : "border-line bg-paper/45 text-muted"
                      }`}
                      key={option}
                      onClick={() => toggle(group.id, option)}
                      type="button"
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </SectionCard>
          ))}
        </div>
      </PageBlock>

      <div className="fixed inset-x-0 bottom-[calc(5.9rem+env(safe-area-inset-bottom))] z-30 mx-auto w-full max-w-[430px] border-t border-line/70 bg-paper/78 px-5 pb-4 pt-4 shadow-soft backdrop-blur-xl">
        <PrimaryButton href="/routes">生成今天的观看线</PrimaryButton>
      </div>
    </MobileShell>
  );
}
