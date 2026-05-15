export default function IntroductionSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
          <div className="lg:sticky lg:top-24">
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
          </div>
          <div className="space-y-5 text-[#0a0a0a] text-base sm:text-[17px] leading-[1.85] max-w-prose">
            <p>
              저희는 인터넷 방송이라는 무대 위에서 자신만의 이야기를 만들어가는 크리에이터분들과 함께 호흡하는 매니지먼트 회사입니다. 단순히 방송을 송출하는 것을 넘어, 한 명의 크리에이터가 브랜드가 되고, 한 채널이 문화가 되는 그 과정을 가장 가까운 곳에서 함께합니다.
            </p>
            <p>
              광주에 위치한 저희 스튜디오는 단순한 작업 공간이 아니라, 크리에이터의 일상이자 무대이며 새로운 시도가 일어나는 실험실입니다. 최신 방송 장비, 전담 매니지먼트, 투명한 정산 시스템 위에서 BJ분들이 오직 콘텐츠에만 집중할 수 있는 환경을 만들고자 합니다.
            </p>
            <blockquote className="border-l-2 border-[#ff1493] pl-5 my-6 text-[#0a0a0a] text-lg font-semibold leading-[1.6]">
              크리에이터가 즐거워야 시청자도 즐겁다 — 이것이 저희의 가장 중요한 원칙입니다.
            </blockquote>
            <p>
              앞으로도 피에스컴퍼니는 함께 일하는 크리에이터분들이 더 멀리, 더 자유롭게 갈 수 있도록 든든한 파트너가 되겠습니다.
            </p>
            <p className="text-[#525252]">감사합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
