import { StarIcon } from "../../ui/Icons";
import type { InvestmentTier, TierVariant } from "./types";

type Props = { tier: InvestmentTier };

const styleByVariant: Record<TierVariant, { card: string; accent: string }> = {
  cream: {
    card: "bg-cream-light text-ink border-cream-light",
    accent: "text-red",
  },
  red: { card: "bg-red text-cream-light border-red", accent: "text-gold" },
  gold: { card: "bg-gold text-ink border-gold", accent: "text-red" },
};

export default function InvestorTierCard({ tier }: Props) {
  const styles = styleByVariant[tier.variant];

  return (
    <article className={`relative ${styles.card} border-2 p-7`}>
      {tier.badge && <PopularBadge label={tier.badge} />}
      <p
        className={`text-[10px] tracking-[0.28em] uppercase font-bold ${styles.accent} mb-1`}
      >
        Tier
      </p>
      <h3 className="font-script italic text-3xl">{tier.name}</h3>
      <p className="font-display text-4xl mt-2 mb-5">from {tier.price}</p>
      <ul className="space-y-1.5 text-[12px]">
        {tier.perks.map((p) => (
          <li key={p} className="flex gap-2">
            <span className={`${styles.accent} shrink-0`}>•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function PopularBadge({ label }: { label: string }) {
  return (
    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1 inline-flex items-center gap-1">
      <StarIcon size={10} />
      {label}
    </span>
  );
}
