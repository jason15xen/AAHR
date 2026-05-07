import type { TechCard as TechCardType } from "./types";

type TechCardProps = {
  card: TechCardType;
};

export default function TechCard({ card }: TechCardProps) {
  if (card.highlight) {
    return <HighlightedTechCard card={card} />;
  }
  return <StandardTechCard card={card} />;
}

function StandardTechCard({ card }: TechCardProps) {
  return (
    <article className="p-5 bg-red-deeper border border-cream-light/10 text-cream-light">
      <p className="font-display text-2xl text-cream-light/35">{card.num}</p>
      <h3 className="font-display text-xl mt-1 leading-tight">{card.title}</h3>
      <p className="text-[12px] leading-relaxed mt-2 opacity-90">{card.body}</p>
    </article>
  );
}

function HighlightedTechCard({ card }: TechCardProps) {
  return (
    <article className="p-5 bg-gold/10 border border-gold text-cream-light relative">
      <p className="text-[9px] tracking-[0.25em] uppercase font-bold text-gold mb-2">
        ▲ Proprietary Technology
      </p>
      <p className="font-display text-2xl text-gold/40">{card.num}</p>
      <h3 className="font-display text-xl mt-1 text-gold leading-tight">
        {card.title}
      </h3>
      <p className="text-[12px] leading-relaxed mt-2 opacity-95">{card.body}</p>
      {card.tags && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] tracking-[0.15em] uppercase font-bold bg-gold text-ink px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
