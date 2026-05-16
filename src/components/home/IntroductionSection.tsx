import { MapPin, Tv, Users, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const badges = [
  { Icon: MapPin, label: "광주광역시", sub: "본사 · 스튜디오" },
  { Icon: Tv, label: "4 플랫폼", sub: "YouTube · CHZZK · SOOP · TikTok" },
  { Icon: Users, label: "1:1 매니지먼트", sub: "전담 매니저 케어" },
  { Icon: Sparkles, label: "투명 정산", sub: "신뢰 기반 파트너십" },
];

export default function IntroductionSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <p className="text-xs font-bold tracking-[0.2em] text-[#b347ff] mb-4">
                INTRODUCTION
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a] leading-[1.2]">
                안녕하세요,
                <br />
                <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
                  피에스컴퍼니
                </span>
                입니다
              </h2>
              <div className="mt-6 h-[3px] w-20 bg-gradient-to-r from-[#ff1493] to-[#b347ff] rounded-full" />
            </Reveal>

            {/* 시각 보강 — PS 마크 + 4개 사실 뱃지 */}
            <Reveal delay={150}>
              <div className="relative mt-10 rounded-2xl border border-[#ededed] bg-white p-6 sm:p-8 overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-12 w-56 h-56 rounded-full opacity-25 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, #ff1493 0%, transparent 70%)",
                  }}
                />
                <div className="relative flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl tracking-tighter shadow-[0_4px_16px_rgba(255,20,147,0.18)]"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff1493, #b347ff)",
                      color: "white",
                    }}
                    aria-hidden
                  >
                    PS
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-[0.18em] text-[#737373] uppercase">
                      PS COMPANY
                    </div>
                    <div className="text-base font-bold text-[#0a0a0a] mt-0.5">
                      주식회사 피에스컴퍼니
                    </div>
                  </div>
                </div>
                <ul className="relative mt-6 grid grid-cols-2 gap-2.5">
                  {badges.map((b) => (
                    <li
                      key={b.label}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#fafafa] border border-[#ededed]"
                    >
                      <b.Icon
                        className="w-4 h-4 mt-0.5 text-[#ff1493] shrink-0"
                        strokeWidth={2}
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-[#0a0a0a] truncate">
                          {b.label}
                        </div>
                        <div className="text-[10px] text-[#737373] mt-0.5 leading-snug">
                          {b.sub}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="space-y-5 text-[#0a0a0a] text-base sm:text-[17px] leading-[1.85] max-w-prose">
            <Reveal>
              <p>
                저희는 인터넷 방송이라는 무대 위에서 자신만의 이야기를 만들어가는 크리에이터분들과 함께 호흡하는 매니지먼트 회사입니다. 단순히 방송을 송출하는 것을 넘어, 한 명의 크리에이터가 브랜드가 되고, 한 채널이 문화가 되는 그 과정을 가장 가까운 곳에서 함께합니다.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                광주에 위치한 저희 스튜디오는 단순한 작업 공간이 아니라, 크리에이터의 일상이자 무대이며 새로운 시도가 일어나는 실험실입니다. 최신 방송 장비, 전담 매니지먼트, 투명한 정산 시스템 위에서 BJ분들이 오직 콘텐츠에만 집중할 수 있는 환경을 만들고자 합니다.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="relative my-8 pl-6 pr-4 py-5 rounded-2xl bg-gradient-to-br from-[#ff1493]/5 to-[#b347ff]/5 border-l-2 border-[#ff1493]">
                <div
                  aria-hidden
                  className="absolute -top-2 left-4 text-5xl leading-none font-black text-[#ff1493]/30 select-none"
                >
                  &ldquo;
                </div>
                <p className="text-[#0a0a0a] text-lg font-semibold leading-[1.5]">
                  크리에이터가 즐거워야 시청자도 즐겁다 — 이것이 저희의 가장 중요한 원칙입니다.
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={160}>
              <p>
                앞으로도 피에스컴퍼니는 함께 일하는 크리에이터분들이 더 멀리, 더 자유롭게 갈 수 있도록 든든한 파트너가 되겠습니다.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-[#525252]">감사합니다.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
