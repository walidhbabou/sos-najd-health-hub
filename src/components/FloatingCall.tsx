import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+212522272739"
      aria-label="Appel d'urgence"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emergency text-emergency-foreground shadow-elevated transition-transform hover:scale-110 [animation:var(--animate-pulse-ring)]"
    >
      <Phone className="h-7 w-7" />
    </a>
  );
}
