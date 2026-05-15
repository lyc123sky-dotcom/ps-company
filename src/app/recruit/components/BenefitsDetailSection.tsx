const boxes = [
  {
    icon: "📷",
    title: "고가 장비 지원",
    desc: "최신형 방송 장비 무상 제공. 조명 · 음향 · 카메라 등 프로페셔널 장비 일체.",
  },
  {
    icon: "🤝",
    title: "1:1 전담 매니지먼트",
    desc: "전담 매니저 배정으로 기획 · 촬영 · 수익화 전 과정 케어.",
  },
  {
    icon: "🏠",
    title: "전용 스튜디오 제공",
    desc: "개인 / 크루 전용 스튜디오 완비. 대형 · 소형 엑셀 스튜디오 다수 보유.",
  },
  {
    icon: "📋",
    title: "투명 계약 시스템",
    desc: "투명한 계약 · 정산 시스템으로 신뢰 기반 파트너십 구축.",
  },
];

const extras = [
  "춤 · 노래 레슨 무료 지원",
  "초보자 교육 프로그램 운영",
  "다양한 플랫폼 동시 송출 가능 (유튜브 · 치지직 · SOOP · 틱톡)",
];

export default function BenefitsDetailSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">복리후생</h2>
        <p className="mt-3 text-white/60">크리에이터를 위한 전방위 지원 시스템</p>
      </div>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        {boxes.map((b) => (
          <div
            key={b.title}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#b347ff]/40 transition"
          >
            <div className="text-3xl mb-3" aria-hidden>{b.icon}</div>
            <h3 className="text-xl font-bold text-white">{b.title}</h3>
            <p className="mt-2 text-white/70 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
        <div className="text-sm font-bold text-[#00dcff] mb-3">추가 혜택</div>
        <ul className="space-y-2 text-white/80">
          {extras.map((e) => (
            <li key={e} className="flex gap-2">
              <span className="text-[#00dcff]" aria-hidden>+</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
