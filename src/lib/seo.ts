import type { Metadata } from "next";

const SITE_URL = "https://sosnajdmaroc.com";
const SITE_NAME = "SOS Najd Assistance";
const DEFAULT_IMAGE = "/images/hero-ambulance.jpg";

export function generateMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  keywords = [],
  locale = "fr-MA",
}: {
  title?: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  locale?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: title ? { default: SITE_NAME, template: `%s | ${SITE_NAME}` } : SITE_NAME,
    description,
    keywords,
    openGraph: {
      title: title ?? SITE_NAME,
      description,
      url,
      siteName: SITE_NAME,
      images: [image],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? SITE_NAME,
      description,
      images: [image],
    },
    alternates: {
      canonical: path,
      languages: {
        "fr-MA": path,
        "ar-MA": `/ar${path === "/" ? "" : path}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
