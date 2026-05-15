import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import StatusBadge from "@/components/admin/StatusBadge";
import {
  INQUIRY_STATUSES,
  INQUIRY_STATUS_LABEL,
  type InquiryStatus,
} from "@/lib/admin/constants";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 20;

function fmtDate(iso: string) {
  const d = new Date(iso);
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${y}-${mo}-${da} ${h}:${mi}`;
}

function clip(text: string, n = 50) {
  return text.length > n ? text.slice(0, n) + "…" : text;
}

export default async function InquiriesListPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; page?: string }>;
}) {
  const sp = await searchParams;
  const status =
    sp.status && INQUIRY_STATUSES.includes(sp.status as InquiryStatus)
      ? (sp.status as InquiryStatus)
      : "all";
  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const supabase = createAdminClient();
  let q = supabase
    .from("inquiries")
    .select("id, created_at, name, email, phone, message, status", {
      count: "exact",
    })
    .order("created_at", { ascending: false })
    .range(from, to);
  if (status !== "all") q = q.eq("status", status);
  const { data: rows, count, error } = await q;
  const total = count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const filters: { value: "all" | InquiryStatus; label: string }[] = [
    { value: "all", label: "전체" },
    ...INQUIRY_STATUSES.map((s) => ({
      value: s,
      label: INQUIRY_STATUS_LABEL[s],
    })),
  ];

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a]">
            문의
          </h1>
          <p className="mt-1 text-sm text-[#525252]">총 {total}건</p>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((f) => {
          const href =
            f.value === "all"
              ? "/admin/inquiries"
              : `/admin/inquiries?status=${f.value}`;
          const active = f.value === status;
          return (
            <Link
              key={f.value}
              href={href}
              className={
                active
                  ? "px-3 py-1.5 text-xs font-semibold rounded-md bg-[#0a0a0a] text-white"
                  : "px-3 py-1.5 text-xs font-semibold rounded-md bg-white border border-[#ededed] text-[#525252] hover:text-[#0a0a0a]"
              }
            >
              {f.label}
            </Link>
          );
        })}
      </div>

      {error && (
        <div className="p-3 mb-4 rounded-md bg-[#ff1493]/5 border border-[#ff1493]/20 text-sm text-[#ff1493]">
          데이터 조회 실패: {error.message}
        </div>
      )}

      <div className="bg-white border border-[#ededed] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#fafafa] border-b border-[#ededed] text-[#525252]">
              <tr>
                <Th>제출일시</Th>
                <Th>이름</Th>
                <Th>연락처</Th>
                <Th>메시지</Th>
                <Th>상태</Th>
                <Th className="text-right">액션</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ededed]">
              {(rows ?? []).map((r) => (
                <tr key={r.id} className="hover:bg-[#fafafa]">
                  <Td className="tabular-nums text-xs text-[#525252]">
                    {fmtDate(r.created_at)}
                  </Td>
                  <Td className="font-semibold text-[#0a0a0a]">{r.name}</Td>
                  <Td className="text-[#525252]">
                    {r.email ? (
                      <span className="block">{r.email}</span>
                    ) : null}
                    {r.phone ? (
                      <span className="block tabular-nums text-xs">
                        {r.phone}
                      </span>
                    ) : null}
                    {!r.email && !r.phone && "-"}
                  </Td>
                  <Td className="text-[#525252] max-w-md">{clip(r.message, 50)}</Td>
                  <Td>
                    <StatusBadge
                      status={r.status}
                      label={
                        INQUIRY_STATUS_LABEL[r.status as InquiryStatus] ??
                        r.status
                      }
                    />
                  </Td>
                  <Td className="text-right">
                    <Link
                      href={`/admin/inquiries/${r.id}`}
                      className="text-xs font-semibold text-[#ff1493] hover:underline"
                    >
                      상세보기 →
                    </Link>
                  </Td>
                </tr>
              ))}
              {(!rows || rows.length === 0) && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-12 text-center text-sm text-[#888888]"
                  >
                    해당 상태의 문의가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
            const params = new URLSearchParams();
            if (status !== "all") params.set("status", status);
            if (p !== 1) params.set("page", String(p));
            const qs = params.toString();
            const href = qs ? `/admin/inquiries?${qs}` : "/admin/inquiries";
            const active = p === page;
            return (
              <Link
                key={p}
                href={href}
                className={
                  active
                    ? "min-w-[36px] px-3 py-1.5 text-xs font-semibold rounded-md bg-[#0a0a0a] text-white text-center"
                    : "min-w-[36px] px-3 py-1.5 text-xs font-semibold rounded-md bg-white border border-[#ededed] text-[#525252] text-center hover:text-[#0a0a0a]"
                }
              >
                {p}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Th({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${className ?? ""}`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <td className={`px-4 py-3 align-middle ${className ?? ""}`}>{children}</td>;
}
