import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";
import SEO from "@/components/SEO";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Accueil",
  description:
    "SOS Najd — Ambulance et assistance médicale dans tout le Maroc. Intervention 24/7.",
  path: "/",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <SEO />
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
