
import React from "react";
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
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>CallSuite.ai - AI Phone Assistant for Service Businesses</title>
        <meta name="description" content="CallSuite.ai is an AI phone assistant that handles your business calls 24/7, ensuring you never miss an opportunity. Perfect for service businesses." />
        <meta name="keywords" content="call assistant, AI receptionist, virtual receptionist, business calls, service business" />
        <link rel="canonical" href="https://callsuite.ai/" />
      </Helmet>
      
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
