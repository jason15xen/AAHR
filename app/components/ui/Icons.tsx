type IconProps = {
  size?: number;
  className?: string;
};

const base = (size = 22) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function HomeIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 11 L12 3 L21 11" />
      <path d="M5 9.5 V21 H19 V9.5" />
      <rect x="10" y="14" width="4" height="7" />
    </svg>
  );
}

export function BriefcaseIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="7" width="18" height="13" />
      <path d="M9 7 V5 H15 V7" />
      <path d="M3 12 H21" />
    </svg>
  );
}

export function FactoryIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 21 V11 L9 14 V11 L15 14 V8 L21 11 V21 Z" />
      <rect x="6" y="17" width="2" height="3" />
      <rect x="11" y="17" width="2" height="3" />
      <rect x="16" y="17" width="2" height="3" />
    </svg>
  );
}

export function BulbIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M9 18 H15 M10 21 H14" />
      <path d="M12 3 a6 6 0 0 1 4 10 v3 H8 v-3 a6 6 0 0 1 4-10 z" />
    </svg>
  );
}

export function ChartIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 21 H21" />
      <rect x="5" y="13" width="3" height="6" />
      <rect x="11" y="9" width="3" height="10" />
      <rect x="17" y="5" width="3" height="14" />
    </svg>
  );
}

export function ShieldIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3 L20 6 V12 C20 17 16 20 12 21 C8 20 4 17 4 12 V6 Z" />
      <path d="M9 12 L11 14 L15 10" />
    </svg>
  );
}

export function CompassIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8 L13 13 L8 16 L11 11 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckIcon({ size = 14, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12 L10 17 L19 7" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 14, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 12 H20 M14 6 L20 12 L14 18" />
    </svg>
  );
}

export function StarIcon({ size = 12, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
      <path d="M12 2 L14.6 9 L22 9.5 L16.3 14.4 L18 22 L12 17.8 L6 22 L7.7 14.4 L2 9.5 L9.4 9 Z" />
    </svg>
  );
}

export function DiamondMarker({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block w-2 h-2 rotate-45 bg-current ${className ?? ""}`}
      aria-hidden
    />
  );
}
