import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, Sparkles, CheckCircle, Shield, Heart, Palette } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Long-Lasting Tint", desc: "Lasts 2–3 years with one touch-up" },
  { icon: Sparkles, title: "Hyper-Natural Results", desc: "Looks like your lips, perfected" },
  { icon: CheckCircle, title: "Zero Daily Maintenance", desc: "Lipstick-free mornings, forever" },
  { icon: Shield, title: "Safe K-Beauty Pigments", desc: "Imported Korean-grade color formulas" },
  { icon: Heart, title: "Virtually Painless", desc: "Medical-grade numbing cream used throughout" },
  { icon: Palette, title: "Custom Color Matching", desc: "Matched to your undertone and ideal shade" },
];

export default function Benefits() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="services" className="bg-petal py-16 px-4 sm:py-20 sm:px-5">
      <div ref={ref} className={`mx-auto max-w-5xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="section-heading">Why Choose Lip Blushing?</h2>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <div key={b.title} className="card-elevated flex gap-3 p-4 sm:gap-4 sm:p-6" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex-shrink-0 text-rose-deep">
                <b.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-ink sm:text-lg">{b.title}</h3>
                <p className="font-body mt-1 text-xs text-muted-foreground sm:text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
