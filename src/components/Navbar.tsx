import { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/919877695827?text=Hi+Elora%2C+I%27m+interested+in+Lip+Blushing+in+Delhi.+Can+I+book+a+consultation%3F";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-5 md:py-4">
        <div className="flex flex-col">
          <span className="font-display text-lg font-bold italic text-ink md:text-xl">
            Elora
          </span>
          <span className="font-body -mt-1 hidden text-[0.6rem] tracking-widest text-muted-foreground uppercase sm:block">
            PMU & Korean Esthetics
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {["services", "results", "pricing", "faq", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="font-body text-sm capitalize text-foreground/80 transition-colors hover:text-rose-deep"
            >
              {s === "results" ? "Results" : s === "contact" ? "Contact" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden text-sm md:inline-flex"
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-warm-white/95 backdrop-blur-lg border-t border-border px-5 py-6 md:hidden">
          {["services", "results", "pricing", "faq", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="font-body block w-full py-3 text-left text-base capitalize text-foreground"
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full text-center">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
