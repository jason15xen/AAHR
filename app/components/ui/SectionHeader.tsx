import Eyebrow from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  preTitle?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
  withDivider?: boolean;
  eyebrowFlourish?: boolean;
};

export default function SectionHeader({
  eyebrow,
  preTitle,
  title,
  subtitle,
  align = "center",
  invert = false,
  withDivider = true,
  eyebrowFlourish = true,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const accent = invert ? "text-gold" : "text-red";
  const muted = invert ? "text-cream-light/65" : "text-ink/70";

  return (
    <header className={`${alignClass} mb-12`}>
      {eyebrow && (
        <Eyebrow flourish={eyebrowFlourish} className={accent}>
          {eyebrow}
        </Eyebrow>
      )}
      {preTitle && (
        <p className={`font-script italic text-2xl mt-3 ${muted}`}>
          {preTitle}
        </p>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mt-1 ${
          invert ? "text-cream-light" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {withDivider && (
        <div className={`mt-4 mx-auto w-32 h-px relative ${invert ? "bg-gold" : "bg-red"}`}>
          <span
            className={`absolute left-1/2 -translate-x-1/2 -top-1 w-2.5 h-2.5 rotate-45 ${
              invert ? "bg-gold" : "bg-red"
            }`}
          />
        </div>
      )}
      {subtitle && (
        <p
          className={`mt-5 text-[11px] tracking-[0.25em] uppercase ${muted} max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
