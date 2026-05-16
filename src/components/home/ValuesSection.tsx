import {
  Mic,
  Building2,
  Gem,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const values: {
  Icon: LucideIcon;
  color: string;
  title: string;
  desc: string;
  accent: string;
  href: string;
  ctaLabel: string;
}[] = [
  {
    Icon: Mic,
    color: "text-[#ff1493]",
    title: "전문 매니지먼트",
    desc: "크리에이터 한 명 한 명의 색깔을 존중하고, 1:1 전담 매니저가 기획부터 수익화까지 함께합니다.",
    accent:
      "hover:border-[#ff1493] hover:shadow-[0_8px_24px_rgba(255,20,147,0.1)]",
    href: "/recruit",
    ctaLabel: "지원하기",
  },
  {
    Icon: Building2,
    color: "text-[#b347ff]",
    title: "최고의 작업 환경",
    desc: "광주에 위치한 대형 · 소형 스튜디오와 최신 방송 장비. 콘텐츠에만 집중할 수 있는 공간을 제공합니다.",
    accent:
      "hover:border-[#b347ff] hover:shadow-[0_8px_24px_rgba(179,71,255,0.1)]",
    href: "/recruit",
    ctaLabel: "스튜디오 보기",
  },
  {
    Icon: Gem,
    color: "text-[#00dcff]",
    title: "투명 정산 시스템",
    desc: "계약과 정산 전 과정을 투명하게. 신뢰를 기반으로 한 장기적 파트너십을 추구합니다.",
    accent:
      "hover:border-[#00dcff] hover:shadow-[0_8px_24px_rgba(0,220,255,0.1)]",
    href: "/recruit",
    ctaLabel: "조건 확인",
  },
  {
    Icon: Rocket,
    color: "text-[#ff1493]",
    title: "콘텐츠에 집중",
    desc: "촬영 · 송출 · 홍보 · 정산 모든 운영을 회사가 책임지고, BJ는 오직 콘텐츠에만 집중하면 됩니다.",
    accent:
      "hover:border-[#ff1493] hover:shadow-[0_8px_24px_rgba(255,20,147,0.1)]",
    href: "/contact",
    ctaLabel: "문의하기",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative bg-[#f7f7f7] overflow-hidden">
      {/* 미세 배경 blob (좌측) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -left-32 w-[360px] h-[360px] rounded-full opacity-[0.18] blur-3xl"
        style={{
          background: "radial-gradient(circle, #ff1493 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <Reveal>
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
        </Reveal>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div
                className={`relative h-full p-6 pt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#ededed] transition-all duration-300 hover:-translate-y-1 ${v.accent}`}
              >
                {/* 번호 outline (대형, 배경 장식) */}
                <div
                  aria-hidden
                  className="absolute top-3 right-4 text-5xl font-black tracking-tight leading-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(10,10,10,0.08)",
                  }}
                >
                  0{i + 1}
                </div>

                <v.Icon
                  className={`relative w-8 h-8 mb-3 ${v.color}`}
                  strokeWidth={1.75}
                />
                <h3 className="relative text-lg font-bold text-[#0a0a0a]">
                  {v.title}
                </h3>
                <p className="relative mt-2 text-sm text-[#525252] leading-relaxed">
                  {v.desc}
                </p>
                <Link
                  href={v.href}
                  className="group/cta relative mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#0a0a0a] hover:text-[#ff1493] transition-colors"
                >
                  {v.ctaLabel}
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-1"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
