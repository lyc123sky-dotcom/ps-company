import Link from "next/link";
import CreatorForm from "@/components/admin/CreatorForm";
import { createCreator } from "../actions";

export default function NewCreatorPage() {
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
        크리에이터 등록
      </h1>
      <CreatorForm
        mode="create"
        action={createCreator}
        initial={{
          name: "",
          category: "",
          display_order: 0,
          is_active: true,
          youtube_url: "",
          chzzk_url: "",
          soop_url: "",
          tiktok_url: "",
          instagram_url: "",
          profile_image_url: null,
        }}
      />
    </div>
  );
}
