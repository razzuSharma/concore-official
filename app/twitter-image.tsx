import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Concore Technologies";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background:
            "linear-gradient(150deg, rgb(15, 23, 42) 0%, rgb(17, 24, 39) 50%, rgb(30, 58, 138) 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "rgb(147, 197, 253)",
            fontSize: 30,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Concore Technologies
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.06,
            marginTop: "16px",
            maxWidth: "950px",
          }}
        >
          Build Better Web Products Faster
        </div>
        <div
          style={{
            color: "rgb(226, 232, 240)",
            fontSize: 28,
            marginTop: "18px",
          }}
        >
          Custom Software Development in Nepal
        </div>
      </div>
    ),
    size
  );
}
