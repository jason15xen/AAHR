type FieldProps = {
  label: string;
  children: React.ReactNode;
};

export default function Field({ label, children }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.28em] uppercase font-bold text-cream-light/70 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

const fieldClass =
  "w-full bg-transparent border border-cream-light/20 px-3.5 py-3 text-sm text-cream-light placeholder:text-cream-light/35 focus:border-gold outline-none transition-colors";

export { fieldClass };
