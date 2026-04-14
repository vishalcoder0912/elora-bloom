const steps = [
  { num: 1, title: "Consultation", time: "15 min", desc: "Color mapping, shape design, skin tone analysis, allergy check" },
  { num: 2, title: "Numbing", time: "30 min", desc: "Medical-grade topical anesthetic for complete comfort" },
  { num: 3, title: "Pigmentation", time: "60 min", desc: "Korean PMU device deposits pigment in precise feather-light strokes" },
  { num: 4, title: "Aftercare & Healing", time: "7–14 days", desc: "Peeling reveals your true healed blush color" },
];

export default function Procedure() {
  return (
    <section className="py-20 px-5">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-heading">Your Lip Blushing Journey</h2>

        <div className="mt-14 space-y-0">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[1.45rem] top-12 bottom-0 w-px bg-rose-light" />
              )}
              <div className="step-circle">{s.num}</div>
              <div className="pt-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-lg font-semibold text-ink">{s.title}</h3>
                  <span className="rounded-full bg-petal px-3 py-0.5 text-xs font-medium text-rose-deep">
                    {s.time}
                  </span>
                </div>
                <p className="font-body mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Most clients are in and out in under 2 hours.
        </p>
      </div>
    </section>
  );
}
