const benefits = [
  { icon: "💰", title: "월 500~1,000만원", desc: "인센티브 중심 보상 구조" },
  { icon: "📅", title: "1일 최소 20만원 보장", desc: "방송 출연 시 최저 보장" },
  { icon: "🎵", title: "춤·노래 무료 레슨", desc: "전문 트레이너 지원" },
  { icon: "❤️", title: "초보자 환영", desc: "열정만 있다면 OK" },
  { icon: "🏢", title: "전라도 최대 규모 스튜디오", desc: "프로페셔널 환경" },
  { icon: "▶️", title: "4대 플랫폼 송출", desc: "유튜브 · 치지직 · SOOP · 틱톡" },
];

export default function BenefitsGrid() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
            왜{" "}
            <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
              피에스컴퍼니
            </span>
            인가
          </h2>
          <p className="mt-3 text-[#525252]">크리에이터에게 필요한 모든 것을 한곳에서</p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group p-6 rounded-2xl bg-white border border-[#ededed] hover:border-[#ff1493] hover:shadow-[0_8px_24px_rgba(255,20,147,0.08)] transition"
            >
              <div className="text-4xl mb-3" aria-hidden>{b.icon}</div>
              <div className="text-lg font-bold text-[#0a0a0a]">{b.title}</div>
              <p className="mt-1 text-sm text-[#525252]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
