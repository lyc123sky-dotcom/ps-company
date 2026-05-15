import Link from "next/link";

export default function Home() {
  return (
    <section className="relative bg-white min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff]" />
      <div className="text-center px-4 max-w-3xl">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wide text-[#ff1493] bg-[#ff1493]/8 border border-[#ff1493]/20 rounded-full">
          PS COMPANY · 피에스컴퍼니
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-[#0a0a0a]">
          크리에이터가
          <br />
          <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
            마음껏 꿈꾸는 곳
          </span>
        </h1>
        <p className="mt-6 text-[#525252] text-lg">
          유튜브 · 치지직 · SOOP · 틱톡 BJ를 위한 전문 매니지먼트
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Link
            href="/recruit"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white rounded-xl bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_8px_32px_rgba(255,20,147,0.35)] transition-shadow"
          >
            BJ 모집 보기
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 text-base font-bold text-[#0a0a0a] border border-[#0a0a0a] rounded-xl hover:bg-[#0a0a0a] hover:text-white transition"
          >
            문의하기
          </Link>
        </div>
        <p className="mt-12 text-xs text-[#888888]">Coming Soon · 페이지 정식 공개 준비 중</p>
      </div>
    </section>
  );
}
