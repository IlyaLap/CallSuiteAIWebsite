import { Button } from "@/components/ui/button";
import { PhoneCall, Bot, Calendar, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HowItWorksSection = () => {
  const navigate = useNavigate();
  
  const navigateToHowItWorks = () => {
    navigate('/how-it-works');
  };
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, powerful solution that works right out of the box
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <PhoneCall size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">1. Customer Calls You</h3>
            <p className="text-gray-600">
              When a customer calls your business line, whether during business hours or after-hours.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <Bot size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">2. AI Answers Professionally</h3>
            <p className="text-gray-600">
              Your Voice AI assistant answers professionally and engages with the customer naturally.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
              <Calendar size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">3. Jobs Get Handled</h3>
            <p className="text-gray-600">
              The AI books appointments, answers questions, and manages scheduling automatically.
            </p>
          </div>
        </div>
        
        {/* Audio Sample Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md max-w-3xl mx-auto" id="audio-sample">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Hear CallSuite in Action</h3>
              <p className="text-gray-600 mb-6">
                Listen to a sample conversation between a customer and your AI assistant.
              </p>
              <Button className="flex items-center gap-2">
                <Play size={16} />
                Play Audio Sample
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-gray-100 rounded-lg p-4 h-36 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500">Audio waveform visualization</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1 bg-primary rounded-full" 
                        style={{ 
                          height: `${Math.sin(i/2) * 20 + 30}px`,
                          opacity: 0.5 + Math.sin(i/3) * 0.5
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary text-lg" onClick={navigateToHowItWorks}>
            See How It Works For Your Business
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
