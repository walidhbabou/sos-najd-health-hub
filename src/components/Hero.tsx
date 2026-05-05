import { Phone, Ambulance, Clock, ChevronRight } from "lucide-react";
import { StarOfLife } from "./StarOfLife";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background image + gradients */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-ambulance.jpg"
          alt="Ambulance SOS Najd Assistance en intervention à Casablanca"
          width={1920}
          height={1080}
          className="h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      {/* Floating decorative star */}
      <div
        className="pointer-events-none absolute -right-12 top-24 hidden text-accent/10 lg:block"
        style={{ animation: "var(--animate-float)" }}
      >
        <StarOfLife size={420} />
      </div>

      <div className="container mx-auto px-4 pb-24 pt-24 md:pb-32 md:pt-32 lg:pb-40 lg:pt-36">
        <div
          className="max-w-3xl text-primary-foreground"
          style={{ animation: "var(--animate-fade-up)" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponible 24h/24 — 7j/7
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            SOS Najd
            <br />
            Assistance
            <span className="mt-3 block text-gradient-accent">Médicale 24/7</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
            Ambulances · Assistance médicale à domicile · SOS médecins · Pompes funèbres musulmanes
            — Casablanca et région.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+212522272739"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-emergency px-8 py-4 text-base font-semibold text-emergency-foreground shadow-elevated transition-all hover:scale-105 hover:shadow-glow"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Appeler maintenant
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-elevated transition-all hover:scale-105"
            >
              <Ambulance className="h-5 w-5" />
              Demander une intervention
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                <dt className="text-xs uppercase tracking-wider text-primary-foreground/60">
                  {label}
                </dt>
                <dd className="font-display text-xl font-bold md:text-2xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Marquee urgence band */}
      <div className="relative overflow-hidden border-y border-accent/20 bg-emergency text-emergency-foreground">
        <div
          className="flex whitespace-nowrap py-3"
          style={{ animation: "var(--animate-marquee)" }}
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <div
              key={k}
              className="flex shrink-0 items-center gap-10 px-5 text-sm font-semibold uppercase tracking-widest"
            >
              {[
                "Urgence 24/7",
                "Ambulances équipées",
                "SOS Médecins",
                "Assistance à domicile",
                "Pompes funèbres musulmanes",
                "Intervention rapide Casablanca",
              ].map((t) => (
                <span key={t} className="flex items-center gap-3">
                  <StarOfLife size={16} />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
