export function LouvreHero() {
  return (
    <section className="relative mx-4 mt-4 h-[330px] overflow-hidden rounded-[32px] border border-line/70 shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_12%,rgba(255,255,255,0.75),transparent_11rem),radial-gradient(circle_at_76%_78%,rgba(216,198,154,0.36),transparent_12rem),linear-gradient(145deg,rgba(36,32,27,0.92),rgba(123,96,74,0.72))]" />
      <div className="absolute left-7 top-8 h-32 w-32 rounded-full border border-paper/20" />
      <div className="absolute right-8 top-9 h-32 w-px rotate-12 bg-gold-soft/40" />
      <div className="absolute bottom-24 left-8 right-8 h-px bg-paper/18" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="eyebrow text-gold-soft">今日导览 · 巴黎</p>
        <h1 className="mt-2 text-[2.35rem] font-black leading-tight text-paper">卢浮宫中文 AI 导览</h1>
        <p className="mt-3 max-w-[18rem] text-sm leading-6 text-paper/78">用 90 分钟建立一条清晰的观看路线。</p>
      </div>
    </section>
  );
}
