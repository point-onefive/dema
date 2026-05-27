import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#2f4f46",
          color: "#faf8f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 120,
          fontFamily: "Georgia, serif",
          fontWeight: 400,
          borderRadius: 40,
        }}
      >
        D
      </div>
    ),
    { ...size }
  );
}
