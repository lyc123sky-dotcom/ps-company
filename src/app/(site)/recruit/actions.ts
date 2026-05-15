"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { recruitSchema } from "./schema";

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitRecruitApplication(
  raw: unknown,
): Promise<SubmitResult> {
  const parsed = recruitSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      (fieldErrors[key] ||= []).push(issue.message);
    }
    return {
      ok: false,
      error: "입력값을 확인해주세요.",
      fieldErrors,
    };
  }

  const data = parsed.data;
  const supabase = await createClient();

  // anon 역할은 SELECT 정책이 없으므로 RETURNING 미요청 — supabase-js는
  // .select() 미체이닝 시 Prefer: return=minimal로 전송.
  const { error } = await supabase.from("recruit_applications").insert({
    name: data.name,
    age: data.age ? Number(data.age) : null,
    // "" 또는 undefined는 모두 null로 — DB 일관성 유지
    gender: data.gender ? data.gender : null,
    phone: data.phone,
    email: data.email ? data.email : null,
    category: data.category,
    experience: data.experience ? data.experience : null,
    introduction: data.introduction,
    preferred_contact: data.preferred_contact ? data.preferred_contact : null,
  });

  if (error) {
    return {
      ok: false,
      error:
        "지원서 저장에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해주세요.",
    };
  }

  revalidatePath("/recruit");
  return { ok: true };
}
