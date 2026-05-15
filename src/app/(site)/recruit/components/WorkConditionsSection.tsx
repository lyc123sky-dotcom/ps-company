const conditions = [
  { k: "근무 형태", v: "주 4일 근무 (날짜 협의 가능)" },
  { k: "근무 시간", v: "1일 8시간 근무 (개인 방송은 3~5시간)" },
  {
    k: "급여",
    v: "최소 1일 20만원 보장 / 월 500~1,000만원 이상 / 인센티브가 기본급보다 높은 구조",
  },
  { k: "근무지", v: "전라도 (상세 주소 면접 시 안내)" },
];

export default function WorkConditionsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
            근무 조건
          </h2>
          <p className="mt-3 text-[#525252]">투명하고 안정적인 근무 환경</p>
        </div>
        <div className="max-w-3xl mx-auto rounded-3xl border border-[#ededed] overflow-hidden">
          <div className="px-6 sm:px-8 py-4 bg-[#0a0a0a] text-white text-sm font-bold tracking-wide">
            CONDITIONS
          </div>
          <dl className="bg-white divide-y divide-[#ededed]">
            {conditions.map((c) => (
              <div
                key={c.k}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 px-6 sm:px-8 py-5"
              >
                <dt className="sm:w-28 shrink-0 text-sm font-bold text-[#b347ff]">
                  {c.k}
                </dt>
                <dd className="text-[#0a0a0a]">{c.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
