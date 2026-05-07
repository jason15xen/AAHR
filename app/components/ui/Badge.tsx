type BadgeProps = {
  children: React.ReactNode;
  variant?: "gold" | "red" | "ink";
  className?: string;
};

const variants = {
  gold: "bg-gold text-ink",
  red: "bg-red text-cream-light",
  ink: "bg-ink text-cream-light",
};

export default function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block text-[9px] tracking-[0.22em] uppercase font-bold px-2.5 py-1 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
