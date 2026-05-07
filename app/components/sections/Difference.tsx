import SectionHeader from "../ui/SectionHeader";
import DifferenceCard from "./difference/DifferenceCard";
import { differenceItems } from "./difference/difference-data";

export default function Difference() {
  return (
    <section className="bg-cream py-20 lg:py-24 border-b border-line/60">
      <div className="px-6 md:px-12 lg:px-20">
        <SectionHeader
          eyebrow="Investor Narrative"
          preTitle="The"
          title="ADVANCED AUTOMATONS DIFFERENCE"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {differenceItems.map((item) => (
            <DifferenceCard
              key={item.title}
              title={item.title}
              body={item.body}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
