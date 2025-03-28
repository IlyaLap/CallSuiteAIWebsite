
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SetupProcessSection from "@/components/SetupProcessSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <SetupProcessSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
