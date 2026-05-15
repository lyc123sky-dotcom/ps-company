import { z } from "zod";

export const contactSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "이름을 2자 이상 입력해주세요.")
      .max(40, "이름이 너무 깁니다."),
    email: z
      .string()
      .trim()
      .optional()
      .refine(
        (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        "이메일 형식을 확인해주세요.",
      ),
    phone: z
      .string()
      .trim()
      .optional()
      .refine(
        (v) => !v || /^[0-9+\-\s()]{8,20}$/.test(v),
        "연락처는 숫자와 -, +, 공백, () 8~20자로 입력해주세요.",
      ),
    message: z
      .string()
      .trim()
      .min(10, "문의 내용을 10자 이상 입력해주세요.")
      .max(3000, "문의 내용은 3000자 이내로 입력해주세요."),
    agreed: z
      .boolean()
      .refine((v) => v === true, "개인정보 수집·이용에 동의해주세요."),
  })
  .refine((d) => Boolean(d.email) || Boolean(d.phone), {
    message: "이메일 또는 연락처 중 하나는 반드시 입력해주세요.",
    path: ["email"],
  });

export type ContactFormValues = z.infer<typeof contactSchema>;
