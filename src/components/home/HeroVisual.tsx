// Placeholder visual — replace with finalized logo SVG when ready.
// Keeps the same outer dimensions so HeroSection layout doesn't shift.
export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        aria-hidden="true"
      >
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

        {/* concentric circle outlines */}
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
          r="130"
          fill="none"
          stroke="url(#ps-grad-soft)"
          strokeWidth="1.5"
        />

        {/* decorative dots */}
        <circle cx="80" cy="80" r="3" fill="#ff1493" />
        <circle cx="330" cy="110" r="2" fill="#b347ff" />
        <circle cx="350" cy="280" r="4" fill="#00dcff" />
        <circle cx="60" cy="320" r="2.5" fill="#b347ff" />
        <circle cx="200" cy="40" r="2" fill="#ff1493" />
        <circle cx="200" cy="360" r="2" fill="#00dcff" />

        {/* thin accent lines */}
        <line
          x1="0"
          y1="200"
          x2="60"
          y2="200"
          stroke="url(#ps-grad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="340"
          y1="200"
          x2="400"
          y2="200"
          stroke="url(#ps-grad)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* PS wordmark */}
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

        {/* tiny label under wordmark */}
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
    </div>
  );
}
