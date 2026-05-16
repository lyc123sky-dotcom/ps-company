import { Check, ChevronDown, MapPin, UserCheck, Coins } from "lucide-react";
import HeroVisual from "./HeroVisual";
import { LinkButton } from "@/components/ui/Button";

const trustItems = [
  { Icon: MapPin, label: "광주 본사 스튜디오" },
  { Icon: UserCheck, label: "1:1 전담 매니저" },
  { Icon: Coins, label: "투명 정산 시스템" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff]" />
      {/* 미세 배경 blob (좌상단) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #ff1493 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 w-[480px] h-[480px] rounded-full opacity-[0.14] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #00dcff 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-[0.14em] text-[#ff1493] bg-[#ff1493]/8 border border-[#ff1493]/20 rounded-full uppercase">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#ff1493] live-dot"
                aria-hidden
              />
              PS COMPANY · 피에스컴퍼니
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0a0a0a]">
              크리에이터가
              <br />
              <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
                마음껏 꿈꾸는 곳
              </span>
            </h1>
            <p className="mt-6 text-[#525252] text-base sm:text-lg leading-relaxed max-w-xl">
              유튜브 · 치지직 · SOOP · 틱톡 등 4대 플랫폼에서 활동하는 BJ들과 함께 만들어가는 전문 매니지먼트 기업입니다. 크리에이터 한 명 한 명의 색깔을 존중하고 그 가능성을 끝까지 끌어올립니다.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <LinkButton href="/recruit#apply" variant="primary" size="lg">
                BJ 지원하기
                <span aria-hidden>→</span>
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" size="lg">
                문의하기
              </LinkButton>
            </div>
            <ul
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#525252]"
              aria-label="피에스컴퍼니 핵심 요소"
            >
              {trustItems.map((t) => (
                <li key={t.label} className="inline-flex items-center gap-1.5">
                  <Check
                    className="w-4 h-4 text-[#ff1493]"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">{t.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-first lg:order-last">
            <HeroVisual />
          </div>
        </div>

        {/* 스크롤 인디케이터 — 데스크탑만 */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-6 flex-col items-center gap-1.5 text-[#737373]">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ChevronDown
            className="w-4 h-4 scroll-cue"
            strokeWidth={2}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
