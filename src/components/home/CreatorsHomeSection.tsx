import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const photos = [
  "IMG_0961.PNG",
  "IMG_0962.PNG",
  "IMG_0964.PNG",
  "IMG_0965.PNG",
  "IMG_0966.PNG",
  "IMG_0967.PNG",
  "IMG_0969.PNG",
  "IMG_0973.PNG",
];

export default function CreatorsHomeSection() {
  return (
    <section
      className="relative bg-white border-t border-[#ededed] overflow-hidden"
      aria-label="활동 중인 크리에이터"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/3 w-[420px] h-[420px] rounded-full opacity-[0.1] blur-3xl"
        style={{
          background: "radial-gradient(circle, #ff1493 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-3">
                MEET OUR CREATORS
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
                지금 활동 중인{" "}
                <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
                  크리에이터
                </span>
              </h2>
              <p className="mt-4 text-[#525252] max-w-xl leading-relaxed">
                4개 플랫폼에서 자기만의 색깔로 활동하고 있는 BJ들입니다.
              </p>
            </div>
            <Link
              href="/creators"
              className="group inline-flex items-center gap-1.5 self-start sm:self-auto text-sm font-bold text-[#0a0a0a] hover:text-[#ff1493] transition-colors"
            >
              크리에이터 모두 보기
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.25}
              />
            </Link>
          </div>
        </Reveal>
        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          role="list"
        >
          {photos.map((file, i) => (
            <Reveal as="li" key={file} delay={Math.min(i, 6) * 70}>
              <Link
                href="/creators"
                className="group block relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#fafafa] border border-[#ededed] hover:border-[#ff1493]/40 hover:shadow-[0_10px_28px_rgba(255,20,147,0.08)] transition-all duration-300"
                aria-label={`피에스컴퍼니 소속 크리에이터 #${i + 1} — 전체 보기`}
              >
                <Image
                  src={`/images/creators/${file}`}
                  alt={`피에스컴퍼니 소속 크리에이터 #${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
