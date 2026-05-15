"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  APPLICATION_STATUSES,
  type ApplicationStatus,
} from "@/lib/admin/constants";

export async function updateApplicationStatus(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");

  if (!id) throw new Error("잘못된 요청");
  if (!APPLICATION_STATUSES.includes(status as ApplicationStatus)) {
    throw new Error("허용되지 않은 상태 값");
  }

  const supabase = createAdminClient();
  const { error } = await supabase
    .from("recruit_applications")
    .update({ status })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/applications");
  revalidatePath(`/admin/applications/${id}`);
  revalidatePath("/admin");
}
