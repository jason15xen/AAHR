import Button from "../ui/Button";

const stats = [
  { value: "1", label: "Android Model", variant: "ink" as const },
  { value: "3", label: "Skews", variant: "ink" as const },
  { value: "$15K", label: "Starting Price", variant: "red" as const },
  { value: "Seed", label: "Round Open", variant: "ink" as const },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-notebook border-b-4 border-ink"
    >
      <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-14">
        <HeroEyebrow />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start max-w-7xl mx-auto mt-8">
          <HeroLeft />
          <BrandBadge />
        </div>
      </div>
    </section>
  );
}

function HeroEyebrow() {
  return (
    <div className="flex justify-start lg:justify-start mt-2">
      <div className="bg-ink text-cream-light px-5 py-2 border-2 border-cream-light shadow-[3px_3px_0_var(--color-ink)]">
        <span className="font-script text-[18px] tracking-wide">
          ★ The Marvel of the Modern Age ★
        </span>
      </div>
    </div>
  );
}

function HeroLeft() {
  return (
    <div>
      <HeroTitle />
      <HeroBody />
      <HeroStats />
      <HeroCTAs />
    </div>
  );
}

function HeroTitle() {
  return (
    <h1 className="font-script text-red leading-[0.95] mt-4">
      <span className="block text-[5.5rem] sm:text-[7rem] lg:text-[8rem]">
        Advanced
      </span>
      <span className="block text-[5rem] sm:text-[6.5rem] lg:text-[7.5rem] pl-4 lg:pl-8 title-wavy">
        Automatons
      </span>
    </h1>
  );
}

function HeroBody() {
  return (
    <p className="mt-6 max-w-xl text-[18px] leading-[1.5] text-ink/85 font-body">
      <span className="italic font-script text-[22px]">
        &quot;Redefining the human condition for a better tomorrow.&quot;
      </span>{" "}
      Founded in 2025, Advanced Automatons is pioneering humanoid robotics —
      engineering machines that think, move, and stand beside humanity.
    </p>
  );
}

function HeroStats() {
  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
      {stats.map((s) => (
        <HeroStatCard key={s.label} {...s} />
      ))}
    </div>
  );
}

function HeroStatCard({
  value,
  label,
  variant,
}: {
  value: string;
  label: string;
  variant: "ink" | "red";
}) {
  const cardClass =
    variant === "red"
      ? "bg-red text-cream-light border-2 border-ink"
      : "bg-ink text-cream-light border-2 border-ink";
  return (
    <div className={`${cardClass} px-4 py-3 text-center`}>
      <div className="font-display text-[28px] leading-none">{value}</div>
      <div className="font-script text-[14px] mt-1 opacity-95">{label}</div>
    </div>
  );
}

function HeroCTAs() {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <Button href="#adam" variant="red">
        View Android
      </Button>
      <Button href="#invest" variant="outline-red">
        Invest Now
      </Button>
    </div>
  );
}

function BrandBadge() {
  return (
    <div className="flex flex-col items-center lg:items-end gap-3">
      <div className="relative w-[300px] h-[300px] lg:w-[340px] lg:h-[340px]">
        {/* Outer black ring */}
        <div className="absolute inset-0 rounded-full bg-ink" />
        {/* Inner red circle */}
        <div className="absolute inset-2 rounded-full bg-red flex flex-col items-center justify-center text-cream-light overflow-hidden">
          {/* Top half: Advanced */}
          <div className="flex-1 w-full flex items-end justify-center pb-2">
            <span className="font-script text-cream-light text-[3rem] leading-none">
              Advanced
            </span>
          </div>
          {/* Middle white stripe */}
          <div className="bg-cream-light text-red w-full py-2.5 text-center">
            <span className="font-script text-[18px] tracking-[0.18em] uppercase font-bold">
              Humanoid Robotics
            </span>
          </div>
          {/* Bottom half: Automatons */}
          <div className="flex-1 w-full flex items-start justify-center pt-2">
            <span className="font-script text-cream-light text-[3rem] leading-none">
              Automatons
            </span>
          </div>
        </div>
      </div>
      <div className="bg-cream-light border-2 border-red px-4 py-1.5">
        <span className="font-script text-red text-[18px]">
          Redefining the Human Condition
        </span>
      </div>
    </div>
  );
}
