import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Priya S.",
    location: "Vasant Kunj, Delhi",
    quote: "I was terrified of permanent makeup but the team at Elora made me feel completely safe. My lips look incredible — everyone thinks I'm just naturally blessed.",
    initials: "PS",
  },
  {
    name: "Meghna R.",
    location: "Greater Kailash, Delhi",
    quote: "Worth every rupee. 8 months later and the color is still perfect. I've saved thousands on lipstick.",
    initials: "MR",
  },
  {
    name: "Aisha K.",
    location: "Hauz Khas, Delhi",
    quote: "Flew in from Mumbai specifically for this. The Korean technique is completely different — no bleeding, no pain, just beautiful results.",
    initials: "AK",
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="py-16 px-4 sm:py-20 sm:px-5">
      <div ref={ref} className={`mx-auto max-w-5xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="section-heading">What Delhi Clients Say</h2>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="mb-3 flex items-center gap-3 sm:mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-rose-mid bg-petal font-display text-xs font-bold text-rose-deep sm:h-10 sm:w-10 sm:text-sm">
                  {r.initials}
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-ink sm:text-sm">{r.name}</p>
                  <p className="font-body text-[10px] text-muted-foreground sm:text-xs">{r.location}</p>
                </div>
              </div>
              <div className="mb-2 text-xs text-gold sm:mb-3 sm:text-sm">★★★★★</div>
              <p className="font-body text-xs italic leading-relaxed text-foreground/80 sm:text-sm">"{r.quote}"</p>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] text-muted-foreground sm:mt-4 sm:text-xs">
                <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                Verified Google Review
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 px-2 text-center font-body text-xs text-muted-foreground sm:mt-8 sm:px-0 sm:text-sm">
          ★★★★★ <span className="font-semibold text-ink">4.9 average</span> · Verified Google Reviews
        </p>
      </div>
    </section>
  );
}
