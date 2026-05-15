const platforms = [
  { name: "YouTube", korean: "유튜브", dot: "#ff1493" },
  { name: "CHZZK", korean: "치지직", dot: "#00dcff" },
  { name: "SOOP", korean: "SOOP", dot: "#b347ff" },
  { name: "TikTok", korean: "틱톡", dot: "#0a0a0a" },
];

export default function PlatformsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-3">
            PLATFORMS
          </p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a]">
            4개 플랫폼에서 활동합니다
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center gap-2.5 py-5 px-4 rounded-2xl bg-white border border-[#ededed] hover:border-[#0a0a0a]/30 transition"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: p.dot }}
                aria-hidden
              />
              <span className="font-bold text-[#0a0a0a]">{p.korean}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
