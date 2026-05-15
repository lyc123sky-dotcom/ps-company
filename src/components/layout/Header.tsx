import Link from "next/link";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/creators", label: "크리에이터" },
  { href: "/recruit", label: "BJ 모집" },
  { href: "/contact", label: "문의" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#ededed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-black text-xl tracking-tight text-[#0a0a0a]"
        >
          <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
            PS
          </span>{" "}
          COMPANY
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#525252] hover:text-[#0a0a0a] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/recruit#apply"
          className="md:inline-flex hidden items-center px-4 py-2 text-xs font-bold text-white rounded-full bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_4px_16px_rgba(255,20,147,0.35)] transition-shadow"
        >
          지원하기
        </Link>
      </div>
    </header>
  );
}
