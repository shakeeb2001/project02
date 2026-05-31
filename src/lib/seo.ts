import type { Metadata } from "next";
import { personal, projects } from "@/lib/data";
import { getSiteUrl, siteConfig } from "@/lib/site";

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}

export function buildDefaultMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const ogImage = `${siteUrl}/opengraph-image`;

  return {
    metadataBase: getMetadataBase(),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: personal.name, url: siteUrl }],
    creator: personal.name,
    publisher: personal.name,
    applicationName: siteConfig.name,
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteUrl,
      siteName: siteConfig.name,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
        {
          url: "/profile.png",
          width: 512,
          height: 512,
          alt: `${personal.name} profile photo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [ogImage],
      ...(siteConfig.twitterHandle
        ? { creator: siteConfig.twitterHandle, site: siteConfig.twitterHandle }
        : {}),
    },
    icons: {
      icon: [{ url: "/profile.png", type: "image/png" }],
      apple: [{ url: "/profile.png", type: "image/png" }],
    },
    verification: {
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
    },
  };
}

export function buildJsonLd() {
  const siteUrl = getSiteUrl();
  const personId = `${siteUrl}/#person`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: personal.name,
    givenName: personal.firstName,
    familyName: personal.lastName,
    jobTitle: personal.role,
    description: personal.bio,
    url: siteUrl,
    email: personal.email,
    telephone: personal.phone,
    image: `${siteUrl}/profile.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.country,
    },
    sameAs: [personal.linkedin],
    knowsAbout: [
      "Full-Stack Development",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Flutter",
      "UI/UX Design",
      "Linux",
      "Nginx",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    inLanguage: siteConfig.language,
    publisher: { "@id": personId },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": personId },
    about: { "@id": personId },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteUrl}/#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: `${siteUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${siteUrl}/#contact`,
      },
    ],
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Projects",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: `${siteUrl}${project.image}`,
        ...(project.url ? { url: project.url } : {}),
        author: { "@id": personId },
        keywords: project.tags.join(", "),
      },
    })),
  };

  return [personSchema, websiteSchema, profilePageSchema, breadcrumbSchema, projectsSchema];
}
