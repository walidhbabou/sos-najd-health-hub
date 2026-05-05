import { Phone, Mail, MapPin, User, MessageCircle } from "lucide-react";

const phones = ["+212 5 22 27 27 39", "+212 6 68 70 36 81"];
const phonesTel = ["+212522272739", "+212668703681"];

export function Contact() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Contact rapide
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Une urgence ? Contactez-nous
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Notre équipe vous répond immédiatement, 24h/24.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-glow p-8 text-primary-foreground shadow-elevated md:p-10">
            <h3 className="font-display text-2xl font-bold">Coordonnées</h3>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <User className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                    Responsable
                  </div>
                  <div className="font-semibold">Ganian Abdelali</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                    Téléphones
                  </div>
                  {phones.map((p, i) => (
                    <a
                      key={p}
                      href={`tel:${phonesTel[i]}`}
                      className="block font-semibold hover:text-accent"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                    Email
                  </div>
                  <a
                    href="mailto:najd.assistance@hotmail.com"
                    className="font-semibold break-all hover:text-accent"
                  >
                    najd.assistance@hotmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                    Adresse
                  </div>
                  <div className="font-semibold">
                    46 rue des hôpitaux, quartier des hôpitaux, Casablanca
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="tel:+212522272739"
              className="group flex items-center gap-5 rounded-2xl bg-emergency p-6 text-emergency-foreground shadow-elevated transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider opacity-80">Appel direct</div>
                <div className="font-display text-xl font-bold">Appeler maintenant</div>
              </div>
            </a>

            <a
              href="https://wa.me/212668703681"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl bg-whatsapp p-6 text-white shadow-elevated transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider opacity-80">WhatsApp</div>
                <div className="font-display text-xl font-bold">Discuter sur WhatsApp</div>
              </div>
            </a>

            <a
              href="mailto:najd.assistance@hotmail.com"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 text-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-display text-xl font-bold">Nous écrire</div>
              </div>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-border shadow-elevated">
          <iframe
            title="Localisation SOS Najd Assistance Casablanca"
            src="https://www.google.com/maps?q=46+rue+des+hopitaux+Casablanca&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
