import {
  Send,
  MessageCircle,
  FileSignature,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const steps: {
  Icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}[] = [
  {
    Icon: Send,
    title: "지원",
    desc: "온라인 폼으로 간단 지원",
    color: "#ff1493",
  },
  {
    Icon: MessageCircle,
    title: "미팅",
    desc: "전화 · 대면 상담",
    color: "#ff1493",
  },
  {
    Icon: FileSignature,
    title: "계약",
    desc: "투명한 조건으로 계약 체결",
    color: "#b347ff",
  },
  {
    Icon: Sparkles,
    title: "데뷔",
    desc: "전담 매니저와 첫 방송 시작",
    color: "#b347ff",
  },
  {
    Icon: TrendingUp,
    title: "성장",
    desc: "장기적 파트너로 함께 성장",
    color: "#00dcff",
  },
];

export default function ProcessHomeSection() {
  return (
    <section className="relative bg-white border-t border-[#ededed] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/3 w-[420px] h-[420px] rounded-full opacity-[0.1] blur-3xl"
        style={{
          background: "radial-gradient(circle, #b347ff 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
              함께하는{" "}
              <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
                다섯 단계
              </span>
            </h2>
            <p className="mt-4 text-[#525252] max-w-xl mx-auto leading-relaxed">
              지원부터 데뷔, 그리고 장기적 성장까지. 한 사람의 크리에이터를 끝까지 동반합니다.
            </p>
          </div>
        </Reveal>
        <ol className="relative grid gap-5 sm:gap-3 grid-cols-1 sm:grid-cols-5">
          {/* 가로 연결선 (sm 이상) */}
          <div
            aria-hidden
            className="hidden sm:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#ff1493]/30 via-[#b347ff]/30 to-[#00dcff]/30"
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 110}>
              <div className="relative flex flex-col items-center text-center">
                <div
                  className="relative w-14 h-14 rounded-full bg-white border-2 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                  style={{ borderColor: s.color }}
                >
                  <s.Icon
                    className="w-6 h-6"
                    strokeWidth={1.75}
                    style={{ color: s.color }}
                  />
                </div>
                <div
                  className="absolute -top-1 -right-1 sm:-right-2 w-5 h-5 rounded-full text-white text-[10px] font-black flex items-center justify-center"
                  style={{ background: s.color }}
                >
                  {i + 1}
                </div>
                <div className="mt-4 text-base font-bold text-[#0a0a0a]">
                  {s.title}
                </div>
                <div className="mt-1 text-xs text-[#737373] leading-relaxed max-w-[12rem]">
                  {s.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
