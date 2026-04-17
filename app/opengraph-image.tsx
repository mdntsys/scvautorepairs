import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SCV Auto Repairs — Complete Vehicle Services in Santa Clarita, CA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await fetch(
    new URL("/scvautorepairs_logo.png", process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000")
  ).then((r) => r.arrayBuffer());

  const logoSrc = `data:image/png;base64,${Buffer.from(logoData).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Red left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "6px",
            height: "100%",
            background: "#dc2626",
          }}
        />

        {/* Left — text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
          <div
            style={{
              fontSize: "14px",
              color: "#dc2626",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Santa Clarita, CA · 661-251-2515
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            SCV Auto
            <br />
            Repairs
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#737373",
              marginTop: "4px",
              maxWidth: "480px",
              lineHeight: 1.5,
            }}
          >
            Complete vehicle services by ASE-certified mechanics.
            3-year / 36,000-mile warranty.
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "20px", marginTop: "12px" }}>
            {["ASE Certified", "OEM Parts", "Free Roadside"].map((badge) => (
              <div
                key={badge}
                style={{
                  background: "rgba(220,38,38,0.1)",
                  border: "1px solid rgba(220,38,38,0.3)",
                  borderRadius: "6px",
                  padding: "6px 14px",
                  fontSize: "13px",
                  color: "#dc2626",
                  fontWeight: 600,
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Right — logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "60px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="SCV Auto Repairs" width={200} height={200} />
        </div>
      </div>
    ),
    { ...size }
  );
}
