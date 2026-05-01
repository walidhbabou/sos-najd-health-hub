import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Fatima Z.",
    role: "Casablanca",
    text: "Intervention en moins de 10 minutes en pleine nuit. Équipe ambulancière professionnelle et rassurante. Merci à toute l'équipe de SOS Najd.",
  },
  {
    name: "Karim B.",
    role: "Maârif",
    text: "Service de pompes funèbres très respectueux et organisé. Ils ont accompagné notre famille avec beaucoup d'humanité. Nous recommandons vivement.",
  },
  {
    name: "Hicham A.",
    role: "Aïn Diab",
    text: "Médecin arrivé rapidement à domicile pour ma mère. Diagnostic clair et soins efficaces. Un vrai service d'urgence digne de confiance.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Témoignages</div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Ils nous ont fait confiance
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-2xl bg-card p-7 shadow-soft transition-shadow hover:shadow-elevated"
            >
              <Quote className="absolute right-5 top-5 h-10 w-10 text-accent/30" />
              <div className="mb-4 flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-foreground">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
