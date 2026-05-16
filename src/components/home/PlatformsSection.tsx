import { Play, Cast, Mic2, Music2, type LucideIcon } from "lucide-react";

type Platform = {
  name: string;
  korean: string;
  color: string;
  Icon: LucideIcon;
};

const platforms: Platform[] = [
  { name: "YouTube", korean: "유튜브", color: "#ff0033", Icon: Play },
  { name: "CHZZK", korean: "치지직", color: "#00dcff", Icon: Cast },
  { name: "SOOP", korean: "SOOP", color: "#b347ff", Icon: Mic2 },
  { name: "TikTok", korean: "틱톡", color: "#0a0a0a", Icon: Music2 },
];

export default function PlatformsSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-3">
            PLATFORMS
          </p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a]">
            4개 플랫폼에서{" "}
            <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
              활동합니다
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden flex flex-col items-center gap-3 py-7 px-4 rounded-2xl bg-white border border-[#ededed] transition-all duration-300 hover:-translate-y-1"
              style={{
                ["--p-color" as string]: p.color,
              }}
            >
              {/* hover 시 컬러 글로우 */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 100%, ${p.color}22 0%, transparent 70%)`,
                }}
              />
              <div
                aria-hidden
                className="absolute inset-x-4 bottom-0 h-[2px] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: p.color }}
              />
              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${p.color}10`,
                  border: `1px solid ${p.color}30`,
                }}
              >
                <p.Icon
                  className="w-5 h-5"
                  strokeWidth={2.25}
                  style={{ color: p.color }}
                />
              </div>
              <div className="relative font-bold text-[#0a0a0a] text-sm sm:text-base">
                {p.korean}
              </div>
              <div className="relative text-[10px] font-bold tracking-[0.18em] uppercase text-[#737373]">
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
