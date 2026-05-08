import type { EngineeringStat } from "./types";

type StatRailProps = {
  stats: EngineeringStat[];
};

export default function StatRail({ stats }: StatRailProps) {
  return (
    <aside className="space-y-3">
      {stats.map((s) => (
        <EngStatCard key={s.label} {...s} />
      ))}
    </aside>
  );
}

function EngStatCard({
  value,
  label,
  variant,
}: EngineeringStat) {
  const cardClass =
    variant === "gold"
      ? "bg-gold text-ink border-2 border-cream-light"
      : "bg-red-deeper text-cream-light border-2 border-cream-light";

  return (
    <div className={`${cardClass} px-4 py-3 flex items-baseline gap-3`}>
      <div className="font-display text-[26px] leading-none whitespace-nowrap">
        {value}
      </div>
      <div className="font-script text-[16px] leading-tight">{label}</div>
    </div>
  );
}
