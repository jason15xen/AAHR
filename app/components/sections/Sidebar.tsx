type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "ADAM", href: "#adam" },
  { label: "Models & Pricing", href: "#pricing" },
  { label: "Research", href: "#research" },
  { label: "Invest Now", href: "#invest" },
];

const ACTIVE_HREF = "#home";

export default function Sidebar() {
  return (
    <aside
      className="hidden lg:flex flex-col bg-[var(--color-red)] text-cream-light w-[220px] py-6 sticky top-0 h-screen z-40 border-r-4 border-ink"
      aria-label="Primary navigation"
    >
      <BrandSeal />
      <SidebarNav />
      <SidebarFooter />
    </aside>
  );
}

function BrandSeal() {
  return (
    <div className="flex justify-center px-4 mb-8">
      <div className="w-[150px] h-[150px] rounded-full bg-cream-light border-[3px] border-ink flex flex-col items-center justify-center text-center px-3">
        <span className="font-script text-red text-[26px] leading-[0.95]">
          Advanced
        </span>
        <span className="font-script text-red text-[10px] tracking-[0.18em] uppercase font-bold mt-1">
          Humanoid
          <br />
          Robotics
        </span>
        <span className="font-script text-red text-[26px] leading-[0.95] mt-1">
          Automatons
        </span>
      </div>
    </div>
  );
}

function SidebarNav() {
  return (
    <nav className="flex-1 px-5">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <SidebarLink
            key={item.href}
            item={item}
            active={item.href === ACTIVE_HREF}
          />
        ))}
      </ul>
    </nav>
  );
}

function SidebarLink({ item, active }: { item: NavItem; active: boolean }) {
  if (active) {
    return (
      <li>
        <a
          href={item.href}
          className="block bg-cream-light text-red border-2 border-ink px-3 py-2 font-script text-[20px]"
        >
          ★ {item.label}
        </a>
      </li>
    );
  }
  return (
    <li>
      <a
        href={item.href}
        className="block px-3 py-1.5 font-script text-[20px] text-cream-light hover:text-gold-light transition-colors"
      >
        {item.label}
      </a>
    </li>
  );
}

function SidebarFooter() {
  return (
    <div className="px-5 mt-auto">
      <div className="border-2 border-cream-light bg-gold/30 px-3 py-2 text-center font-script">
        <div className="text-[14px] tracking-[0.2em] uppercase font-bold text-cream-light leading-tight">
          Est. 2025
        </div>
        <div className="text-[14px] tracking-[0.2em] uppercase font-bold text-gold-light leading-tight mt-0.5">
          Seed
        </div>
      </div>
    </div>
  );
}
