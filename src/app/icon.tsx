import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ff1493",
          fontSize: 32,
          fontWeight: 900,
          letterSpacing: -2,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        PS
      </div>
    ),
    size,
  );
}
