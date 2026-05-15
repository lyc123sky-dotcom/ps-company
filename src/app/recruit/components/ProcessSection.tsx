const steps = [
  { icon: "📄", title: "서류 접수", desc: "온라인 폼 제출" },
  { icon: "📞", title: "전화 인터뷰", desc: "간단한 상담 진행" },
  { icon: "👥", title: "대면 면접", desc: "스튜디오 방문 미팅" },
  { icon: "🎫", title: "최종 합격", desc: "계약 체결 및 방송 시작" },
];

export default function ProcessSection() {
  return (
    <section className="bg-gradient-to-b from-transparent via-white/[0.02] to-transparent py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">전형 절차</h2>
          <p className="mt-3 text-white/60">간단한 4단계 프로세스</p>
        </div>
        <ol className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r from-[#ff1493] to-[#b347ff] text-white text-xs font-black flex items-center justify-center">
                {i + 1}
              </div>
              <div className="text-4xl mt-2 mb-3" aria-hidden>{s.icon}</div>
              <div className="font-bold text-white">{s.title}</div>
              <div className="text-xs text-white/60 mt-1">{s.desc}</div>
            </li>
          ))}
        </ol>
        <div className="mt-10 max-w-3xl mx-auto space-y-2 text-sm text-white/70 text-center">
          <p>
            ※ 경력 무관, <span className="text-[#00dcff] font-semibold">방송 유무 상관없이 누구나 지원 가능</span>합니다.
          </p>
          <p>※ 지원 시 간단한 경력 및 자기소개 기재해주세요.</p>
        </div>
      </div>
    </section>
  );
}
