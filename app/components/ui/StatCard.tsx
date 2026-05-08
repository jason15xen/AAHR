type StatCardProps = {
  value: string;
  label: string;
  variant?: "red" | "cream" | "gold" | "ink";
  size?: "sm" | "md";
  bordered?: boolean;
  className?: string;
};

const variants = {
  red: "bg-red text-cream-light",
  cream: "bg-cream-light text-ink",
  gold: "bg-gold text-ink",
  ink: "bg-ink text-cream-light",
};

export default function StatCard({
  value,
  label,
  variant = "red",
  size = "md",
  bordered = false,
  className = "",
}: StatCardProps) {
  const valueSize = size === "sm" ? "text-2xl" : "text-3xl md:text-4xl";
  const borderClass = bordered ? "border-2 border-ink" : "";

  return (
    <div className={`px-5 py-4 ${variants[variant]} ${borderClass} ${className}`}>
      <div className={`font-display ${valueSize} leading-none`}>{value}</div>
      <div className="text-[9px] tracking-[0.28em] uppercase mt-2 font-bold opacity-80">
        {label}
      </div>
    </div>
  );
}
