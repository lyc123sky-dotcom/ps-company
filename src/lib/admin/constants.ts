export const ADMIN_EMAIL = "admin@pscp.to";

export const APPLICATION_STATUSES = [
  "submitted",
  "reviewing",
  "interview",
  "accepted",
  "rejected",
] as const;
export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];

export const APPLICATION_STATUS_LABEL: Record<ApplicationStatus, string> = {
  submitted: "신규 접수",
  reviewing: "검토 중",
  interview: "면접",
  accepted: "합격",
  rejected: "불합격",
};

export const INQUIRY_STATUSES = [
  "new",
  "read",
  "replied",
  "archived",
] as const;
export type InquiryStatus = (typeof INQUIRY_STATUSES)[number];

export const INQUIRY_STATUS_LABEL: Record<InquiryStatus, string> = {
  new: "신규",
  read: "확인",
  replied: "답신 완료",
  archived: "보관",
};
