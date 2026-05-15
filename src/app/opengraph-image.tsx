import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "피에스컴퍼니 · PS COMPANY";

export default async function OpengraphImage() {
  // Pretendard 한글 폰트 로드 — 실패 시 system font로 폴백
  let fontData: ArrayBuffer | null = null;
  try {
    const res = await fetch(
      "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Black.otf",
    );
    if (res.ok) fontData = await res.arrayBuffer();
  } catch {
    fontData = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          padding: "80px",
          fontFamily: fontData ? "Pretendard" : "system-ui, sans-serif",
        }}
      >
        {/* 상단 네온 그라데이션 라인 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background:
              "linear-gradient(90deg, #ff1493 0%, #b347ff 50%, #00dcff 100%)",
            display: "flex",
          }}
        />
        {/* 우상단 글로우 */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: 250,
            background: "#ff1493",
            opacity: 0.18,
            filter: "blur(80px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 300,
            width: 400,
            height: 400,
            borderRadius: 200,
            background: "#b347ff",
            opacity: 0.18,
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#00dcff",
            letterSpacing: 8,
            marginBottom: 24,
            display: "flex",
          }}
        >
          PS COMPANY
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: -4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>크리에이터가</span>
          <span
            style={{
              background:
                "linear-gradient(90deg, #ff1493 0%, #b347ff 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            마음껏 꿈꾸는 곳
          </span>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 28,
            color: "#999999",
            display: "flex",
            gap: 16,
          }}
        >
          <span>YouTube</span>
          <span style={{ color: "#525252" }}>·</span>
          <span>치지직</span>
          <span style={{ color: "#525252" }}>·</span>
          <span>SOOP</span>
          <span style={{ color: "#525252" }}>·</span>
          <span>TikTok</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: "Pretendard",
              data: fontData,
              style: "normal",
              weight: 900,
            },
          ]
        : undefined,
    },
  );
}
