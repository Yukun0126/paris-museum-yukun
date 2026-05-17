import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { MobileShell } from "@/components/layout/MobileShell";

export default function NotFound() {
  return (
    <MobileShell>
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-black">没有找到这个展厅</h1>
        <p className="mt-3 text-sm leading-6 text-ink/60">回到卢浮宫首页，继续完成中文导览体验。</p>
        <PrimaryButton className="mt-8" href="/louvre">回到首页</PrimaryButton>
      </section>
    </MobileShell>
  );
}
