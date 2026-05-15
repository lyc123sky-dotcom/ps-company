import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import { toggleCreatorActive, deleteCreator } from "./actions";

export const dynamic = "force-dynamic";

export default async function CreatorsListPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const sp = await searchParams;
  const supabase = createAdminClient();
  let q = supabase
    .from("creators")
    .select("*")
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (sp.category) q = q.eq("category", sp.category);
  const { data: rows, error } = await q;

  const categories = Array.from(
    new Set((rows ?? []).map((r) => r.category).filter(Boolean) as string[]),
  );

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a]">
            크리에이터
          </h1>
          <p className="mt-1 text-sm text-[#525252]">
            총 {rows?.length ?? 0}명
            {sp.category && ` · 카테고리: ${sp.category}`}
          </p>
        </div>
        <Link
          href="/manage/creators/new"
          className="px-4 py-2 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_4px_16px_rgba(255,20,147,0.3)] transition-shadow"
        >
          + 신규 등록
        </Link>
      </div>

      {categories.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          <Link
            href="/manage/creators"
            className={
              !sp.category
                ? "px-3 py-1.5 text-xs font-semibold rounded-md bg-[#0a0a0a] text-white"
                : "px-3 py-1.5 text-xs font-semibold rounded-md bg-white border border-[#ededed] text-[#525252] hover:text-[#0a0a0a]"
            }
          >
            전체
          </Link>
          {categories.map((c) => {
            const active = sp.category === c;
            return (
              <Link
                key={c}
                href={`/manage/creators?category=${encodeURIComponent(c)}`}
                className={
                  active
                    ? "px-3 py-1.5 text-xs font-semibold rounded-md bg-[#0a0a0a] text-white"
                    : "px-3 py-1.5 text-xs font-semibold rounded-md bg-white border border-[#ededed] text-[#525252] hover:text-[#0a0a0a]"
                }
              >
                {c}
              </Link>
            );
          })}
        </div>
      )}

      {error && (
        <div className="p-3 mb-4 rounded-md bg-[#ff1493]/5 border border-[#ff1493]/20 text-sm text-[#ff1493]">
          데이터 조회 실패: {error.message}
        </div>
      )}

      {(!rows || rows.length === 0) ? (
        <div className="bg-white border border-[#ededed] rounded-2xl p-12 text-center">
          <p className="text-sm text-[#525252]">등록된 크리에이터가 없습니다.</p>
          <Link
            href="/manage/creators/new"
            className="inline-block mt-4 px-4 py-2 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-[#ff1493] to-[#b347ff]"
          >
            첫 크리에이터 등록하기
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((c) => (
            <div
              key={c.id}
              className={`relative bg-white border rounded-2xl p-5 ${c.is_active ? "border-[#ededed]" : "border-[#ededed] opacity-60"}`}
            >
              <div className="flex gap-4 items-start">
                <div className="w-20 h-20 shrink-0 rounded-xl bg-[#fafafa] border border-[#ededed] overflow-hidden flex items-center justify-center">
                  {c.profile_image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.profile_image_url}
                      alt={c.name ?? "creator"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-[10px] text-[#888888]">no img</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="font-bold text-[#0a0a0a] truncate">
                      {c.name ?? "(이름 미입력)"}
                    </div>
                    {!c.is_active && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#ededed] text-[#525252]">
                        비활성
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-[#525252]">
                    {c.category ?? "카테고리 없음"} · 순서 {c.display_order}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {c.youtube_url && <PlatformDot color="#ff1493" label="YouTube" />}
                    {c.chzzk_url && <PlatformDot color="#00dcff" label="치지직" />}
                    {c.soop_url && <PlatformDot color="#b347ff" label="SOOP" />}
                    {c.tiktok_url && <PlatformDot color="#0a0a0a" label="TikTok" />}
                    {c.instagram_url && <PlatformDot color="#888888" label="IG" />}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#ededed] flex items-center justify-between gap-2">
                <form action={toggleCreatorActive}>
                  <input type="hidden" name="id" value={c.id} />
                  <input
                    type="hidden"
                    name="next"
                    value={(!c.is_active).toString()}
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1 text-xs font-semibold rounded-md border border-[#ededed] text-[#525252] hover:bg-[#fafafa] hover:text-[#0a0a0a]"
                  >
                    {c.is_active ? "비활성화" : "활성화"}
                  </button>
                </form>
                <div className="flex gap-2">
                  <Link
                    href={`/manage/creators/${c.id}`}
                    className="px-2.5 py-1 text-xs font-semibold rounded-md border border-[#ededed] text-[#525252] hover:bg-[#fafafa] hover:text-[#0a0a0a]"
                  >
                    수정
                  </Link>
                  <form action={deleteCreator}>
                    <input type="hidden" name="id" value={c.id} />
                    <input
                      type="hidden"
                      name="image_url"
                      value={c.profile_image_url ?? ""}
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-1 text-xs font-semibold rounded-md border border-[#ff1493]/30 text-[#ff1493] hover:bg-[#ff1493]/5"
                    >
                      삭제
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PlatformDot({ color, label }: { color: string; label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-semibold rounded text-[#525252] bg-[#fafafa] border border-[#ededed]"
      title={label}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: color }}
        aria-hidden
      />
      {label}
    </span>
  );
}
