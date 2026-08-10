import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0a0a0a",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: 260,
            background: "#111111",
            clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <div style={{ width: 56, height: 4, background: "#fff530" }} />
          <span
            style={{
              fontSize: 22,
              color: "#fff530",
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Canberra&apos;s Concreting Contractor
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          CB CONCRETE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "rgba(255,255,255,0.55)",
            marginTop: 28,
            letterSpacing: 0.5,
          }}
        >
          Excavation &bull; Slabs &amp; Footings &bull; Decorative Concrete
        </div>
      </div>
    ),
    { ...size }
  );
}
