import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CursorGlow } from "@/components/CursorGlow";
import { JsonLd } from "@/components/JsonLd";
import { buildDefaultMetadata } from "@/lib/seo";
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

export const metadata: Metadata = buildDefaultMetadata();

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
        <JsonLd />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
