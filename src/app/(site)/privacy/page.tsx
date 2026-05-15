import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "주식회사 피에스컴퍼니의 개인정보 수집 · 이용 · 보관 · 파기 방침을 안내합니다.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. 개인정보의 처리 목적",
    body: (
      <>
        주식회사 피에스컴퍼니(이하 "회사")는 다음 목적을 위해 개인정보를
        처리하며, 이외의 용도로는 이용하지 않습니다.
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>BJ 지원서 접수 및 채용 전형 진행</li>
          <li>제휴 · 협업 · 광고 문의에 대한 응대 및 회신</li>
          <li>계약 체결 및 정산 등 서비스 제공</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. 수집하는 개인정보 항목",
    body: (
      <>
        <p className="font-semibold text-[#0a0a0a] mt-2">BJ 지원자</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>필수: 이름, 연락처, 모집 부문, 자기소개</li>
          <li>선택: 나이, 성별, 이메일, 방송 경력, 선호 연락 방법</li>
        </ul>
        <p className="font-semibold text-[#0a0a0a] mt-4">문의자</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>필수: 이름, 문의 내용</li>
          <li>선택: 이메일, 연락처 (단, 둘 중 하나는 반드시 입력)</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          BJ 지원 정보: 접수일로부터 <strong>1년</strong> 보관 후 파기.
          전형이 완료되어 계약이 체결되면 별도 계약 기간에 따름.
        </li>
        <li>
          문의 정보: 접수일로부터 <strong>6개월</strong> 보관 후 파기.
        </li>
        <li>관련 법령에 따른 보관 의무가 있는 경우 해당 기간을 우선합니다.</li>
      </ul>
    ),
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: (
      <>회사는 정보주체의 동의 또는 법률의 특별한 규정 등에 해당하는 경우를 제외하고는 개인정보를 제3자에게 제공하지 않습니다.</>
    ),
  },
  {
    title: "5. 개인정보의 처리 위탁",
    body: (
      <>
        회사는 원활한 서비스 제공을 위해 다음의 처리 업무를 외부에 위탁하고
        있습니다.
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            <strong>Supabase Inc.</strong> — 데이터베이스 및 인증 인프라
          </li>
          <li>
            <strong>Vercel Inc.</strong> — 웹사이트 호스팅 및 배포
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. 정보주체의 권리와 행사 방법",
    body: (
      <>
        정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다.
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>개인정보 열람 요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제 요구</li>
          <li>처리정지 요구</li>
        </ul>
        <p className="mt-3">
          위 권리 행사는 회사에 대해 서면, 이메일(lycsky@naver.com), 카카오톡
          채널(@lycsky) 등으로 요청하실 수 있으며, 회사는 지체 없이
          조치하겠습니다.
        </p>
      </>
    ),
  },
  {
    title: "7. 개인정보의 파기",
    body: (
      <>
        보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 지체 없이 파기하며,
        전자적 파일은 복구·재생되지 않도록 안전하게 삭제합니다. 종이 문서는
        분쇄 또는 소각합니다.
      </>
    ),
  },
  {
    title: "8. 개인정보 보호책임자",
    body: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>책임자: 대표이사</li>
          <li>연락처: 010-5295-0074</li>
          <li>이메일: lycsky@naver.com</li>
        </ul>
        <p className="mt-3 text-sm">
          개인정보 침해 신고 관련 추가 안내는 개인정보보호위원회(privacy.go.kr,
          국번없이 182) 또는 한국인터넷진흥원 개인정보침해신고센터(privacy.kisa.or.kr, 국번없이 118)로 문의하실 수 있습니다.
        </p>
      </>
    ),
  },
  {
    title: "9. 개정 안내",
    body: (
      <>본 방침은 시행일로부터 적용되며, 법령 · 정책 변경에 따라 내용이 추가, 삭제 및 수정될 수 있습니다. 변경 시 이 페이지를 통해 공지합니다.</>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#525252] mb-3">
            POLICY
          </p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a]">
            개인정보처리방침
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
          본 문서는 표준 양식에 기초한 초안입니다. 실제 운영 환경의 처리 항목 ·
          위탁사 · 보관 기간 등이 변경될 경우 본 페이지를 최신 상태로 유지해야
          합니다. 법무 검토를 권장합니다.
        </div>
      </div>
    </section>
  );
}
