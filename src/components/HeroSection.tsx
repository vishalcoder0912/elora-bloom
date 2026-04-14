import heroImage from "@/assets/hero-lips.jpg";

const WHATSAPP_URL = "https://wa.me/919877695827?text=Hi+Elora%2C+I%27m+interested+in+Lip+Blushing+in+Delhi.+Can+I+book+a+consultation%3F";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Lip blushing Delhi — natural pink lip tint by Elora Korean PMU"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        loading="eager"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,16,20,0.55)] via-[rgba(28,16,20,0.4)] to-[rgba(28,16,20,0.65)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        {/* Trust badge */}
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-gold text-sm">★</span>
          <span className="font-body text-xs font-medium tracking-wide text-white/90">
            4.9 Rating · 200+ Delhi Clients · Korean PMU Certified
          </span>
        </div>

        <h1 className="animate-fade-up font-display text-3xl font-bold italic leading-tight text-white sm:text-5xl md:text-7xl" style={{ animationDelay: "0.1s" }}>
          Lip Blushing in Delhi
        </h1>

        <p className="animate-fade-up font-heading mt-5 text-lg font-light text-white/85 md:text-xl" style={{ animationDelay: "0.2s" }}>
          Wake up with perfectly tinted lips — no lipstick needed. Ever.
        </p>

        <div className="animate-fade-up mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: "0.3s" }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
            Book Free Consultation
          </a>
          <button
            onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost text-base"
          >
            See Transformations ↓
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg className="animate-bounce-arrow h-8 w-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
