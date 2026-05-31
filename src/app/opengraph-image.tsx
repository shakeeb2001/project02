import { ImageResponse } from "next/og";
import { personal } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #050505 0%, #0a0a0a 50%, #12082a 100%)",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(99, 34, 245, 0.18)",
            filter: "blur(80px)",
          }}
        />
        <p
          style={{
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a78bfa",
            marginBottom: 20,
          }}
        >
          Portfolio
        </p>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          {personal.name}
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#d4d4d8",
            marginTop: 20,
            maxWidth: 720,
            lineHeight: 1.35,
          }}
        >
          Full-Stack Developer · Next.js · Node.js · Flutter
        </p>
        <p
          style={{
            fontSize: 20,
            color: "#71717a",
            marginTop: 28,
          }}
        >
          {personal.location}
        </p>
      </div>
    ),
    { ...size }
  );
}
