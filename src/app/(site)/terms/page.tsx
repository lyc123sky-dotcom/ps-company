import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "피에스컴퍼니 웹사이트의 이용약관 및 BJ 모집 · 문의 접수 시 적용되는 조건을 안내합니다.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "제1조 (목적)",
    body: (
      <>본 약관은 주식회사 피에스컴퍼니(이하 "회사")가 운영하는 웹사이트 pscp.to(이하 "사이트")의 이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.</>
    ),
  },
  {
    title: "제2조 (정의)",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>"이용자"란 사이트에 접속하여 정보를 열람하거나 BJ 지원·문의 폼을 통해 정보를 제출하는 자를 말합니다.</li>
        <li>"BJ 지원자"란 회사가 운영하는 모집 절차에 지원서를 제출한 자를 말합니다.</li>
      </ul>
    ),
  },
  {
    title: "제3조 (서비스 제공)",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>회사 및 소속 크리에이터에 관한 정보 제공</li>
        <li>BJ 모집 안내 및 지원 접수</li>
        <li>제휴 · 협업 · 광고 문의 접수</li>
      </ul>
    ),
  },
  {
    title: "제4조 (이용자의 의무)",
    body: (
      <>
        이용자는 다음 행위를 하여서는 안 됩니다.
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>타인의 정보를 도용하거나 허위 정보를 제출하는 행위</li>
          <li>사이트 운영을 방해하거나 안정성을 해치는 행위</li>
          <li>관련 법령 또는 본 약관에 위배되는 행위</li>
        </ul>
      </>
    ),
  },
  {
    title: "제5조 (BJ 지원의 효력)",
    body: (
      <>지원서 제출 사실만으로 회사와 지원자 사이에 어떠한 계약이 체결된 것은 아니며, 별도의 전형 절차와 합의를 거쳐 계약이 성립합니다. 제출한 정보는 본인이 직접 작성하여야 하며, 허위 기재 시 합격이 취소될 수 있습니다.</>
    ),
  },
  {
    title: "제6조 (지적재산권)",
    body: (
      <>사이트 내 모든 콘텐츠(텍스트 · 이미지 · 디자인 등)의 저작권 및 지적재산권은 회사 또는 정당한 권리자에게 귀속됩니다. 사전 동의 없이 무단으로 복제 · 배포 · 변형할 수 없습니다.</>
    ),
  },
  {
    title: "제7조 (책임 제한)",
    body: (
      <>회사는 천재지변 · 회선 장애 · 제3자의 불법행위 등 회사의 귀책사유 없이 발생한 손해에 대하여는 책임을 지지 않습니다.</>
    ),
  },
  {
    title: "제8조 (분쟁 해결)",
    body: (
      <>본 약관에 관하여 분쟁이 발생한 경우 회사 소재지 관할 법원을 제1심 관할 법원으로 합니다.</>
    ),
  },
  {
    title: "제9조 (개정)",
    body: (
      <>회사는 필요한 경우 약관을 개정할 수 있으며, 개정 시 시행일과 함께 본 페이지를 통해 공지합니다.</>
    ),
  },
];

export default function TermsPage() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#525252] mb-3">
            POLICY
          </p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
            이용약관
          </h1>
          <p className="mt-3 text-sm text-[#737373]">
            시행일: 2026년 5월 15일 · 주식회사 피에스컴퍼니
          </p>
        </div>
        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg sm:text-xl font-black text-[#0a0a0a] mb-3">
                {s.title}
              </h2>
              <div className="text-[#525252] leading-relaxed text-[15px]">
                {s.body}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 p-5 rounded-2xl bg-[#fafafa] border border-[#ededed] text-xs text-[#737373] leading-relaxed">
          본 문서는 표준 양식에 기초한 초안입니다. 실제 운영 시 법무 검토 후 시행을 권장합니다.
        </div>
      </div>
    </section>
  );
}
