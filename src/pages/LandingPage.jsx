import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarqueeBar from "../components/MarqueeBar";
import HowItWorks from "../components/HowItWorks";
import FeaturesSection from "../components/FeaturesSection";
import InKindBanner from "../components/InKindBanner";
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
      <FeaturesSection />
      <InKindBanner />
      <CtaSection />
      <FooterNew />
    </>
  );
}
