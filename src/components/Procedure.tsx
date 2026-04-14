import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: 1, title: "Consultation", time: "15 min", desc: "Color mapping, shape design, skin tone analysis, allergy check" },
  { num: 2, title: "Numbing", time: "30 min", desc: "Medical-grade topical anesthetic for complete comfort" },
  { num: 3, title: "Pigmentation", time: "60 min", desc: "Korean PMU device deposits pigment in precise feather-light strokes" },
  { num: 4, title: "Aftercare & Healing", time: "7–14 days", desc: "Peeling reveals your true healed blush color" },
];

export default function Procedure() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="py-16 px-4 sm:py-20 sm:px-5">
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="section-heading">Your Lip Blushing Journey</h2>

        <div className="mt-10 space-y-0 sm:mt-14">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-6 sm:pb-10" style={{ transitionDelay: `${i * 150}ms` }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[1.15rem] top-10 bottom-0 w-px bg-rose-light sm:left-[1.45rem] sm:top-12" />
              )}
              <div className="step-circle h-8 w-8 text-base sm:h-12 sm:w-12 sm:text-xl">{s.num}</div>
              <div className="pt-0.5 sm:pt-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h3 className="font-heading text-base font-semibold text-ink sm:text-lg">{s.title}</h3>
                  <span className="rounded-full bg-petal px-2 py-0.5 text-[10px] font-medium text-rose-deep sm:px-3 sm:py-0.5 sm:text-xs">
                    {s.time}
                  </span>
                </div>
                <p className="font-body mt-1 text-xs text-muted-foreground leading-relaxed sm:mt-1.5 sm:text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 px-2 text-center text-xs text-muted-foreground sm:mt-8 sm:px-0 sm:text-sm">
          Most clients are in and out in under 2 hours.
        </p>
      </div>
    </section>
  );
}
