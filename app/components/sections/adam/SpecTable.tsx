export type Spec = { label: string; value: string };

type SpecTableProps = {
  specs: Spec[];
};

export default function SpecTable({ specs }: SpecTableProps) {
  return (
    <dl className="border-2 border-ink">
      {specs.map((s, i) => (
        <SpecRow key={s.label} {...s} alt={i % 2 === 1} />
      ))}
    </dl>
  );
}

function SpecRow({
  label,
  value,
  alt,
}: Spec & { alt?: boolean }) {
  return (
    <div
      className={`grid grid-cols-[160px_1fr] sm:grid-cols-[200px_1fr] gap-4 px-4 py-3 border-b border-ink/30 last:border-b-0 ${
        alt ? "bg-cream" : "bg-cream-light"
      }`}
    >
      <dt className="font-display text-[12px] tracking-[0.2em] uppercase font-bold text-red">
        {label}
      </dt>
      <dd className="font-body text-[15px] text-ink leading-snug">{value}</dd>
    </div>
  );
}
