import { z } from "zod";

const GENDER_VALUES = ["male", "female", "other"] as const;
const CONTACT_VALUES = ["phone", "kakao", "email"] as const;

export const recruitSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "이름을 2자 이상 입력해주세요.")
    .max(40, "이름이 너무 깁니다."),
  age: z
    .string()
    .trim()
    .optional()
    .refine(
      (v) => !v || (/^\d+$/.test(v) && Number(v) >= 14 && Number(v) <= 80),
      "나이는 14~80 사이의 숫자로 입력해주세요.",
    ),
  // 라디오 그룹 — 빈 문자열/undefined 모두 미선택으로 허용, 유효 값 검사는 refine으로
  gender: z
    .string()
    .optional()
    .refine(
      (v) => !v || (GENDER_VALUES as readonly string[]).includes(v),
      "성별을 선택해주세요.",
    ),
  phone: z
    .string()
    .trim()
    .min(8, "연락처를 정확히 입력해주세요.")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "숫자와 -, +, 공백, () 만 사용할 수 있습니다."),
  email: z
    .string()
    .trim()
    .optional()
    .refine(
      (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      "이메일 형식을 확인해주세요.",
    ),
  category: z.enum(["personal", "crew"], {
    message: "모집 부문을 선택해주세요.",
  }),
  experience: z.string().trim().max(500).optional(),
  introduction: z
    .string()
    .trim()
    .min(10, "자기소개를 10자 이상 입력해주세요.")
    .max(2000, "자기소개는 2000자 이내로 입력해주세요."),
  preferred_contact: z
    .string()
    .optional()
    .refine(
      (v) => !v || (CONTACT_VALUES as readonly string[]).includes(v),
      "선호 연락 방법을 선택해주세요.",
    ),
});

export type RecruitFormValues = z.infer<typeof recruitSchema>;
