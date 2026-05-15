export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wide text-[#00dcff] bg-[#00dcff]/8 border border-[#00dcff]/20 rounded-full">
          OUR CREATORS
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-[#0a0a0a]">
          함께 만들어가는
          <br />
          <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
            크리에이터
          </span>
        </h1>
        <p className="mt-6 text-lg text-[#525252] max-w-xl mx-auto leading-relaxed">
          오직 콘텐츠로 말하는 BJ들. 자세한 프로필은 각자의 플랫폼에서 만나보세요.
        </p>
      </div>
    </section>
  );
}
