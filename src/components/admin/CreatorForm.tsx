"use client";

import { useRef, useState, useTransition } from "react";
import Link from "next/link";
import { toast } from "sonner";

export type CreatorFormValues = {
  id?: string;
  name: string;
  category: string;
  display_order: number;
  is_active: boolean;
  youtube_url: string;
  chzzk_url: string;
  soop_url: string;
  tiktok_url: string;
  instagram_url: string;
  profile_image_url?: string | null;
};

const categories = [
  { value: "게임", label: "게임" },
  { value: "음악", label: "음악" },
  { value: "댄스", label: "댄스" },
  { value: "소통", label: "소통" },
  { value: "기타", label: "기타" },
];

export default function CreatorForm({
  initial,
  action,
  mode,
}: {
  initial: CreatorFormValues;
  action: (formData: FormData) => Promise<void>;
  mode: "create" | "edit";
}) {
  const [preview, setPreview] = useState<string | null>(
    initial.profile_image_url ?? null,
  );
  const [isPending, startTransition] = useTransition();
  const fileRef = useRef<HTMLInputElement>(null);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("이미지는 5MB 이하만 가능합니다.");
      e.target.value = "";
      return;
    }
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      toast.error("JPEG · PNG · WebP만 가능합니다.");
      e.target.value = "";
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  function clearImage() {
    setPreview(initial.profile_image_url ?? null);
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <form
      action={(formData) => {
        startTransition(async () => {
          try {
            await action(formData);
            // server action redirects; success toast may not show
          } catch (e) {
            const msg = e instanceof Error ? e.message : "저장 실패";
            toast.error(msg);
          }
        });
      }}
      className="space-y-6"
    >
      {initial.id && <input type="hidden" name="id" value={initial.id} />}
      {initial.profile_image_url && (
        <input
          type="hidden"
          name="existing_image_url"
          value={initial.profile_image_url}
        />
      )}

      <Section title="프로필 사진">
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-2xl bg-[#fafafa] border border-[#ededed] overflow-hidden flex items-center justify-center">
            {preview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={preview}
                alt="미리보기"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xs text-[#888888]">no image</span>
            )}
          </div>
          <div className="flex-1 space-y-2">
            <input
              ref={fileRef}
              name="image"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={onFileChange}
              className="block text-sm text-[#525252] file:mr-3 file:px-3 file:py-1.5 file:rounded-md file:border-0 file:bg-[#0a0a0a] file:text-white file:text-xs file:font-bold hover:file:bg-[#222]"
            />
            <p className="text-xs text-[#888888]">
              JPEG · PNG · WebP, 최대 5MB. {mode === "edit" && initial.profile_image_url && "비워두면 기존 사진을 유지합니다."}
            </p>
            {preview && preview !== (initial.profile_image_url ?? null) && (
              <button
                type="button"
                onClick={clearImage}
                className="text-xs text-[#525252] underline hover:text-[#0a0a0a]"
              >
                새 사진 취소
              </button>
            )}
          </div>
        </div>
      </Section>

      <Section title="기본 정보">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="이름 (내부 식별용)">
            <input
              name="name"
              defaultValue={initial.name}
              placeholder="홍길동"
              className={inputCls}
            />
          </Field>
          <Field label="카테고리">
            <select
              name="category"
              defaultValue={initial.category}
              className={inputCls}
            >
              <option value="">선택 안 함</option>
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="표시 순서 (낮을수록 앞)">
            <input
              name="display_order"
              type="number"
              min={0}
              defaultValue={initial.display_order}
              className={inputCls}
            />
          </Field>
          <Field label="활성 상태">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="is_active"
                defaultChecked={initial.is_active}
                className="w-4 h-4 rounded border-[#ededed] text-[#ff1493]"
              />
              <span>활성 (사이트에 공개)</span>
            </label>
          </Field>
        </div>
      </Section>

      <Section title="플랫폼 링크">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="YouTube">
            <input
              name="youtube_url"
              defaultValue={initial.youtube_url}
              placeholder="https://youtube.com/@..."
              className={inputCls}
            />
          </Field>
          <Field label="치지직">
            <input
              name="chzzk_url"
              defaultValue={initial.chzzk_url}
              placeholder="https://chzzk.naver.com/..."
              className={inputCls}
            />
          </Field>
          <Field label="SOOP">
            <input
              name="soop_url"
              defaultValue={initial.soop_url}
              placeholder="https://ch.sooplive.co.kr/..."
              className={inputCls}
            />
          </Field>
          <Field label="TikTok">
            <input
              name="tiktok_url"
              defaultValue={initial.tiktok_url}
              placeholder="https://www.tiktok.com/@..."
              className={inputCls}
            />
          </Field>
          <Field label="Instagram">
            <input
              name="instagram_url"
              defaultValue={initial.instagram_url}
              placeholder="https://instagram.com/..."
              className={inputCls}
            />
          </Field>
        </div>
      </Section>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-2.5 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-[#ff1493] to-[#b347ff] hover:shadow-[0_4px_16px_rgba(255,20,147,0.3)] transition-shadow disabled:opacity-60"
        >
          {isPending
            ? "저장 중..."
            : mode === "create"
              ? "크리에이터 등록"
              : "변경 저장"}
        </button>
        <Link
          href="/manage/creators"
          className="px-6 py-2.5 text-sm font-semibold text-[#525252] border border-[#ededed] rounded-lg hover:bg-[#fafafa]"
        >
          취소
        </Link>
      </div>
    </form>
  );
}

const inputCls =
  "w-full px-3 py-2 rounded-lg border border-[#ededed] bg-white text-sm focus:outline-none focus:border-[#ff1493] focus:ring-2 focus:ring-[#ff1493]/20 transition";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-[#ededed] rounded-2xl p-5 sm:p-6">
      <h2 className="text-sm font-bold text-[#525252] uppercase tracking-wider mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#525252] mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
