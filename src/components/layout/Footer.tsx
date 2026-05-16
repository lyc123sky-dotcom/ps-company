import Link from "next/link";
import { MessageCircle, type LucideIcon } from "lucide-react";
import {
  KAKAO_CHANNEL_ID,
  KAKAO_CHANNEL_URL,
  PHONE_NUMBER,
  PHONE_TEL_HREF,
  EMAIL_ADDRESS,
  EMAIL_MAILTO_HREF,
} from "@/lib/constants";

// 인라인 brand SVG — lucide-react 1.16에는 brand 아이콘이 빠져있음
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

// 소셜 채널 — Kakao만 실제 연결, 나머지는 시각 placeholder (준비 중).
// 클라이언트가 실제 채널 URL 제공하면 href 채우고 disabled 제거.
type Social = {
  Icon:
    | LucideIcon
    | ((props: React.SVGProps<SVGSVGElement>) => React.JSX.Element);
  label: string;
  href?: string;
  external?: boolean;
};
const socials: Social[] = [
  {
    Icon: MessageCircle,
    label: "카카오톡 채널",
    href: KAKAO_CHANNEL_URL,
    external: true,
  },
  { Icon: InstagramIcon, label: "Instagram (준비 중)" },
  { Icon: YoutubeIcon, label: "YouTube (준비 중)" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#f7f7f7] border-t border-[#ededed] text-[#525252]">
      {/* 상단 그라데이션 라인 — 헤더와 통일 */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-black text-lg mb-2 text-[#0a0a0a]">
            <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
              PS
            </span>{" "}
            COMPANY
          </div>
          <p className="text-sm">주식회사 피에스컴퍼니</p>
          <p className="text-xs mt-1 text-[#737373]">
            크리에이터가 마음껏 꿈꾸는 곳
          </p>
          <ul className="mt-5 flex items-center gap-2" aria-label="소셜 채널">
            {socials.map((s) => {
              const isDisabled = !s.href;
              if (isDisabled) {
                return (
                  <li key={s.label}>
                    <span
                      aria-disabled="true"
                      title={s.label}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#ededed] text-[#a3a3a3] opacity-50 cursor-not-allowed"
                    >
                      <s.Icon className="w-4 h-4" strokeWidth={1.75} />
                      <span className="sr-only">{s.label}</span>
                    </span>
                  </li>
                );
              }
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#ededed] text-[#525252] hover:border-[#ff1493] hover:text-[#ff1493] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <s.Icon className="w-4 h-4" strokeWidth={1.75} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="text-sm">
          <div className="text-[#0a0a0a] font-semibold mb-3 text-xs uppercase tracking-[0.14em]">
            CONTACT
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href={PHONE_TEL_HREF}
                className="hover:text-[#0a0a0a] transition"
              >
                전화 {PHONE_NUMBER}
              </a>
            </li>
            <li>
              <a
                href={EMAIL_MAILTO_HREF}
                className="hover:text-[#0a0a0a] transition"
              >
                이메일 {EMAIL_ADDRESS}
              </a>
            </li>
            <li>
              <a
                href={KAKAO_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0a0a0a] transition"
              >
                카카오톡 {KAKAO_CHANNEL_ID}
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="text-[#0a0a0a] font-semibold mb-3 text-xs uppercase tracking-[0.14em]">
            COMPANY
          </div>
          <ul className="space-y-2">
            <li>사업자등록번호 112-87-03956</li>
            <li>광주광역시 서구</li>
            <li>상무연하로 60, 비101호</li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="text-[#0a0a0a] font-semibold mb-3 text-xs uppercase tracking-[0.14em]">
            POLICY
          </div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy"
                className="hover:text-[#0a0a0a] transition"
              >
                개인정보처리방침
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#0a0a0a] transition">
                이용약관
              </Link>
            </li>
            <li>
              <Link
                href="/recruit"
                className="hover:text-[#0a0a0a] transition"
              >
                BJ 모집
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#0a0a0a] transition"
              >
                문의
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#ededed] py-4 text-xs text-center text-[#737373]">
        © {year} PS COMPANY. All rights reserved.
      </div>
    </footer>
  );
}
