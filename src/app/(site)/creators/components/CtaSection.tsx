import { LinkButton } from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a]">
          함께 성장할 BJ를{" "}
          <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
            찾고 있습니다
          </span>
        </h2>
        <p className="mt-3 text-[#525252]">
          유튜브 · 치지직 · SOOP · 틱톡 BJ 대규모 모집 진행 중
        </p>
        <div className="mt-8">
          <LinkButton href="/recruit#apply" variant="primary" size="lg">
            BJ 지원하기
            <span aria-hidden>→</span>
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
