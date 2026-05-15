import Link from "next/link";

const platforms = ["YouTube", "치지직", "SOOP", "TikTok"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0024] via-black to-[#001a24]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #ff1493 0%, transparent 40%), radial-gradient(circle at 80% 80%, #b347ff 0%, transparent 40%), radial-gradient(circle at 50% 50%, #00dcff 0%, transparent 50%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-[#00dcff] border border-[#00dcff]/40 rounded-full">
          NOW HIRING · 대규모 모집
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff] bg-clip-text text-transparent">
            인플루언서 · BJ
          </span>
          <br />
          <span className="text-white">대규모 모집</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80">
          크리에이터와 함께 성장하는 전문 매니지먼트
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {platforms.map((p) => (
            <span
              key={p}
              className="px-4 py-2 text-sm font-semibold text-white/90 bg-white/5 border border-white/10 rounded-full backdrop-blur"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white rounded-full bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_0_40px_rgba(255,20,147,0.5)] transition-shadow"
          >
            지금 지원하기
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
