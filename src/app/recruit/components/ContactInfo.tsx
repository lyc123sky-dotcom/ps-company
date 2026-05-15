const channels = [
  { icon: "📞", label: "전화", value: "010-5295-0074", href: "tel:010-5295-0074" },
  { icon: "💬", label: "카카오톡", value: "@lycsky", href: "https://pf.kakao.com/" },
  { icon: "📧", label: "이메일", value: "lycsky@naver.com", href: "mailto:lycsky@naver.com" },
];

export default function ContactInfo() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-br from-[#ff1493]/10 via-[#b347ff]/10 to-[#00dcff]/10 border border-white/10 p-8 sm:p-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">접수 문의</h2>
          <p className="mt-2 text-sm text-white/60">
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
              className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#ff1493]/40 hover:bg-black/60 transition"
            >
              <div className="text-3xl" aria-hidden>{c.icon}</div>
              <div>
                <div className="text-xs text-white/60">{c.label}</div>
                <div className="text-white font-semibold">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
