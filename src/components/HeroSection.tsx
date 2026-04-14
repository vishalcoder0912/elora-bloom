import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/919877695827?text=Hi+Elora%2C+I%27m+interested+in+Lip+Blushing+in+Delhi.+Can+I+book+a+consultation%3F";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);

      // Parallax effect on video
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${scrollY * 0.5}px) scale(${1 + progress * 0.1})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-end justify-center overflow-hidden pb-20 md:items-center md:pb-0">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-100 ease-out md:object-center sm:object-top"
        poster="/hero-lips.jpg"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,16,20,0.55)] via-[rgba(28,16,20,0.4)] to-[rgba(28,16,20,0.75)] md:via-[rgba(28,16,20,0.3)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-5">
        {/* Trust badge */}
        <div className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2">
          <span className="text-gold text-xs sm:text-sm">★</span>
          <span className="font-body text-[10px] font-medium tracking-wide text-white/90 sm:text-xs">
            4.9 Rating · 200+ Delhi Clients · Korean PMU Certified
          </span>
        </div>

        <h1 className="animate-fade-up font-display text-2xl font-bold italic leading-tight text-white sm:text-3xl md:text-5xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
          Lip Blushing in Delhi
        </h1>

        <p className="animate-fade-up font-heading mt-3 text-base font-light text-white/85 sm:mt-5 sm:text-lg md:text-xl" style={{ animationDelay: "0.2s" }}>
          Wake up with perfectly tinted lips — no lipstick needed. Ever.
        </p>

        <div className="animate-fade-up mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: "0.3s" }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full px-4 py-3 text-sm sm:w-auto sm:px-6 sm:text-base">
            Book Free Consultation
          </a>
          <button
            onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost w-full px-4 py-3 text-sm sm:w-auto sm:px-6 sm:text-base"
          >
            See Transformations ↓
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8">
        <svg className="animate-bounce-arrow h-6 w-6 text-white/50 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
