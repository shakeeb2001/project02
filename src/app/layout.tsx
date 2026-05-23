import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CursorGlow } from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shakeeb Jasim | Full-Stack Developer",
  description:
    "Shakeeb Jasim — Full-Stack Developer specializing in PERN stack, Next.js, Flutter, and mobile development. Based in Colombo, Sri Lanka.",
  keywords: [
    "Shakeeb Jasim",
    "Full-Stack Developer",
    "Backend Developer",
    "Next.js",
    "Flutter",
    "PERN Stack",
    "Portfolio",
  ],
  authors: [{ name: "Shakeeb Jasim" }],
  openGraph: {
    title: "Shakeeb Jasim | Full-Stack Developer",
    description: "Full-Stack & Mobile Developer — PERN, Next.js, Flutter",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[#050505] font-sans text-zinc-100 antialiased">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
