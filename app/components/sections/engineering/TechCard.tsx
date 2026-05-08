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
    <article className="grid grid-cols-[60px_1fr] border-2 border-ink min-h-[280px]">
      <div className="bg-ink flex items-center justify-center">
        <span className="font-display text-cream-light text-[36px] -rotate-90 tracking-widest">
          {card.num}
        </span>
      </div>
      <div className="bg-cream-light p-4">
        <h3 className="font-script text-red text-[26px] leading-tight mb-2">
          {card.title}
        </h3>
        <p className="font-body text-[14px] leading-snug text-ink/80">
          {card.body}
        </p>
      </div>
    </article>
  );
}

function HighlightedTechCard({ card }: TechCardProps) {
  return (
    <article className="grid grid-cols-[60px_1fr] border-2 border-ink min-h-[280px] relative">
      <div className="bg-ink flex items-center justify-center">
        <span className="font-display text-gold text-[36px] -rotate-90 tracking-widest">
          {card.num}
        </span>
      </div>
      <div className="bg-gold p-4 relative">
        <span className="absolute -top-3 left-3 bg-red text-cream-light px-2 py-1 text-[10px] tracking-[0.2em] uppercase font-bold border border-ink">
          ★ Proprietary Technology ★
        </span>
        <h3 className="font-script text-red text-[26px] leading-tight mb-2 mt-4">
          {card.title}
        </h3>
        <p className="font-body text-[14px] leading-snug text-ink/85">
          {card.body}
        </p>
        {card.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-[0.1em] uppercase font-bold bg-cream-light text-ink border border-ink px-2 py-1 font-display"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
