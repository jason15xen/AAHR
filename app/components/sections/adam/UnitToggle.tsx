export type Unit = "imperial" | "metric";

type UnitToggleProps = {
  value: Unit;
  onChange: (u: Unit) => void;
};

export default function UnitToggle({ value, onChange }: UnitToggleProps) {
  return (
    <div className="flex border border-ink/80 text-[10px] font-bold uppercase tracking-[0.25em]">
      <ToggleButton active={value === "imperial"} onClick={() => onChange("imperial")}>
        Imperial
      </ToggleButton>
      <ToggleButton
        active={value === "metric"}
        onClick={() => onChange("metric")}
        leftBorder
      >
        Metric
      </ToggleButton>
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
  leftBorder,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  leftBorder?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 py-2.5 transition-colors ${
        active ? "bg-ink text-cream-light" : "bg-cream-light text-ink hover:bg-cream-dim"
      } ${leftBorder ? "border-l border-ink/80" : ""}`}
    >
      {children}
    </button>
  );
}
