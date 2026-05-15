import Link from "next/link";
import { signOut } from "@/app/admin/(dash)/actions";

const nav = [
  { href: "/admin", label: "대시보드", exact: true },
  { href: "/admin/applications", label: "BJ 지원" },
  { href: "/admin/inquiries", label: "문의" },
];

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-[#ededed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link href="/admin" className="text-sm font-black tracking-tight text-[#0a0a0a]">
            <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
              PS
            </span>{" "}
            ADMIN
          </Link>
          <nav className="hidden sm:flex items-center gap-5">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-[#525252] hover:text-[#0a0a0a] transition"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="px-3 py-1.5 text-xs font-semibold text-[#525252] border border-[#ededed] rounded-md hover:bg-[#f7f7f7] hover:text-[#0a0a0a] transition"
          >
            로그아웃
          </button>
        </form>
      </div>
      <nav className="sm:hidden flex items-center gap-5 px-4 pb-3 -mt-1 border-t border-[#ededed] pt-3">
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="text-sm text-[#525252] hover:text-[#0a0a0a] transition"
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
