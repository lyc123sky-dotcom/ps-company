import Link from "next/link";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out disabled:opacity-60 disabled:cursor-not-allowed select-none";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-gradient-to-r from-[#ff1493] to-[#b347ff] shadow-[0_4px_16px_rgba(255,20,147,0.18)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,20,147,0.35)] active:translate-y-0 active:shadow-[0_4px_16px_rgba(255,20,147,0.18)]",
  secondary:
    "text-[#0a0a0a] bg-white border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white",
  ghost:
    "text-[#525252] hover:text-[#0a0a0a] hover:bg-[#f7f7f7]",
  inverse:
    "text-white border border-white/40 hover:bg-white hover:text-[#0a0a0a]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

function classes(variant: Variant, size: Size, className?: string) {
  return [base, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export const Button = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button"> & CommonProps
>(({ variant = "primary", size = "md", className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={classes(variant, size, className)}
    {...props}
  >
    {children}
  </button>
));
Button.displayName = "Button";

type LinkButtonProps = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className">;

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: LinkButtonProps) {
  const cls = classes(variant, size, className);
  // 내부 라우트 / 앵커
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  // tel:, mailto: — 같은 창에서 핸들러 호출
  const isProtocolHandler = /^(tel|mailto):/i.test(href);
  if (isProtocolHandler) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  // 외부 http(s) — 새 탭
  return (
    <a
      href={href}
      className={cls}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
