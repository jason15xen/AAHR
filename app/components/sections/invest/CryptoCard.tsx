import type { CryptoOption } from "./types";

type Props = { option: CryptoOption };

export default function CryptoCard({ option }: Props) {
  return (
    <button
      type="button"
      className="text-left bg-ink p-4 hover:bg-ink-soft transition-colors w-full border-[3px]"
      style={{ borderColor: option.color }}
    >
      <CryptoHeader option={option} />
      <p className="text-[12px] text-cream-light/60 font-mono break-all leading-snug mt-3 mb-2">
        {option.address.slice(0, 36)}…
      </p>
      <p
        className="text-[13px] font-script font-bold"
        style={{ color: option.color }}
      >
        ✦ {option.tag}
      </p>
    </button>
  );
}

function CryptoHeader({ option }: Props) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className="w-9 h-9 rounded-full flex items-center justify-center text-[15px] font-bold text-white shrink-0"
        style={{ backgroundColor: option.color }}
      >
        {option.glyph}
      </span>
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-[15px] text-cream-light">
          {option.name}
        </span>
        <span className="text-[11px] text-cream-light/55 tracking-[0.18em] uppercase font-bold">
          {option.symbol}
        </span>
      </div>
    </div>
  );
}
