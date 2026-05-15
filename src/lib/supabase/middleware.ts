import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export const ADMIN_EMAIL = "admin@pscp.to";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const isLoginPage = path === "/manage/login";
  const isAdminArea = path.startsWith("/manage");
  const isAuthedAdmin = !!user && user.email === ADMIN_EMAIL;

  // 1. 미인증으로 /manage/* (login 제외) 접근 시 → /manage/login
  if (isAdminArea && !isLoginPage && !isAuthedAdmin) {
    const url = request.nextUrl.clone();
    url.pathname = "/manage/login";
    url.searchParams.set("redirect", path);
    return NextResponse.redirect(url);
  }

  // 2. 이미 로그인된 어드민이 /manage/login 접근 시 → /manage
  if (isLoginPage && isAuthedAdmin) {
    const url = request.nextUrl.clone();
    url.pathname = "/manage";
    url.searchParams.delete("redirect");
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
