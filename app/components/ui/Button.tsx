import Link from "next/link";

type Variant = "red" | "outline" | "gold" | "ink";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  red: "bg-red text-cream-light hover:bg-red-dark",
  outline: "bg-transparent border border-ink text-ink hover:bg-ink hover:text-cream-light",
  gold: "bg-gold text-ink hover:bg-gold-light",
  ink: "bg-ink text-cream-light hover:bg-black",
};

export default function Button({
  children,
  variant = "red",
  href,
  type = "button",
  fullWidth = false,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-bold tracking-[0.18em] uppercase text-[11px] px-6 py-3.5 transition-colors ${
    variants[variant]
  } ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
