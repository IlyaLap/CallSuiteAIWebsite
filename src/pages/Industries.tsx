
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Industries = () => {
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

  // Array of industries with their descriptions
  const industries = [
    {
      name: "Plumbing",
      description: "Handle emergency calls, book appointments, and answer common plumbing questions. Our AI knows the right questions to ask about leaks, clogs, and other plumbing emergencies.",
      image: "/placeholder.svg"
    },
    {
      name: "HVAC",
      description: "Manage AC repair calls, heating system inquiries, and seasonal maintenance requests. The AI can prioritize emergency calls during extreme weather conditions.",
      image: "/placeholder.svg"
    },
    {
      name: "Electrical",
      description: "Address power outages, electrical repairs, and installation requests. Our AI can identify urgent safety issues and prioritize dispatch accordingly.",
      image: "/placeholder.svg"
    },
    {
      name: "Lawn Care & Landscaping",
      description: "Schedule routine maintenance, handle seasonal service requests, and provide quotes for landscaping projects based on property size and requirements.",
      image: "/placeholder.svg"
    },
    {
      name: "Cleaning Services",
      description: "Book regular cleaning appointments, handle special cleaning requests, and manage scheduling for residential and commercial properties.",
      image: "/placeholder.svg"
    },
    {
      name: "Pest Control",
      description: "Schedule inspections, answer questions about treatments, and book emergency pest control services when customers identify infestations.",
      image: "/placeholder.svg"
    },
    {
      name: "Roofing",
      description: "Handle storm damage inquiries, schedule inspections, and book repair services. The AI can ask about leak severity and weather conditions.",
      image: "/placeholder.svg"
    },
    {
      name: "Appliance Repair",
      description: "Diagnose common appliance problems, schedule service visits, and provide troubleshooting guidance for customers with malfunctioning appliances.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 pt-20 pb-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-darkSlate mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                CallSuite.ai is tailored for service professionals across multiple industries
              </p>
            </div>
          </div>
        </section>
        
        {/* Industries Grid */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500">Industry image</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom Solutions Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-4">Don't See Your Industry?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We can customize CallSuite.ai for virtually any service business. Contact us to discuss your specific needs.
              </p>
              <Button className="btn-primary" onClick={scrollToCTA}>
                Request Custom Solution
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-wide text-center">
            <h2 className="heading-lg text-white mb-6">
              See how CallSuite.ai works for your industry
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo tailored to your specific business needs
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

export default Industries;
