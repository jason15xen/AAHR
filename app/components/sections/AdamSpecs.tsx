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
      className="bg-cream-light py-20 lg:py-24 border-b border-line/60"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <SectionHeader preTitle="Introducing" title="ADAM" />

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-start max-w-5xl mx-auto">
          <AdamShowcase />
          <AdamDetails unit={unit} onUnitChange={setUnit} />
        </div>
      </div>
    </section>
  );
}

function AdamShowcase() {
  return (
    <div>
      <div className="relative border border-line bg-cream">
        <AdamFigure />
        <div className="absolute bottom-3 left-3 right-3 bg-red text-cream-light text-[10px] tracking-[0.25em] uppercase font-bold py-2 px-3 text-center">
          ADAM — AA-001 Alpha
        </div>
      </div>
    </div>
  );
}

function AdamDetails({
  unit,
  onUnitChange,
}: {
  unit: Unit;
  onUnitChange: (u: Unit) => void;
}) {
  return (
    <div>
      <p className="text-[14px] leading-relaxed text-ink/80 mb-6 max-w-2xl">
        One android. Three distinct calibers. ADAM (Adaptive Dynamic Autonomous
        Machine) is our regular humanoid platform — precision-engineered,
        adaptively programmed, and available in configurations tailored for
        residential, commercial, and industrial deployments.
      </p>

      <SpecTable specs={specsData[unit]} />

      <div className="mt-5 max-w-xs">
        <UnitToggle value={unit} onChange={onUnitChange} />
      </div>
    </div>
  );
}
