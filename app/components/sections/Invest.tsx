import InvestorTierCard from "./invest/InvestorTierCard";
import CryptoPanel from "./invest/CryptoPanel";
import { investmentTiers } from "./invest/invest-data";

export default function Invest() {
  return (
    <section
      id="invest"
      className="bg-ink text-cream-light py-16 lg:py-20 border-y-4 border-ink"
    >
      <div className="px-6 md:px-12 lg:px-16">
        <InvestHeader />

        <p className="text-center font-script text-[24px] text-cream-light mb-6">
          Investment Tiers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {investmentTiers.map((tier) => (
            <InvestorTierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <CryptoPanel />
      </div>
    </section>
  );
}

function InvestHeader() {
  return (
    <div className="text-center mb-12">
      <p className="font-script italic text-[28px] text-red mb-1">Invest Now</p>
      <h2 className="font-display text-[44px] md:text-[64px] tracking-wide leading-none text-cream-light">
        OWN A PIECE OF THE FUTURE
      </h2>
      <p className="font-body italic text-[14px] text-cream-light/65 mt-3 tracking-wide">
        Seed round now open · $154B projected market by 2035 · 12% target market share
      </p>
      <span className="divider-wave mt-3" />
    </div>
  );
}
