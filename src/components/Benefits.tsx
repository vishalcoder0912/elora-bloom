const benefits = [
  { icon: "🌸", title: "Long-Lasting Tint", desc: "Lasts 2–3 years with one touch-up" },
  { icon: "💄", title: "Hyper-Natural Results", desc: "Looks like your lips, perfected" },
  { icon: "⏰", title: "Zero Daily Maintenance", desc: "Lipstick-free mornings, forever" },
  { icon: "🇰🇷", title: "Safe K-Beauty Pigments", desc: "Imported Korean-grade color formulas" },
  { icon: "😌", title: "Virtually Painless", desc: "Medical-grade numbing cream used throughout" },
  { icon: "🎨", title: "Custom Color Matching", desc: "Matched to your undertone and ideal shade" },
];

export default function Benefits() {
  return (
    <section id="services" className="bg-petal py-20 px-5">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-heading">Why Choose Lip Blushing?</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="card-elevated flex gap-4 p-6">
              <span className="text-2xl">{b.icon}</span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink">{b.title}</h3>
                <p className="font-body mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
