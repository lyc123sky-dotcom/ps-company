// Hero 우측 시각 — PS 워드마크 중심 + 4개 플랫폼이 궤도 위에서 무한 회전.
// CSS keyframes 기반, prefers-reduced-motion 환경에서는 자동 정지(globals.css 규칙).

const platforms = [
  { name: "YT", aria: "유튜브", color: "#ff0033" },
  { name: "CZ", aria: "치지직", color: "#00dcff" },
  { name: "SP", aria: "SOOP", color: "#b347ff" },
  { name: "TT", aria: "틱톡", color: "#0a0a0a" },
];

export default function HeroVisual() {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-square"
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="ps-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff1493" />
            <stop offset="50%" stopColor="#b347ff" />
            <stop offset="100%" stopColor="#00dcff" />
          </linearGradient>
          <linearGradient id="ps-grad-soft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff1493" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#b347ff" stopOpacity="0.18" />
          </linearGradient>
          <filter id="ps-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 동심원 */}
        <circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="#ededed"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="148"
          fill="none"
          stroke="url(#ps-grad-soft)"
          strokeWidth="1.25"
          strokeDasharray="2 6"
        />

        {/* 장식 점 (정적) */}
        <circle cx="200" cy="40" r="2" fill="#ff1493" />
        <circle cx="200" cy="360" r="2" fill="#00dcff" />

        {/* PS 워드마크 */}
        <text
          x="200"
          y="200"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Pretendard, sans-serif"
          fontSize="160"
          fontWeight="900"
          letterSpacing="-6"
          fill="url(#ps-grad)"
          filter="url(#ps-glow)"
        >
          PS
        </text>

        {/* 라벨 */}
        <text
          x="200"
          y="290"
          textAnchor="middle"
          fontFamily="Pretendard, sans-serif"
          fontSize="14"
          fontWeight="700"
          letterSpacing="6"
          fill="#0a0a0a"
        >
          COMPANY
        </text>
      </svg>

      {/* 궤도 위에서 회전하는 플랫폼 위성 */}
      <div className="absolute inset-0 orbit-spin-32">
        {platforms.map((p, i) => {
          const angle = i * 90;
          return (
            <div
              key={p.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(0, -148px) rotate(-${angle}deg)`,
                marginTop: -22,
                marginLeft: -22,
              }}
            >
              {/* 위성 자체는 부모 회전을 상쇄해서 항상 정자세 유지 */}
              <div
                className="orbit-spin-32-reverse w-11 h-11 rounded-full bg-white border flex items-center justify-center text-[11px] font-black tracking-tight shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                style={{
                  borderColor: p.color,
                  color: p.color,
                }}
                role="img"
                aria-label={p.aria}
              >
                {p.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
