import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOS Najd Assistance — Ambulance & SOS Médecin Casablanca 24/7" },
      {
        name: "description",
        content:
          "Ambulance Casablanca, SOS médecin, assistance médicale à domicile et pompes funèbres musulmanes. Intervention 24h/24 et 7j/7. Appelez +212 5 22 27 27 39.",
      },
      { name: "keywords", content: "ambulance Casablanca, assistance médicale Maroc, SOS médecin Casablanca, pompes funèbres musulmanes" },
      { property: "og:title", content: "SOS Najd Assistance — Assistance Médicale 24/7 Casablanca" },
      { property: "og:description", content: "Ambulances, SOS médecins, assistance à domicile et pompes funèbres musulmanes à Casablanca." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_MA" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
