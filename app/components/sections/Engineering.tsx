import Eyebrow from "../ui/Eyebrow";
import TechCard from "./engineering/TechCard";
import StatRail from "./engineering/StatRail";
import ResearchPubBanner from "./engineering/ResearchPubBanner";
import { techCards, engineeringStats } from "./engineering/engineering-data";

export default function Engineering() {
  return (
    <section
      id="research"
      className="bg-red text-cream-light py-20 lg:py-24 relative"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start max-w-7xl mx-auto">
          <EngineeringMain />
          <StatRail stats={engineeringStats} />
        </div>

        <ResearchPubBanner />
      </div>
    </section>
  );
}

function EngineeringMain() {
  return (
    <div>
      <Eyebrow className="text-cream-light/80 mb-4">
        ▶ Built from the ground up
      </Eyebrow>
      <h2 className="font-script italic text-5xl mb-1">Science &amp;</h2>
      <h2 className="font-display text-6xl md:text-7xl tracking-wide leading-none">
        ENGINEERING
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream-light/85">
        Every component in ADAM is designed, prototyped, and stress-tested
        in-house at our Austin, TX engineering facility. From our proprietary
        TORQ™ servo system to the COGNORTAY™ neural chip, we own the full
        technology stack — we own the engineering, we own the manufacturing, we
        own the precision. The translates to higher-caliber, deeper precision,
        and better scaling for investors.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
        {techCards.map((card) => (
          <TechCard key={card.num} card={card} />
        ))}
      </div>
    </div>
  );
}
