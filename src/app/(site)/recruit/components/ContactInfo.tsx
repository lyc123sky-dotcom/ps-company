const channels = [
  {
    icon: "📞",
    label: "전화",
    value: "010-5295-0074",
    href: "tel:010-5295-0074",
    accent: "text-[#ff1493]",
  },
  {
    icon: "💬",
    label: "카카오톡",
    value: "@lycsky",
    href: "https://pf.kakao.com/",
    accent: "text-[#b347ff]",
  },
  {
    icon: "📧",
    label: "이메일",
    value: "lycsky@naver.com",
    href: "mailto:lycsky@naver.com",
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
                <div className={`text-3xl ${c.accent}`} aria-hidden>{c.icon}</div>
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
