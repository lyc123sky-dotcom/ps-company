"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";

const BUCKET = "creators";
const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;

type SupabaseAdmin = ReturnType<typeof createAdminClient>;

function extToFromType(type: string, fallback = "png") {
  if (type === "image/jpeg") return "jpg";
  if (type === "image/png") return "png";
  if (type === "image/webp") return "webp";
  return fallback;
}

function extractStoragePath(publicUrl: string | null | undefined): string | null {
  if (!publicUrl) return null;
  const m = publicUrl.match(/\/object\/public\/creators\/(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
}

async function uploadImage(supabase: SupabaseAdmin, file: File): Promise<string> {
  if (file.size > MAX_BYTES) throw new Error("이미지는 5MB 이하만 업로드 가능합니다.");
  if (!ALLOWED_TYPES.includes(file.type as (typeof ALLOWED_TYPES)[number])) {
    throw new Error("JPEG · PNG · WebP만 업로드 가능합니다.");
  }
  const ext = extToFromType(file.type, file.name.split(".").pop()?.toLowerCase() || "png");
  const filename = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(filename, file, { contentType: file.type, cacheControl: "3600" });
  if (error) throw new Error("이미지 업로드 실패: " + error.message);
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(filename);
  return data.publicUrl;
}

async function deleteImage(supabase: SupabaseAdmin, publicUrl: string | null | undefined) {
  const path = extractStoragePath(publicUrl);
  if (!path) return;
  await supabase.storage.from(BUCKET).remove([path]);
}

function readForm(formData: FormData) {
  const trim = (v: FormDataEntryValue | null) =>
    typeof v === "string" ? v.trim() : "";
  const orNull = (s: string) => (s ? s : null);

  return {
    name: orNull(trim(formData.get("name"))),
    category: orNull(trim(formData.get("category"))),
    display_order: Math.max(0, parseInt(trim(formData.get("display_order")) || "0", 10) || 0),
    is_active: formData.get("is_active") === "on",
    youtube_url: orNull(trim(formData.get("youtube_url"))),
    chzzk_url: orNull(trim(formData.get("chzzk_url"))),
    soop_url: orNull(trim(formData.get("soop_url"))),
    tiktok_url: orNull(trim(formData.get("tiktok_url"))),
    instagram_url: orNull(trim(formData.get("instagram_url"))),
  };
}

export async function createCreator(formData: FormData) {
  const supabase = createAdminClient();
  const fields = readForm(formData);
  const file = formData.get("image") as File | null;

  let profile_image_url: string | null = null;
  if (file && typeof file === "object" && file.size > 0) {
    profile_image_url = await uploadImage(supabase, file);
  }

  const { error } = await supabase
    .from("creators")
    .insert({ ...fields, profile_image_url });

  if (error) {
    // 이미지 업로드 후 DB insert 실패하면 storage 정리
    if (profile_image_url) await deleteImage(supabase, profile_image_url);
    throw new Error("등록 실패: " + error.message);
  }

  revalidatePath("/manage/creators");
  revalidatePath("/manage");
  redirect("/manage/creators");
}

export async function updateCreator(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) throw new Error("잘못된 요청");

  const supabase = createAdminClient();
  const fields = readForm(formData);
  const existingUrl = String(formData.get("existing_image_url") ?? "");
  const file = formData.get("image") as File | null;

  type Updates = ReturnType<typeof readForm> & {
    profile_image_url?: string | null;
  };
  const updates: Updates = { ...fields };

  if (file && typeof file === "object" && file.size > 0) {
    updates.profile_image_url = await uploadImage(supabase, file);
  }

  const { error } = await supabase
    .from("creators")
    .update(updates)
    .eq("id", id);
  if (error) throw new Error("수정 실패: " + error.message);

  // 새 이미지 업로드 성공 시 기존 이미지 정리
  if (updates.profile_image_url && existingUrl && existingUrl !== updates.profile_image_url) {
    await deleteImage(supabase, existingUrl);
  }

  revalidatePath("/manage/creators");
  revalidatePath(`/manage/creators/${id}`);
  revalidatePath("/manage");
  redirect("/manage/creators");
}

export async function toggleCreatorActive(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const next = formData.get("next") === "true";
  if (!id) throw new Error("잘못된 요청");

  const supabase = createAdminClient();
  const { error } = await supabase
    .from("creators")
    .update({ is_active: next })
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/manage/creators");
  revalidatePath("/manage");
}

export async function deleteCreator(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const imageUrl = String(formData.get("image_url") ?? "");
  if (!id) throw new Error("잘못된 요청");

  const supabase = createAdminClient();
  const { error } = await supabase.from("creators").delete().eq("id", id);
  if (error) throw new Error("삭제 실패: " + error.message);

  if (imageUrl) await deleteImage(supabase, imageUrl);

  revalidatePath("/manage/creators");
  revalidatePath("/manage");
}
