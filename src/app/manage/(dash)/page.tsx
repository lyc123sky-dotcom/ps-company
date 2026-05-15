import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

async function getCounts() {
  const supabase = createAdminClient();
  const [submittedRes, activeRes, newRes, allRes, allInqRes, creatorsRes] =
    await Promise.all([
      supabase
        .from("recruit_applications")
        .select("id", { count: "exact", head: true })
        .eq("status", "submitted"),
      supabase
        .from("recruit_applications")
        .select("id", { count: "exact", head: true })
        .in("status", ["reviewing", "interview"]),
      supabase
        .from("inquiries")
        .select("id", { count: "exact", head: true })
        .eq("status", "new"),
      supabase
        .from("recruit_applications")
        .select("id", { count: "exact", head: true }),
      supabase.from("inquiries").select("id", { count: "exact", head: true }),
      supabase
        .from("creators")
        .select("id", { count: "exact", head: true })
        .eq("is_active", true),
    ]);

  return {
    appsSubmitted: submittedRes.count ?? 0,
    appsActive: activeRes.count ?? 0,
    inquiriesNew: newRes.count ?? 0,
    appsTotal: allRes.count ?? 0,
    inquiriesTotal: allInqRes.count ?? 0,
    activeCreators: creatorsRes.count ?? 0,
  };
}

export default async function DashboardPage() {
  const counts = await getCounts();

  const cards = [
    {
      href: "/manage/applications?status=submitted",
      label: "신규 BJ 지원",
      value: counts.appsSubmitted,
      accent: "from-[#ff1493] to-[#b347ff]",
    },
    {
      href: "/manage/applications?status=reviewing",
      label: "진행 중 BJ 지원",
      sublabel: "검토 + 면접",
      value: counts.appsActive,
      accent: "from-[#b347ff] to-[#00dcff]",
    },
    {
      href: "/manage/inquiries?status=new",
      label: "신규 문의",
      value: counts.inquiriesNew,
      accent: "from-[#00dcff] to-[#b347ff]",
    },
    {
      href: "/manage/creators",
      label: "활성 크리에이터",
      value: counts.activeCreators,
      accent: "from-[#ff1493] to-[#00dcff]",
    },
    {
      href: "/manage/applications",
      label: "BJ 지원 누적",
      value: counts.appsTotal,
      accent: "from-[#525252] to-[#0a0a0a]",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a]">
          대시보드
        </h1>
        <p className="mt-1 text-sm text-[#525252]">
          현재 접수 현황 한눈에 보기 · 카드를 클릭하면 해당 리스트로 이동합니다.
        </p>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="group relative p-6 rounded-2xl bg-white border border-[#ededed] hover:border-[#0a0a0a]/20 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition overflow-hidden"
          >
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${c.accent}`}
            />
            <div className="text-xs font-semibold text-[#737373] uppercase tracking-wider">
              {c.label}
            </div>
            {c.sublabel && (
              <div className="text-[10px] text-[#aaaaaa] mt-0.5">
                {c.sublabel}
              </div>
            )}
            <div className="mt-4 text-4xl font-black text-[#0a0a0a] tabular-nums">
              {c.value}
            </div>
            <div className="mt-2 text-xs text-[#525252] group-hover:text-[#0a0a0a] transition">
              자세히 보기 →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Link
          href="/manage/applications"
          className="p-6 rounded-2xl bg-white border border-[#ededed] hover:border-[#ff1493]/40 transition"
        >
          <div className="font-bold text-[#0a0a0a]">BJ 지원 관리</div>
          <p className="mt-1 text-sm text-[#525252]">
            지원서 전체 보기 · 상태 변경 · 면접 진행 상황 관리
          </p>
        </Link>
        <Link
          href="/manage/inquiries"
          className="p-6 rounded-2xl bg-white border border-[#ededed] hover:border-[#b347ff]/40 transition"
        >
          <div className="font-bold text-[#0a0a0a]">문의 관리</div>
          <p className="mt-1 text-sm text-[#525252]">
            제휴 · 협업 · 광고 문의 확인 · 답신 상태 관리
          </p>
        </Link>
        <Link
          href="/manage/creators"
          className="p-6 rounded-2xl bg-white border border-[#ededed] hover:border-[#00dcff]/40 transition"
        >
          <div className="font-bold text-[#0a0a0a]">크리에이터 관리</div>
          <p className="mt-1 text-sm text-[#525252]">
            소속 크리에이터 등록 · 사진 업로드 · 표시 순서 · 활성 토글
          </p>
        </Link>
      </div>
    </div>
  );
}
