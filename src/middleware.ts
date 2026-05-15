import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  // /manage/* 만 검사 (정적/이미지/api 제외)
  matcher: ["/manage/:path*"],
};
