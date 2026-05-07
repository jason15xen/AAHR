export type Spec = { label: string; value: string };

type SpecTableProps = {
  specs: Spec[];
};

export default function SpecTable({ specs }: SpecTableProps) {
  return (
    <dl className="border-t border-ink/15">
      {specs.map((s) => (
        <SpecRow key={s.label} {...s} />
      ))}
    </dl>
  );
}

function SpecRow({ label, value }: Spec) {
  return (
    <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] gap-4 py-3.5 border-b border-ink/15">
      <dt className="text-[10px] tracking-[0.25em] uppercase font-bold text-ink/55">
        {label}
      </dt>
      <dd className="text-sm text-ink leading-snug">{value}</dd>
    </div>
  );
}
