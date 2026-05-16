import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "어떤 플랫폼에서 활동하나요?",
    a: "유튜브 · 치지직 · SOOP · 틱톡 4대 플랫폼에서 BJ들이 활동하고 있습니다. 본인이 활동하고자 하는 플랫폼을 선택해 함께할 수 있습니다.",
  },
  {
    q: "초보도 지원할 수 있나요?",
    a: "경력은 전혀 무관합니다. 방송 경험 유무에 상관없이 누구나 지원 가능합니다. 지원 후 전담 매니저가 시작부터 함께합니다.",
  },
  {
    q: "장비나 스튜디오는 회사가 지원하나요?",
    a: "광주 본사에 위치한 스튜디오에서 최신 방송 장비를 무료로 사용하실 수 있습니다. 별도의 장비 구매나 임대 비용이 들지 않습니다.",
  },
  {
    q: "수익 분배 · 정산은 어떻게 진행되나요?",
    a: "투명한 정산 시스템을 기반으로 계약 단계에서 명확하게 안내드립니다. 1일 최소 보장 금액(20만원+)이 제공되며, 세부 조건은 미팅 시 상세히 설명드립니다.",
  },
  {
    q: "전담 매니저는 어떤 역할을 하나요?",
    a: "1:1 전담 매니저가 콘텐츠 기획부터 송출 · 홍보 · 정산까지 모든 운영을 함께 책임집니다. BJ는 오직 콘텐츠에만 집중할 수 있습니다.",
  },
  {
    q: "지원 후 절차는 어떻게 되나요?",
    a: "온라인 지원서 접수 → 전화 인터뷰 → 대면 면접 → 계약 체결 순으로 진행됩니다. 빠르게 검토 후 연락드립니다.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative bg-[#f7f7f7] border-t border-[#ededed] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-32 w-[360px] h-[360px] rounded-full opacity-[0.14] blur-3xl"
        style={{
          background: "radial-gradient(circle, #00dcff 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-3">
              FREQUENTLY ASKED
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
              자주 묻는{" "}
              <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
                질문
              </span>
            </h2>
          </div>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-2xl bg-white border border-[#ededed] open:border-[#ff1493]/40 open:shadow-[0_8px_24px_rgba(255,20,147,0.06)] transition-all duration-300">
                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5">
                  <span className="font-bold text-[#0a0a0a] text-sm sm:text-base">
                    {f.q}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 text-[#737373] group-open:rotate-180 group-open:text-[#ff1493] transition-transform duration-300 shrink-0"
                    strokeWidth={2}
                    aria-hidden
                  />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-[#525252] leading-[1.75]">
                  {f.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
