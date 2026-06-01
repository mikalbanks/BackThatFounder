import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import FounderApplyPage from "./pages/FounderApplyPage";
import BackerSignupPage from "./pages/BackerSignupPage";
import TermsPage from "./pages/TermsPage";

export default function App() {
  return (
    <Routes>
      {/* Landing page — standalone with its own Navbar/Footer */}
      <Route index element={<LandingPage />} />

      {/* Sub-pages — use shared Layout (Nav + Footer) */}
      <Route element={<Layout />}>
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="apply" element={<FounderApplyPage />} />
        <Route path="back" element={<BackerSignupPage />} />
        <Route path="terms" element={<TermsPage />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
