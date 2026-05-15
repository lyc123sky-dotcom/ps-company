import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import CreatorForm from "@/components/admin/CreatorForm";
import { updateCreator } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditCreatorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createAdminClient();
  const { data: c, error } = await supabase
    .from("creators")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !c) notFound();

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/manage/creators"
          className="text-xs text-[#525252] hover:text-[#0a0a0a]"
        >
          ← 크리에이터 목록
        </Link>
      </div>
      <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a] mb-6">
        크리에이터 수정
      </h1>
      <CreatorForm
        mode="edit"
        action={updateCreator}
        initial={{
          id: c.id,
          name: c.name ?? "",
          category: c.category ?? "",
          display_order: c.display_order,
          is_active: c.is_active,
          youtube_url: c.youtube_url ?? "",
          chzzk_url: c.chzzk_url ?? "",
          soop_url: c.soop_url ?? "",
          tiktok_url: c.tiktok_url ?? "",
          instagram_url: c.instagram_url ?? "",
          profile_image_url: c.profile_image_url,
        }}
      />
    </div>
  );
}
