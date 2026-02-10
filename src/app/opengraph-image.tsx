import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#020617",
          padding: 80,
        }}
      >
        <div style={{ color: "#fff", fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
          ClearPath ReadyScore
        </div>
        <div style={{ color: "#cbd5e1", fontSize: 28, marginTop: 24, maxWidth: 900 }}>
          Executive DR readiness — evidence-backed, board-safe.
        </div>
      </div>
    ),
    size
  );
}
