import {
  Tv,
  Users,
  Headphones,
  Wallet,
  Building2,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

type Stat = {
  Icon: LucideIcon;
  iconColor: string;
  sparkColor: string;
  label: string;
  desc: string;
} & (
  | { kind: "num"; value: number; suffix?: string }
  | { kind: "text"; text: string }
);

const stats: Stat[] = [
  {
    kind: "num",
    Icon: Tv,
    iconColor: "text-[#ff1493]",
    sparkColor: "#ff1493",
    value: 4,
    label: "활동 플랫폼",
    desc: "유튜브 · 치지직 · SOOP · 틱톡",
  },
  {
    kind: "num",
    Icon: Users,
    iconColor: "text-[#b347ff]",
    sparkColor: "#b347ff",
    value: 10,
    suffix: "+",
    label: "활동 크리에이터",
    desc: "다양한 색깔의 BJ들",
  },
  {
    kind: "text",
    Icon: Headphones,
    iconColor: "text-[#00dcff]",
    sparkColor: "#00dcff",
    text: "24/7",
    label: "전담 매니지먼트",
    desc: "1:1 케어 시스템",
  },
  {
    kind: "num",
    Icon: Wallet,
    iconColor: "text-[#ff1493]",
    sparkColor: "#ff1493",
    value: 20,
    suffix: "만원+",
    label: "1일 최소 보장",
    desc: "방송 출연 시 최저 보장",
  },
  {
    kind: "text",
    Icon: Building2,
    iconColor: "text-[#b347ff]",
    sparkColor: "#b347ff",
    text: "전라도 최대",
    label: "스튜디오 규모",
    desc: "광주 기반 작업 공간",
  },
];

// 미니 sparkline — 카드 우상단 장식. 순수 SVG, 인터랙션 없음.
function Sparkline({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 60 22"
      className="w-14 h-5 opacity-70"
      aria-hidden
    >
      <polyline
        points="0,18 10,14 20,15 30,9 40,11 50,5 60,3"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="3" r="1.75" fill={color} />
    </svg>
  );
}

export default function StatsSection() {
  return (
    <section className="relative bg-white border-t border-[#ededed] overflow-hidden">
      {/* 미세 배경 blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-32 w-[360px] h-[360px] rounded-full opacity-[0.12] blur-3xl -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, #b347ff 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-3">
              BY THE NUMBERS
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
              숫자가 말하는{" "}
              <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
                피에스컴퍼니
              </span>
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="relative h-full p-6 rounded-2xl bg-white border border-[#ededed] hover:border-[#ff1493]/40 hover:shadow-[0_8px_24px_rgba(255,20,147,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <s.Icon
                    className={`w-7 h-7 ${s.iconColor}`}
                    strokeWidth={1.75}
                  />
                  <Sparkline color={s.sparkColor} />
                </div>
                <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a] leading-none">
                  {s.kind === "num" ? (
                    <Counter to={s.value} suffix={s.suffix ?? ""} />
                  ) : (
                    <span>{s.text}</span>
                  )}
                </div>
                <div className="mt-4 text-sm font-bold text-[#0a0a0a]">
                  {s.label}
                </div>
                <div className="mt-1 text-xs text-[#737373] leading-relaxed">
                  {s.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
