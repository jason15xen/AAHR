type SectionHeaderProps = {
  preTitle?: string;
  title: string;
  subtitle?: string;
  invert?: boolean;
  withDivider?: boolean;
};

export default function SectionHeader({
  preTitle,
  title,
  subtitle,
  invert = false,
  withDivider = true,
}: SectionHeaderProps) {
  const titleColor = invert ? "text-cream-light" : "text-ink";
  const muted = invert ? "text-cream-light/65" : "text-ink/70";

  return (
    <header className="text-center mb-12">
      {preTitle && (
        <p className="font-script italic text-[28px] text-red mb-1 leading-tight">
          {preTitle}
        </p>
      )}
      <h2
        className={`font-display text-[44px] md:text-[64px] tracking-wide leading-none ${titleColor}`}
      >
        {title}
      </h2>
      {withDivider && <span className="block divider-wave mt-4" />}
      {subtitle && (
        <p className={`mt-3 font-body italic text-[14px] ${muted} max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
