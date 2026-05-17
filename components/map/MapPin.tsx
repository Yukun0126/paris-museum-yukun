import Link from "next/link";

export type MapStop = {
  id: string;
  room: string;
  title: string;
  wing: string;
  x: number;
  y: number;
};

type MapPinProps = {
  stop: MapStop;
  index?: number;
  current?: boolean;
};

export function MapPin({ stop, index, current = false }: MapPinProps) {
  return (
    <Link
      aria-label={`${stop.room} ${stop.title}`}
      className={`absolute z-20 min-w-[108px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] border px-3 py-2 text-left shadow-card backdrop-blur transition active:scale-[0.98] ${
        current ? "border-gold bg-gold-soft/75 text-ink" : "border-line bg-paper/82 text-ink"
      }`}
      href={`/artworks/${stop.id}`}
      style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
    >
      <span className="text-[10px] font-black uppercase tracking-[0.14em] text-gold">
        {typeof index === "number" ? `${index + 1} · ` : ""}
        {stop.room}
      </span>
      <span className="mt-1 block text-xs font-black leading-4">{stop.title}</span>
      <span className="mt-1 block truncate text-[10px] font-bold text-muted">{stop.wing}</span>
    </Link>
  );
}
