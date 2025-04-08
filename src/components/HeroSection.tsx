
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
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

  const navigateToHowItWorks = () => {
    navigate('/how-it-works');
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
              <Button onClick={scrollToCTA} className="btn-primary text-[FF7A50] text-slate-50 bg-[FF7A50]">
                Schedule Your Free Demo
              </Button>
              <Button variant="outline" className="text-lg gap-2" onClick={navigateToHowItWorks}>
                See How It Works
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Video */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <div className="relative aspect-video bg-black/5 rounded-lg shadow-xl overflow-hidden">
            <iframe 
              className="absolute inset-0 w-full h-full" 
              src="https://www.youtube.com/embed/EvvKi2Pm_Rc" 
              title="CallSuite.ai Demo Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
