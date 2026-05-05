import React from "react";

type Props = {
  name?: string;
  url?: string;
  telephone?: string;
  address?: string;
  image?: string;
  description?: string;
};

export default function SEO({
  name = "SOS Najd Assistance",
  url = "https://sosnajdmaroc.com",
  telephone = "+212 5 22 27 27 39",
  address = "Casablanca, Maroc",
  image = "/images/hero-ambulance.jpg",
  description = "Ambulance et assistance médicale dans tout le Maroc. Intervention 24h/24 et 7j/7.",
}: Props) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    image: [image],
    telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: address,
      addressCountry: "MA",
    },
    url,
    description,
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
      <link rel="canonical" href={url} />
      <link rel="alternate" href={url} hrefLang="fr-MA" />
      <link rel="alternate" href={`${url}/ar`} hrefLang="ar-MA" />
    </>
  );
}
