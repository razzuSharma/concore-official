import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Concore Technologies";
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
          alignItems: "center",
          background:
            "linear-gradient(135deg, rgb(2, 6, 23) 0%, rgb(15, 23, 42) 50%, rgb(30, 64, 175) 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "48px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(148, 163, 184, 0.4)",
            borderRadius: "16px",
            color: "rgb(191, 219, 254)",
            fontSize: 30,
            letterSpacing: "0.2em",
            padding: "12px 20px",
            textTransform: "uppercase",
          }}
        >
          Concore Technologies
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.08,
            marginTop: "30px",
            maxWidth: "1000px",
            textAlign: "center",
          }}
        >
          Custom Web Development for Business Growth
        </div>
        <div
          style={{
            color: "rgb(203, 213, 225)",
            fontSize: 28,
            marginTop: "22px",
          }}
        >
          Web Apps | Business Websites | Product Engineering
        </div>
      </div>
    ),
    size
  );
}
