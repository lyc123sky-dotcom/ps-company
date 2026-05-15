import Image from "next/image";

const photos = [
  { file: "IMG_0977.PNG", alt: "피에스컴퍼니 광주 스튜디오" },
  { file: "IMG_0979.PNG", alt: "피에스컴퍼니 광주 스튜디오 내부" },
];

export default function StudioSection() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
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
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {photos.map((p) => (
            <div
              key={p.file}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#ededed] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <Image
                src={`/images/studio/${p.file}`}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
