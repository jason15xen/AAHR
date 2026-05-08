import type { InvestmentTier, TierVariant } from "./types";

type Props = { tier: InvestmentTier };

const styleByVariant: Record<
  TierVariant,
  {
    card: string;
    accent: string;
    bullet: string;
    tierLabel: string;
    border: string;
  }
> = {
  cream: {
    // "cream" is now repurposed as the BLACK Associate card with gold border
    card: "bg-ink text-cream-light",
    accent: "text-gold",
    bullet: "text-gold",
    tierLabel: "text-gold",
    border: "border-4 border-gold",
  },
  red: {
    card: "bg-red text-cream-light",
    accent: "text-cream-light",
    bullet: "text-gold",
    tierLabel: "text-gold",
    border: "border-4 border-gold",
  },
  gold: {
    card: "bg-gold text-ink",
    accent: "text-red",
    bullet: "text-red",
    tierLabel: "text-red",
    border: "border-4 border-gold-dark",
  },
};

export default function InvestorTierCard({ tier }: Props) {
  const styles = styleByVariant[tier.variant];

  return (
    <article className={`relative ${styles.card} ${styles.border} p-6`}>
      {tier.badge && <PopularBadge label={tier.badge} />}
      <p
        className={`font-script text-[16px] tracking-[0.3em] uppercase ${styles.tierLabel} mb-1`}
      >
        Tier
      </p>
      <h3 className="font-script text-[40px] leading-none">{tier.name}</h3>
      <p className={`font-script text-[28px] mt-2 mb-5 ${styles.accent}`}>
        from {tier.price}
      </p>
      <ul className="space-y-1.5 font-body text-[15px]">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex gap-2">
            <span className={`shrink-0 ${styles.bullet}`}>✦</span>
            <span className="leading-snug">{perk}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function PopularBadge({ label }: { label: string }) {
  return (
    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-ink text-[12px] tracking-[0.2em] uppercase font-bold px-4 py-1.5 border-2 border-ink whitespace-nowrap font-display">
      ★ {label} ★
    </span>
  );
}
