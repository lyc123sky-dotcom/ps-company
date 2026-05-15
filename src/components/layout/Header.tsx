import Link from "next/link";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/creators", label: "크리에이터" },
  { href: "/recruit", label: "BJ 모집" },
  { href: "/contact", label: "문의" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-xl tracking-tight text-white">
          PS COMPANY
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
