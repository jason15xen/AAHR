type DifferenceCardProps = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

export default function DifferenceCard({ icon, title, body }: DifferenceCardProps) {
  return (
    <article className="bg-cream-light border border-line p-6 lg:p-7 flex flex-col">
      <IconBubble>{icon}</IconBubble>
      <h3 className="font-serif font-bold text-base mt-5 mb-2">{title}</h3>
      <p className="text-[12px] leading-relaxed text-ink/75">{body}</p>
    </article>
  );
}

function IconBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-ink shrink-0">
      {children}
    </div>
  );
}
