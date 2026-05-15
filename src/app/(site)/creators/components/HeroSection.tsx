export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.14em] text-[#b347ff] bg-[#b347ff]/8 border border-[#b347ff]/20 rounded-full uppercase">
          OUR CREATORS
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0a0a0a]">
          함께 만들어가는
          <br />
          <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
            크리에이터
          </span>
        </h1>
        <p className="mt-6 text-lg text-[#525252] max-w-xl mx-auto leading-relaxed">
          오직 콘텐츠로 말하는 BJ들. 자세한 프로필은 각자의 플랫폼에서 만나보세요.
        </p>
        <div className="mt-6 max-w-2xl mx-auto px-4 py-3 rounded-xl bg-[#fafafa] border border-[#ededed] text-xs sm:text-sm text-[#525252] leading-relaxed">
          개별 BJ의 닉네임 · 플랫폼 채널 정보는 소속 크리에이터의 개인정보 보호 정책에 따라 공개하지 않습니다. 협업 · 광고 · 제휴 문의는 회사 채널로 부탁드립니다.
        </div>
      </div>
    </section>
  );
}
