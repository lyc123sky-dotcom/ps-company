import type { ReactNode } from "react";

type Variant = "default" | "pink" | "purple" | "cyan" | "gradient";

const variants: Record<Variant, string> = {
  default: "text-[#525252]",
  pink: "text-[#ff1493]",
  purple: "text-[#b347ff]",
  cyan: "text-[#0099bb]", // P1-07: 시안 단독은 흰배경 대비 부족 → 약간 어둡게
  gradient:
    "bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent",
};

export function Eyebrow({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.14em] ${variants[variant]} ${className ?? ""}`}
    >
      {children}
    </p>
  );
}
