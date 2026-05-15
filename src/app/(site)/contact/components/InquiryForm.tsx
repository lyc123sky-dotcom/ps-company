"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { MailCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      agreed: false,
    },
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
        <p className="mt-1 text-sm text-[#737373]">
          급한 문의는 010-5295-0074 또는 카카오톡 @lycsky로 연락주세요.
        </p>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => setSubmitted(false)}
          className="mt-6"
        >
          새 문의 작성
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-[#ededed] shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-6"
    >
      <Field id="contact-name" label="이름" required error={errors.name?.message}>
        <input
          id="contact-name"
          {...register("name")}
          placeholder="홍길동"
          className={inputCls}
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="contact-email"
          label="이메일"
          error={errors.email?.message}
          hint="이메일 또는 연락처 중 하나는 필수"
        >
          <input
            id="contact-email"
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            className={inputCls}
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field id="contact-phone" label="연락처" error={errors.phone?.message}>
          <input
            id="contact-phone"
            type="tel"
            {...register("phone")}
            placeholder="010-1234-5678"
            className={inputCls}
            autoComplete="tel"
            aria-invalid={!!errors.phone}
          />
        </Field>
      </div>

      <Field
        id="contact-message"
        label="문의 내용"
        required
        error={errors.message?.message}
      >
        <textarea
          id="contact-message"
          {...register("message")}
          placeholder="문의 주제, 회사 / 단체명, 원하시는 내용 등을 자유롭게 적어주세요."
          rows={7}
          className={`${inputCls} resize-y`}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
        />
      </Field>

      <div>
        <label
          htmlFor="contact-agreed"
          className="flex items-start gap-2.5 text-sm text-[#525252] cursor-pointer"
        >
          <input
            id="contact-agreed"
            type="checkbox"
            {...register("agreed")}
            required
            aria-required="true"
            className="mt-0.5 w-4 h-4 rounded border-[#d4d4d4] text-[#ff1493] focus-visible:ring-2 focus-visible:ring-[#ff1493]/20 shrink-0"
          />
          <span>
            <Link
              href="/privacy"
              target="_blank"
              className="underline decoration-[#737373]/40 underline-offset-2 hover:text-[#0a0a0a] hover:decoration-[#0a0a0a]"
            >
              개인정보 수집 및 이용
            </Link>
            에 동의합니다{" "}
            <span className="text-[#ff1493]" aria-hidden>
              *
            </span>
            <span className="sr-only">(필수)</span>
          </span>
        </label>
        {errors.agreed?.message && (
          <p className="mt-1.5 text-xs text-[#dc2626]" role="alert">
            {errors.agreed.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button type="submit" disabled={isPending} size="lg">
          {isPending ? "전송 중..." : "문의 보내기"}
        </Button>
        <p className="mt-3 text-xs text-[#737373]">
          수집된 정보는 문의 회신 목적으로만 사용됩니다.{" "}
          <Link
            href="/privacy"
            className="underline decoration-[#737373]/40 underline-offset-2 hover:text-[#0a0a0a] hover:decoration-[#0a0a0a]"
          >
            개인정보처리방침 보기
          </Link>
        </p>
      </div>
    </form>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-white border border-[#d4d4d4] text-[#0a0a0a] placeholder:text-[#9ca3af] hover:border-[#a3a3a3] focus-visible:border-[#ff1493] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1493]/20 aria-[invalid=true]:border-[#dc2626] aria-[invalid=true]:focus-visible:ring-[#dc2626]/20 transition";

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[#0a0a0a] mb-2"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#ff1493]" aria-hidden>
            *
          </span>
        )}
        {required && <span className="sr-only">(필수)</span>}
        {hint && (
          <span className="ml-2 text-xs font-normal text-[#737373]">
            ({hint})
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-[#dc2626]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
