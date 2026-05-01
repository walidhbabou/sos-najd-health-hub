import { Phone, Ambulance, Clock } from "lucide-react";
import heroImg from "@/assets/hero-ambulance.jpg";
import { StarOfLife } from "./StarOfLife";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Ambulance SOS Najd Assistance en intervention à Casablanca"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl text-primary-foreground">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponible 24h/24 — 7j/7
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            SOS Najd Assistance
            <span className="mt-2 block bg-gradient-to-r from-accent to-yellow-200 bg-clip-text text-transparent">
              Assistance Médicale 24/7
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
            Ambulances · Assistance médicale à domicile · SOS médecins · Pompes funèbres musulmanes — Casablanca et région.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+212522272739"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-emergency px-7 py-4 text-base font-semibold text-emergency-foreground shadow-elevated transition-all hover:scale-105 hover:shadow-glow"
            >
              <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Appeler maintenant
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-elevated transition-all hover:scale-105"
            >
              <Ambulance className="h-5 w-5" />
              Demander une intervention
            </a>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
            {[
              { icon: Clock, label: "Réponse", value: "< 15 min" },
              { icon: Ambulance, label: "Interventions", value: "10 000+" },
              { icon: StarOfLife, label: "Service", value: "24/7" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <Icon className="mb-2 h-5 w-5 text-accent" />
                <dt className="text-xs uppercase tracking-wider text-primary-foreground/60">{label}</dt>
                <dd className="font-display text-xl font-bold md:text-2xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
