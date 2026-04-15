import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import BeforeAfter from "./components/BeforeAfter";
import Benefits from "./components/Benefits";
import Procedure from "./components/Procedure";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function App() {
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