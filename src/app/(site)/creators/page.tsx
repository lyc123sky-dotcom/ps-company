import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import CreatorsGrid from "./components/CreatorsGrid";
import CtaSection from "./components/CtaSection";

export const metadata: Metadata = {
  title: "크리에이터",
  description:
    "피에스컴퍼니와 함께하는 BJ들. 유튜브 · 치지직 · SOOP · 틱톡에서 활동하는 크리에이터들을 소개합니다.",
  alternates: { canonical: "/creators" },
  openGraph: {
    url: "/creators",
    title: "크리에이터 | 피에스컴퍼니",
    description: "피에스컴퍼니와 함께하는 BJ들.",
  },
};

export default function CreatorsPage() {
  return (
    <>
      <HeroSection />
      <CreatorsGrid />
      <CtaSection />
    </>
  );
}
