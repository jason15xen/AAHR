import SectionHeader from "../ui/SectionHeader";
import Eyebrow from "../ui/Eyebrow";
import InvestorTierCard from "./invest/InvestorTierCard";
import CryptoPanel from "./invest/CryptoPanel";
import { investmentTiers } from "./invest/invest-data";

export default function Invest() {
  return (
    <section
      id="invest"
      className="bg-ink text-cream-light py-20 lg:py-24 relative"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <SectionHeader
          preTitle="Invest Now"
          title="OWN A PIECE OF THE FUTURE"
          subtitle="Seed round now open · $25K minimum entry · 12-target market share"
          invert
          withDivider={false}
        />

        <div className="text-center mb-5">
          <Eyebrow className="text-gold">Investment Tiers</Eyebrow>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-16">
          {investmentTiers.map((tier) => (
            <InvestorTierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <CryptoPanel />
      </div>
    </section>
  );
}
