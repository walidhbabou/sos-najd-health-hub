import { Zap, ShieldCheck, Clock3 } from "lucide-react";
import { StarOfLife } from "./StarOfLife";

const values = [
  { icon: Zap, title: "Rapidité", desc: "Intervention en moins de 15 minutes sur Casablanca." },
  { icon: Clock3, title: "Disponibilité", desc: "Une équipe mobilisée 24h/24 et 7j/7, jours fériés inclus." },
  { icon: ShieldCheck, title: "Professionnalisme", desc: "Personnel diplômé et matériel médical certifié." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto grid gap-14 px-4 lg:grid-cols-12 lg:items-center">
        {/* Image side */}
        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl shadow-elevated">
            <img
              src="/images/paramedic.jpg"
              alt="Équipe paramédicale SOS Najd Assistance"
              width={896}
              height={1184}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-background/90 p-4 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emergency text-emergency-foreground">
                <StarOfLife size={26} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Équipe certifiée</div>
                <div className="font-display font-bold text-foreground">Personnel médical qualifié</div>
              </div>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="absolute -right-4 -top-6 hidden rounded-2xl border border-border bg-card p-5 shadow-elevated md:block">
            <div className="font-display text-3xl font-extrabold text-primary">15+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Années d&apos;expérience</div>
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-accent p-5 shadow-elevated md:block">
            <div className="font-display text-3xl font-extrabold text-accent-foreground">24/7</div>
            <div className="text-xs uppercase tracking-widest text-accent-foreground/80">Toujours disponibles</div>
          </div>
        </div>

        {/* Text side */}
        <div className="lg:col-span-7">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
            <span className="text-primary"><StarOfLife size={20} /></span>
            <span className="text-primary">À propos</span>
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Votre partenaire santé d&apos;urgence à <span className="text-primary">Casablanca</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">SOS Najd Assistance</strong> est un service professionnel
            d&apos;assistance médicale basé à Casablanca, offrant des interventions rapides 24h/24 et 7j/7.
            Nous mettons à votre disposition des ambulances équipées, des médecins qualifiés
            et un service complet de pompes funèbres musulmanes.
          </p>

          <div className="mt-8 grid gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex items-start gap-5 rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-elevated"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
