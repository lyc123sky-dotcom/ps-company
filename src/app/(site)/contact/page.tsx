import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import QuickContactCards from "./components/QuickContactCards";
import InquiryGuide from "./components/InquiryGuide";
import InquiryForm from "./components/InquiryForm";
import CompanyInfo from "./components/CompanyInfo";

export const metadata: Metadata = {
  title: "문의",
  description:
    "제휴 · 협업 · 광고 등 모든 문의를 환영합니다. 전화 · 카카오톡 · 이메일로 빠르게 연락드립니다.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "문의 | 피에스컴퍼니",
    description: "제휴 · 협업 · 광고 등 모든 문의를 환영합니다.",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <QuickContactCards />
      <InquiryGuide />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <InquiryForm />
        </div>
      </section>
      <CompanyInfo />
    </>
  );
}
