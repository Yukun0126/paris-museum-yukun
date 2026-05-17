export type FloorOption = string;

type FloorSwitcherProps<TFloor extends FloorOption> = {
  floors: readonly TFloor[];
  activeFloor: TFloor;
  onChange: (floor: TFloor) => void;
  className?: string;
};

export function FloorSwitcher<TFloor extends FloorOption>({
  floors,
  activeFloor,
  onChange,
  className = ""
}: FloorSwitcherProps<TFloor>) {
  return (
    <div className={`flex gap-2 overflow-x-auto pb-1 no-scrollbar ${className}`}>
      {floors.map((floor) => {
        const active = floor === activeFloor;
        return (
          <button
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-black transition active:scale-[0.98] ${
              active ? "border-gold bg-gold-soft/45 text-ink" : "border-line bg-paper/50 text-muted"
            }`}
            key={floor}
            onClick={() => onChange(floor)}
            type="button"
          >
            {floor}
          </button>
        );
      })}
    </div>
  );
}
