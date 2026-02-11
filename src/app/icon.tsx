import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default async function Icon() {
  const logoPath = path.join(process.cwd(), "public", "clearpath-logo.png");
  const logo = await readFile(logoPath);
  const logoBase64 = logo.toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          padding: 6,
        }}
      >
        <img
          src={`data:image/png;base64,${logoBase64}`}
          alt="ClearPath DR Consulting Logo"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    ),
    size
  );
}
