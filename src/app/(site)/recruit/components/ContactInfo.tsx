import { Phone, MessageCircle, Mail, type LucideIcon } from "lucide-react";
import {
  KAKAO_CHANNEL_ID,
  KAKAO_CHANNEL_URL,
  PHONE_NUMBER,
  PHONE_TEL_HREF,
  EMAIL_ADDRESS,
  EMAIL_MAILTO_HREF,
} from "@/lib/constants";

const channels: {
  Icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  accent: string;
}[] = [
  {
    Icon: Phone,
    label: "전화",
    value: PHONE_NUMBER,
    href: PHONE_TEL_HREF,
    accent: "text-[#ff1493]",
  },
  {
    Icon: MessageCircle,
    label: "카카오톡",
    value: KAKAO_CHANNEL_ID,
    href: KAKAO_CHANNEL_URL,
    accent: "text-[#b347ff]",
  },
  {
    Icon: Mail,
    label: "이메일",
    value: EMAIL_ADDRESS,
    href: EMAIL_MAILTO_HREF,
    accent: "text-[#00dcff]",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-3xl bg-white border border-[#ededed] p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a]">
              접수 문의
            </h2>
            <p className="mt-2 text-sm text-[#525252]">
              지원 서류: 간단한 이력서 + 자기소개서 (자유 양식)
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#ededed] hover:border-[#ff1493] hover:shadow-[0_4px_16px_rgba(255,20,147,0.08)] transition"
              >
                <c.Icon
                  className={`w-7 h-7 shrink-0 ${c.accent}`}
                  strokeWidth={1.75}
                />
                <div>
                  <div className="text-xs text-[#888888]">{c.label}</div>
                  <div className="text-[#0a0a0a] font-semibold">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
