import { ImageResponse } from "next/og";

export const alt = "Launchpad — Your career, accelerated";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: "72px", color: "white",
        background: "radial-gradient(circle at 78% 22%, #5528b8 0, transparent 28%), radial-gradient(circle at 66% 68%, #0b65d8 0, transparent 25%), #05060a",
        fontFamily: "sans-serif",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, fontWeight: 700 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#51a6ff,#8b5cf6)" }}>L</div>
          launchpad
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 74, lineHeight: 1.04, letterSpacing: "-4px", fontWeight: 750, maxWidth: 850 }}>
            <div>Your career,</div>
            <div>accelerated.</div>
          </div>
          <div style={{ fontSize: 27, color: "#aeb7cb" }}>
            Internships · DSA · Hackathons · Community
          </div>
        </div>
        <div style={{ fontSize: 19, color: "#7f8aa3" }}>Built by students, for students.</div>
      </div>
    ),
    size,
  );
}
