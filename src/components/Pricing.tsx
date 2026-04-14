const WHATSAPP_URL = "https://wa.me/919877695827?text=Hi+Elora%2C+I%27m+interested+in+Lip+Blushing+in+Delhi.+Can+I+book+a+consultation%3F";

const plans = [
  {
    name: "Blush Nude",
    price: "₹12,000",
    features: ["1 session included", "Healed result consultation", "Aftercare kit included"],
    featured: false,
  },
  {
    name: "Ombre Blush",
    price: "₹15,000",
    features: ["1 session + 1 free touch-up (45 days)", "Aftercare kit", "Priority booking"],
    featured: true,
  },
  {
    name: "Bridal Blush",
    price: "₹20,000",
    features: ["2 sessions included", "Priority booking slot", "Bridal certificate", "Dedicated artist"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-petal py-20 px-5">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-heading">Lip Blushing Cost in Delhi</h2>
        <p className="section-subtext">Transparent pricing. No hidden fees. Free consultation included.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`pricing-card ${p.featured ? "pricing-card-featured" : ""}`}>
              {p.featured && (
                <div className="gold-badge absolute -top-3 left-1/2 -translate-x-1/2">
                  ★ Most Popular
                </div>
              )}
              <h3 className="font-heading text-xl font-semibold text-ink">{p.name}</h3>
              <div className="font-display mt-3 text-4xl font-bold text-rose-deep">{p.price}</div>
              <ul className="mt-6 space-y-3 text-left">
                {p.features.map((f) => (
                  <li key={f} className="font-body flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-0.5 text-rose-mid">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg py-3 font-body text-sm font-semibold transition-all ${
                  p.featured
                    ? "bg-rose-deep text-primary-foreground hover:brightness-110"
                    : "border border-rose-deep text-rose-deep hover:bg-rose-deep hover:text-primary-foreground"
                }`}
              >
                Book This
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Touch-up sessions after 6 months: ₹5,000. Prices include numbing, pigment & aftercare.
        </p>
        <div className="mt-4 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center gap-2 text-sm font-semibold text-whatsapp hover:underline"
          >
            💬 Not sure which? Chat with us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
