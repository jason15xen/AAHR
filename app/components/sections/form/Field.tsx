type FieldProps = {
  label: string;
  children: React.ReactNode;
};

export default function Field({ label, children }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-[12px] tracking-[0.28em] uppercase font-bold text-gold mb-2 font-display">
        {label}
      </span>
      {children}
    </label>
  );
}

const fieldClass =
  "w-full bg-ink-soft border-2 border-gold/60 px-3.5 py-3 text-[15px] text-cream-light placeholder:text-cream-light/40 focus:border-gold outline-none transition-colors font-body";

export { fieldClass };
