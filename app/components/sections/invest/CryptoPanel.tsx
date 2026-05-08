import CryptoCard from "./CryptoCard";
import { cryptoOptions } from "./invest-data";

export default function CryptoPanel() {
  return (
    <div className="max-w-6xl mx-auto bg-ink border-4 border-gold p-6 lg:p-8">
      <CryptoPanelHeader />
      <CryptoIntro />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {cryptoOptions.map((c) => (
          <CryptoCard key={c.symbol} option={c} />
        ))}
      </div>
      <CryptoDisclaimer />
    </div>
  );
}

function CryptoPanelHeader() {
  return (
    <div className="flex items-center gap-3 mb-3">
      <p className="font-script text-[28px] text-cream-light leading-none">
        Crypto Investment Options
      </p>
      <span className="bg-red text-cream-light text-[11px] tracking-[0.18em] uppercase font-bold px-2.5 py-1 border border-cream-light font-display">
        New
      </span>
    </div>
  );
}

function CryptoIntro() {
  return (
    <p className="font-body text-[14px] text-cream-light/80 max-w-3xl mb-6 leading-snug italic">
      Advanced Automatons now accepts cryptocurrency investments across all
      tiers. Send your chosen asset to the wallet addresses below and our IR
      team will contact you within 48 hours to confirm allocation and complete
      documentation.
    </p>
  );
}

function CryptoDisclaimer() {
  return (
    <div className="mt-6 bg-ink-soft border-2 border-gold p-3 font-body text-[12px] text-cream-light/70 leading-snug italic">
      ⚠ Crypto investments are subject to accredited investor verification. All
      wallet addresses are for illustrative purposes. Advanced Automatons does
      not guarantee token exchange rates. Please contact our IR team before
      sending funds: invest@advancedautomatons.com
    </div>
  );
}
