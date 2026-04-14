import { useState } from "react";

const faqs = [
  {
    q: "How long does lip blushing last in Delhi's climate?",
    a: "Results last 2–3 years. Delhi's humidity doesn't significantly affect longevity when proper aftercare is followed.",
  },
  {
    q: "Is lip blushing painful?",
    a: "No. We apply medical-grade topical numbing cream for 30 minutes before the procedure, making it virtually painless for most clients.",
  },
  {
    q: "What is the difference between lip blushing and a lip tattoo?",
    a: "Lip blushing uses semi-permanent pigment in soft, sheer layers for a natural blush effect. Traditional lip tattoos use permanent ink with harsh, saturated results.",
  },
  {
    q: "How much does lip blushing cost in Delhi?",
    a: "Our packages start at ₹12,000 for a single Blush Nude session. Full pricing is listed above. Free consultations included.",
  },
  {
    q: "How long is the healing time?",
    a: "7–14 days. Lips will appear darker for the first week then peel to reveal the true healed color.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-petal py-20 px-5">
      <div className="mx-auto max-w-3xl">
        <h2 className="section-heading">Frequently Asked Questions</h2>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-body pr-4 text-sm font-semibold text-ink">{f.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-rose-mid transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="font-body px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
