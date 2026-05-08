import SectionHeader from "../ui/SectionHeader";
import SkewColumn from "./pricing/SkewColumn";
import { skews } from "./pricing/skews-data";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-cream py-16 lg:py-20 border-y-4 border-ink"
    >
      <div className="px-6 md:px-12 lg:px-16">
        <SectionHeader
          preTitle="One ADAM,"
          title="THREE DISTINCT SKEWS"
          subtitle="ADAM: Residential · Commercial · Industrial — each with tiered model configurations"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skews.map((skew) => (
            <SkewColumn key={skew.title} skew={skew} />
          ))}
        </div>
      </div>
    </section>
  );
}
