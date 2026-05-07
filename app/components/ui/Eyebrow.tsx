type EyebrowProps = {
  children: React.ReactNode;
  flourish?: boolean;
  className?: string;
};

export default function Eyebrow({ children, flourish, className = "" }: EyebrowProps) {
  return (
    <p
      className={`text-[10px] tracking-[0.32em] uppercase font-bold ${
        flourish ? "divider-flourish" : ""
      } ${className}`}
    >
      {children}
    </p>
  );
}
