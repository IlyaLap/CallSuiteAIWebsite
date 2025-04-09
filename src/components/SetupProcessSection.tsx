
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
    <section className="section-padding bg-white" data-sb-object-id="setup-process-section">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4" data-sb-field-path="heading">Simple Setup Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-sb-field-path="description">
            Get up and running quickly with a solution custom-built for your specific business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-sb-field-path="steps">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm" data-sb-object-id="step-1">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4" data-sb-field-path="title">1. Initial Chat</h3>
            <p className="text-gray-600 text-center" data-sb-field-path="description">
              We learn about your business, services, and specific needs during a brief consultation.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm" data-sb-object-id="step-2">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <ClipboardList size={28} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4" data-sb-field-path="title">2. Service Mapping</h3>
            <p className="text-gray-600 text-center" data-sb-field-path="description">
              We map your services, pricing, availability, and common customer questions.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm" data-sb-object-id="step-3">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <Settings size={28} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4" data-sb-field-path="title">3. Custom Build</h3>
            <p className="text-gray-600 text-center" data-sb-field-path="description">
              We configure your AI assistant to handle your specific business needs and workflows.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm" data-sb-object-id="step-4">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4" data-sb-field-path="title">4. You're Live!</h3>
            <p className="text-gray-600 text-center" data-sb-field-path="description">
              Your AI assistant goes live, answering calls and booking jobs instantly.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-xl p-8 border border-primary/20 max-w-4xl mx-auto" data-sb-object-id="custom-built-section">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold" data-sb-field-path="title">Custom-Built For Your Business</h3>
            <p className="text-gray-600 mt-2" data-sb-field-path="description">
              Every CallSuite.ai assistant is uniquely configured for your:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-sb-field-path="features">
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
              <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm" data-sb-object-id={`feature-${index}`}>
                <p className="font-medium" data-sb-field-path="text">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary text-lg" onClick={scrollToCTA} data-sb-field-path="ctaButton">
            Start Your Simple Setup
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SetupProcessSection;
