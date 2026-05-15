export default function CompanyInfo() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-2xl bg-white border border-[#ededed] p-6 sm:p-8">
          <div className="text-xs font-bold tracking-wider text-[#b347ff] mb-3">
            COMPANY
          </div>
          <div className="grid gap-4 sm:grid-cols-3 text-sm">
            <div>
              <div className="text-[#888888] mb-1">상호</div>
              <div className="text-[#0a0a0a] font-semibold">
                주식회사 피에스컴퍼니
              </div>
            </div>
            <div>
              <div className="text-[#888888] mb-1">사업자등록번호</div>
              <div className="text-[#0a0a0a] font-semibold">112-87-03956</div>
            </div>
            <div>
              <div className="text-[#888888] mb-1">주소</div>
              <div className="text-[#0a0a0a] font-semibold">
                광주광역시 서구 상무연하로 60, 비101호
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
