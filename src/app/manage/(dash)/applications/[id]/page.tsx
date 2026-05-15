import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";
import StatusBadge from "@/components/admin/StatusBadge";
import { KAKAO_CHANNEL_URL } from "@/lib/constants";
import {
  APPLICATION_STATUSES,
  APPLICATION_STATUS_LABEL,
  type ApplicationStatus,
} from "@/lib/admin/constants";
import { updateApplicationStatus } from "../actions";

export const dynamic = "force-dynamic";

const CATEGORY_LABEL: Record<string, string> = {
  personal: "개인 컨텐츠",
  crew: "크루 게스트",
};
const GENDER_LABEL: Record<string, string> = {
  male: "남",
  female: "여",
  other: "기타",
};
const CONTACT_LABEL: Record<string, string> = {
  phone: "전화",
  kakao: "카톡",
  email: "이메일",
};

function fmtDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("ko-KR", { hour12: false });
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createAdminClient();
  const { data: app, error } = await supabase
    .from("recruit_applications")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !app) notFound();

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/manage/applications"
          className="text-xs text-[#525252] hover:text-[#0a0a0a]"
        >
          ← 전체 지원 목록
        </Link>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a]">
            {app.name}
          </h1>
          <p className="mt-1 text-sm text-[#525252]">
            제출 {fmtDate(app.created_at)}
            {app.updated_at && app.updated_at !== app.created_at && (
              <span> · 최근 갱신 {fmtDate(app.updated_at)}</span>
            )}
          </p>
        </div>
        <StatusBadge
          status={app.status}
          label={
            APPLICATION_STATUS_LABEL[app.status as ApplicationStatus] ??
            app.status
          }
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Section title="기본 정보">
            <DL>
              <DLRow k="이름" v={app.name} />
              <DLRow k="나이" v={app.age != null ? String(app.age) : "-"} />
              <DLRow
                k="성별"
                v={app.gender ? (GENDER_LABEL[app.gender] ?? app.gender) : "-"}
              />
              <DLRow k="연락처" v={app.phone} />
              <DLRow k="이메일" v={app.email ?? "-"} />
              <DLRow
                k="선호 연락"
                v={
                  app.preferred_contact
                    ? (CONTACT_LABEL[app.preferred_contact] ??
                      app.preferred_contact)
                    : "-"
                }
              />
            </DL>
          </Section>

          <Section title="모집 부문">
            <p className="text-[#0a0a0a] font-semibold">
              {CATEGORY_LABEL[app.category] ?? app.category}
            </p>
            {app.experience && (
              <div className="mt-4">
                <div className="text-xs font-semibold text-[#737373] mb-1">
                  방송 경력
                </div>
                <p className="text-[#0a0a0a]">{app.experience}</p>
              </div>
            )}
          </Section>

          <Section title="자기소개">
            <p className="whitespace-pre-wrap leading-relaxed text-[#0a0a0a]">
              {app.introduction}
            </p>
          </Section>
        </div>

        <div className="space-y-6">
          <Section title="상태 변경">
            <form action={updateApplicationStatus} className="space-y-3">
              <input type="hidden" name="id" value={app.id} />
              <select
                name="status"
                defaultValue={app.status}
                className="w-full px-3 py-2 rounded-lg border border-[#ededed] bg-white text-sm focus:outline-none focus:border-[#ff1493]"
              >
                {APPLICATION_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {APPLICATION_STATUS_LABEL[s]}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_4px_16px_rgba(255,20,147,0.3)] transition-shadow"
              >
                저장
              </button>
              <p className="text-[10px] text-[#737373]">
                변경 시 갱신 시각은 자동 기록됩니다.
              </p>
            </form>
          </Section>

          <Section title="즉시 연락">
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${app.phone}`}
                className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-[#0a0a0a] border border-[#ededed] rounded-md hover:bg-[#fafafa]"
              >
                <Phone className="w-4 h-4 text-[#ff1493]" strokeWidth={2} />
                전화 {app.phone}
              </a>
              {app.email && (
                <a
                  href={`mailto:${app.email}`}
                  className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-[#0a0a0a] border border-[#ededed] rounded-md hover:bg-[#fafafa]"
                >
                  <Mail className="w-4 h-4 text-[#00dcff]" strokeWidth={2} />
                  메일 보내기
                </a>
              )}
              <a
                href={KAKAO_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-[#0a0a0a] border border-[#ededed] rounded-md hover:bg-[#fafafa]"
              >
                <MessageCircle
                  className="w-4 h-4 text-[#b347ff]"
                  strokeWidth={2}
                />
                카카오톡 채널 열기
              </a>
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
      <dt className="text-xs text-[#737373]">{k}</dt>
      <dd className="text-sm text-[#0a0a0a] font-medium mt-0.5">{v}</dd>
    </div>
  );
}
