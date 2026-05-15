const palette: Record<string, string> = {
  // applications
  submitted: "bg-[#ff1493]/10 text-[#ff1493] border-[#ff1493]/30",
  reviewing: "bg-[#b347ff]/10 text-[#b347ff] border-[#b347ff]/30",
  interview: "bg-[#00dcff]/10 text-[#0099bb] border-[#00dcff]/40",
  accepted: "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30",
  rejected: "bg-[#525252]/10 text-[#525252] border-[#525252]/30",
  // inquiries
  new: "bg-[#ff1493]/10 text-[#ff1493] border-[#ff1493]/30",
  read: "bg-[#b347ff]/10 text-[#b347ff] border-[#b347ff]/30",
  replied: "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30",
  archived: "bg-[#525252]/10 text-[#525252] border-[#525252]/30",
};

export default function StatusBadge({
  status,
  label,
}: {
  status: string;
  label: string;
}) {
  const cls = palette[status] ?? "bg-[#ededed] text-[#525252] border-[#ededed]";
  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-bold rounded-md border ${cls}`}
    >
      {label}
    </span>
  );
}
