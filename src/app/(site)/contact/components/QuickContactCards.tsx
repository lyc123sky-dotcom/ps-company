import { Phone, MessageCircle, Mail, type LucideIcon } from "lucide-react";

const channels: {
  Icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  accent: string;
  hover: string;
}[] = [
  {
    Icon: Phone,
    label: "전화",
    value: "010-5295-0074",
    href: "tel:010-5295-0074",
    accent: "text-[#ff1493]",
    hover:
      "hover:border-[#ff1493] hover:shadow-[0_8px_24px_rgba(255,20,147,0.08)]",
  },
  {
    Icon: MessageCircle,
    label: "카카오톡",
    value: "@lycsky",
    href: "https://pf.kakao.com/_lycsky",
    accent: "text-[#b347ff]",
    hover:
      "hover:border-[#b347ff] hover:shadow-[0_8px_24px_rgba(179,71,255,0.08)]",
  },
  {
    Icon: Mail,
    label: "이메일",
    value: "lycsky@naver.com",
    href: "mailto:lycsky@naver.com",
    accent: "text-[#00dcff]",
    hover:
      "hover:border-[#00dcff] hover:shadow-[0_8px_24px_rgba(0,220,255,0.08)]",
  },
];

export default function QuickContactCards() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a]">
            빠른 연락
          </h2>
          <p className="mt-2 text-sm text-[#525252]">
            평일 10:00~19:00 · 주말 답변은 다소 지연될 수 있습니다
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-4 p-6 rounded-2xl bg-white border border-[#ededed] transition ${c.hover}`}
            >
              <c.Icon
                className={`w-8 h-8 shrink-0 ${c.accent}`}
                strokeWidth={1.75}
              />
              <div>
                <div className="text-xs text-[#888888]">{c.label}</div>
                <div className="text-[#0a0a0a] font-bold text-lg">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
