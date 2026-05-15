"use client";

import { useState, useTransition } from "react";
import { signIn } from "./actions";

export default function LoginForm({
  redirectTo,
  initialError,
}: {
  redirectTo: string;
  initialError?: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>(initialError);

  return (
    <form
      action={(formData) => {
        setError(undefined);
        startTransition(async () => {
          const result = await signIn(formData);
          if (result?.error) setError(result.error);
        });
      }}
      className="bg-white border border-[#ededed] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-4"
    >
      <input type="hidden" name="redirect" value={redirectTo} />
      <div>
        <label className="block text-xs font-semibold text-[#525252] mb-1.5">
          이메일
        </label>
        <input
          name="email"
          type="email"
          autoComplete="username"
          required
          className="w-full px-3 py-2.5 rounded-lg border border-[#ededed] focus:outline-none focus:border-[#ff1493] focus:ring-2 focus:ring-[#ff1493]/20 transition"
          placeholder="admin@pscp.to"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#525252] mb-1.5">
          비밀번호
        </label>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full px-3 py-2.5 rounded-lg border border-[#ededed] focus:outline-none focus:border-[#ff1493] focus:ring-2 focus:ring-[#ff1493]/20 transition"
        />
      </div>
      {error && (
        <p className="text-xs text-[#ff1493] bg-[#ff1493]/5 border border-[#ff1493]/20 rounded-md px-3 py-2">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="w-full px-4 py-2.5 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_4px_16px_rgba(255,20,147,0.3)] transition-shadow disabled:opacity-60"
      >
        {isPending ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
}
