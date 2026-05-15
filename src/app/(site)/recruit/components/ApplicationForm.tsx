"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import { Button, LinkButton } from "@/components/ui/Button";
import { recruitSchema, type RecruitFormValues } from "../schema";
import { submitRecruitApplication } from "../actions";

const categoryOptions = [
  { value: "personal", label: "개인 컨텐츠" },
  { value: "crew", label: "크루 게스트" },
] as const;

const genderOptions = [
  { value: "male", label: "남" },
  { value: "female", label: "여" },
  { value: "other", label: "기타" },
] as const;

const contactOptions = [
  { value: "phone", label: "전화" },
  { value: "kakao", label: "카톡" },
  { value: "email", label: "이메일" },
] as const;

export default function ApplicationForm() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RecruitFormValues>({
    resolver: zodResolver(recruitSchema),
    defaultValues: {
      name: "",
      age: "",
      phone: "",
      email: "",
      experience: "",
      introduction: "",
      agreed: false,
    },
  });

  const onSubmit = (values: RecruitFormValues) => {
    startTransition(async () => {
      const result = await submitRecruitApplication(values);
      if (result.ok) {
        toast.success("접수되었습니다", {
          description: "확인 후 빠르게 연락드리겠습니다. 감사합니다!",
        });
        reset();
        setSubmitted(true);
      } else {
        toast.error("제출 실패", { description: result.error });
      }
    });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-white border border-[#ededed] text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <Sparkles
          className="w-14 h-14 mx-auto mb-4 text-[#ff1493]"
          strokeWidth={1.5}
        />
        <h3 className="text-2xl font-black text-[#0a0a0a]">
          지원이 접수되었습니다
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
          새 지원서 작성
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
      <Field
        id="recruit-name"
        label="이름"
        required
        error={errors.name?.message}
      >
        <input
          id="recruit-name"
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
        <Field id="recruit-age" label="나이" error={errors.age?.message}>
          <input
            id="recruit-age"
            type="number"
            inputMode="numeric"
            min={14}
            max={80}
            {...register("age")}
            placeholder="예: 24"
            className={inputCls}
            aria-invalid={!!errors.age}
          />
        </Field>
        <RadioFieldset
          legend="성별"
          name="gender"
          options={genderOptions}
          register={register}
          error={errors.gender?.message}
        />
      </div>

      <Field
        id="recruit-phone"
        label="연락처"
        required
        error={errors.phone?.message}
      >
        <input
          id="recruit-phone"
          type="tel"
          {...register("phone")}
          placeholder="010-1234-5678"
          className={inputCls}
          autoComplete="tel"
          required
          aria-required="true"
          aria-invalid={!!errors.phone}
        />
      </Field>

      <Field id="recruit-email" label="이메일" error={errors.email?.message}>
        <input
          id="recruit-email"
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          className={inputCls}
          autoComplete="email"
          aria-invalid={!!errors.email}
        />
      </Field>

      <RadioFieldset
        legend="모집 부문"
        name="category"
        options={categoryOptions}
        register={register}
        error={errors.category?.message}
        required
        variant="card"
      />

      <Field
        id="recruit-experience"
        label="방송 경력"
        error={errors.experience?.message}
      >
        <input
          id="recruit-experience"
          {...register("experience")}
          placeholder="예: 치지직 1년, 평균 시청자 30명"
          className={inputCls}
          aria-invalid={!!errors.experience}
        />
      </Field>

      <Field
        id="recruit-introduction"
        label="자기소개"
        required
        error={errors.introduction?.message}
      >
        <textarea
          id="recruit-introduction"
          {...register("introduction")}
          placeholder="간단한 자기소개와 함께 하고 싶은 컨텐츠, 강점 등을 자유롭게 적어주세요."
          rows={6}
          className={`${inputCls} resize-y`}
          required
          aria-required="true"
          aria-invalid={!!errors.introduction}
        />
      </Field>

      <RadioFieldset
        legend="선호 연락 방법"
        name="preferred_contact"
        options={contactOptions}
        register={register}
        error={errors.preferred_contact?.message}
      />

      <ConsentCheckbox
        id="recruit-agreed"
        register={register}
        error={errors.agreed?.message}
      />

      <div className="pt-2">
        <Button type="submit" disabled={isPending} size="lg">
          {isPending ? "제출 중..." : "지원서 제출"}
        </Button>
        <p className="mt-3 text-xs text-[#737373]">
          수집된 정보는 지원 검토 및 연락 목적으로만 사용됩니다.{" "}
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
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
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

function RadioFieldset<T extends string>({
  legend,
  name,
  options,
  register,
  error,
  required,
  variant = "pill",
}: {
  legend: string;
  name: keyof RecruitFormValues;
  options: readonly { value: T; label: string }[];
  register: ReturnType<typeof useForm<RecruitFormValues>>["register"];
  error?: string;
  required?: boolean;
  variant?: "pill" | "card";
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-semibold text-[#0a0a0a] mb-2">
        {legend}
        {required && (
          <span className="ml-1 text-[#ff1493]" aria-hidden>
            *
          </span>
        )}
        {required && <span className="sr-only">(필수)</span>}
      </legend>
      <div
        className={
          variant === "card"
            ? "grid gap-3 sm:grid-cols-2"
            : "flex flex-wrap gap-2"
        }
      >
        {options.map((opt) => {
          const id = `${name}-${opt.value}`;
          return (
            <label
              key={opt.value}
              htmlFor={id}
              className={
                variant === "card"
                  ? "relative flex items-center gap-3 px-4 py-4 rounded-xl bg-white border border-[#d4d4d4] cursor-pointer hover:border-[#0a0a0a]/40 has-[:checked]:border-[#ff1493] has-[:checked]:bg-[#ff1493]/5 transition"
                  : "px-4 py-2 rounded-full bg-white border border-[#d4d4d4] cursor-pointer hover:border-[#0a0a0a]/40 has-[:checked]:border-[#ff1493] has-[:checked]:bg-[#ff1493]/5 transition text-sm"
              }
            >
              <input
                id={id}
                type="radio"
                value={opt.value}
                {...register(name)}
                required={required}
                className="sr-only peer"
              />
              {variant === "card" && (
                <span
                  className="w-4 h-4 rounded-full border-2 border-[#cccccc] peer-checked:border-[#ff1493] peer-checked:bg-[#ff1493] shrink-0"
                  aria-hidden
                />
              )}
              <span className="text-[#0a0a0a]">{opt.label}</span>
            </label>
          );
        })}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-[#dc2626]" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

function ConsentCheckbox({
  id,
  register,
  error,
}: {
  id: string;
  register: ReturnType<typeof useForm<RecruitFormValues>>["register"];
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-start gap-2.5 text-sm text-[#525252] cursor-pointer"
      >
        <input
          id={id}
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
      {error && (
        <p className="mt-1.5 text-xs text-[#dc2626]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
