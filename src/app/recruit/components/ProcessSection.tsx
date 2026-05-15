const steps = [
  { icon: "📄", title: "서류 접수", desc: "온라인 폼 제출" },
  { icon: "📞", title: "전화 인터뷰", desc: "간단한 상담 진행" },
  { icon: "👥", title: "대면 면접", desc: "스튜디오 방문 미팅" },
  { icon: "🎫", title: "최종 합격", desc: "계약 체결 및 방송 시작" },
];

export default function ProcessSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
            전형 절차
          </h2>
          <p className="mt-3 text-[#525252]">간단한 4단계 프로세스</p>
        </div>
        <ol className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative pt-6 px-6 pb-6 rounded-2xl bg-white border border-[#ededed] text-center"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[#ff1493] to-[#b347ff] text-white text-sm font-black flex items-center justify-center shadow-[0_4px_12px_rgba(255,20,147,0.3)]">
                {i + 1}
              </div>
              <div className="text-4xl mt-2 mb-3" aria-hidden>{s.icon}</div>
              <div className="font-bold text-[#0a0a0a]">{s.title}</div>
              <div className="text-xs text-[#888888] mt-1">{s.desc}</div>
            </li>
          ))}
        </ol>
        <div className="mt-10 max-w-3xl mx-auto space-y-2 text-sm text-[#525252] text-center">
          <p>
            ※ 경력 무관,{" "}
            <span className="text-[#ff1493] font-semibold">
              방송 유무 상관없이 누구나 지원 가능
            </span>
            합니다.
          </p>
          <p>※ 지원 시 간단한 경력 및 자기소개 기재해주세요.</p>
        </div>
      </div>
    </section>
  );
}
