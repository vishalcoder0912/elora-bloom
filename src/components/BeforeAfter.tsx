import { useScrollReveal } from "@/hooks/useScrollReveal";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const WHATSAPP_URL = "https://wa.me/919877695827?text=Hi+Elora%2C+I%27m+interested+in+Lip+Blushing+in+Delhi.+Can+I+book+a+consultation%3F";

const cards = [
  { img: ba2, caption: "Natural Rosy Tint — 6 months healed" },
  { img: ba3, caption: "Ombre Blush — 3 months healed" },
  { img: ba2, caption: "Bridal Blush — 1 year healed" },
];

export default function BeforeAfter() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="results" className="py-16 px-4 sm:py-20 sm:px-5">
      <div ref={ref} className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="section-heading">Lip Blush Transformations</h2>
        <p className="section-subtext">Real Elora clients. Healed results shown.</p>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-md">
              <img
                src={c.img}
                alt={`Lip blushing Delhi before and after result ${i + 1}`}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64 md:h-72"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute top-2 left-2 rounded-full bg-ink/50 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm sm:top-3 sm:left-3 sm:px-3 sm:py-1 sm:text-xs">
                BEFORE
              </div>
              <div className="absolute top-2 right-2 rounded-full bg-rose-deep/70 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm sm:top-3 sm:right-3 sm:px-3 sm:py-1 sm:text-xs">
                AFTER
              </div>
              <p className="font-heading mt-3 px-2 text-center text-xs italic text-muted-foreground sm:px-0 sm:text-sm">{c.caption}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 px-2 text-center text-[10px] text-muted-foreground sm:mt-6 sm:px-0 sm:text-xs">
          All results shown are real Elora clients. Results may vary.
        </p>
        <div className="mt-3 text-center sm:mt-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-xs font-semibold text-rose-deep hover:underline sm:text-sm">
            Book Your Transformation →
          </a>
        </div>
      </div>
    </section>
  );
}
