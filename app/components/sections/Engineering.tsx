import TechCard from "./engineering/TechCard";
import StatRail from "./engineering/StatRail";
import ResearchPubBanner from "./engineering/ResearchPubBanner";
import { techCards, engineeringStats } from "./engineering/engineering-data";

export default function Engineering() {
  return (
    <section
      id="research"
      className="bg-ink text-cream-light py-16 lg:py-20 border-y-4 border-ink"
    >
      <div className="px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-start max-w-7xl mx-auto">
          <EngineeringMain />
          <StatRail stats={engineeringStats} />
        </div>

        <div className="bg-red text-cream-light py-12 lg:py-16 -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16 mt-12 border-y-4 border-ink">
          <TechCardGrid />
        </div>

        <ResearchPubBanner />
      </div>
    </section>
  );
}

function EngineeringMain() {
  return (
    <div>
      <div className="inline-block bg-ink text-cream-light px-4 py-1.5 border-2 border-cream-light shadow-[3px_3px_0_var(--color-cream-light)] mb-4">
        <span className="font-script text-[16px] tracking-wide">
          ★ Built from the Ground Up ★
        </span>
      </div>
      <h2 className="font-script italic text-[40px] text-red mb-1 leading-none">
        Science &amp;
      </h2>
      <h2 className="font-display text-[64px] md:text-[80px] tracking-wide leading-none text-cream-light">
        ENGINEERING
      </h2>

      <p className="mt-5 max-w-2xl font-body text-[15px] leading-relaxed text-cream-light/90">
        Every component in ADAM is designed, prototyped, and stress-tested
        in-house at our Austin, TX engineering facility. From our proprietary
        TORQ™ servo system to the COGITRON™ neural chip, we own the full
        technology stack — no outsourcing, no compromise. All technologies are
        proprietary and patents are actively being sought. AAHR is currently
        seeking strategic partnerships with NVIDIA and QUALCOMM before producing
        its own silicon.
      </p>
    </div>
  );
}

function TechCardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {techCards.map((card) => (
        <TechCard key={card.num} card={card} />
      ))}
    </div>
  );
}
