
import { MessageCircle, ClipboardList, Settings, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SetupProcessSection = () => {
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
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Simple Setup Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get up and running quickly with a solution custom-built for your specific business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">1. Initial Chat</h3>
            <p className="text-gray-600 text-center">
              We learn about your business, services, and specific needs during a brief consultation.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <ClipboardList size={28} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">2. Service Mapping</h3>
            <p className="text-gray-600 text-center">
              We map your services, pricing, availability, and common customer questions.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <Settings size={28} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">3. Custom Build</h3>
            <p className="text-gray-600 text-center">
              We configure your AI assistant to handle your specific business needs and workflows.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">4. You're Live!</h3>
            <p className="text-gray-600 text-center">
              Your AI assistant goes live, answering calls and booking jobs instantly.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-xl p-8 border border-primary/20 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">Custom-Built For Your Business</h3>
            <p className="text-gray-600 mt-2">
              Every CallSuite.ai assistant is uniquely configured for your:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Services & Pricing", 
              "Business Hours", 
              "Service Areas", 
              "Scheduling Rules",
              "Company Policies", 
              "Emergency Protocols", 
              "Common Questions", 
              "Integration Needs"
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary text-lg" onClick={scrollToCTA}>
            Start Your Simple Setup
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SetupProcessSection;
