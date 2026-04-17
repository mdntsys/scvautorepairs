import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "SCV Auto Repairs — Complete Vehicle Services in Santa Clarita, CA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = fs.readFileSync(
    path.join(process.cwd(), "public", "scvautorepairs_logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  const Badge = ({ label }: { label: string }) => (
    <div
      style={{
        display: "flex",
        background: "rgba(220,38,38,0.12)",
        border: "1px solid rgba(220,38,38,0.3)",
        borderRadius: "6px",
        padding: "6px 16px",
        fontSize: "14px",
        color: "#dc2626",
        fontWeight: 600,
      }}
    >
      {label}
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          borderLeft: "6px solid #dc2626",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left — text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            flex: 1,
            padding: "80px 80px 80px 94px",
          }}
        >
          <div
            style={{
              display: "flex",
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
              display: "flex",
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-3px",
            }}
          >
            SCV Auto Repairs
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "22px",
              color: "#737373",
              maxWidth: "520px",
              lineHeight: 1.5,
            }}
          >
            Complete vehicle services by ASE-certified mechanics. 3-year / 36,000-mile warranty.
          </div>

          <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
            <Badge label="ASE Certified" />
            <Badge label="OEM Parts" />
            <Badge label="Free Roadside" />
          </div>
        </div>

        {/* Right — logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          <img src={logoSrc} alt="" width={200} height={200} />
        </div>
      </div>
    ),
    { ...size }
  );
}
