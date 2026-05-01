import { Zap, ShieldCheck, Clock3 } from "lucide-react";
import { StarOfLife } from "./StarOfLife";

const values = [
  { icon: Zap, title: "Rapidité", desc: "Intervention en moins de 15 minutes sur Casablanca." },
  { icon: Clock3, title: "Disponibilité", desc: "Une équipe mobilisée 24h/24 et 7j/7, jours fériés inclus." },
  { icon: ShieldCheck, title: "Professionnalisme", desc: "Personnel diplômé et matériel médical certifié." },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="container mx-auto grid gap-14 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent-foreground">
            <span className="text-primary"><StarOfLife size={20} /></span>
            <span className="text-primary">À propos</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Votre partenaire santé d'urgence à Casablanca
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">SOS Najd Assistance</strong> est un service professionnel
            d'assistance médicale basé à Casablanca, offrant des interventions rapides 24h/24 et 7j/7.
            Nous mettons à votre disposition des ambulances équipées, des médecins qualifiés
            et un service complet de pompes funèbres musulmanes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-1">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex items-start gap-5 rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-1 text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
