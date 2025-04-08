
import React from "react";
import { Wrench, Droplet, Building2, SprayCan, Bug, Leaf, Zap, Wind } from "lucide-react";
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

  const industries = [
    {
      name: "Plumbing",
      description: "Streamline emergency plumbing service calls, schedule maintenance, and handle complex water system inquiries with our intelligent AI assistant.",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800&h=500",
      icon: Droplet
    },
    {
      name: "HVAC",
      description: "Manage AC repair calls, heating system inquiries, and seasonal maintenance requests. The AI can prioritize emergency calls during extreme weather conditions.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800&h=500",
      icon: Wind
    },
    {
      name: "Electrical",
      description: "Address power outages, electrical repairs, and installation requests. Our AI can identify urgent safety issues and prioritize dispatch accordingly.",
      image: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&q=80&w=800&h=500",
      icon: Zap
    },
    {
      name: "Lawn Care & Landscaping",
      description: "Schedule routine maintenance, handle seasonal service requests, and provide quotes for landscaping projects based on property size and requirements.",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800&h=500",
      icon: Leaf
    },
    {
      name: "Cleaning Services",
      description: "Book regular cleaning appointments, handle special cleaning requests, and manage scheduling for residential and commercial properties.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800&h=500",
      icon: SprayCan
    },
    {
      name: "Pest Control",
      description: "Schedule inspections, answer questions about treatments, and book emergency pest control services when customers identify infestations.",
      image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&q=80&w=800&h=500",
      icon: Bug
    },
    {
      name: "Roofing",
      description: "Efficiently manage storm damage inquiries, schedule comprehensive roof inspections, and book repair services with intelligent prioritization.",
      image: "https://images.unsplash.com/photo-1632122708993-2ae8173e2c02?auto=format&fit=crop&q=80&w=800&h=500",
      icon: Building2
    },
    {
      name: "Appliance Repair",
      description: "Diagnose appliance issues quickly, schedule precise service visits, and provide advanced troubleshooting guidance for complex malfunctions.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800&h=500",
      icon: Wrench
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
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
        
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={`${industry.name} industry`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="flex items-center mb-3">
                      {industry.icon && (
                        <industry.icon 
                          className="mr-3 text-primary" 
                          size={24} 
                        />
                      )}
                      <h3 className="text-xl font-bold">{industry.name}</h3>
                    </div>
                    <p className="text-gray-600 flex-grow">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
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
