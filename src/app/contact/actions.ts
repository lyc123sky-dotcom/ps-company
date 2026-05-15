"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { contactSchema } from "./schema";

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitInquiry(
  raw: unknown,
): Promise<ContactSubmitResult> {
  const parsed = contactSchema.safeParse(raw);
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

  // anon에 SELECT 정책이 없으므로 .select() 체이닝 금지
  // (supabase-js가 자동으로 Prefer: return=minimal 전송하게 둠)
  const { error } = await supabase.from("inquiries").insert({
    name: data.name,
    email: data.email ? data.email : null,
    phone: data.phone ? data.phone : null,
    message: data.message,
  });

  if (error) {
    return {
      ok: false,
      error:
        "문의 접수에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해주세요.",
    };
  }

  revalidatePath("/contact");
  return { ok: true };
}
