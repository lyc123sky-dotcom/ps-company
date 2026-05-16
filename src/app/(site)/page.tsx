import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PlatformsSection from "@/components/home/PlatformsSection";
import StatsSection from "@/components/home/StatsSection";
import ValuesSection from "@/components/home/ValuesSection";
import CreatorsHomeSection from "@/components/home/CreatorsHomeSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import StudioSection from "@/components/home/StudioSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  // template "%s | PS COMPANY" 적용 회피 — 홈은 절대 타이틀로
  title: { absolute: "피에스컴퍼니 | PS COMPANY · 크리에이터 매니지먼트" },
  description:
    "유튜브 · 치지직 · SOOP · 틱톡에서 활동하는 BJ들과 함께 만들어가는 전문 매니지먼트. 광주 기반, 최신 장비 · 전담 매니저 · 투명 정산.",
  keywords: [
    "MCN",
    "BJ",
    "크리에이터",
    "인터넷방송",
    "유튜브",
    "치지직",
    "SOOP",
    "틱톡",
    "피에스컴퍼니",
    "광주",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "피에스컴퍼니 | PS COMPANY · 크리에이터 매니지먼트",
    description:
      "유튜브 · 치지직 · SOOP · 틱톡에서 활동하는 BJ들과 함께 만들어가는 전문 매니지먼트.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PlatformsSection />
      <StatsSection />
      <ValuesSection />
      <CreatorsHomeSection />
      <IntroductionSection />
      <StudioSection />
      <CtaSection />
    </>
  );
}
