import Image from "next/image";

const LOGOS: Record<string, string> = {
  "Node.js": "/tech/nodejs.svg",
  "Next.js": "/tech/nextjs.svg",
  Flutter: "/tech/flutter.svg",
  PostgreSQL: "/tech/postgresql.svg",
  Firebase: "/tech/firebase.svg",
  Git: "/tech/git.svg",
  Linux: "/tech/linux.svg",
  Nginx: "/tech/nginx.svg",
};

interface TechLogoProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechLogo({ name, size = 40, className = "" }: TechLogoProps) {
  const src = LOGOS[name];
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}

export const stackLogos = [
  { name: "PostgreSQL", src: "/tech/postgresql.svg" },
  { name: "Express", src: "/tech/express.svg" },
  { name: "React", src: "/tech/react.svg" },
  { name: "Node.js", src: "/tech/nodejs.svg" },
  { name: "Flutter", src: "/tech/flutter.svg" },
];
