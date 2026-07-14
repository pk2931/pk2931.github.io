import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "4px solid #aec3c8",
        background: "#151d20",
        color: "#f0f2ef",
        fontFamily: "Arial, sans-serif",
        fontSize: 25,
        fontWeight: 700,
        letterSpacing: "-2px",
      }}
    >
      PK
    </div>,
    size,
  );
}
