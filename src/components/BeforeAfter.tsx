import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const WHATSAPP_URL = "https://wa.me/919877695827?text=Hi+Elora%2C+I%27m+interested+in+Lip+Blushing+in+Delhi.+Can+I+book+a+consultation%3F";

const cards = [
  { img: ba2, caption: "Natural Rosy Tint — 6 months healed" },
  { img: ba3, caption: "Ombre Blush — 3 months healed" },
  { img: ba2, caption: "Bridal Blush — 1 year healed" },
];

export default function BeforeAfter() {
  return (
    <section id="results" className="py-20 px-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">Lip Blush Transformations</h2>
        <p className="section-subtext">Real Elora clients. Healed results shown.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-md">
              <img
                src={c.img}
                alt={`Lip blushing Delhi before and after result ${i + 1}`}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute top-3 left-3 rounded-full bg-ink/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                BEFORE
              </div>
              <div className="absolute top-3 right-3 rounded-full bg-rose-deep/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                AFTER
              </div>
              <p className="font-heading mt-3 text-center text-sm italic text-muted-foreground">{c.caption}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          All results shown are real Elora clients. Results may vary.
        </p>
        <div className="mt-4 text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-sm font-semibold text-rose-deep hover:underline">
            Book Your Transformation →
          </a>
        </div>
      </div>
    </section>
  );
}
