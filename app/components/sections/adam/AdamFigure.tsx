export default function AdamFigure() {
  return (
    <div className="relative aspect-[3/4] flex items-center justify-center overflow-hidden bg-grid-blue">
      <svg
        viewBox="0 0 200 290"
        className="w-[58%] h-[88%] text-cream-light/95 drop-shadow-md"
        fill="currentColor"
        aria-hidden
      >
        <defs>
          <pattern id="adam-pat" patternUnits="userSpaceOnUse" width="5" height="5">
            <path d="M0 2.5 L5 2.5" stroke="#2c4d92" strokeWidth="0.6" />
            <path d="M2.5 0 L2.5 5" stroke="#2c4d92" strokeWidth="0.6" />
          </pattern>
        </defs>
        <g fill="url(#adam-pat)" stroke="#1d3a73" strokeWidth="1">
          {/* Head */}
          <path d="M82 12 Q82 4 100 4 Q118 4 118 12 L118 36 Q118 56 100 58 Q82 56 82 36 Z" />
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
          <rect x="68" y="270" width="32" height="10" rx="2" />
          <rect x="100" y="270" width="32" height="10" rx="2" />
        </g>
      </svg>
    </div>
  );
}
