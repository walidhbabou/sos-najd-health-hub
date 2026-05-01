import { Ambulance, HomeIcon, Stethoscope, Moon } from "lucide-react";

const services = [
  {
    icon: Ambulance,
    title: "Ambulances",
    desc: "Transport médical urgent et programmé avec équipement complet et personnel qualifié.",
  },
  {
    icon: HomeIcon,
    title: "Assistance médicale à domicile",
    desc: "Soins infirmiers, prélèvements et suivi médical au confort de votre domicile.",
  },
  {
    icon: Stethoscope,
    title: "SOS Médecins",
    desc: "Médecins généralistes mobilisés rapidement pour consultations d'urgence à toute heure.",
  },
  {
    icon: Moon,
    title: "Pompes funèbres musulmanes",
    desc: "Service complet et respectueux conforme aux rites musulmans, accompagnement des familles.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <div className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(circle_at_20%_0%,color-mix(in_oklab,var(--accent)_15%,transparent),transparent_50%)]" />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Nos services</div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Une assistance complète, à chaque instant
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Des solutions médicales professionnelles adaptées à toutes les situations d'urgence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-elevated"
            >
              {/* gradient hover overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-primary-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-accent/20 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-accent/40" />
              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft transition-all duration-500 group-hover:bg-accent group-hover:from-accent group-hover:to-accent group-hover:text-accent-foreground group-hover:shadow-glow">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="mb-2 text-xs font-bold tracking-widest text-accent-foreground/0 transition-colors group-hover:text-accent">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/85">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
