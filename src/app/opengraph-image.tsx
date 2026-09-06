import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const alt = "Kafe Sərçə — Bir az qəhvə, bir az söhbət.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f2eee5",
        color: "#46523d",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 90,
      }}
    >
      <div style={{ fontSize: 34 }}>Kafe Sərçə</div>
      <div style={{ fontSize: 80, marginTop: 30 }}>Bir az qəhvə,</div>
      <div style={{ fontSize: 80 }}>bir az söhbət.</div>
    </div>,
    size,
  );
}
