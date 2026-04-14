export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background py-12 px-5">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold italic text-ink">Elora</span>
            <p className="font-body mt-1 text-xs text-muted-foreground">
              Premium Korean PMU · Delhi's Trusted Lip Artist
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Services", id: "services" },
              { label: "Pricing", id: "pricing" },
              { label: "Results", id: "results" },
              { label: "Contact", id: "contact" },
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="font-body text-sm text-muted-foreground hover:text-rose-deep"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            {[
              { label: "Instagram", href: "https://instagram.com/eloraspmu", icon: "📸" },
              { label: "Facebook", href: "#", icon: "📘" },
              { label: "YouTube", href: "#", icon: "🎥" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:scale-110 transition-transform"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © 2025 Elora's PMU & Korean Esthetics. All rights reserved.
          </p>
          <p className="font-body mt-1 text-xs text-muted-foreground">
            London · Chandigarh · Delhi · Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
