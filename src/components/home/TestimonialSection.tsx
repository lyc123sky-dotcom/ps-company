// NOTE: Testimonial 인용구는 더미 데이터입니다. PIPA 정책에 따라 실명/채널 비공개로
// 익명 식별자(플랫폼 + 연차) 형태로 표시. 클라이언트가 실제 후기 제공 시 교체.

import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type Testimonial = {
  quote: string;
  platform: string;
  tenure: string;
  gradient: string;
  initial: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "혼자였다면 못 갔을 길을 매니저님 덕분에 갔어요. 콘텐츠에만 집중할 수 있는 환경이 가장 큰 차이입니다.",
    platform: "YouTube",
    tenure: "2년차 크리에이터",
    gradient: "linear-gradient(135deg, #ff1493, #b347ff)",
    initial: "A",
  },
  {
    quote:
      "스튜디오 장비도 좋지만, 무엇보다 정산이 투명해서 신뢰가 갑니다. 회사를 믿고 방송에 집중할 수 있어요.",
    platform: "치지직",
    tenure: "1년차 크리에이터",
    gradient: "linear-gradient(135deg, #00dcff, #b347ff)",
    initial: "B",
  },
  {
    quote:
      "처음 BJ 시작할 때 아무것도 몰랐는데, 매니저님이 기획부터 송출까지 다 같이 해주셔서 빠르게 적응했어요.",
    platform: "SOOP",
    tenure: "1년차 크리에이터",
    gradient: "linear-gradient(135deg, #b347ff, #ff1493)",
    initial: "C",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative bg-white border-t border-[#ededed] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-32 w-[420px] h-[420px] rounded-full opacity-[0.1] blur-3xl"
        style={{
          background: "radial-gradient(circle, #ff1493 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-3">
              TESTIMONIAL
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
              크리에이터의{" "}
              <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
                목소리
              </span>
            </h2>
            <p className="mt-4 text-[#525252] max-w-xl mx-auto leading-relaxed">
              피에스컴퍼니와 함께하는 소속 크리에이터들이 직접 전하는 이야기.
            </p>
          </div>
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.initial} delay={i * 100}>
              <article className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-[#ededed] hover:border-[#ff1493]/40 hover:shadow-[0_8px_24px_rgba(255,20,147,0.08)] hover:-translate-y-1 transition-all duration-300">
                <Quote
                  className="w-7 h-7 text-[#ff1493]/50 mb-4"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="text-[#0a0a0a] text-[15px] sm:text-base leading-[1.75]">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-[#ededed]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm shrink-0"
                    style={{ background: t.gradient }}
                    aria-hidden
                  >
                    {t.initial}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-[#0a0a0a]">
                      {t.tenure}
                    </div>
                    <div className="text-xs text-[#737373] mt-0.5">
                      {t.platform} 활동
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
