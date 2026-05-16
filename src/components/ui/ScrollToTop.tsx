"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER = 400;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="페이지 맨 위로"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-[#ededed] text-[#0a0a0a] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#ff1493] hover:text-[#ff1493] hover:shadow-[0_12px_28px_rgba(255,20,147,0.18)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out flex items-center justify-center ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} />
    </button>
  );
}
