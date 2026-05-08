import Link from "next/link";

type Variant =
  | "red"
  | "outline"
  | "outline-red"
  | "ink"
  | "gold";

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
  red:
    "bg-red text-cream-light border-2 border-ink hover:bg-red-dark",
  outline:
    "bg-cream-light text-ink border-2 border-ink hover:bg-ink hover:text-cream-light",
  "outline-red":
    "bg-cream-light text-red border-2 border-red hover:bg-red hover:text-cream-light",
  ink:
    "bg-ink text-cream-light border-2 border-ink hover:bg-cream-light hover:text-ink",
  gold:
    "bg-gold text-ink border-2 border-ink hover:bg-gold-light",
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
  const classes = `inline-flex items-center justify-center font-script text-[20px] px-6 py-2.5 transition-colors leading-tight ${
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
