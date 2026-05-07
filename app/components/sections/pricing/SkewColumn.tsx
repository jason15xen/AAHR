import {
  HomeIcon,
  BriefcaseIcon,
  FactoryIcon,
} from "../../ui/Icons";
import TierCard from "./TierCard";
import type { Skew, SkewVariant } from "./types";

type SkewColumnProps = {
  skew: Skew;
};

const iconBySkew: Record<SkewVariant, React.ReactNode> = {
  residential: <HomeIcon />,
  commercial: <BriefcaseIcon />,
  industrial: <FactoryIcon />,
};

export default function SkewColumn({ skew }: SkewColumnProps) {
  const isIndustrial = skew.variant === "industrial";
  const bodyBg = isIndustrial
    ? "bg-ink text-cream-light border-ink"
    : "bg-cream-light text-ink border-line";

  return (
    <div className="flex flex-col">
      <SkewHeader
        title={skew.title}
        description={skew.description}
        icon={iconBySkew[skew.variant]}
      />

      <div className={`flex flex-col gap-4 p-5 flex-1 border ${bodyBg}`}>
        {skew.tiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} dark={isIndustrial} />
        ))}
      </div>
    </div>
  );
}

function SkewHeader({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-red text-cream-light px-6 py-7 text-center">
      <div className="flex justify-center mb-2 opacity-90">{icon}</div>
      <h3 className="font-script italic text-3xl">{title}</h3>
      <p className="text-[10px] tracking-[0.25em] uppercase mt-2 opacity-80 font-bold">
        {description}
      </p>
    </div>
  );
}
