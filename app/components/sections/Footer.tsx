const links = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-light/70 border-t border-cream-light/10 py-10">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <FooterBrand />
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
}

function FooterBrand() {
  return (
    <div>
      <p className="font-script italic text-2xl text-cream-light">
        Advanced Automatons
      </p>
      <p className="text-[10px] tracking-[0.25em] uppercase mt-1 opacity-70 font-bold">
        Codifying the human condition for a better tomorrow.
      </p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="text-[10px] tracking-[0.2em] uppercase opacity-70 flex gap-4 font-bold">
      <span>© 2025</span>
      {links.map((l) => (
        <a key={l.label} href={l.href} className="hover:text-gold transition-colors">
          {l.label}
        </a>
      ))}
    </div>
  );
}
