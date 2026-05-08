import TierCard from "./TierCard";
import type { Skew, SkewVariant } from "./types";

type SkewColumnProps = {
  skew: Skew;
};

export default function SkewColumn({ skew }: SkewColumnProps) {
  const isCommercial = skew.variant === "commercial";
  const headerClass = isCommercial
    ? "bg-ink text-cream-light border-2 border-ink"
    : "bg-red text-cream-light border-2 border-ink";
  const bodyClass = "bg-cream-light text-ink border-x-2 border-b-2 border-ink";

  return (
    <div className="flex flex-col">
      <SkewHeader
        title={skew.title}
        description={skew.description}
        className={headerClass}
      />
      <div className={`p-5 flex-1 ${bodyClass}`}>
        <p className="font-body text-[14px] italic leading-snug text-ink/75 mb-5">
          {skew.longDescription}
        </p>
        <div className="flex flex-col gap-5">
          {skew.tiers.map((tier) => (
            <TierCard
              key={tier.name}
              tier={tier}
              variant={skew.variant}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkewHeader({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className: string;
}) {
  return (
    <div className={`px-6 py-7 text-center ${className}`}>
      <h3 className="font-script text-[44px] leading-none">{title}</h3>
      <p className="font-body text-[14px] mt-2 italic opacity-90">
        {description}
      </p>
    </div>
  );
}
