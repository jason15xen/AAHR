import Badge from "../../ui/Badge";
import CryptoCard from "./CryptoCard";
import { cryptoOptions } from "./invest-data";

export default function CryptoPanel() {
  return (
    <div className="max-w-6xl mx-auto bg-black/40 border border-cream-light/10 p-6 lg:p-8">
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
      <p className="font-script italic text-2xl text-cream-light">
        Crypto Investment Options
      </p>
      <Badge variant="gold">New</Badge>
    </div>
  );
}

function CryptoIntro() {
  return (
    <p className="text-[12px] text-cream-light/70 max-w-3xl mb-6 leading-relaxed">
      Advanced Automatons accepts cryptocurrency investments across all tiers.
      Send your chosen asset to the wallet addresses below and we&apos;ll convert
      at market price within 24 hours to confirm allocation and complete
      documentation.
    </p>
  );
}

function CryptoDisclaimer() {
  return (
    <div className="mt-6 bg-black/60 border border-cream-light/10 p-3 text-[11px] text-cream-light/60 leading-relaxed">
      ⓘ Crypto investments are subject to securities-investor verification.
      Wallet addresses are AES-encrypted in transit. Advanced Automatons does
      not custody crypto in long-term storage. Please consult counsel for
      legal-clarification.
    </div>
  );
}
