export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] border-t border-[#ededed] text-[#525252]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-black text-lg mb-2 text-[#0a0a0a]">
            <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
              PS
            </span>{" "}
            COMPANY
          </div>
          <p className="text-sm">주식회사 피에스컴퍼니</p>
          <p className="text-xs mt-1 text-[#888888]">
            크리에이터가 마음껏 꿈꾸는 곳
          </p>
        </div>
        <div className="text-sm space-y-1">
          <div className="text-[#0a0a0a] font-semibold mb-2">CONTACT</div>
          <p>전화 010-5295-0074</p>
          <p>이메일 lycsky@naver.com</p>
          <p>카카오톡 @lycsky</p>
        </div>
        <div className="text-sm space-y-1">
          <div className="text-[#0a0a0a] font-semibold mb-2">COMPANY</div>
          <p>사업자등록번호 112-87-03956</p>
          <p>광주광역시 서구</p>
          <p>상무연하로 60, 비101호</p>
        </div>
      </div>
      <div className="border-t border-[#ededed] py-4 text-xs text-center text-[#888888]">
        © 2026 PS COMPANY. All rights reserved.
      </div>
    </footer>
  );
}
