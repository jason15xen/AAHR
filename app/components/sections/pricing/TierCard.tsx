import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import type { Tier } from "./types";

type TierCardProps = {
  tier: Tier;
  dark?: boolean;
};

export default function TierCard({ tier, dark = false }: TierCardProps) {
  return (
    <div
      className={`relative p-5 ${
        dark
          ? "bg-ink-soft border border-cream-light/10"
          : "bg-cream border border-line"
      }`}
    >
      {tier.badge && (
        <div className="absolute top-3 right-3">
          <Badge variant="gold">{tier.badge}</Badge>
        </div>
      )}

      <TierHeader name={tier.name} price={tier.price} dark={dark} />
      <TierFeatures features={tier.features} dark={dark} />
      <TierCta dark={dark} />
    </div>
  );
}

function TierHeader({
  name,
  price,
  dark,
}: {
  name: string;
  price: string;
  dark: boolean;
}) {
  return (
    <div className="mb-3">
      <p
        className={`text-[10px] tracking-[0.22em] uppercase font-bold ${
          dark ? "text-cream-light/60" : "text-ink/60"
        }`}
      >
        {name}
      </p>
      <p
        className={`font-display text-3xl mt-1 ${
          dark ? "text-gold" : "text-red"
        }`}
      >
        {price}
      </p>
    </div>
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
      className={`space-y-1.5 text-[12px] mb-5 ${
        dark ? "text-cream-light/85" : "text-ink/80"
      }`}
    >
      {features.map((f, i) => (
        <li key={i} className="flex gap-2">
          <span className={`shrink-0 ${dark ? "text-gold" : "text-red"}`}>
            •
          </span>
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

function TierCta({ dark }: { dark: boolean }) {
  return (
    <Button
      type="button"
      variant={dark ? "gold" : "red"}
      fullWidth
      className="!py-2.5 !text-[10px]"
    >
      Request a Quote
    </Button>
  );
}
