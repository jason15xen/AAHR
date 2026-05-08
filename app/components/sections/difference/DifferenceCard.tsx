type DifferenceCardProps = {
  emoji: string;
  title: string;
  body: string;
};

export default function DifferenceCard({ emoji, title, body }: DifferenceCardProps) {
  return (
    <article className="bg-cream-light border-2 border-ink p-5 shadow-[5px_5px_0_var(--color-ink)] flex flex-col">
      <div className="text-[36px] mb-3">{emoji}</div>
      <h3 className="font-script text-red text-[26px] leading-tight mb-3">
        {title}
      </h3>
      <p className="font-body text-[14px] leading-snug text-ink/80">{body}</p>
    </article>
  );
}
