import HeroVisual from "./HeroVisual";
import { LinkButton } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.14em] text-[#ff1493] bg-[#ff1493]/8 border border-[#ff1493]/20 rounded-full uppercase">
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
          </div>
          <div className="order-first lg:order-last">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
