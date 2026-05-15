export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wide text-[#b347ff] bg-[#b347ff]/8 border border-[#b347ff]/20 rounded-full">
          CONTACT US
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-[#0a0a0a]">
          함께{" "}
          <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
            만들어 갑니다
          </span>
        </h1>
        <p className="mt-6 text-lg text-[#525252]">
          제휴 · 협업 · 기타 모든 문의를 환영합니다
        </p>
      </div>
    </section>
  );
}
