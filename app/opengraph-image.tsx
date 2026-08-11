import { ImageResponse } from "next/og";

export const alt =
  "Widhi Damar Anandito — Information Systems. Web development, data, and the systems that tie them together.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share card — matches the site's dark theme and #fec502 brand accent.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0d0d",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand badge + handle */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#fec502",
              color: "#111111",
              fontSize: 34,
              fontWeight: 700,
              marginRight: 24,
            }}
          >
            WD
          </div>
          <div style={{ display: "flex", color: "#a3a3a3", fontSize: 28, fontWeight: 500 }}>
            github.com/wdhdamar
          </div>
        </div>

        {/* Bottom: name + role + accent underline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#f5f5f5",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Widhi Damar Anandito
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              color: "#d4d4d4",
              fontSize: 34,
              fontWeight: 400,
              maxWidth: 900,
            }}
          >
            Information Systems — web development, data, and the systems in
            between.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              width: 128,
              height: 8,
              borderRadius: 999,
              background: "#fec502",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
