export default function AdamFigure() {
  return (
    <div className="relative aspect-[3/4] flex items-end justify-center overflow-hidden bg-cream-light">
      {/* Subtle blueprint grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,26,44,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(196,26,44,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <svg
        viewBox="0 0 200 290"
        className="relative w-[78%] h-[92%]"
        aria-hidden
      >
        <g
          fill="#5a82c8"
          fillOpacity="0.45"
          stroke="#1d3a73"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {/* Head */}
          <path d="M82 12 Q82 4 100 4 Q118 4 118 12 L118 36 Q118 56 100 58 Q82 56 82 36 Z" />
          {/* Visor */}
          <rect x="86" y="20" width="28" height="14" fill="#1d3a73" fillOpacity="0.6" />
          {/* Neck */}
          <rect x="94" y="56" width="12" height="10" />
          {/* Torso */}
          <path d="M68 66 L132 66 L138 138 L62 138 Z" />
          {/* Hips block */}
          <rect x="70" y="138" width="60" height="14" />
          {/* Left arm */}
          <path d="M48 70 L62 70 L62 118 L50 122 Z" />
          <path d="M50 122 L62 118 L62 168 L52 172 Z" />
          {/* Right arm */}
          <path d="M138 70 L152 70 L150 122 L138 118 Z" />
          <path d="M138 118 L150 122 L148 172 L138 168 Z" />
          {/* Hands */}
          <circle cx="55" cy="178" r="9" />
          <circle cx="145" cy="178" r="9" />
          {/* Left leg */}
          <path d="M74 152 L94 152 L94 210 L76 214 Z" />
          <path d="M76 214 L94 210 L94 268 L78 272 Z" />
          {/* Right leg */}
          <path d="M106 152 L126 152 L124 214 L106 210 Z" />
          <path d="M106 210 L124 214 L122 272 L106 268 Z" />
          {/* Feet */}
          <rect x="68" y="270" width="32" height="10" />
          <rect x="100" y="270" width="32" height="10" />
        </g>
      </svg>
    </div>
  );
}
