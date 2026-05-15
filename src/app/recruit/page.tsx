import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import BenefitsGrid from "./components/BenefitsGrid";
import PositionsSection from "./components/PositionsSection";
import RequirementsSection from "./components/RequirementsSection";
import WorkConditionsSection from "./components/WorkConditionsSection";
import BenefitsDetailSection from "./components/BenefitsDetailSection";
import ProcessSection from "./components/ProcessSection";
import ContactInfo from "./components/ContactInfo";
import ApplicationForm from "./components/ApplicationForm";

export const metadata: Metadata = {
  title: "BJ 모집 | 피에스컴퍼니",
  description:
    "월 500~1,000만원, 1일 최소 20만원 보장. 초보 환영. 유튜브 · 치지직 · SOOP · 틱톡 BJ 대규모 모집.",
};

export default function RecruitPage() {
  return (
    <>
      <HeroSection />
      <BenefitsGrid />
      <PositionsSection />
      <RequirementsSection />
      <WorkConditionsSection />
      <BenefitsDetailSection />
      <ProcessSection />
      <ContactInfo />
      <section id="apply" className="scroll-mt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
              <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
                지원서 작성
              </span>
            </h2>
            <p className="mt-3 text-[#525252]">
              아래 양식을 작성해주시면 빠르게 검토 후 연락드립니다.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
