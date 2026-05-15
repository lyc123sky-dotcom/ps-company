import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin 로그인",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string; error?: string }>;
}) {
  const sp = await searchParams;
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-2xl font-black tracking-tight text-[#0a0a0a]">
            <span className="bg-gradient-to-r from-[#ff1493] to-[#b347ff] bg-clip-text text-transparent">
              PS
            </span>{" "}
            ADMIN
          </div>
          <p className="mt-1 text-xs text-[#737373]">관리자 전용</p>
        </div>
        <LoginForm redirectTo={sp.redirect ?? "/manage"} initialError={sp.error} />
      </div>
    </div>
  );
}
