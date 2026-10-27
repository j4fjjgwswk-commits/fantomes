import { ImageResponse } from "next/og";

export const alt = "Fantômes : trouve les abonnements que tu paies sans t'en servir";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F0E4",
          color: "#14223F",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700 }}>Fantômes</div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, display: "flex" }}>
          Tu paies sûrement un abonnement dont tu ne te sers plus.
        </div>
        <div style={{ fontSize: 36, color: "#C2352B", fontWeight: 700, display: "flex" }}>
          Trouve-le en 2 minutes.
        </div>
      </div>
    ),
    size
  );
}
