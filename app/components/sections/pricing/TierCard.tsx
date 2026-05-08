import type { Tier, SkewVariant } from "./types";

type TierCardProps = {
  tier: Tier;
  variant: SkewVariant;
};

export default function TierCard({ tier, variant }: TierCardProps) {
  const isIndustrial = variant === "industrial";

  return (
    <article
      className={`p-4 ${
        isIndustrial
          ? "bg-ink text-cream-light border-2 border-red"
          : "bg-cream-light text-ink border-2 border-ink"
      }`}
    >
      <TierHeader
        name={tier.name}
        price={tier.price}
        badge={tier.badge}
        dark={isIndustrial}
      />
      <TierFeatures features={tier.features} dark={isIndustrial} />
      <TierCta dark={isIndustrial} />
    </article>
  );
}

function TierHeader({
  name,
  price,
  badge,
  dark,
}: {
  name: string;
  price: string;
  badge?: string;
  dark: boolean;
}) {
  const priceColor = dark ? "text-gold" : "text-red";
  const titleColor = dark ? "text-cream-light" : "text-ink";
  return (
    <div className="mb-3 flex items-start justify-between gap-2">
      <div>
        <p className={`font-script text-[22px] leading-none ${titleColor}`}>
          {name}
        </p>
        <p className={`font-display text-[28px] mt-1 leading-none ${priceColor}`}>
          {price}
        </p>
      </div>
      {badge && <TierBadge label={badge} dark={dark} />}
    </div>
  );
}

function TierBadge({ label, dark }: { label: string; dark: boolean }) {
  const isPopular = label.toLowerCase() === "popular";
  if (dark) {
    // Industrial badges
    return (
      <span
        className={`text-[10px] tracking-[0.2em] uppercase font-bold px-2.5 py-1 font-display whitespace-nowrap border-2 ${
          isPopular
            ? "bg-red text-cream-light border-red"
            : "bg-cream-light text-ink border-cream-light"
        }`}
      >
        {label}
      </span>
    );
  }
  // Residential / Commercial badges
  return (
    <span
      className={`text-[10px] tracking-[0.2em] uppercase font-bold px-2.5 py-1 font-display whitespace-nowrap border-2 border-ink ${
        isPopular ? "bg-gold text-ink" : "bg-cream text-ink"
      }`}
    >
      {label}
    </span>
  );
}

function TierFeatures({
  features,
  dark,
}: {
  features: string[];
  dark: boolean;
}) {
  return (
    <ul
      className={`space-y-1 mb-4 font-body text-[15px] ${
        dark ? "text-cream-light/85" : "text-ink/85"
      }`}
    >
      {features.map((f, i) => (
        <li key={i} className="flex gap-2">
          <span className={`shrink-0 ${dark ? "text-gold" : "text-red"}`}>
            ✦
          </span>
          <span className="leading-snug">{f}</span>
        </li>
      ))}
    </ul>
  );
}

function TierCta({ dark }: { dark: boolean }) {
  return (
    <button
      type="button"
      className={`w-full py-2.5 font-script text-[18px] border-2 transition-colors ${
        dark
          ? "bg-red text-cream-light border-red hover:bg-red-dark"
          : "bg-red text-cream-light border-red hover:bg-red-dark"
      }`}
    >
      Request a Quote
    </button>
  );
}
