import type { CryptoOption } from "./types";

type Props = { option: CryptoOption };

export default function CryptoCard({ option }: Props) {
  return (
    <button
      type="button"
      className="text-left border border-cream-light/15 bg-black/40 p-4 hover:border-gold transition-colors w-full"
      style={{ borderTopColor: option.color, borderTopWidth: 2 }}
    >
      <CryptoHeader option={option} />
      <p className="text-[10px] text-cream-light/50 font-mono break-all leading-relaxed">
        {option.address.slice(0, 26)}…
      </p>
      <p className="text-[9px] text-cream-light/40 mt-2 tracking-[0.2em] uppercase font-bold">
        Click to copy address
      </p>
    </button>
  );
}

function CryptoHeader({ option }: Props) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold text-white"
        style={{ backgroundColor: option.color }}
      >
        {option.glyph}
      </span>
      <span className="font-bold text-sm text-cream-light">{option.name}</span>
      <span className="text-[9px] text-cream-light/50 ml-auto tracking-[0.2em] uppercase font-bold">
        {option.symbol}
      </span>
    </div>
  );
}
