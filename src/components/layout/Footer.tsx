import Link from "next/link";
import {
  KAKAO_CHANNEL_ID,
  KAKAO_CHANNEL_URL,
  PHONE_NUMBER,
  PHONE_TEL_HREF,
  EMAIL_ADDRESS,
  EMAIL_MAILTO_HREF,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#f7f7f7] border-t border-[#ededed] text-[#525252]">
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
