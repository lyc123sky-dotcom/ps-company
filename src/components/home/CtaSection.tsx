import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] text-white px-6 sm:px-12 lg:px-16 py-14 sm:py-20">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff]" />
          <div
            className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #ff1493 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <div
            className="absolute -left-16 -top-16 w-60 h-60 rounded-full opacity-25 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #b347ff 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[#00dcff] mb-4">
              GET STARTED
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]">
              지금, 함께{" "}
              <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
                시작합시다
              </span>
            </h2>
            <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed">
              크리에이터로서 본인의 다음 챕터를 피에스컴퍼니와 함께 열어보세요.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/recruit#apply"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white rounded-xl bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_8px_32px_rgba(255,20,147,0.5)] transition-shadow"
              >
                BJ 지원하기
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white border border-white/30 rounded-xl hover:bg-white hover:text-[#0a0a0a] transition"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
