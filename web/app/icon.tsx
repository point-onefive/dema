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
          background: "#2f4f46",
          color: "#faf8f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 42,
          fontFamily: "Georgia, serif",
          fontWeight: 400,
          borderRadius: 14,
        }}
      >
        D
      </div>
    ),
    { ...size }
  );
}
