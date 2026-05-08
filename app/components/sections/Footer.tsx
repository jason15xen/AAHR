export default function Footer() {
  return (
    <footer className="bg-red text-cream-light py-8 border-t-4 border-ink">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <FooterBrand />
          <FooterTagline />
          <FooterRights />
        </div>
      </div>
    </footer>
  );
}

function FooterBrand() {
  return (
    <div>
      <p className="font-script text-[28px] text-cream-light leading-none">
        Advanced Automatons
      </p>
      <p className="text-[10px] tracking-[0.25em] uppercase mt-1 text-cream-light/80 font-display">
        Humanoid Robotics · Est. 2025
      </p>
    </div>
  );
}

function FooterTagline() {
  return (
    <p className="font-script text-[18px] italic text-cream-light/95">
      &quot;Redefining the human condition for a better tomorrow.&quot;
    </p>
  );
}

function FooterRights() {
  return (
    <p className="font-body text-[12px] text-cream-light/85">
      © 2025–2026 Advanced Automatons Inc. All Rights Reserved.
    </p>
  );
}
