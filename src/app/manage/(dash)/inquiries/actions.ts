"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { INQUIRY_STATUSES, type InquiryStatus } from "@/lib/admin/constants";

export async function updateInquiryStatus(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");

  if (!id) throw new Error("잘못된 요청");
  if (!INQUIRY_STATUSES.includes(status as InquiryStatus)) {
    throw new Error("허용되지 않은 상태 값");
  }

  const supabase = createAdminClient();
  const { error } = await supabase
    .from("inquiries")
    .update({ status })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/manage/inquiries");
  revalidatePath(`/manage/inquiries/${id}`);
  revalidatePath("/manage");
}
