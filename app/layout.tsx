import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SOS Najd Assistance — Ambulance & Assistance médicale Maroc",
    template: "%s | SOS Najd Assistance",
  },
  description:
    "Ambulance et assistance médicale dans tout le Maroc. Intervention 24h/24 et 7j/7. Appelez +212 5 22 27 27 39.",
  keywords: [
    "ambulance Maroc",
    "assistance médicale Maroc",
    "SOS médecin Maroc",
    "ambulance Casablanca",
  ],
  openGraph: {
    title: "SOS Najd Assistance — Assistance Médicale 24/7 Maroc",
    description: "Ambulances, SOS médecins et assistance à domicile dans tout le Maroc.",
    type: "website",
    locale: "fr_MA",
    url: "https://sosnajdmaroc.com",
    siteName: "SOS Najd Assistance",
    images: ["/images/hero-ambulance.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS Najd Assistance — Assistance Médicale Maroc",
    description: "Intervention ambulance et SOS médecin 24/7 dans tout le Maroc.",
    images: ["/images/hero-ambulance.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-MA": "/",
      "ar-MA": "/ar",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
