export type Unit = "imperial" | "metric";

type UnitToggleProps = {
  value: Unit;
  onChange: (u: Unit) => void;
};

export default function UnitToggle({ value, onChange }: UnitToggleProps) {
  return (
    <div className="flex border-2 border-ink">
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
      className={`flex-1 py-3 font-display text-[14px] tracking-[0.25em] uppercase font-bold transition-colors ${
        active ? "bg-red text-cream-light" : "bg-cream-light text-ink hover:bg-cream"
      } ${leftBorder ? "border-l-2 border-ink" : ""}`}
    >
      {children}
    </button>
  );
}
