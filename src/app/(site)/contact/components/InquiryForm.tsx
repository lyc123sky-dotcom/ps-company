"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { MailCheck } from "lucide-react";
import { contactSchema, type ContactFormValues } from "../schema";
import { submitInquiry } from "../actions";

export default function InquiryForm() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = (values: ContactFormValues) => {
    startTransition(async () => {
      const result = await submitInquiry(values);
      if (result.ok) {
        toast.success("문의가 접수되었습니다", {
          description: "확인 후 빠르게 연락드리겠습니다. 감사합니다!",
        });
        reset();
        setSubmitted(true);
      } else {
        toast.error("접수 실패", { description: result.error });
      }
    });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-white border border-[#ededed] text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <MailCheck
          className="w-14 h-14 mx-auto mb-4 text-[#ff1493]"
          strokeWidth={1.5}
        />
        <h3 className="text-2xl font-black text-[#0a0a0a]">
          문의가 접수되었습니다
        </h3>
        <p className="mt-3 text-[#525252]">
          확인 후 영업일 기준 1~3일 내 연락드리겠습니다.
        </p>
        <p className="mt-1 text-sm text-[#888888]">
          급한 문의는 010-5295-0074 또는 카카오톡 @lycsky로 연락주세요.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 px-5 py-2 text-sm text-[#0a0a0a] border border-[#0a0a0a] rounded-full hover:bg-[#0a0a0a] hover:text-white transition"
        >
          새 문의 작성
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-[#ededed] shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-6"
    >
      <Row label="이름" required error={errors.name?.message}>
        <input
          {...register("name")}
          placeholder="홍길동"
          className={inputCls}
          autoComplete="name"
        />
      </Row>

      <div className="grid gap-6 sm:grid-cols-2">
        <Row
          label="이메일"
          error={errors.email?.message}
          hint="이메일 또는 연락처 중 하나는 필수"
        >
          <input
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            className={inputCls}
            autoComplete="email"
          />
        </Row>
        <Row label="연락처" error={errors.phone?.message}>
          <input
            type="tel"
            {...register("phone")}
            placeholder="010-1234-5678"
            className={inputCls}
            autoComplete="tel"
          />
        </Row>
      </div>

      <Row label="문의 내용" required error={errors.message?.message}>
        <textarea
          {...register("message")}
          placeholder="문의 주제, 회사 / 단체명, 원하시는 내용 등을 자유롭게 적어주세요."
          rows={7}
          className={`${inputCls} resize-y`}
        />
      </Row>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto px-10 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_8px_32px_rgba(255,20,147,0.35)] transition-shadow disabled:opacity-60 disabled:cursor-wait"
        >
          {isPending ? "전송 중..." : "문의 보내기"}
        </button>
        <p className="mt-3 text-xs text-[#888888]">
          제출하시면 개인정보 수집 및 이용에 동의한 것으로 간주됩니다. 수집된
          정보는 문의 회신 목적으로만 사용됩니다.
        </p>
      </div>
    </form>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-white border border-[#ededed] text-[#0a0a0a] placeholder:text-[#aaaaaa] focus:outline-none focus:border-[#ff1493] focus:ring-2 focus:ring-[#ff1493]/20 transition";

function Row({
  label,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#0a0a0a] mb-2">
        {label}
        {required && <span className="ml-1 text-[#ff1493]">*</span>}
        {hint && (
          <span className="ml-2 text-xs font-normal text-[#888888]">
            ({hint})
          </span>
        )}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-[#ff1493]">{error}</p>}
    </div>
  );
}
