const positions = [
  {
    label: "모집 1",
    title: "개인 컨텐츠 방송 크리에이터",
    theme: "dark" as const,
    items: [
      { k: "방송 시간", v: "1일 평균 3~5시간 (자유롭게 조정 가능)" },
      { k: "컨텐츠", v: "댄스 · 노래 · 소통 · 게임 등 자유 주제" },
      { k: "급여", v: "기본급 + 인센티브 (월 500~1,000만원 이상 가능)" },
      { k: "특징", v: "개인 스튜디오 제공, 방송 시간 완전 자율" },
    ],
  },
  {
    label: "모집 2",
    title: "크루 컨텐츠 방송 게스트",
    theme: "light" as const,
    items: [
      { k: "구성", v: "MC 1명 + 여성 게스트 3~4명" },
      { k: "컨텐츠", v: "다양한 게임을 통한 순위 경쟁 예능 프로그램" },
      { k: "급여", v: "방송 출연당 최소 20만원 + 인센티브 (개인 수입금)" },
      { k: "방송 시간", v: "평균 6~8시간 (게임 통해 조기 퇴근 가능)" },
      { k: "특징", v: "크루 스튜디오 제공" },
    ],
  },
];

export default function PositionsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
            모집 부문
          </h2>
          <p className="mt-3 text-[#525252]">원하는 방송 스타일을 선택하세요</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {positions.map((p) => {
            const isDark = p.theme === "dark";
            return (
              <div
                key={p.title}
                className={
                  isDark
                    ? "relative p-8 rounded-3xl bg-[#0a0a0a] text-white overflow-hidden"
                    : "p-8 rounded-3xl bg-white text-[#0a0a0a] border border-[#ededed] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                }
              >
                {isDark && (
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff1493] to-[#b347ff]" />
                )}
                <div
                  className={
                    isDark
                      ? "inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-[#ff1493] to-[#b347ff]"
                      : "inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-[#ff1493] rounded-full border border-[#ff1493]/30 bg-[#ff1493]/5"
                  }
                >
                  {p.label}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black">{p.title}</h3>
                <dl className="mt-6 space-y-3">
                  {p.items.map((item) => (
                    <div
                      key={item.k}
                      className="flex flex-col sm:flex-row sm:gap-4 text-sm"
                    >
                      <dt
                        className={`sm:w-24 shrink-0 font-semibold ${
                          isDark ? "text-[#00dcff]" : "text-[#b347ff]"
                        }`}
                      >
                        {item.k}
                      </dt>
                      <dd
                        className={isDark ? "text-white/85" : "text-[#525252]"}
                      >
                        {item.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
