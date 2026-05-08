import DifferenceCard from "./difference/DifferenceCard";
import { differenceItems } from "./difference/difference-data";

export default function Difference() {
  return (
    <section className="bg-cream py-16 lg:py-20 border-y-4 border-ink">
      <div className="px-6 md:px-12 lg:px-16">
        <DifferenceHeader />
        <DifferenceGrid />
      </div>
    </section>
  );
}

function DifferenceHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-block bg-ink text-cream-light px-5 py-1.5 border-2 border-ink shadow-[3px_3px_0_var(--color-ink)] mb-6">
        <span className="font-script text-[16px] tracking-wide">
          ★ Investor Advantage ★
        </span>
      </div>
      <h2 className="font-script italic text-[44px] text-red leading-none">
        The
      </h2>
      <h2 className="font-display text-[44px] md:text-[64px] tracking-wide leading-none mt-1 text-ink">
        ADVANCED AUTOMATONS DIFFERENCE
      </h2>
    </div>
  );
}

function DifferenceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {differenceItems.map((item) => (
        <DifferenceCard
          key={item.title}
          title={item.title}
          body={item.body}
          emoji={item.emoji}
        />
      ))}
    </div>
  );
}
