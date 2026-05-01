import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+212522272739"
      aria-label="Appel d'urgence"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full bg-foreground/90 px-4 py-2 text-sm font-semibold text-background shadow-elevated md:block">
        Urgence 24/7
      </span>
      <span
        className="flex h-16 w-16 items-center justify-center rounded-full bg-emergency text-emergency-foreground shadow-elevated transition-transform group-hover:scale-110"
        style={{ animation: "var(--animate-pulse-ring)" }}
      >
        <Phone className="h-7 w-7" />
      </span>
    </a>
  );
}
