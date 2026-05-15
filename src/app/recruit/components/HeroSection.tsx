import Link from "next/link";

const platforms = ["YouTube", "치지직", "SOOP", "TikTok"];

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wide text-[#ff1493] bg-[#ff1493]/8 border border-[#ff1493]/20 rounded-full">
          NOW HIRING · 대규모 모집
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-[#0a0a0a]">
          <span className="bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff] bg-clip-text text-transparent">
            인플루언서 · BJ
          </span>
          <br />
          대규모 모집
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#525252]">
          크리에이터와 함께 성장하는 전문 매니지먼트
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {platforms.map((p) => (
            <span
              key={p}
              className="px-4 py-2 text-sm font-semibold text-[#0a0a0a] bg-white border border-[#ededed] rounded-full"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_8px_32px_rgba(255,20,147,0.35)] transition-shadow"
          >
            지금 지원하기
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
