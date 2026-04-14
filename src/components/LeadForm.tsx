import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/919877695827?text=Hi+Elora%2C+I%27m+interested+in+Lip+Blushing+in+Delhi.+Can+I+book+a+consultation%3F";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-dark-section py-20 px-5">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
        {/* Left */}
        <div>
          <h2 className="font-display text-2xl font-bold italic text-primary-foreground sm:text-3xl md:text-4xl">
            Your Best Lips Are One Appointment Away
          </h2>
          <p className="font-body mt-4 text-sm text-primary-foreground/70">
            Book a free 15-minute consultation. No commitment, no pressure.
          </p>
          <ul className="mt-6 space-y-3">
            {["Free consultation — no charge", "Response within 2 hours", "No credit card required"].map((t) => (
              <li key={t} className="font-body flex items-center gap-2 text-sm text-primary-foreground/80">
                <span className="text-rose-mid">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Form */}
        <div className="rounded-2xl bg-card p-6 shadow-xl md:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <span className="text-4xl">🌸</span>
              <h3 className="font-heading mt-4 text-xl font-semibold text-ink">Thank you!</h3>
              <p className="font-body mt-2 text-sm text-muted-foreground">We'll reach out within 2 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="font-body w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-rose-mid focus:ring-1 focus:ring-rose-mid"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="font-body w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-rose-mid focus:ring-1 focus:ring-rose-mid"
              />
              <input
                type="text"
                placeholder="City"
                defaultValue="Delhi"
                className="font-body w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-rose-mid focus:ring-1 focus:ring-rose-mid"
              />
              <input
                type="date"
                className="font-body w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-rose-mid focus:ring-1 focus:ring-rose-mid"
              />
              <textarea
                placeholder="Message (optional)"
                rows={3}
                className="font-body w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-rose-mid focus:ring-1 focus:ring-rose-mid"
              />
              <button type="submit" className="btn-primary w-full text-base">
                Claim My Free Consultation
              </button>
            </form>
          )}

          <div className="mt-5 flex gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body flex flex-1 items-center justify-center gap-2 rounded-lg border border-whatsapp py-2.5 text-sm font-semibold text-whatsapp transition-colors hover:bg-whatsapp hover:text-primary-foreground"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="tel:+919877695827"
              className="font-body flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
