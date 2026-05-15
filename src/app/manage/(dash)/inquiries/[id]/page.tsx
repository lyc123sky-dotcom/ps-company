import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Mail } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";
import StatusBadge from "@/components/admin/StatusBadge";
import {
  INQUIRY_STATUSES,
  INQUIRY_STATUS_LABEL,
  type InquiryStatus,
} from "@/lib/admin/constants";
import { updateInquiryStatus } from "../actions";

export const dynamic = "force-dynamic";

function fmtDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("ko-KR", { hour12: false });
}

export default async function InquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createAdminClient();
  const { data: inq, error } = await supabase
    .from("inquiries")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !inq) notFound();

  const mailto = inq.email
    ? `mailto:${inq.email}?subject=${encodeURIComponent("[피에스컴퍼니] 문의 회신")}&body=${encodeURIComponent(`안녕하세요, ${inq.name}님.\n\n피에스컴퍼니입니다.\n\n`)}`
    : undefined;

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/manage/inquiries"
          className="text-xs text-[#525252] hover:text-[#0a0a0a]"
        >
          ← 전체 문의 목록
        </Link>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a]">
            {inq.name}
          </h1>
          <p className="mt-1 text-sm text-[#525252]">
            제출 {fmtDate(inq.created_at)}
          </p>
        </div>
        <StatusBadge
          status={inq.status}
          label={INQUIRY_STATUS_LABEL[inq.status as InquiryStatus] ?? inq.status}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Section title="연락처">
            <DL>
              <DLRow k="이메일" v={inq.email ?? "-"} />
              <DLRow k="전화번호" v={inq.phone ?? "-"} />
            </DL>
          </Section>
          <Section title="문의 내용">
            <p className="whitespace-pre-wrap leading-relaxed text-[#0a0a0a]">
              {inq.message}
            </p>
          </Section>
        </div>

        <div className="space-y-6">
          <Section title="상태 변경">
            <form action={updateInquiryStatus} className="space-y-3">
              <input type="hidden" name="id" value={inq.id} />
              <select
                name="status"
                defaultValue={inq.status}
                className="w-full px-3 py-2 rounded-lg border border-[#ededed] bg-white text-sm focus:outline-none focus:border-[#ff1493]"
              >
                {INQUIRY_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {INQUIRY_STATUS_LABEL[s]}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_4px_16px_rgba(255,20,147,0.3)] transition-shadow"
              >
                저장
              </button>
            </form>
          </Section>

          <Section title="답신">
            <div className="flex flex-col gap-2">
              {mailto && (
                <a
                  href={mailto}
                  className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-[#0a0a0a] border border-[#ededed] rounded-md hover:bg-[#fafafa]"
                >
                  <Mail className="w-4 h-4 text-[#00dcff]" strokeWidth={2} />
                  이메일로 회신
                </a>
              )}
              {inq.phone && (
                <a
                  href={`tel:${inq.phone}`}
                  className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-[#0a0a0a] border border-[#ededed] rounded-md hover:bg-[#fafafa]"
                >
                  <Phone className="w-4 h-4 text-[#ff1493]" strokeWidth={2} />
                  전화 {inq.phone}
                </a>
              )}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-[#ededed] rounded-2xl p-5 sm:p-6">
      <h2 className="text-sm font-bold text-[#525252] uppercase tracking-wider mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function DL({ children }: { children: React.ReactNode }) {
  return <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">{children}</dl>;
}

function DLRow({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-xs text-[#888888]">{k}</dt>
      <dd className="text-sm text-[#0a0a0a] font-medium mt-0.5">{v}</dd>
    </div>
  );
}
