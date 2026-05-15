"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/creators", label: "크리에이터" },
  { href: "/recruit", label: "BJ 모집" },
  { href: "/contact", label: "문의" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 라우트 변경 시 자동 닫힘
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ESC + body scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#ededed]">
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

          <nav
            aria-label="주 메뉴"
            className="hidden md:flex items-center gap-8"
          >
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

          <div className="flex items-center gap-1">
            <LinkButton
              href="/recruit#apply"
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              지원하기
            </LinkButton>
            <button
              type="button"
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-[#0a0a0a] hover:bg-[#f7f7f7] rounded-lg transition"
            >
              {open ? (
                <X className="w-6 h-6" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 드로어 */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="모바일 메뉴"
        className={`md:hidden fixed inset-0 z-30 transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* backdrop */}
        <button
          type="button"
          aria-label="메뉴 닫기"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          className="absolute inset-0 bg-black/30 w-full h-full"
        />
        {/* panel */}
        <div
          className={`absolute top-16 inset-x-0 bg-white border-b border-[#ededed] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-200 ${
            open ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <nav
            aria-label="모바일 주 메뉴"
            className="px-4 py-4 flex flex-col"
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  tabIndex={open ? 0 : -1}
                  className={`px-3 py-3.5 text-base font-semibold rounded-lg ${
                    active
                      ? "text-[#ff1493] bg-[#ff1493]/5"
                      : "text-[#0a0a0a] hover:bg-[#f7f7f7]"
                  } transition`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-[#ededed]">
              <LinkButton
                href="/recruit#apply"
                variant="primary"
                size="md"
                className="w-full"
              >
                지원하기 →
              </LinkButton>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
