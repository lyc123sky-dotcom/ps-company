import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.14em] text-[#ff1493] bg-[#ff1493]/8 border border-[#ff1493]/20 rounded-full uppercase">
              404 · Not Found
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-[#0a0a0a]">
              <span className="bg-gradient-to-r from-[#ff1493] via-[#b347ff] to-[#00dcff] bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <h2 className="mt-6 text-2xl sm:text-3xl font-black text-[#0a0a0a]">
              페이지를 찾을 수 없습니다
            </h2>
            <p className="mt-3 text-[#525252] leading-relaxed">
              요청하신 페이지가 이동되었거나 더 이상 존재하지 않습니다.
              <br />
              아래 버튼으로 홈이나 다른 페이지로 이동해주세요.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <LinkButton href="/" variant="primary" size="lg">
                홈으로
                <span aria-hidden>→</span>
              </LinkButton>
              <LinkButton href="/recruit" variant="secondary" size="lg">
                BJ 지원 페이지
              </LinkButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
