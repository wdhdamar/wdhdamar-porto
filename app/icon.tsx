import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Branded monogram favicon — matches the "WD" badge used in the header/footer.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fec502",
          color: "#111111",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: -0.5,
          borderRadius: 7,
          fontFamily: "sans-serif",
        }}
      >
        WD
      </div>
    ),
    { ...size },
  );
}
