"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import AdamFigure from "./adam/AdamFigure";
import UnitToggle, { type Unit } from "./adam/UnitToggle";
import SpecTable from "./adam/SpecTable";
import { specsData } from "./adam/specs-data";

export default function AdamSpecs() {
  const [unit, setUnit] = useState<Unit>("imperial");

  return (
    <section
      id="adam"
      className="bg-cream py-16 lg:py-20 border-y-4 border-ink"
    >
      <div className="px-6 md:px-12 lg:px-16">
        <SectionHeader preTitle="Introducing" title="ADAM" />

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-start max-w-5xl mx-auto">
          <AdamShowcase unit={unit} onUnitChange={setUnit} />
          <AdamDetails unit={unit} />
        </div>
      </div>
    </section>
  );
}

function AdamShowcase({
  unit,
  onUnitChange,
}: {
  unit: Unit;
  onUnitChange: (u: Unit) => void;
}) {
  return (
    <div>
      <div className="relative border-2 border-ink bg-cream-light shadow-[5px_5px_0_var(--color-ink)]">
        <AdamFigure />
        <div className="bg-red text-cream-light text-center py-2 px-3 border-t-2 border-ink">
          <span className="font-script text-[20px]">ADAM — AA-001 alpha</span>
        </div>
      </div>
      <div className="mt-3">
        <UnitToggle value={unit} onChange={onUnitChange} />
      </div>
    </div>
  );
}

function AdamDetails({ unit }: { unit: Unit }) {
  return (
    <div>
      <p className="font-body text-[15px] leading-relaxed text-ink/85 mb-6 max-w-2xl italic">
        One android. Three distinct callings. ADAM (Adaptive Dynamic Autonomous
        Machine) is our singular humanoid platform — precision-engineered,
        adaptively programmed, and available in configurations tailored for
        residential, commercial, and industrial deployment.
      </p>

      <SpecTable specs={specsData[unit]} />
    </div>
  );
}
