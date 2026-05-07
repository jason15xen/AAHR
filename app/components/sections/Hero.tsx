import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import StatCard from "../ui/StatCard";

const stats = [
  { value: "1", label: "Android" },
  { value: "3", label: "Skews" },
  { value: "$15K", label: "Starting Price" },
  { value: "Seed", label: "Round Stage" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[var(--color-cream)] border-b border-line/60"
    >
      <div className="px-6 md:px-12 lg:px-20 py-14 lg:py-20">
        <div className="text-center mb-10">
          <Eyebrow flourish className="text-red">
            The Marvel of the Modern Age
          </Eyebrow>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center max-w-7xl mx-auto">
          <HeroCopy />
          <BrandBadge />
        </div>

        <HeroStatsRow />
        <HeroCTAs />
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <div className="max-w-2xl">
      <h1 className="font-script text-[5rem] sm:text-[6.5rem] lg:text-[8rem] leading-[0.9] text-red italic">
        Advanced
        <br />
        <span className="pl-10 lg:pl-16 inline-block">Automatons</span>
      </h1>

      <p className="mt-8 max-w-md text-[14px] leading-relaxed text-ink/80">
        Codifying the human condition for a better tomorrow. Founded in 2025,
        Advanced Automatons is pioneering humanoid robotics — engineering
        machines that think, move, and bend reality humanely.
      </p>
    </div>
  );
}

function BrandBadge() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div
        className="relative w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-full bg-red flex items-center justify-center text-cream-light"
        aria-hidden
      >
        <div className="absolute inset-2 rounded-full border border-cream-light/30 pointer-events-none" />
        <div className="absolute inset-5 rounded-full border border-cream-light/15 pointer-events-none" />
        <div className="text-center px-6">
          <p className="text-[9px] tracking-[0.4em] mb-3 opacity-90 font-bold">
            HUMANOID ROBOTICS
          </p>
          <div className="font-script text-3xl lg:text-[2.4rem] italic leading-[1.05]">
            Advanced
            <br />
            Automatons
          </div>
          <p className="text-[8px] tracking-[0.32em] mt-3 opacity-90 font-bold">
            CODIFYING THE
            <br />
            HUMAN CONDITION
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroStatsRow() {
  return (
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-3xl">
      {stats.map((s) => (
        <StatCard key={s.label} value={s.value} label={s.label} variant="red" />
      ))}
    </div>
  );
}

function HeroCTAs() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Button href="#adam" variant="outline">
        View Android
      </Button>
      <Button href="#invest" variant="red">
        Invest Now
      </Button>
    </div>
  );
}
