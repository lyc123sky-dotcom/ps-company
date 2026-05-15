"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
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
        <div className="text-5xl mb-4" aria-hidden>✨</div>
        <h3 className="text-2xl font-black text-[#0a0a0a]">
          지원이 접수되었습니다
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
          새 지원서 작성
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
        <Row label="나이" error={errors.age?.message}>
          <input
            type="number"
            inputMode="numeric"
            min={14}
            max={80}
            {...register("age")}
            placeholder="예: 24"
            className={inputCls}
          />
        </Row>
        <Row label="성별" error={errors.gender?.message}>
          <RadioGroup name="gender" options={genderOptions} register={register} />
        </Row>
      </div>

      <Row label="연락처" required error={errors.phone?.message}>
        <input
          type="tel"
          {...register("phone")}
          placeholder="010-1234-5678"
          className={inputCls}
          autoComplete="tel"
        />
      </Row>

      <Row label="이메일" error={errors.email?.message}>
        <input
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          className={inputCls}
          autoComplete="email"
        />
      </Row>

      <Row label="모집 부문" required error={errors.category?.message}>
        <RadioGroup
          name="category"
          options={categoryOptions}
          register={register}
          variant="card"
        />
      </Row>

      <Row label="방송 경력" error={errors.experience?.message}>
        <input
          {...register("experience")}
          placeholder="예: 치지직 1년, 평균 시청자 30명"
          className={inputCls}
        />
      </Row>

      <Row label="자기소개" required error={errors.introduction?.message}>
        <textarea
          {...register("introduction")}
          placeholder="간단한 자기소개와 함께 하고 싶은 컨텐츠, 강점 등을 자유롭게 적어주세요."
          rows={6}
          className={`${inputCls} resize-y`}
        />
      </Row>

      <Row label="선호 연락 방법" error={errors.preferred_contact?.message}>
        <RadioGroup
          name="preferred_contact"
          options={contactOptions}
          register={register}
        />
      </Row>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto px-10 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_8px_32px_rgba(255,20,147,0.35)] transition-shadow disabled:opacity-60 disabled:cursor-wait"
        >
          {isPending ? "제출 중..." : "지원서 제출"}
        </button>
        <p className="mt-3 text-xs text-[#888888]">
          제출하시면 개인정보 수집 및 이용에 동의한 것으로 간주됩니다. 수집된 정보는 지원 검토 및 연락 목적으로만 사용됩니다.
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
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#0a0a0a] mb-2">
        {label}
        {required && <span className="ml-1 text-[#ff1493]">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-[#ff1493]">{error}</p>}
    </div>
  );
}

function RadioGroup<T extends string>({
  name,
  options,
  register,
  variant = "pill",
}: {
  name: string;
  options: readonly { value: T; label: string }[];
  register: ReturnType<typeof useForm<RecruitFormValues>>["register"];
  variant?: "pill" | "card";
}) {
  return (
    <div
      className={
        variant === "card" ? "grid gap-3 sm:grid-cols-2" : "flex flex-wrap gap-2"
      }
    >
      {options.map((opt) => (
        <label
          key={opt.value}
          className={
            variant === "card"
              ? "relative flex items-center gap-3 px-4 py-4 rounded-xl bg-white border border-[#ededed] cursor-pointer hover:border-[#0a0a0a]/40 has-[:checked]:border-[#ff1493] has-[:checked]:bg-[#ff1493]/5 transition"
              : "px-4 py-2 rounded-full bg-white border border-[#ededed] cursor-pointer hover:border-[#0a0a0a]/40 has-[:checked]:border-[#ff1493] has-[:checked]:bg-[#ff1493]/5 transition text-sm"
          }
        >
          <input
            type="radio"
            value={opt.value}
            {...register(name as keyof RecruitFormValues)}
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
      ))}
    </div>
  );
}
