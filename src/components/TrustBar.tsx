const stats = [
  { number: "200+", label: "Clients in Delhi" },
  { number: "3 Yrs", label: "Average Result Duration" },
  { number: "100%", label: "Korean-Grade Pigments" },
  { number: "★ 4.9", label: "Google Rating" },
];

export default function TrustBar() {
  return (
    <section className="bg-petal py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-5 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="trust-stat">
            <div className="trust-stat-number">{s.number}</div>
            <div className="trust-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
