import { Phone } from "lucide-react";
import { StarOfLife } from "./StarOfLife";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="text-primary">
            <StarOfLife size={32} />
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-primary">SOS Najd</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Assistance</div>
          </div>
        </a>
        <nav className="hidden gap-7 text-sm font-medium md:flex">
          <a href="#about" className="text-foreground/80 transition-colors hover:text-primary">À propos</a>
          <a href="#services" className="text-foreground/80 transition-colors hover:text-primary">Services</a>
          <a href="#contact" className="text-foreground/80 transition-colors hover:text-primary">Contact</a>
          <a href="#testimonials" className="text-foreground/80 transition-colors hover:text-primary">Avis</a>
        </nav>
        <a
          href="tel:+212522272739"
          className="inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-2 text-sm font-semibold text-emergency-foreground shadow-soft transition-transform hover:scale-105"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Appel d'urgence</span>
          <span className="sm:hidden">SOS</span>
        </a>
      </div>
    </header>
  );
}
