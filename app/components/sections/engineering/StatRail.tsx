import StatCard from "../../ui/StatCard";
import type { EngineeringStat } from "./types";

type StatRailProps = {
  stats: EngineeringStat[];
};

export default function StatRail({ stats }: StatRailProps) {
  return (
    <aside className="space-y-2">
      {stats.map((s) => (
        <StatCard
          key={s.label}
          value={s.value}
          label={s.label}
          variant={s.variant}
        />
      ))}
    </aside>
  );
}
