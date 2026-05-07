type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "ADAM", href: "#adam" },
  { label: "Models & Pricing", href: "#pricing" },
  { label: "Research", href: "#research" },
  { label: "Invest Now", href: "#invest" },
];

export default function Sidebar() {
  const activeHref = "#home";

  return (
    <aside
      className="hidden lg:flex flex-col bg-[var(--color-red)] text-cream-light w-[200px] py-8 sticky top-0 h-screen z-40"
      aria-label="Primary navigation"
    >
      <BrandSeal />

      <nav className="flex-1 px-7 mt-12">
        <ul className="space-y-3.5">
          {navItems.map((item) => (
            <SidebarLink
              key={item.href}
              item={item}
              active={item.href === activeHref}
            />
          ))}
        </ul>
      </nav>

      <SidebarFooter />
    </aside>
  );
}

function BrandSeal() {
  return (
    <div className="flex justify-center px-4">
      <div className="w-20 h-20 rounded-full border-2 border-cream-light flex items-center justify-center bg-red-deeper/40 relative">
        <div className="absolute inset-1 rounded-full border border-cream-light/40 pointer-events-none" />
        <div className="text-center leading-none">
          <div className="font-script italic text-3xl">A</div>
          <div className="text-[7px] tracking-[0.3em] mt-1 opacity-90">AA</div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <li>
      <a
        href={item.href}
        className={`group relative flex items-center gap-3 transition-colors ${
          active ? "text-cream-light" : "text-cream-light/85 hover:text-gold"
        }`}
      >
        <span
          className={`shrink-0 inline-block rounded-full transition-all ${
            active
              ? "w-2 h-2 bg-cream-light"
              : "w-1.5 h-1.5 bg-cream-light/0 border border-cream-light/40 group-hover:bg-gold group-hover:border-gold"
          }`}
          aria-hidden
        />
        <span
          className={`font-script text-[18px] leading-none ${
            active ? "italic" : "italic"
          }`}
        >
          {item.label}
        </span>
      </a>
    </li>
  );
}

function SidebarFooter() {
  return (
    <div className="px-5 mt-auto space-y-3">
      <div className="text-center text-[8px] tracking-[0.32em] uppercase font-bold opacity-80 leading-relaxed">
        <div>Est. 2025</div>
        <div className="mt-1">Austin, TX</div>
      </div>
      <a
        href="#invest"
        className="block text-center bg-red-deepest border border-cream-light/30 px-3 py-2.5 text-[9px] tracking-[0.22em] uppercase font-bold text-gold hover:bg-gold hover:text-ink hover:border-gold transition-colors"
      >
        Funding Round
      </a>
    </div>
  );
}
