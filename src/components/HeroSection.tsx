
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToCTA = () => {
    navigate('/#cta');
    setTimeout(() => {
      const ctaSection = document.getElementById('cta-section');
      ctaSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden">
      <div className="container-wide flex flex-col-reverse lg:flex-row items-center py-16 md:py-24">
        {/* Hero Content */}
        <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
          <div className="animate-fade-in">
            <h1 className="heading-xl text-darkSlate mb-6">
              Never Miss Another Call. <span className="text-primary">Book More Jobs.</span> Zero Hassle.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              The AI phone assistant built specifically for service professionals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button onClick={scrollToCTA} className="btn-primary text-lg">
                Schedule Your Free Demo
              </Button>
              <Button variant="outline" className="text-lg gap-2">
                <Play size={18} className="text-primary" />
                See How It Works
              </Button>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-500 text-sm mb-4">TRUSTED BY 1,000+ SERVICE BUSINESSES</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="h-8 opacity-70">
                  <div className="h-full w-24 bg-gray-400 rounded-md"></div>
                </div>
                <div className="h-8 opacity-70">
                  <div className="h-full w-24 bg-gray-400 rounded-md"></div>
                </div>
                <div className="h-8 opacity-70">
                  <div className="h-full w-24 bg-gray-400 rounded-md"></div>
                </div>
                <div className="h-8 opacity-70">
                  <div className="h-full w-24 bg-gray-400 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Video */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <div className="relative aspect-video bg-black/5 rounded-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full w-16 h-16 flex items-center justify-center">
                <Play className="h-6 w-6 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
