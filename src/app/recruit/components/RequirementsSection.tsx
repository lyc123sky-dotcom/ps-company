const mustHave = [
  "성별 무관 (단, 크루 방송은 여성 게스트 우선)",
  "나이 제한 없음 (열정과 성실함이 있다면 OK)",
  "방송 경력 무관 (초보자 환영)",
];

const niceToHave = [
  "댄스 · 노래 등 특기 보유자",
  "소통과 대화를 좋아하는 분",
  "유튜브 · 치지직 · SOOP · 틱톡 등 방송 경험자",
  "혼자 방송이 부담스러워 크루 활동 희망자",
];

export default function RequirementsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">지원 자격</h2>
        <p className="mt-3 text-white/60">누구에게나 열려있는 기회</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="필수 조건" items={mustHave} accent="text-[#ff1493]" border="border-[#ff1493]/30" />
        <Card title="우대 사항" items={niceToHave} accent="text-[#00dcff]" border="border-[#00dcff]/30" />
      </div>
    </section>
  );
}

function Card({
  title,
  items,
  accent,
  border,
}: {
  title: string;
  items: string[];
  accent: string;
  border: string;
}) {
  return (
    <div className={`p-8 rounded-3xl bg-white/[0.03] border ${border}`}>
      <h3 className={`text-lg font-bold mb-4 ${accent}`}>{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-white/90">
            <span className={`shrink-0 mt-1 ${accent}`} aria-hidden>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
