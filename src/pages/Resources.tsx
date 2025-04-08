
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Resources = () => {
  const navigate = useNavigate();
  
  const scrollToCTA = () => {
    navigate('/#cta');
    setTimeout(() => {
      const ctaSection = document.getElementById('cta-section');
      ctaSection?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 pt-20 pb-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-darkSlate mb-6">
                Resources & Learning Center
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Guides, webinars, and templates to help you get the most out of CallSuite.ai
              </p>
            </div>
          </div>
        </section>
        
        {/* Coming Soon Section */}
        <section className="section-padding bg-white">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-8">Resources Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-10">
              We're currently developing helpful resources for our customers. Check back soon for guides, webinars, and templates to help you get the most out of CallSuite.ai.
            </p>
            <div className="flex justify-center">
              <Button className="btn-primary" onClick={scrollToCTA}>
                Schedule a Demo Instead
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-wide text-center">
            <h2 className="heading-lg text-white mb-6">
              Ready to see CallSuite.ai in action?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo to see exactly how it works for your specific service business
            </p>
            <Button className="bg-accent text-white hover:bg-accent/90 text-lg" onClick={scrollToCTA}>
              Schedule Your Free Demo
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
