import Image from "next/image";

const photos = [
  { file: "IMG_0977.PNG", alt: "피에스컴퍼니 광주 스튜디오" },
  { file: "IMG_0979.PNG", alt: "피에스컴퍼니 광주 스튜디오 내부" },
];

import Reveal from "@/components/ui/Reveal";

export default function StudioSection() {
  return (
    <section className="relative bg-[#f7f7f7] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full opacity-[0.12] blur-3xl"
        style={{
          background: "radial-gradient(circle, #b347ff 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-3">
              STUDIO
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
              광주에 있는{" "}
              <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
                우리의 스튜디오
              </span>
            </h2>
            <p className="mt-4 text-[#525252] max-w-xl mx-auto leading-relaxed">
              크리에이터의 일상이자 무대. 최신 방송 장비와 1:1 매니지먼트가 한 공간에 있습니다.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {photos.map((p, i) => (
            <Reveal key={p.file} delay={i * 100}>
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#ededed] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300">
                <Image
                  src={`/images/studio/${p.file}`}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
