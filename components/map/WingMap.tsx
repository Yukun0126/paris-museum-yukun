import { MapPin, type MapStop } from "@/components/map/MapPin";
import { SectionCard } from "@/components/ui/SectionCard";

export type Wing = {
  name: string;
  className: string;
};

type WingMapProps = {
  activeFloor: string;
  stops: MapStop[];
  currentStopId?: string;
  wings?: Wing[];
  emptyText?: string;
};

const defaultWings: Wing[] = [
  { name: "Sully 叙利馆", className: "left-[5%] top-[33%] h-[44%] w-[34%] -rotate-3" },
  { name: "Denon 德农馆", className: "left-[31%] top-[14%] h-[62%] w-[38%] rotate-1" },
  { name: "Richelieu 黎塞留馆", className: "right-[5%] top-[33%] h-[44%] w-[34%] rotate-3" }
];

function routePath(stops: MapStop[]) {
  return stops.map((stop, index) => `${index === 0 ? "M" : "L"} ${stop.x} ${stop.y}`).join(" ");
}

export function WingMap({
  activeFloor,
  stops,
  currentStopId,
  wings = defaultWings,
  emptyText = "这一层暂无当前路线点位。"
}: WingMapProps) {
  return (
    <SectionCard className="relative h-[560px] overflow-hidden p-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.82),transparent_13rem),radial-gradient(circle_at_20%_72%,rgba(216,198,154,0.22),transparent_12rem),linear-gradient(145deg,rgba(236,227,214,0.82),rgba(251,247,239,0.72))]" />
      <div className="absolute left-5 top-5 z-10">
        <p className="eyebrow">{activeFloor}</p>
        <h2 className="mt-1 text-xl font-black">三大馆翼关系图</h2>
      </div>

      <div className="absolute inset-x-4 bottom-10 top-24">
        {wings.map((wing) => (
          <div
            className={`absolute ${wing.className} rounded-[28px] border border-line/80 bg-paper/48 shadow-[0_24px_42px_rgba(58,45,32,0.13)] backdrop-blur-sm`}
            key={wing.name}
          >
            <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(145deg,rgba(255,255,255,0.45),rgba(216,205,188,0.12))]" />
            <p className="absolute left-4 top-4 max-w-[6rem] text-sm font-black leading-5 text-ink">{wing.name}</p>
          </div>
        ))}

        {stops.length > 1 ? (
          <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path
              className="route-flow"
              d={routePath(stops)}
              fill="none"
              stroke="rgba(184,155,94,0.72)"
              strokeDasharray="3 3"
              strokeLinecap="round"
              strokeWidth="1.4"
            />
          </svg>
        ) : null}

        {stops.map((stop, index) => (
          <MapPin current={stop.id === currentStopId} index={index} key={stop.id} stop={stop} />
        ))}

        {stops.length === 0 ? (
          <div className="absolute left-1/2 top-1/2 w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-line/80 bg-paper/75 p-4 text-center shadow-card backdrop-blur">
            <p className="text-sm font-black">{emptyText}</p>
          </div>
        ) : null}
      </div>
    </SectionCard>
  );
}
