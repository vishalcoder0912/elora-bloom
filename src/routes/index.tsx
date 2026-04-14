import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import BeforeAfter from "@/components/BeforeAfter";
import Benefits from "@/components/Benefits";
import Procedure from "@/components/Procedure";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lip Blushing in Delhi | Elora's PMU & Korean Esthetics" },
      {
        name: "description",
        content:
          "Premium lip blushing in Delhi by Elora — Korean PMU certified. Natural, long-lasting lip tint. ₹12,000 onwards. Book your free consultation today.",
      },
      { property: "og:title", content: "Lip Blushing in Delhi | Elora's PMU & Korean Esthetics" },
      {
        property: "og:description",
        content:
          "Wake up with perfectly tinted lips — no lipstick needed. Korean-grade pigments, 200+ happy clients in Delhi. Book a free consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Elora's PMU & Korean Esthetics",
          description: "Premium lip blushing and Korean PMU services in Delhi",
          telephone: "+91-98776-95827",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Delhi",
            addressRegion: "DL",
            addressCountry: "IN",
          },
          priceRange: "₹₹₹",
          openingHours: "Mo-Sa 10:00-19:00",
          sameAs: ["https://instagram.com/eloraspmu"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "200",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How long does lip blushing last in Delhi's climate?",
              acceptedAnswer: { "@type": "Answer", text: "Results last 2–3 years. Delhi's humidity doesn't significantly affect longevity when proper aftercare is followed." },
            },
            {
              "@type": "Question",
              name: "Is lip blushing painful?",
              acceptedAnswer: { "@type": "Answer", text: "No. We apply medical-grade topical numbing cream for 30 minutes before the procedure, making it virtually painless for most clients." },
            },
            {
              "@type": "Question",
              name: "What is the difference between lip blushing and a lip tattoo?",
              acceptedAnswer: { "@type": "Answer", text: "Lip blushing uses semi-permanent pigment in soft, sheer layers for a natural blush effect. Traditional lip tattoos use permanent ink with harsh, saturated results." },
            },
            {
              "@type": "Question",
              name: "How much does lip blushing cost in Delhi?",
              acceptedAnswer: { "@type": "Answer", text: "Our packages start at ₹12,000 for a single Blush Nude session. Free consultations included." },
            },
            {
              "@type": "Question",
              name: "How long is the healing time?",
              acceptedAnswer: { "@type": "Answer", text: "7–14 days. Lips will appear darker for the first week then peel to reveal the true healed color." },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <BeforeAfter />
      <Benefits />
      <Procedure />
      <Pricing />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
