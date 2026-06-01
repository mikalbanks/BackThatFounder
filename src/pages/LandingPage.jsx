import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarqueeBar from "../components/MarqueeBar";
import HowItWorks from "../components/HowItWorks";
import StatsBar from "../components/StatsBar";
import FeaturesSection from "../components/FeaturesSection";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";
import FooterNew from "../components/FooterNew";

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <MarqueeBar />
      <HowItWorks />
      <StatsBar />
      <FeaturesSection />
      <Testimonials />
      <CtaSection />
      <FooterNew />
    </>
  );
}
