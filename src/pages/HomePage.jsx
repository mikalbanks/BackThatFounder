import Hero from "../sections/Hero";
import ProblemSection from "../sections/ProblemSection";
import MissionSection from "../sections/MissionSection";
import AudienceSection from "../sections/AudienceSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import SurveyPreviewSection from "../sections/SurveyPreviewSection";
import ParticipationSection from "../sections/ParticipationSection";
import FinalCTASection from "../sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MissionSection />
      <AudienceSection />
      <HowItWorksSection />
      <SurveyPreviewSection />
      <ParticipationSection />
      <FinalCTASection />
    </>
  );
}
