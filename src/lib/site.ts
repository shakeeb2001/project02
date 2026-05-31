/** Public site URL — set NEXT_PUBLIC_SITE_URL in production (e.g. https://shakeebjasim.dev) */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Shakeeb Jasim",
  shortName: "Shakeeb",
  title: "Shakeeb Jasim | Full-Stack Developer",
  description:
    "Shakeeb Jasim is a Full-Stack Developer in Colombo, Sri Lanka — building scalable web and mobile products with Next.js, Node.js, PostgreSQL, and Flutter.",
  locale: "en_US",
  language: "en",
  country: "LK",
  city: "Colombo",
  twitterHandle: undefined as string | undefined,
  keywords: [
    "Shakeeb Jasim",
    "Full-Stack Developer",
    "Backend Developer",
    "Web Developer",
    "UI UX Designer",
    "Next.js Developer",
    "Node.js Developer",
    "Flutter Developer",
    "PERN Stack",
    "PostgreSQL",
    "Colombo Developer",
    "Sri Lanka Developer",
    "Portfolio",
  ],
} as const;
