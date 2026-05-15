import Link from "next/link";

export default function InquiryGuide() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="rounded-2xl border border-[#ededed] bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-[#0a0a0a]">문의 안내</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#525252] leading-relaxed">
            <li>
              • <span className="font-semibold text-[#0a0a0a]">BJ 모집 지원</span>은{" "}
              <Link
                href="/recruit#apply"
                className="text-[#ff1493] font-semibold underline decoration-[#ff1493]/30 underline-offset-2 hover:decoration-[#ff1493]"
              >
                BJ 모집 페이지
              </Link>
              의 지원서 폼을 이용해주세요.
            </li>
            <li>
              • 이 폼은 <span className="font-semibold text-[#0a0a0a]">제휴 · 협업 · 광고 · 기타 문의</span>를 받습니다.
            </li>
            <li>
              • 문의 내용을 구체적으로 작성하실수록 빠른 회신이 가능합니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
