import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/919877695827?text=Hi+Elora%2C+I%27m+interested+in+Lip+Blushing+in+Delhi.+Can+I+book+a+consultation%3F";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="bg-dark-section py-16 px-4 sm:py-20 sm:px-5">
      <div ref={ref} className={`mx-auto grid max-w-5xl gap-8 md:gap-12 md:grid-cols-2 md:items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Left */}
        <div>
          <h2 className="font-display text-xl font-bold italic text-primary-foreground sm:text-2xl md:text-4xl">
            Your Best Lips Are One Appointment Away
          </h2>
          <p className="font-body mt-3 text-xs text-primary-foreground/70 sm:mt-4 sm:text-sm">
            Book a free 15-minute consultation. No commitment, no pressure.
          </p>
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            {["Free consultation — no charge", "Response within 2 hours", "No credit card required"].map((t) => (
              <li key={t} className="font-body flex items-center gap-2 text-xs text-primary-foreground/80 sm:text-sm">
                <span className="text-rose-mid">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Form */}
        <div className="rounded-2xl bg-card p-4 shadow-xl sm:p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-6 sm:py-8">
              <span className="text-3xl sm:text-4xl">🌸</span>
              <h3 className="font-heading mt-3 text-lg font-semibold text-ink sm:mt-4 sm:text-xl">Thank you!</h3>
              <p className="font-body mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">We'll reach out within 2 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3 sm:space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="font-body w-full rounded-lg border border-border bg-background px-3 py-2.5 text-xs text-foreground outline-none focus:border-rose-mid focus:ring-1 focus:ring-rose-mid sm:px-4 sm:py-3 sm:text-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="font-body w-full rounded-lg border border-border bg-background px-3 py-2.5 text-xs text-foreground outline-none focus:border-rose-mid focus:ring-1 focus:ring-rose-mid sm:px-4 sm:py-3 sm:text-sm"
              />
              <input
                type="text"
                placeholder="City"
                defaultValue="Delhi"
                className="font-body w-full rounded-lg border border-border bg-background px-3 py-2.5 text-xs text-foreground outline-none focus:border-rose-mid focus:ring-1 focus:ring-rose-mid sm:px-4 sm:py-3 sm:text-sm"
              />
              <input
                type="date"
                className="font-body w-full rounded-lg border border-border bg-background px-3 py-2.5 text-xs text-foreground outline-none focus:border-rose-mid focus:ring-1 focus:ring-rose-mid sm:px-4 sm:py-3 sm:text-sm"
              />
              <textarea
                placeholder="Message (optional)"
                rows={3}
                className="font-body w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-xs text-foreground outline-none focus:border-rose-mid focus:ring-1 focus:ring-rose-mid sm:px-4 sm:py-3 sm:text-sm"
              />
              <button type="submit" className="btn-primary w-full px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-base">
                Claim My Free Consultation
              </button>
            </form>
          )}

          <div className="mt-4 flex gap-2 sm:mt-5 sm:gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-whatsapp py-2 text-xs font-semibold text-whatsapp transition-colors hover:bg-whatsapp hover:text-primary-foreground sm:gap-2 sm:py-2.5 sm:text-sm"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="tel:+919877695827"
              className="font-body flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted sm:gap-2 sm:py-2.5 sm:text-sm"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
