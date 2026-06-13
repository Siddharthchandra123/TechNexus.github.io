import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://siddharthchandra123.github.io"),
  title: {
    default: "Launchpad | Helping Students Become Industry Ready",
    template: "%s | Launchpad",
  },
  description:
    "Join an active student community for internships, DSA, coding notes, hackathons, peer learning, and career growth.",
  keywords: [
    "student community",
    "internships",
    "DSA",
    "coding",
    "hackathons",
    "career growth",
  ],
  openGraph: {
    title: "Launchpad — Your career, accelerated.",
    description:
      "The student community turning consistent effort into career momentum.",
    url: "/",
    siteName: "Launchpad",
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Launchpad — Your career, accelerated.",
    description: "Internships, DSA, hackathons, and the people to do it with.",
    images: ["/opengraph-image.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05060a" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fc" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
