import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { StarOfLife } from "./StarOfLife";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="text-accent"><StarOfLife size={36} /></span>
            <div>
              <div className="font-display text-xl font-bold">SOS Najd Assistance</div>
              <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Assistance Médicale 24/7</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-primary-foreground/75">
            Service professionnel d'assistance médicale à Casablanca. Ambulances, SOS médecins,
            assistance à domicile et pompes funèbres musulmanes — disponibles 24h/24, 7j/7.
          </p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Ambulances</li>
            <li>Assistance à domicile</li>
            <li>SOS Médecins</li>
            <li>Pompes funèbres musulmanes</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+212522272739" className="hover:text-accent">+212 5 22 27 27 39</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+212668703681" className="hover:text-accent">+212 6 68 70 36 81</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:najd.assistance@hotmail.com" className="break-all hover:text-accent">najd.assistance@hotmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>46 rue des hôpitaux, Casablanca</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} SOS Najd Assistance. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
