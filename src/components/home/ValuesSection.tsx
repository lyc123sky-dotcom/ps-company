import {
  Mic,
  Building2,
  Gem,
  Rocket,
  type LucideIcon,
} from "lucide-react";

const values: {
  Icon: LucideIcon;
  color: string;
  title: string;
  desc: string;
  accent: string;
}[] = [
  {
    Icon: Mic,
    color: "text-[#ff1493]",
    title: "전문 매니지먼트",
    desc: "크리에이터 한 명 한 명의 색깔을 존중하고, 1:1 전담 매니저가 기획부터 수익화까지 함께합니다.",
    accent:
      "hover:border-[#ff1493] hover:shadow-[0_8px_24px_rgba(255,20,147,0.08)]",
  },
  {
    Icon: Building2,
    color: "text-[#b347ff]",
    title: "최고의 작업 환경",
    desc: "광주에 위치한 대형 · 소형 스튜디오와 최신 방송 장비. 콘텐츠에만 집중할 수 있는 공간을 제공합니다.",
    accent:
      "hover:border-[#b347ff] hover:shadow-[0_8px_24px_rgba(179,71,255,0.08)]",
  },
  {
    Icon: Gem,
    color: "text-[#00dcff]",
    title: "투명 정산 시스템",
    desc: "계약과 정산 전 과정을 투명하게. 신뢰를 기반으로 한 장기적 파트너십을 추구합니다.",
    accent:
      "hover:border-[#00dcff] hover:shadow-[0_8px_24px_rgba(0,220,255,0.08)]",
  },
  {
    Icon: Rocket,
    color: "text-[#ff1493]",
    title: "콘텐츠에 집중",
    desc: "촬영 · 송출 · 홍보 · 정산 모든 운영을 회사가 책임지고, BJ는 오직 콘텐츠에만 집중하면 됩니다.",
    accent:
      "hover:border-[#ff1493] hover:shadow-[0_8px_24px_rgba(255,20,147,0.08)]",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-3">
            WHY PS COMPANY
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
            크리에이터를 위한{" "}
            <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
              네 가지 약속
            </span>
          </h2>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className={`p-6 rounded-2xl bg-white border border-[#ededed] transition ${v.accent}`}
            >
              <v.Icon
                className={`w-8 h-8 mb-3 ${v.color}`}
                strokeWidth={1.75}
              />
              <h3 className="text-lg font-bold text-[#0a0a0a]">{v.title}</h3>
              <p className="mt-2 text-sm text-[#525252] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
