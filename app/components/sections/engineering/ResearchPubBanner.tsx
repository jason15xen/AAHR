export default function ResearchPubBanner() {
  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <div className="bg-red-deepest border border-cream-light/15 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <div className="font-script italic text-2xl text-cream-light">
          Research Publications
        </div>
        <div className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold">
          Coming Soon
        </div>
        <p className="sm:ml-auto text-[11px] text-cream-light/80 max-w-md leading-relaxed">
          Our research team is preparing forthcoming publications on
          breakthrough advances in neuromorphic computing and biomechanical
          locomotion.
        </p>
      </div>
    </div>
  );
}
