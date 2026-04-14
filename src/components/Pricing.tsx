import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="pricing" className="bg-petal py-16 px-4 sm:py-20 sm:px-5">
      <div ref={ref} className={`mx-auto max-w-5xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="section-heading">Lip Blushing Cost in Delhi</h2>
        <p className="section-subtext">Transparent pricing. No hidden fees. Free consultation included.</p>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.name} className={`pricing-card p-5 sm:p-6 ${p.featured ? "pricing-card-featured" : ""}`} style={{ transitionDelay: `${i * 100}ms` }}>
              {p.featured && (
                <div className="gold-badge absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] sm:-top-3 sm:px-3 sm:py-1 sm:text-xs">
                  ★ Most Popular
                </div>
              )}
              <h3 className="font-heading text-lg font-semibold text-ink sm:text-xl">{p.name}</h3>
              <div className="font-display mt-2 text-3xl font-bold text-rose-deep sm:mt-3 sm:text-4xl">{p.price}</div>
              <ul className="mt-4 space-y-2.5 text-left sm:mt-6 sm:space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="font-body flex items-start gap-2 text-xs text-foreground sm:text-sm">
                    <span className="mt-0.5 text-rose-mid">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg py-2.5 font-body text-xs font-semibold transition-all sm:mt-8 sm:py-3 sm:text-sm ${
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

        <p className="mt-6 px-2 text-center text-[10px] text-muted-foreground sm:mt-8 sm:px-0 sm:text-xs">
          Touch-up sessions after 6 months: ₹5,000. Prices include numbing, pigment & aftercare.
        </p>
        <div className="mt-3 text-center sm:mt-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center gap-2 text-xs font-semibold text-whatsapp hover:underline sm:text-sm"
          >
            💬 Not sure which? Chat with us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
